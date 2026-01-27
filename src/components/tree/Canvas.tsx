// Canvas.tsx
"use client";

import * as React from "react";
import { motion } from "motion/react";
import type { CanvasEdge, CanvasNode } from "./types";
import { SkillNode, NODE_SIZE } from "./Node";
import { EdgesLayer } from "./EdgesLayer";

type Props = {
  nodes: CanvasNode[];
  edges: CanvasEdge[];
  selectedId: string | null;
  onSelectNode: (id: string | null) => void;
  onMoveNode: (id: string, world: { x: number; y: number }) => void;
  readOnly?: boolean; // disables dragging only

  /**
   * ✅ IMPORTANT: pass something stable per-skill-tree (e.g. treeId)
   * so the intro replays even if Canvas stays mounted.
   */
  introKey?: string | number;
};

type Viewport = { x: number; y: number; z: number };
type Guide = { x?: number; y?: number };

const SNAP_DIST = 10;
const Z_MIN = 0.35;
const Z_MAX = 2.25;
const OVERVIEW_MAX_Z = 0.9;

const clamp = (v: number, min: number, max: number) =>
  Math.min(max, Math.max(min, v));

export type CanvasHandle = {
  flyToNode: (id: string, opts?: { zoom?: number; pad?: number; durationMs?: number }) => void;
};

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function defaultViewport(w: number, h: number): Viewport {
  return { x: w * 0.5, y: h * 0.55, z: 1 };
}

