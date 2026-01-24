"use client";

import { motion } from "motion/react";
import type { CanvasEdge, CanvasNode } from "./types";
import { NODE_SIZE, PORT_R } from "./Node";
import React from "react";

type Props = {
  nodes: CanvasNode[];
  edges: CanvasEdge[];
};

type Pt = { x: number; y: number };

function anchor(n: CanvasNode, side: "left" | "right"): Pt {
  return {
    x: n.x + (side === "left" ? -PORT_R : NODE_SIZE.w + PORT_R),
    y: n.y + NODE_SIZE.h / 2,
  };
}

function bezier(a: Pt, b: Pt) {
  const dx = Math.max(80, Math.abs(b.x - a.x) * 0.45);
  return `M ${a.x} ${a.y} C ${a.x + dx} ${a.y}, ${b.x - dx} ${b.y}, ${b.x} ${b.y}`;
}

export const EdgesLayer = React.memo(function EdgesLayer({
  nodes,
  edges,
}: Props) {
  const nodeMap = React.useMemo(() => {
    const m = new Map<string, CanvasNode>();
    for (const n of nodes) m.set(n.id, n);
    return m;
  }, [nodes]);

  const seen = React.useRef(new Set<string>());

  return (
    <svg className="absolute inset-0 overflow-visible pointer-events-none">
      {edges.map((e) => {
        const aN = nodeMap.get(e.from);
        const bN = nodeMap.get(e.to);
        if (!aN || !bN) return null;

        const fromSide = bN.x >= aN.x ? "right" : "left";
        const toSide = bN.x >= aN.x ? "left" : "right";

        const d = bezier(anchor(aN, fromSide), anchor(bN, toSide));
        const isNew = !seen.current.has(e.id);
        if (isNew) seen.current.add(e.id);

        return (
          <g key={e.id}>
            {isNew ? (
              <motion.path
                d={d}
                stroke="rgba(0,0,0,0.18)"
                strokeWidth={3}
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
              />
            ) : (
              <path d={d} stroke="rgba(0,0,0,0.18)" strokeWidth={3} fill="none" />
            )}
            <path d={d} stroke="rgba(255,255,255,0.9)" strokeWidth={1} fill="none" />
          </g>
        );
      })}
    </svg>
  );
});