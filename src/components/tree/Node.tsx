"use client";

import * as React from "react";
import { motion } from "framer-motion";
import type { CanvasNode } from "./types";
import { User, Sparkles, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

const W = 260;
const H = 78;
export const PORT_R = 7;

type Props = {
  node: CanvasNode;
  selected?: boolean;
  onSelect?: (id: string) => void;
  onMove: (id: string, client: { x: number; y: number }) => void;
};

export function SkillNode({ node, onMove, selected = false, onSelect }: Props) {
  const dragRef = React.useRef<{ active: boolean }>({ active: false });

  const isUser = node.kind === "user";
  const isHub = node.kind === "hub";

  const Icon = isUser ? User : isHub ? Layers : Sparkles;

  const badgeClass = isUser ? "bg-blue-100" : isHub ? "bg-purple-100" : "bg-emerald-100";
  const iconClass = isUser ? "text-blue-700" : isHub ? "text-purple-700" : "text-emerald-700";

  const title = node.title ?? "";
  const subtitle = node.subtitle ?? (isUser ? "Root" : isHub ? "Category" : "Skill");

  const onPointerDown = (e: React.PointerEvent) => {
    e.stopPropagation(); // prevent canvas pan
    if (e.button !== 0) return;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    dragRef.current.active = true;

    onSelect?.(node.id); // ✅ select on click/drag
    onMove(node.id, { x: e.clientX, y: e.clientY }); // ✅ let canvas compute grab-offset
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragRef.current.active) return;
    e.stopPropagation();
    onMove(node.id, { x: e.clientX, y: e.clientY });
  };

  const onPointerUp = (e: React.PointerEvent) => {
    dragRef.current.active = false;
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}
  };

  return (
    <motion.div
      className="absolute select-none"
      style={{ left: node.x, top: node.y, width: W, height: H }}
      initial={{ opacity: 0, scale: 0.985 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.16 }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
    >
      {/* Ports: edge anchors attach to the CENTER of these circles. */}
      <div
        data-port="left"
        className={cn(
          "absolute left-[-7px] top-1/2 -translate-y-1/2 h-[14px] w-[14px] rounded-full bg-white border border-black/15 shadow-sm",
          selected && "ring-2 ring-black/15"
        )}
      />
      <div
        data-port="right"
        className={cn(
          "absolute right-[-7px] top-1/2 -translate-y-1/2 h-[14px] w-[14px] rounded-full bg-white border border-black/15 shadow-sm",
          selected && "ring-2 ring-black/15"
        )}
      />

      <div
        className={cn(
          "h-full w-full rounded-[18px] bg-white/85 backdrop-blur border border-black/10",
          "shadow-[0_14px_40px_rgba(0,0,0,0.08)]",
          "flex items-center gap-3 px-3",
          selected ? "ring-2 ring-black/10" : "ring-1 ring-black/0"
        )}
      >
        <div className={cn("h-10 w-10 rounded-[14px] flex items-center justify-center", badgeClass)}>
          <Icon className={cn("h-5 w-5", iconClass)} />
        </div>

        <div className="min-w-0">
          <div className="text-[14px] font-semibold leading-tight truncate">{title}</div>
          <div className="text-[12px] text-black/45 leading-tight truncate mt-0.5">{subtitle}</div>
        </div>

        {node.category ? (
          <div className="ml-auto">
            <span className="inline-flex items-center rounded-full border border-black/10 bg-black/[0.03] px-2 py-1 text-[10px] font-semibold text-black/60">
              {node.category}
            </span>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}

export const NODE_SIZE = { w: W, h: H };