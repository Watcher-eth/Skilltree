"use client";

import React from "react";
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
  readOnly?: boolean;
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
  const [guide, setGuide] = React.useState<Guide | null>(null);

  const panRef = React.useRef({
    active: false,
    startX: 0,
    startY: 0,
    baseX: 0,
    baseY: 0,
  });

  const flyAnimRef = React.useRef<number | null>(null);

  const screenToWorld = React.useCallback(
    (sx: number, sy: number) => {
      const r = rootRef.current?.getBoundingClientRect();
      if (!r) return { x: sx, y: sy };
      return {
        x: (sx - r.left - vp.x) / vp.z,
        y: (sy - r.top - vp.y) / vp.z,
      };
    },
    [vp]
  );

  // Center on mount
  React.useEffect(() => {
    const r = rootRef.current?.getBoundingClientRect();
    if (!r) return;
    setVp({ x: r.width * 0.5, y: r.height * 0.55, z: 1 });
  }, []);

  // Zoom
  React.useEffect(() => {
    const el = rootRef.current;
    if (!el || readOnly) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.ctrlKey) e.preventDefault();

      const r = el.getBoundingClientRect();
      const mx = e.clientX - r.left;
      const my = e.clientY - r.top;

      const delta = -e.deltaY;
      const zoom = delta > 0 ? 1.08 : 1 / 1.08;
      const nextZ = clamp(vp.z * zoom, 0.35, 2.25);

      const wx = (mx - vp.x) / vp.z;
      const wy = (my - vp.y) / vp.z;

      setVp({
        x: mx - wx * nextZ,
        y: my - wy * nextZ,
        z: nextZ,
      });
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [vp, readOnly]);

  // Pan
  const onPointerDownBg = (e: React.PointerEvent) => {
    if (readOnly || e.button !== 0) return;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    panRef.current = {
      active: true,
      startX: e.clientX,
      startY: e.clientY,
      baseX: vp.x,
      baseY: vp.y,
    };
    onSelectNode(null);
  };

  const onPointerMoveBg = (e: React.PointerEvent) => {
    if (readOnly || !panRef.current.active) return;
    setVp((p) => ({
      ...p,
      x: panRef.current.baseX + (e.clientX - panRef.current.startX),
      y: panRef.current.baseY + (e.clientY - panRef.current.startY),
    }));
  };

  const onPointerUpBg = () => {
    panRef.current.active = false;
  };

  // Snapping
  const applySnapping = (id: string, pos: { x: number; y: number }) => {
    let snapX: number | undefined;
    let snapY: number | undefined;

    for (const n of nodes) {
      if (n.id === id) continue;
      if (Math.abs(n.x - pos.x) < SNAP_DIST) snapX = n.x;
      if (Math.abs(n.y - pos.y) < SNAP_DIST) snapY = n.y;
    }

    setGuide(snapX || snapY ? { x: snapX, y: snapY } : null);

    return { x: snapX ?? pos.x, y: snapY ?? pos.y };
  };

  // ✅ Fly-to imperative API
  React.useImperativeHandle(ref, () => ({
    flyToNode: (id, opts) => {
      const el = rootRef.current;
      if (!el) return;

      const n = nodes.find((x) => x.id === id);
      if (!n) return;

      const pad = opts?.pad ?? 120;
      const durationMs = opts?.durationMs ?? 420;

      const r = el.getBoundingClientRect();
      const cx = r.width / 2;
      const cy = r.height / 2;

      // target zoom: either provided or auto (keep current)
      const targetZ = clamp(opts?.zoom ?? vp.z, 0.35, 2.25);

      // center node in screen: vp.x + (nodeCenterX)*z = cx  => vp.x = cx - nodeCenterX*z
      const nodeCenterX = n.x + NODE_SIZE.w / 2;
      const nodeCenterY = n.y + NODE_SIZE.h / 2;

      // optional: ensure node isn't near edge by shifting toward center
      // (pad is mostly useful if you later implement fit-to-rect; kept for future use)
      void pad;

      const from = { ...vp };
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

        setVp({
          x: from.x + (to.x - from.x) * k,
          y: from.y + (to.y - from.y) * k,
          z: from.z + (to.z - from.z) * k,
        });

        if (t < 1) flyAnimRef.current = requestAnimationFrame(tick);
      };

      flyAnimRef.current = requestAnimationFrame(tick);
    },
  }), [nodes, vp]);

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 overflow-hidden bg-[#fefefe]"
      style={{ touchAction: "none" }}
    >
      {/* dots */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.08) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* grid */}
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

      {/* guides */}
      {guide?.x !== undefined && (
        <div
          className="absolute inset-y-0 w-px bg-blue-400/40 pointer-events-none"
          style={{ left: vp.x + guide.x * vp.z }}
        />
      )}
      {guide?.y !== undefined && (
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
              onSelect={() => !readOnly && onSelectNode(n.id)}
              onMove={(id, pt) => {
                if (readOnly) return;
                const w = screenToWorld(pt.x, pt.y);
                const snapped = applySnapping(id, w);
                onMoveNode(id, snapped);
              }}
              onMoveEnd={() => setGuide(null)}
            />
          ))}
        </div>
      </div>

      {/* fades */}
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