// src/components/tree/Canvas.tsx
"use client";

import { motion } from "motion/react";
import type { CanvasEdge, CanvasNode } from "./types";
import { SkillNode } from "./Node";
import { EdgesLayer } from "./EdgesLayer";
import React from "react"

type Props = {
  nodes: CanvasNode[];
  edges: CanvasEdge[];
  selectedId: string | null;
  onSelectNode: (id: string | null) => void;
  onMoveNode: (id: string, world: { x: number; y: number }) => void;
  readOnly?: boolean; // ✅ NEW
};

type Viewport = { x: number; y: number; z: number };

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

export function Canvas({ nodes, edges, selectedId, onSelectNode, onMoveNode, readOnly }: Props) {
  const ref = React.useRef<HTMLDivElement | null>(null);

  const [vp, setVp] = React.useState<Viewport>({ x: 0, y: 0, z: 1 });

  const panRef = React.useRef<{
    active: boolean;
    startX: number;
    startY: number;
    baseX: number;
    baseY: number;
  }>({ active: false, startX: 0, startY: 0, baseX: 0, baseY: 0 });

  const screenToWorld = React.useCallback(
    (sx: number, sy: number) => {
      const r = ref.current?.getBoundingClientRect();
      if (!r) return { x: sx, y: sy };
      const x = (sx - r.left - vp.x) / vp.z;
      const y = (sy - r.top - vp.y) / vp.z;
      return { x, y };
    },
    [vp.x, vp.y, vp.z]
  );

  React.useEffect(() => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setVp({ x: r.width * 0.5, y: r.height * 0.55, z: 1 });
  }, []);

  const onWheel = (e: React.WheelEvent) => {
    if (readOnly) return; // ✅ disable zoom in public viewer if desired
    e.preventDefault();
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;

    const mouseX = e.clientX - r.left;
    const mouseY = e.clientY - r.top;

    const delta = -e.deltaY;
    const zoomFactor = delta > 0 ? 1.08 : 1 / 1.08;
    const nextZ = clamp(vp.z * zoomFactor, 0.35, 2.25);

    const wx = (mouseX - vp.x) / vp.z;
    const wy = (mouseY - vp.y) / vp.z;

    const nextX = mouseX - wx * nextZ;
    const nextY = mouseY - wy * nextZ;

    setVp({ x: nextX, y: nextY, z: nextZ });
  };

  const onPointerDownBg = (e: React.PointerEvent) => {
    if (readOnly) return; // ✅ disable panning + deselect
    if (e.button !== 0) return;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    panRef.current = { active: true, startX: e.clientX, startY: e.clientY, baseX: vp.x, baseY: vp.y };
    onSelectNode(null);
  };

  const onPointerMoveBg = (e: React.PointerEvent) => {
    if (readOnly) return;
    if (!panRef.current.active) return;
    const dx = e.clientX - panRef.current.startX;
    const dy = e.clientY - panRef.current.startY;
    setVp((p) => ({ ...p, x: panRef.current.baseX + dx, y: panRef.current.baseY + dy }));
  };

  const onPointerUpBg = (e: React.PointerEvent) => {
    if (readOnly) return;
    if (!panRef.current.active) return;
    panRef.current.active = false;
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}
  };

  return (
    <div ref={ref} className="fixed inset-0 overflow-hidden bg-[#f4f4f3]">
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.08) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />

      <div
        className="absolute inset-0"
        onWheel={onWheel}
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
              onSelect={(id) => {
                if (readOnly) return; // ✅ no selection in viewer
                onSelectNode(id);
              }}
              onMove={(id, client) => {
                if (readOnly) return; // ✅ no drag in viewer
                const w = screenToWorld(client.x, client.y);
                onMoveNode(id, w);
              }}
            />
          ))}
        </div>
      </div>

      <motion.div
        className="pointer-events-none fixed inset-x-0 top-0 h-24 z-10"
        style={{ background: "linear-gradient(to bottom, rgba(244,244,243,0.95), rgba(244,244,243,0))" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
    </div>
  );
}