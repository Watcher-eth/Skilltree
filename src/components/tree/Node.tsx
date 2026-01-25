"use client";

import * as React from "react";
import { motion } from "motion/react";
import type { CanvasNode } from "./types";
import { cn } from "@/lib/utils";
import { GROUP_COLORS } from "@/lib/categories";
import {
  User,
  Layers,
  Sparkles,
  MoreHorizontal,
  Wallet,
} from "lucide-react";

export const NODE_SIZE = { w: 252, h: 108 };
export const PORT_R = 7;

type Props = {
  node: CanvasNode;
  selected?: boolean;
  onSelect?: () => void;
  onMove: (id: string, client: { x: number; y: number }) => void;
  onMoveEnd?: () => void;
};

type CardTheme = {
  bg: string; // tailwind class OR hex via inline style fallback
  fg: string;
  sub: string;
  iconBg: string;
  outline?: string;
};

const IOS_BLUE = "#0A84FF";

// Fallback solid “wallet-like” palette (if you don’t have good group colors yet)
const FALLBACK_GROUP_HEX: Record<string, string> = {
  Frontend: "#10B981", // green
  Backend: "#111827", // near-black
  "AI/ML": "#F59E0B", // amber
  Crypto: "#2563EB", // blue
  Data: "#06B6D4", // cyan
  Debugging: "#F97316", // orange
  Design: "#A855F7", // purple
};

function pickTheme(node: CanvasNode): CardTheme {
  // If you already have GROUP_COLORS with bg/text classes, use those.
  // Otherwise we’ll use a solid hex background per group/subcategory vibe.
  const groupKey = (node.group ?? "") as string;

  // User node: black wallet card
  if (node.kind === "user") {
    return {
      bg: "bg-[#111111]",
      fg: "text-white",
      sub: "text-white/70",
      iconBg: "bg-white/12",
    };
  }

  // Hub nodes: slightly “system” neutral card
  if (node.kind === "hub") {
    // Prefer your GROUP_COLORS if it exists
    const g = node.group ? GROUP_COLORS[node.group] : null;
    if (g?.bg) {
      return {
        bg: g.bg,
        fg: "text-white",
        sub: "text-white/70",
        iconBg: "bg-white/12",
      };
    }
    const hex = FALLBACK_GROUP_HEX[groupKey] ?? "#111827";
    return {
      bg: `bg-[${hex}]`,
      fg: "text-white",
      sub: "text-white/70",
      iconBg: "bg-white/12",
    };
  }

  // Skill nodes: colorful like the wallet grid
  {
    const g = node.group ? GROUP_COLORS[node.group] : null;

    // If your GROUP_COLORS are dark-on-light, you might want white text.
    // We assume “wallet card” style: solid color + white text.
    if (g?.bg) {
      return {
        bg: g.bg,
        fg: "text-white",
        sub: "text-white/70",
        iconBg: "bg-white/12",
      };
    }

    const hex = FALLBACK_GROUP_HEX[groupKey] ?? "#06B6D4";
    return {
      bg: `bg-[${hex}]`,
      fg: "text-white",
      sub: "text-white/70",
      iconBg: "bg-white/12",
    };
  }
}

function clampText(v?: string | null, fallback = "—") {
  const s = (v ?? "").trim();
  return s.length ? s : fallback;
}

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

  const theme = pickTheme(node);

  const Icon =
    node.kind === "user"
      ? User
      : node.kind === "hub"
      ? Layers
      : Sparkles;

  const subtitle =
    node.kind === "user"
      ? "Root"
      : node.kind === "hub"
      ? "Category hub"
      : clampText(node.subtitle, "Skill");

  // NOTE: tailwind can’t always parse bg-[${hex}] dynamically.
  // So we apply inline background if we detect that pattern.
  const inlineBg =
    theme.bg.startsWith("bg-[") && theme.bg.endsWith("]")
      ? theme.bg.slice(4, -1)
      : null;

  return (
    <motion.div
      className="absolute select-none"
      style={{
        left: node.x,
        top: node.y,
        width: NODE_SIZE.w,
        height: NODE_SIZE.h,
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
    >
      <div
        className={cn(
          "relative h-full w-full overflow-hidden rounded-[22px]",
          "shadow-[0_18px_40px_rgba(0,0,0,0.10)]",
          "transition-transform duration-150",
          selected ? "ring-2 ring-offset-2 ring-offset-[#f4f4f3]" : ""
        )}
        style={{
          background: inlineBg ?? undefined,
          // iOS-blue selection ring
          boxShadow: selected
            ? `0 0 0 2px ${IOS_BLUE}, 0 18px 40px rgba(0,0,0,0.10)`
            : undefined,
        }}
      >
        {/* background */}
        <div
          className={cn(
            "absolute inset-0",
            inlineBg ? "" : theme.bg
          )}
        />

        {/* top row: icon + menu */}
        <div className="relative flex items-start justify-between px-4 pt-4">
          <div
            className={cn(
              "grid h-10 w-10 place-items-center rounded-[14px]",
              theme.iconBg
            )}
          >
            <Icon className="h-5 w-5 text-white" />
          </div>

          <div className="grid h-8 w-8 place-items-center rounded-full bg-white/12">
            <MoreHorizontal className="h-4 w-4 text-white/80" />
          </div>
        </div>

        {/* content */}
        <div className="relative px-4 pt-0">
          <div className={cn("truncate text-[15px] font-semibold", theme.fg)}>
            {node.title}
          </div>
          <div className={cn("mt-0 truncate text-[12px] font-medium", theme.sub)}>
            {subtitle}
          </div>
        </div>

    
      </div>
    </motion.div>
  );
}