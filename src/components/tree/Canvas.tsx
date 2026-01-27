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
  readOnly?: boolean; // now: disables dragging only
};

type Viewport = { x: number; y: number; z: number };
type Guide = { x?: number; y?: number };

const SNAP_DIST = 10;
const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

export type CanvasHandle = {
  flyToNode: (id: string, opts?: { zoom?: number; pad?: number; durationMs?: number }) => void;
};

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export const Canvas = React.forwardRef<CanvasHandle, Props>(function Canvas(
  { nodes, edges, selectedId, onSelectNode, onMoveNode, readOnly }: Props,
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

  const flyAnimRef = React.useRef<number | null>(null);

  const screenToWorld = React.useCallback((sx: number, sy: number) => {
    const r = rootRef.current?.getBoundingClientRect();
    if (!r) return { x: sx, y: sy };
    const v = vpRef.current;
    return {
      x: (sx - r.left - v.x) / v.z,
      y: (sy - r.top - v.y) / v.z,
    };
  }, []);

  React.useEffect(() => {
    const r = rootRef.current?.getBoundingClientRect();
    if (!r) return;
    setVp({ x: r.width * 0.5, y: r.height * 0.55, z: 1 });
  }, []);

  // ✅ Wheel ALWAYS works (view + edit)
  React.useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const v = vpRef.current;

      const r = el.getBoundingClientRect();
      const mx = e.clientX - r.left;
      const my = e.clientY - r.top;

      const delta = -e.deltaY;
      const zoom = delta > 0 ? 1.08 : 1 / 1.08;
      const nextZ = clamp(v.z * zoom, 0.35, 2.25);

      const wx = (mx - v.x) / v.z;
      const wy = (my - v.y) / v.z;

      setVp({
        x: mx - wx * nextZ,
        y: my - wy * nextZ,
        z: nextZ,
      });
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  // ✅ Pan background ALWAYS works (view + edit)
  const onPointerDownBg = (e: React.PointerEvent) => {
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
  };

  const onPointerMoveBg = (e: React.PointerEvent) => {
    if (!panRef.current.active) return;
    setVp((p) => ({
      ...p,
      x: panRef.current.baseX + (e.clientX - panRef.current.startX),
      y: panRef.current.baseY + (e.clientY - panRef.current.startY),
    }));
  };

  const onPointerUpBg = () => {
    panRef.current.active = false;
  };

  // Snapping: only relevant when dragging (edit mode)
  const applySnapping = React.useCallback(
    (id: string, pos: { x: number; y: number }) => {
      let snapX: number | undefined;
      let snapY: number | undefined;

      for (const n of nodes) {
        if (n.id === id) continue;
        if (Math.abs(n.x - pos.x) < SNAP_DIST) snapX = n.x;
        if (Math.abs(n.y - pos.y) < SNAP_DIST) snapY = n.y;
      }

      const nextGuide = snapX || snapY ? { x: snapX, y: snapY } : null;
      setGuide((g) => {
        const gx = g?.x, gy = g?.y;
        const nx = nextGuide?.x, ny = nextGuide?.y;
        if (gx === nx && gy === ny) return g;
        return nextGuide;
      });

      return { x: snapX ?? pos.x, y: snapY ?? pos.y };
    },
    [nodes]
  );

  // rAF throttle node moves
  const moveRaf = React.useRef<number | null>(null);
  const pendingMove = React.useRef<{ id: string; world: { x: number; y: number } } | null>(null);

  const onMoveNodeClient = React.useCallback(
    (id: string, client: { x: number; y: number }) => {
      // ✅ readOnly disables moving only
      if (readOnly) return;

      const w = screenToWorld(client.x, client.y);
      const snapped = applySnapping(id, w);

      pendingMove.current = { id, world: snapped };

      if (moveRaf.current) return;
      moveRaf.current = requestAnimationFrame(() => {
        moveRaf.current = null;
        const p = pendingMove.current;
        if (!p) return;
        onMoveNode(p.id, p.world);
      });
    },
    [applySnapping, onMoveNode, readOnly, screenToWorld]
  );

  const onMoveEnd = React.useCallback(() => setGuide(null), []);

  // ✅ selection ALWAYS works (view + edit)
  const onSelectNodeId = React.useCallback(
    (id: string) => onSelectNode(id),
    [onSelectNode]
  );

  React.useImperativeHandle(
    ref,
    () => ({
      flyToNode: (id, opts) => {
        const el = rootRef.current;
        if (!el) return;

        const n = nodes.find((x) => x.id === id);
        if (!n) return;

        const durationMs = opts?.durationMs ?? 420;

        const r = el.getBoundingClientRect();
        const cx = r.width / 2;
        const cy = r.height / 2;

        const from = { ...vpRef.current };
        const targetZ = clamp(opts?.zoom ?? from.z, 0.35, 2.25);

        const nodeCenterX = n.x + NODE_SIZE.w / 2;
        const nodeCenterY = n.y + NODE_SIZE.h / 2;

        const to = {
          x: cx - nodeCenterX * targetZ,
          y: cy - nodeCenterY * targetZ,
          z: targetZ,
        };

        if (flyAnimRef.current) cancelAnimationFrame(flyAnimRef.current);

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

          if (t < 1) flyAnimRef.current = requestAnimationFrame(tick);
        };

        flyAnimRef.current = requestAnimationFrame(tick);
      },
    }),
    [nodes]
  );

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

      {/* ✅ only show guides when dragging (edit mode) */}
      {!readOnly && guide?.x !== undefined && (
        <div
          className="absolute inset-y-0 w-px bg-blue-400/40 pointer-events-none"
          style={{ left: vp.x + guide.x * vp.z }}
        />
      )}
      {!readOnly && guide?.y !== undefined && (
        <div
          className="absolute inset-x-0 h-px bg-blue-400/40 pointer-events-none"
          style={{ top: vp.y + guide.y * vp.z }}
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
            transform: `translate(${vp.x}px, ${vp.y}px) scale(${vp.z})`,
            transformOrigin: "0 0",
          }}
        >
          <EdgesLayer nodes={nodes} edges={edges} />

          {nodes.map((n) => (
            <SkillNode
              key={n.id}
              node={n}
              selected={selectedId === n.id}
              readOnly={readOnly}              // SkillNode should use this to disable dragging only
              onSelectNode={onSelectNodeId}    // selection still works
              onMoveNode={onMoveNodeClient}    // no-op when readOnly
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