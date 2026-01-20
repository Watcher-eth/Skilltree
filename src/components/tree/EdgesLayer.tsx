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

export const EdgesLayer = React.memo(function EdgesLayer({ nodes, edges }: Props) {
  /* ---------------- node lookup (O(1)) ---------------- */
  const nodeMap = React.useMemo(() => {
    const m = new Map<string, CanvasNode>();
    for (const n of nodes) m.set(n.id, n);
    return m;
  }, [nodes]);

  /* ---------------- geometry cache ---------------- */
  const pathCache = React.useRef(new Map<string, string>());

  /* ---------------- mount tracking ---------------- */
  const seenEdges = React.useRef(new Set<string>());

  return (
    <svg className="absolute inset-0 overflow-visible pointer-events-none">
      {edges.map((e) => {
        const aN = nodeMap.get(e.from);
        const bN = nodeMap.get(e.to);
        if (!aN || !bN) return null;

        const fromSide: "left" | "right" = bN.x >= aN.x ? "right" : "left";
        const toSide: "left" | "right" = bN.x >= aN.x ? "left" : "right";

        const a = anchor(aN, fromSide);
        const b = anchor(bN, toSide);

        // Geometry signature (only changes when endpoints move)
        const geomKey =
          `${e.id}|` +
          `${a.x.toFixed(1)},${a.y.toFixed(1)}|` +
          `${b.x.toFixed(1)},${b.y.toFixed(1)}`;

        let d = pathCache.current.get(geomKey);
        if (!d) {
          d = bezier(a, b);
          pathCache.current.set(geomKey, d);
        }

        const isNew = !seenEdges.current.has(e.id);
        if (isNew) seenEdges.current.add(e.id);

        return (
          <g key={e.id}>
            {isNew ? (
              <motion.path
                d={d}
                fill="none"
                stroke="rgba(0,0,0,0.18)"
                strokeWidth={3}
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              />
            ) : (
              <path
                d={d}
                fill="none"
                stroke="rgba(0,0,0,0.18)"
                strokeWidth={3}
                strokeLinecap="round"
              />
            )}

            {/* highlight stroke */}
            <path
              d={d}
              fill="none"
              stroke="rgba(255,255,255,0.9)"
              strokeWidth={1}
              strokeLinecap="round"
            />
          </g>
        );
      })}
    </svg>
  );
}, areEdgesEqual);

/* ---------------- memo comparator ---------------- */

function areEdgesEqual(prev: Props, next: Props) {
  if (prev.edges.length !== next.edges.length) return false;

  for (let i = 0; i < prev.edges.length; i++) {
    const a = prev.edges[i];
    const b = next.edges[i];
    if (a.id !== b.id || a.from !== b.from || a.to !== b.to) {
      return false;
    }
  }

  return true;
}