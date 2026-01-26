// SkillNode.tsx
"use client";

import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { User, Sparkles, MoreHorizontal } from "lucide-react";
import type { CanvasNode } from "./types";
import type { SkillSubcategory } from "@/lib/categories";
import type { SkillGroup } from "./skills";
import { SUBCATEGORY_ANIMATED_ICONS, GROUP_ANIMATED_ICONS } from "./categoryIcons";

export const NODE_SIZE = { w: 252, h: 108 };
export const PORT_R = 7;

type Props = {
  node: CanvasNode;
  selected?: boolean;
  readOnly?: boolean;
  onSelectNode: (id: string) => void;
  onMoveNode: (id: string, client: { x: number; y: number }) => void;
  onMoveEnd?: () => void;
};

const IOS_BLUE = "#00a6fb";

function stableHash(str: string) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

const PALETTE = [
  "#FFFFFF",
  "#00BBA6",
  "#00A8EF",
  "#FF6800",
  "#6266FA",
  "#F4B000",
  "#9391FE",
  "#00D743",
  "#EC3844",
  "#00C0F1",
  "#FF215B",
  IOS_BLUE,
];

const HUB_BG = "#FFFFFF";

function pickBg(node: CanvasNode): string {
  if (node.kind === "user") return "#111111";
  if (node.kind === "hub") return HUB_BG;
  const key = (node.category ?? node.group ?? node.title) as string;
  return PALETTE[stableHash(key) % PALETTE.length];
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

function clampText(v?: string | null, fallback = "—") {
  const s = (v ?? "").trim();
  return s.length ? s : fallback;
}

function SkillNodeImpl({ node, selected, readOnly, onSelectNode, onMoveNode, onMoveEnd }: Props) {
  const drag = React.useRef({ active: false });

  const onPointerDown = (e: React.PointerEvent) => {
    if (readOnly) return;
    e.stopPropagation();
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    drag.current.active = true;
    onSelectNode(node.id);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (readOnly) return;
    if (!drag.current.active) return;
    e.stopPropagation();
    onMoveNode(node.id, { x: e.clientX, y: e.clientY });
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (readOnly) return;
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
          <Icon className={cn("h-6 w-6", iconFg)} />
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

export const SkillNode = React.memo(
  SkillNodeImpl,
  (a, b) =>
    a.selected === b.selected &&
    a.readOnly === b.readOnly &&
    a.node === b.node // IMPORTANT: only the moved node gets a new object in your setNodes logic
);