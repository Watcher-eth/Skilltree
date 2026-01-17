"use client";

import { motion } from "framer-motion";
import type { CanvasEdge, CanvasNode } from "./types";
import { NODE_SIZE, PORT_R } from "./Node";

type Props = {
  nodes: CanvasNode[];
  edges: CanvasEdge[];
};

type Pt = { x: number; y: number };

function getNode(nodes: CanvasNode[], id: string) {
  return nodes.find((n) => n.id === id) ?? null;
}

function anchor(n: CanvasNode, side: "left" | "right"): Pt {
  const { w, h } = NODE_SIZE;
  const cx = n.x + (side === "left" ? -PORT_R : w + PORT_R);
  const cy = n.y + h / 2;
  return { x: cx, y: cy };
}

function bezier(a: Pt, b: Pt) {
  const dx = Math.max(80, Math.abs(b.x - a.x) * 0.45);
  const c1 = { x: a.x + dx, y: a.y };
  const c2 = { x: b.x - dx, y: b.y };
  return `M ${a.x} ${a.y} C ${c1.x} ${c1.y}, ${c2.x} ${c2.y}, ${b.x} ${b.y}`;
}

export function EdgesLayer({ nodes, edges }: Props) {
  return (
    <svg className="absolute inset-0 overflow-visible pointer-events-none">
      {edges.map((e) => {
        const aN = getNode(nodes, e.from);
        const bN = getNode(nodes, e.to);
        if (!aN || !bN) return null;

        const fromSide: "left" | "right" = bN.x >= aN.x ? "right" : "left";
        const toSide: "left" | "right" = bN.x >= aN.x ? "left" : "right";

        const a = anchor(aN, fromSide);
        const b = anchor(bN, toSide);

        const d = bezier(a, b);

        return (
          <g key={e.id}>
            <motion.path
              d={d}
              fill="none"
              stroke="rgba(0,0,0,0.18)"
              strokeWidth={3}
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.35 }}
            />
            <path
              d={d}
              fill="none"
              stroke="rgba(255,255,255,0.9c)"
              strokeWidth={1}
              strokeLinecap="round"
            />
          </g>
        );
      })}
    </svg>
  );
}