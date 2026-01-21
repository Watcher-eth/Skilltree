// src/components/tree/Canvas.tsx
"use client";

import React from "react";
import { motion } from "motion/react";
import type { CanvasEdge, CanvasNode } from "./types";
import { SkillNode } from "./Node";
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

const clamp = (v: number, min: number, max: number) =>
  Math.min(max, Math.max(min, v));

export function Canvas({
  nodes,
  edges,
  selectedId,
  onSelectNode,
  onMoveNode,
  readOnly,
}: Props) {
  const ref = React.useRef<HTMLDivElement | null>(null);

  const [vp, setVp] = React.useState<Viewport>({ x: 0, y: 0, z: 1 });

  const panRef = React.useRef({
    active: false,
    startX: 0,
    startY: 0,
    baseX: 0,
    baseY: 0,
  });

  const screenToWorld = React.useCallback(
    (sx: number, sy: number) => {
      const r = ref.current?.getBoundingClientRect();
      if (!r) return { x: sx, y: sy };
      return {
        x: (sx - r.left - vp.x) / vp.z,
        y: (sy - r.top - vp.y) / vp.z,
      };
    },
    [vp]
  );

  // center on mount
  React.useEffect(() => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setVp({ x: r.width * 0.5, y: r.height * 0.55, z: 1 });
  }, []);

  // 🔥 Native non-passive wheel listener (FIXES PINCH ZOOM)
  React.useEffect(() => {
    const el = ref.current;
    if (!el || readOnly) return;

    const onWheel = (e: WheelEvent) => {
      // block browser zoom (pinch = ctrlKey)
      if (e.ctrlKey) e.preventDefault();
      e.preventDefault();

      const r = el.getBoundingClientRect();
      const mx = e.clientX - r.left;
      const my = e.clientY - r.top;

      const delta = -e.deltaY;
      const zoomFactor = e.ctrlKey
        ? delta > 0
          ? 1.03
          : 1 / 1.03
        : delta > 0
        ? 1.08
        : 1 / 1.08;

      const nextZ = clamp(vp.z * zoomFactor, 0.35, 2.25);

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

  const onPointerUpBg = (e: React.PointerEvent) => {
    if (readOnly || !panRef.current.active) return;
    panRef.current.active = false;
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}
  };

  return (
    <div
      ref={ref}
      className="fixed inset-0 overflow-hidden bg-[#f4f4f3]"
      style={{ touchAction: "none" }}
    >
      {/* background dots */}
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
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e7e5e4 1px, transparent 1px),
            linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
      />

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
                onMoveNode(id, screenToWorld(pt.x, pt.y));
              }}
            />
          ))}
        </div>
      </div>

      <motion.div
        className="pointer-events-none fixed inset-x-0 top-0 h-24 z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(244,244,243,0.95), rgba(244,244,243,0))",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
    </div>
  );
}