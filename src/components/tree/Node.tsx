"use client";

import * as React from "react";
import { motion } from "motion/react";
import type { CanvasNode } from "./types";
import { cn } from "@/lib/utils";
import { User, Sparkles, MoreHorizontal } from "lucide-react";
import type { SkillSubcategory } from "@/lib/categories";
import type { SkillGroup } from "./skills";

// ✅ your icon maps
import { SUBCATEGORY_ANIMATED_ICONS, GROUP_ANIMATED_ICONS } from "./categoryIcons";

export const NODE_SIZE = { w: 252, h: 108 };
export const PORT_R = 7;

type Props = {
  node: CanvasNode;
  selected?: boolean;
  onSelect?: () => void;
  onMove: (id: string, client: { x: number; y: number }) => void;
  onMoveEnd?: () => void;
};

const IOS_BLUE = "#00a6fb";

// Your palette (+ white)
export const PALETTE = {
  a: "#00BBA6",
  b: "#00A8EF",
  c: "#FF6800",
  d: "#6266FA",
  e: "#F4B000",
  f: "#9391FE",
  g: "#00D743",
  h: "#EC3844",
  i: "#00C0F1",
  j: "#FF215B",
  gray: "#D9D9D9",
  white: "#FFFFFF",
} as const;

// ✅ include white as a possible color (and keep gray out unless you want it)
const COLOR_POOL: string[] = [
  PALETTE.white,
  PALETTE.a,
  PALETTE.b,
  PALETTE.c,
  PALETTE.d,
  PALETTE.e,
  PALETTE.f,
  PALETTE.g,
  PALETTE.h,
  PALETTE.i,
  PALETTE.j,
  IOS_BLUE,
];

// ✅ one shared color for ALL category roots (hub nodes)
const HUB_BG = PALETTE.white; // change if you want (e.g. PALETTE.white)

function stableHash(str: string) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function pickBg(node: CanvasNode): string {
  // user: fixed black
  if (node.kind === "user") return "#111111";

  // ✅ category roots (hubs): all the same color for easy identification
  if (node.kind === "hub") return HUB_BG;

  // skills: consistent but varied (by category first, then group/title fallback)
  const key = (node.category ?? node.group ?? node.title) as string;
  return COLOR_POOL[stableHash(key) % COLOR_POOL.length];
}

function clampText(v?: string | null, fallback = "—") {
  const s = (v ?? "").trim();
  return s.length ? s : fallback;
}

function isDark(hex: string) {
  const h = hex.replace("#", "");
  if (h.length !== 6) return false;
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  const l = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return l < 0.62;
}

/* -------------------- ICON PICKER -------------------- */

function iconForNode(node: CanvasNode): React.ElementType {
  if (node.kind === "user") return User;

  if (node.kind === "hub") {
    const g = node.group as SkillGroup | null | undefined;
    if (g && GROUP_ANIMATED_ICONS[g]) return GROUP_ANIMATED_ICONS[g];
    return Sparkles;
  }

  const c = node.category as SkillSubcategory | null | undefined;
  if (c && SUBCATEGORY_ANIMATED_ICONS[c]) return SUBCATEGORY_ANIMATED_ICONS[c];

  const g = node.group as SkillGroup | null | undefined;
  if (g && GROUP_ANIMATED_ICONS[g]) return GROUP_ANIMATED_ICONS[g];

  return Sparkles;
}

export function SkillNode({ node, selected, onSelect, onMove, onMoveEnd }: Props) {
  const drag = React.useRef({ active: false, lastX: 0, lastY: 0 });

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

  const bg = pickBg(node);
  const dark = isDark(bg);

  const Icon = iconForNode(node);

  const subtitle =
    node.kind === "user"
      ? "Root"
      : node.kind === "hub"
      ? "Category hub"
      : clampText(node.subtitle, "Skill");

  const fg = dark ? "text-white" : "text-black";
  const sub = dark ? "text-white/70" : "text-black/55";
  const menuBg = dark ? "bg-white/12" : "bg-black/10";
  const menuFg = dark ? "text-white/80" : "text-black/65";
  const iconFg = dark ? "text-white" : "text-black/80";

  // subtle border on white cards so they don’t disappear
  const needsBorder = bg.toUpperCase() === "#FFFFFF";
  const baseShadow = "shadow-[0_18px_40px_rgba(0,0,0,0.10)]";

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
          "relative h-full w-full overflow-hidden rounded-[22px]",
          baseShadow,
          needsBorder ? "border border-black/10" : ""
        )}
        style={{
          backgroundColor: bg,
          boxShadow: selected
            ? `0 0 0 2px ${IOS_BLUE}, 0 18px 40px rgba(0,0,0,0.10)`
            : undefined,
        }}
      >
        <div className="relative flex items-start justify-between px-4 pt-4">
          <div>
            <Icon className={cn("h-6 w-6", iconFg)} />
          </div>

          <div className={cn("grid h-8 w-8 place-items-center rounded-full", menuBg)}>
            <MoreHorizontal className={cn("h-4 w-4", menuFg)} />
          </div>
        </div>

        <div className="relative px-4 pt-1">
          <div className={cn("truncate text-[15px] font-semibold", fg)}>{node.title}</div>
          <div className={cn("mt-0 truncate text-[12px] font-medium", sub)}>{subtitle}</div>
        </div>
      </div>
    </motion.div>
  );
}