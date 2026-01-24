"use client";

import { motion } from "motion/react";
import type { CanvasNode } from "./types";
import { User, Sparkles, Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import { GROUP_COLORS } from "@/lib/categories";
import React from "react";

export const NODE_SIZE = { w: 260, h: 78 };
export const PORT_R = 7;

type Props = {
  node: CanvasNode;
  selected?: boolean;
  onSelect?: () => void;
  onMove: (id: string, client: { x: number; y: number }) => void;
  onMoveEnd?: () => void;
};

export function SkillNode({
  node,
  selected,
  onSelect,
  onMove,
  onMoveEnd,
}: Props) {
  const drag = React.useRef({
    active: false,
    lastX: 0,
    lastY: 0,
    vx: 0,
    vy: 0,
  });

  const onPointerDown = (e: React.PointerEvent) => {
    e.stopPropagation();
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    drag.current.active = true;
    drag.current.lastX = e.clientX;
    drag.current.lastY = e.clientY;
    onSelect?.();
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current.active) return;
    e.stopPropagation();

    const dx = e.clientX - drag.current.lastX;
    const dy = e.clientY - drag.current.lastY;

    drag.current.vx = dx;
    drag.current.vy = dy;

    drag.current.lastX = e.clientX;
    drag.current.lastY = e.clientY;

    onMove(node.id, { x: e.clientX, y: e.clientY });
  };

  const onPointerUp = (e: React.PointerEvent) => {
    drag.current.active = false;
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}
    onMoveEnd?.();
  };

  const Icon =
    node.kind === "user" ? User : node.kind === "hub" ? Layers : Sparkles;
  const colors = node.group ? GROUP_COLORS[node.group] : null;

  return (
    <motion.div
      className="absolute select-none"
      style={{ left: node.x, top: node.y, width: NODE_SIZE.w, height: NODE_SIZE.h }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
    >
      <div
        className={cn(
          "h-full w-full rounded-[22px] bg-white/85 border-[1px]  shadow-[0_14px_40px_rgba(0,0,0,0.08)] flex items-center gap-3 px-3",
          selected && "ring-1 ring-[#00a6fb]/90"
        )}
      >
        <div
          className={cn(
            "h-10 w-10 rounded-[14px] flex items-center justify-center",
            colors?.bg ?? "bg-neutral-100"
          )}
        >
          <Icon className={cn("h-5 w-5", colors?.text ?? "text-neutral-700")} />
        </div>

        <div className="min-w-0">
          <div className="text-[14px] font-semibold truncate">
            {node.title}
          </div>
          <div className="text-[12px] text-black/45 truncate">
            {node.subtitle}
          </div>
        </div>
      </div>
    </motion.div>
  );
}