export const Canvas = React.forwardRef<CanvasHandle, Props>(function Canvas(
  { nodes, edges, selectedId, onSelectNode, onMoveNode, readOnly, introKey }: Props,
  ref
) {
  const rootRef = React.useRef<HTMLDivElement | null>(null);

  const [vp, setVp] = React.useState<Viewport>({ x: 0, y: 0, z: 1 });
  const vpRef = React.useRef(vp);
  React.useEffect(() => {
    vpRef.current = vp;
  }, [vp]);

  const [guide, setGuide] = React.useState<Guide | null>(null);

  const panRef = React.useRef({
    active: false,
    startX: 0,
    startY: 0,
    baseX: 0,
    baseY: 0,
  });

  // rAF handles
  const flyRafRef = React.useRef<number | null>(null);
  const moveRafRef = React.useRef<number | null>(null);

  // pending move (node drag)
  const pendingMove = React.useRef<{ id: string; world: { x: number; y: number } } | null>(null);

  // intro / idle camera
  const interactedRef = React.useRef(false);
  const introTimeoutRef = React.useRef<number | null>(null);
  const idleTimeoutRef = React.useRef<number | null>(null);
  const lastIntroSigRef = React.useRef<string | null>(null);

  // canvas size (ResizeObserver-driven)
  const [size, setSize] = React.useState<{ w: number; h: number }>({ w: 0, h: 0 });
  const sizeRef = React.useRef(size);
  React.useEffect(() => {
    sizeRef.current = size;
  }, [size]);

  const clearTimers = React.useCallback(() => {
    if (introTimeoutRef.current) {
      window.clearTimeout(introTimeoutRef.current);
      introTimeoutRef.current = null;
    }
    if (idleTimeoutRef.current) {
      window.clearTimeout(idleTimeoutRef.current);
      idleTimeoutRef.current = null;
    }
  }, []);

  const cancelFly = React.useCallback(() => {
    if (flyRafRef.current) {
      cancelAnimationFrame(flyRafRef.current);
      flyRafRef.current = null;
    }
  }, []);

  const markInteracted = React.useCallback(() => {
    if (interactedRef.current) return;
    interactedRef.current = true;
    clearTimers();
    cancelFly();
  }, [clearTimers, cancelFly]);

  const animateViewport = React.useCallback(
    (to: Viewport, durationMs = 700) => {
      const from = { ...vpRef.current };
      cancelFly();

      const t0 = performance.now();
      const tick = (now: number) => {
        const t = clamp((now - t0) / durationMs, 0, 1);
        const k = easeOutCubic(t);

        const next = {
          x: from.x + (to.x - from.x) * k,
          y: from.y + (to.y - from.y) * k,
          z: from.z + (to.z - from.z) * k,
        };

        vpRef.current = next;
        setVp(next);

        if (t < 1) flyRafRef.current = requestAnimationFrame(tick);
        else flyRafRef.current = null;
      };

      flyRafRef.current = requestAnimationFrame(tick);
    },
    [cancelFly]
  );

  // ✅ ResizeObserver: make intro robust (fires once the element has a size)
  React.useLayoutEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const ro = new ResizeObserver(() => {
      const r = el.getBoundingClientRect();
      const w = Math.max(0, Math.round(r.width));
      const h = Math.max(0, Math.round(r.height));
      setSize((prev) => (prev.w === w && prev.h === h ? prev : { w, h }));
    });

    ro.observe(el);

    // initial sync
    const r0 = el.getBoundingClientRect();
    setSize({
      w: Math.max(0, Math.round(r0.width)),
      h: Math.max(0, Math.round(r0.height)),
    });

    return () => ro.disconnect();
  }, []);

  const screenToWorld = React.useCallback((sx: number, sy: number) => {
    const el = rootRef.current;
    if (!el) return { x: sx, y: sy };
    const r = el.getBoundingClientRect();
    const v = vpRef.current;
    return {
      x: (sx - r.left - v.x) / v.z,
      y: (sy - r.top - v.y) / v.z,
    };
  }, []);

  // ✅ compute bounds once per nodes change (perf)
  const bounds = React.useMemo(() => {
    if (!nodes.length) return null;

    let minX = Infinity,
      minY = Infinity,
      maxX = -Infinity,
      maxY = -Infinity;

    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      if (n.x < minX) minX = n.x;
      if (n.y < minY) minY = n.y;

      const rx = n.x + NODE_SIZE.w;
      const by = n.y + NODE_SIZE.h;
      if (rx > maxX) maxX = rx;
      if (by > maxY) maxY = by;
    }

    const w = Math.max(1, maxX - minX);
    const h = Math.max(1, maxY - minY);

    return { minX, minY, maxX, maxY, w, h };
  }, [nodes]);

  // Signature that changes when the layout meaningfully changes
  const layoutSig = React.useMemo(() => {
    if (!bounds) return "empty";
    const a = Math.round(bounds.minX);
    const b = Math.round(bounds.minY);
    const c = Math.round(bounds.maxX);
    const d = Math.round(bounds.maxY);
    return `${introKey ?? "no-key"}:${nodes.length}:${a},${b},${c},${d}`;
  }, [bounds, nodes.length, introKey]);

  const computeFitViewport = React.useCallback(
    (padPx = 140): Viewport | null => {
      const { w: cw, h: ch } = sizeRef.current;
      if (!bounds || cw <= 0 || ch <= 0) return null;

      const fitZ = clamp(
        Math.min((cw - padPx * 2) / bounds.w, (ch - padPx * 2) / bounds.h),
        Z_MIN,
        Z_MAX
      );

      const z = clamp(Math.min(fitZ, OVERVIEW_MAX_Z), Z_MIN, Z_MAX);

      const cx = cw / 2;
      const cy = ch / 2;

      const worldCx = bounds.minX + bounds.w / 2;
      const worldCy = bounds.minY + bounds.h / 2;

      return { z, x: cx - worldCx * z, y: cy - worldCy * z };
    },
    [bounds]
  );

  const computeCenterNodeViewport = React.useCallback(
    (nodeId: string, zoom: number): Viewport | null => {
      const { w: cw, h: ch } = sizeRef.current;
      if (cw <= 0 || ch <= 0) return null;

      const n = nodes.find((x) => x.id === nodeId);
      if (!n) return null;

      const z = clamp(zoom, Z_MIN, Z_MAX);

      const cx = cw / 2;
      const cy = ch / 2;

      const nodeCenterX = n.x + NODE_SIZE.w / 2;
      const nodeCenterY = n.y + NODE_SIZE.h / 2;

      return { z, x: cx - nodeCenterX * z, y: cy - nodeCenterY * z };
    },
    [nodes]
  );

  // Reset interaction + intro guards when introKey changes (or on first mount)
  React.useEffect(() => {
    interactedRef.current = false;
    lastIntroSigRef.current = null;
    clearTimers();
    cancelFly();
  }, [introKey, clearTimers, cancelFly]);

  // initial viewport once size is known
  React.useEffect(() => {
    if (size.w <= 0 || size.h <= 0) return;
    const start = defaultViewport(size.w, size.h);
    vpRef.current = start;
    setVp(start);
  }, [size.w, size.h]);

  // ✅ Intro camera: start (as-is) -> zoom out to fit -> if idle 5s -> zoom to user-root
  React.useEffect(() => {
    if (size.w <= 0 || size.h <= 0) return;
    if (!bounds) return;
    if (interactedRef.current) return;

    if (lastIntroSigRef.current === layoutSig) return;
    lastIntroSigRef.current = layoutSig;

    clearTimers();
    cancelFly();

    // start as-is
    const start = defaultViewport(size.w, size.h);
    vpRef.current = start;
    setVp(start);

    introTimeoutRef.current = window.setTimeout(() => {
      if (interactedRef.current) return;

      const fit = computeFitViewport(140);
      if (fit) animateViewport(fit, 950);

      idleTimeoutRef.current = window.setTimeout(() => {
        if (interactedRef.current) return;
        const back = computeCenterNodeViewport("user-root", 1.05);
        if (back) animateViewport(back, 900);
      }, 5000);
    }, 250);

    return () => clearTimers();
  }, [
    animateViewport,
    bounds,
    cancelFly,
    clearTimers,
    computeCenterNodeViewport,
    computeFitViewport,
    layoutSig,
    size.h,
    size.w,
  ]);

  // Wheel ALWAYS works (view + edit)
  React.useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      markInteracted();
      e.preventDefault();

      const v = vpRef.current;

      const r = el.getBoundingClientRect();
      const mx = e.clientX - r.left;
      const my = e.clientY - r.top;

      const delta = -e.deltaY;
      const zoomFactor = delta > 0 ? 1.08 : 1 / 1.08;
      const nextZ = clamp(v.z * zoomFactor, Z_MIN, Z_MAX);

      const wx = (mx - v.x) / v.z;
      const wy = (my - v.y) / v.z;

      const next: Viewport = {
        x: mx - wx * nextZ,
        y: my - wy * nextZ,
        z: nextZ,
      };

      vpRef.current = next;
      setVp(next);
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [markInteracted]);

  // Pan background ALWAYS works (view + edit)
  const onPointerDownBg = React.useCallback(
    (e: React.PointerEvent) => {
      markInteracted();
      if (e.button !== 0) return;

      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);

      const v = vpRef.current;
      panRef.current = {
        active: true,
        startX: e.clientX,
        startY: e.clientY,
        baseX: v.x,
        baseY: v.y,
      };

      onSelectNode(null);
    },
    [markInteracted, onSelectNode]
  );

  const onPointerMoveBg = React.useCallback((e: React.PointerEvent) => {
    if (!panRef.current.active) return;

    const next: Viewport = {
      ...vpRef.current,
      x: panRef.current.baseX + (e.clientX - panRef.current.startX),
      y: panRef.current.baseY + (e.clientY - panRef.current.startY),
    };

    vpRef.current = next;
    setVp(next);
  }, []);

  const onPointerUpBg = React.useCallback(() => {
    panRef.current.active = false;
  }, []);

  // Snapping (only while dragging)
  const applySnapping = React.useCallback(
    (id: string, pos: { x: number; y: number }) => {
      let snapX: number | undefined;
      let snapY: number | undefined;

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        if (n.id === id) continue;

        if (snapX === undefined && Math.abs(n.x - pos.x) < SNAP_DIST) snapX = n.x;
        if (snapY === undefined && Math.abs(n.y - pos.y) < SNAP_DIST) snapY = n.y;

        if (snapX !== undefined && snapY !== undefined) break;
      }

      const nextGuide =
        snapX !== undefined || snapY !== undefined ? { x: snapX, y: snapY } : null;

      setGuide((g) => {
        const gx = g?.x,
          gy = g?.y;
        const nx = nextGuide?.x,
          ny = nextGuide?.y;
        if (gx === nx && gy === ny) return g;
        return nextGuide;
      });

      return { x: snapX ?? pos.x, y: snapY ?? pos.y };
    },
    [nodes]
  );

  // rAF throttle node moves (drag)
  const onMoveNodeClient = React.useCallback(
    (id: string, client: { x: number; y: number }) => {
      if (readOnly) return;

      markInteracted();

      const w = screenToWorld(client.x, client.y);
      const snapped = applySnapping(id, w);

      pendingMove.current = { id, world: snapped };

      if (moveRafRef.current) return;
      moveRafRef.current = requestAnimationFrame(() => {
        moveRafRef.current = null;
        const p = pendingMove.current;
        if (!p) return;
        onMoveNode(p.id, p.world);
      });
    },
    [applySnapping, markInteracted, onMoveNode, readOnly, screenToWorld]
  );

  const onMoveEnd = React.useCallback(() => setGuide(null), []);

  // selection ALWAYS works (view + edit)
  const onSelectNodeId = React.useCallback(
    (id: string) => {
      markInteracted();
      onSelectNode(id);
    },
    [markInteracted, onSelectNode]
  );

  React.useImperativeHandle(
    ref,
    () => ({
      flyToNode: (id, opts) => {
        const { w: cw, h: ch } = sizeRef.current;
        if (cw <= 0 || ch <= 0) return;

        const n = nodes.find((x) => x.id === id);
        if (!n) return;

        markInteracted();

        const durationMs = opts?.durationMs ?? 420;
        const targetZ = clamp(opts?.zoom ?? vpRef.current.z, Z_MIN, Z_MAX);

        const cx = cw / 2;
        const cy = ch / 2;

        const nodeCenterX = n.x + NODE_SIZE.w / 2;
        const nodeCenterY = n.y + NODE_SIZE.h / 2;

        const to: Viewport = {
          x: cx - nodeCenterX * targetZ,
          y: cy - nodeCenterY * targetZ,
          z: targetZ,
        };

        animateViewport(to, durationMs);
      },
    }),
    [animateViewport, markInteracted, nodes]
  );

  // cleanup
  React.useEffect(() => {
    return () => {
      clearTimers();
      cancelFly();
      if (moveRafRef.current) cancelAnimationFrame(moveRafRef.current);
    };
  }, [cancelFly, clearTimers]);

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 overflow-hidden bg-[#fefefe]"
      style={{ touchAction: "none" }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.08) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e7e5e4 1px, transparent 1px),
            linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
      />

      {!readOnly && guide?.x !== undefined && (
        <div
          className="absolute inset-y-0 w-px bg-blue-400/40 pointer-events-none"
          style={{ left: vp.x + (guide.x as number) * vp.z }}
        />
      )}
      {!readOnly && guide?.y !== undefined && (
        <div
          className="absolute inset-x-0 h-px bg-blue-400/40 pointer-events-none"
          style={{ top: vp.y + (guide.y as number) * vp.z }}
        />
      )}

      <div
        className="absolute inset-0"
        onPointerDown={onPointerDownBg}
        onPointerMove={onPointerMoveBg}
        onPointerUp={onPointerUpBg}
      >
        <div
          className="absolute inset-0"
          style={{
            transform: `translate3d(${vp.x}px, ${vp.y}px, 0) scale(${vp.z})`,
            transformOrigin: "0 0",
            willChange: "transform",
          }}
        >
          <EdgesLayer nodes={nodes} edges={edges} />

          {nodes.map((n) => (
            <SkillNode
              key={n.id}
              node={n}
              selected={selectedId === n.id}
              readOnly={readOnly}
              onSelectNode={onSelectNodeId}
              onMoveNode={onMoveNodeClient}
              onMoveEnd={onMoveEnd}
            />
          ))}
        </div>
      </div>

      <motion.div
        className="pointer-events-none fixed inset-x-0 top-0 h-24 z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(255,255,255,0))",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
      <div className="pointer-events-none fixed bottom-0 left-0 w-64 h-48 z-10 bg-gradient-to-tr from-[#f4f4f3] to-transparent" />
      <div className="pointer-events-none fixed bottom-0 right-0 w-64 h-48 z-10 bg-gradient-to-tl from-[#f4f4f3] to-transparent" />
    </div>
  );
});