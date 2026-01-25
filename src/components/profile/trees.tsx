"use client";

import React from "react";
import Link from "next/link";
import { Plus, MoreHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TreesContent({
  user,
  trees,
}: {
  user: any;
  trees: any[];
}) {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <header className="px-6 py-4 text-center border-b border-gray-100">
        <h1 className="text-lg font-semibold text-foreground">Address Book</h1>
      </header>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center px-6 pt-12 py-6">
        {/* iOS Banner */}
        <div className="relative w-full max-w-md rounded-2xl overflow-hidden mb-6 bg-gradient-to-r from-[#fef9e7] via-[#e8f4fc] to-[#dbeafe]">
          <button className="absolute top-3 right-3 z-10 w-6 h-6 rounded-full bg-black/10 flex items-center justify-center hover:bg-black/20 transition-colors">
            <X className="w-3.5 h-3.5 text-gray-600" />
          </button>

          <div className="flex items-center p-5 pr-0">
            <div className="flex-1 pr-4">
              <h3 className="font-semibold text-foreground mb-1">
                See all Skills in one place
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Search with natural language
              </p>
              <Button className="bg-[#00a6fb] hover:bg-[#0096fb] text-white rounded-lg px-5 py-2 h-auto font-medium">
                <Link href="https://skillsmp.com">SkillsMP</Link>
              </Button>
            </div>
            <div className="w-44 h-28 relative">
              <BannerIllustration />
            </div>
          </div>
        </div>

        <div className="w-full max-w-md">
          {/* Title row */}
          <div className="flex items-center justify-between gap-4">
            <div className="min-w-0">
              <div className="text-xl font-semibold text-foreground">
                {(user?.name ?? "User") + "'s Trees"}
              </div>
            </div>

            <Button
              className="h-9 rounded-xl px-4 bg-[#00a6fb] hover:bg-[#0096fb] text-white"
              asChild
            >
              <Link href="/">New Tree</Link>
            </Button>
          </div>

          {/* List card */}
          <div className="border w-full max-w-md hover:scale-101 transition-all border-border rounded-2xl overflow-hidden my-6 bg-background">
            {(trees ?? []).map((t: any, index: number) => {
              const id = String(t._id);
              const seed = String(t._id ?? t.slug ?? t.title ?? index);

              return (
                <Link
                  key={id}
                  href={`/edit/${id}`}
                  className={`block ${
                    index !== (trees?.length ?? 0) - 1
                      ? "border-b border-border"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-3 px-4 py-3 transition-colors">
                    <TreePfp seed={seed} />

                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm text-foreground truncate">
                        {t.title ?? "Skill Tree"}
                      </div>
                      <div className="text-xs text-muted-foreground truncate">
                        {t.nodeCount ?? 0} nodes • updated{" "}
                        {timeAgo(t.updatedAt ?? Date.now())}
                      </div>
                    </div>

                    <button
                      className="p-1 hover:bg-secondary rounded-md transition-colors"
                      onClick={(e) => e.preventDefault()}
                      aria-label="More"
                    >
                      <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
                    </button>
                  </div>
                </Link>
              );
            })}

            {(!trees || trees.length === 0) && (
              <div className="px-4 py-6 text-sm text-muted-foreground">
                No trees yet.
              </div>
            )}
          </div>

          {/* CTA row like reference */}
          <Button
            variant="outline"
            className="w-full border-none mt-1.5 outline-none max-w-md h-12 rounded-xl bg-gray-100 text-foreground font-medium hover:bg-secondary/50"
            asChild
          >
            <Link href="/">
              <Plus className="w-5 h-5 mr-0" />
              New Tree
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

function timeAgo(ms: number) {
  const s = Math.max(1, Math.floor((Date.now() - ms) / 1000));
  const m = Math.floor(s / 60);
  const h = Math.floor(m / 60);
  const d = Math.floor(h / 24);
  if (d > 0) return `${d}d ago`;
  if (h > 0) return `${h}h ago`;
  if (m > 0) return `${m}m ago`;
  return `${s}s ago`;
}

function BannerIllustration() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Phone mockup */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 w-20 h-28 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="p-2 h-full flex flex-col">
          <div className="w-full h-2 bg-gray-100 rounded mb-1.5" />
          <div className="flex-1 grid grid-cols-2 gap-1">
            <div className="bg-[#93c5fd] rounded" />
            <div className="bg-[#fde68a] rounded" />
            <div className="bg-[#6ee7b7] rounded" />
            <div className="bg-[#c4b5fd] rounded" />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-2 right-4 w-4 h-4 text-[#4ade80]">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L9 9H2l5.5 4.5L5 22l7-5 7 5-2.5-8.5L22 9h-7L12 2z" />
        </svg>
      </div>
      <div className="absolute top-6 right-2">
        <span className="text-xs">✨</span>
      </div>
      <div className="absolute top-1 right-10">
        <span className="text-[10px]">✨</span>
      </div>
      <div className="absolute top-4 right-8">
        <span className="text-lg">❤️</span>
      </div>
      <div className="absolute bottom-2 right-3 w-6 h-6 bg-[#fbbf24] rounded-full opacity-80" />
      <div className="absolute top-8 right-0 w-4 h-4 bg-[#fcd34d] rounded-full opacity-70" />
      <div className="absolute bottom-4 right-10 w-8 h-4 bg-[#fde68a]/60 rounded" />
      <div className="absolute top-14 right-6 w-5 h-3 bg-[#bfdbfe]/70 rounded" />
    </div>
  );
}

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

export const TREE_COLORS = [
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
] as const;

export function hashToIndex(input: string, mod: number) {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h) % mod;
}

export function clamp255(n: number) {
  return Math.max(0, Math.min(255, n));
}

export function hexToRgb(hex: string) {
  const s = hex.replace("#", "");
  const v = s.length === 3 ? s.split("").map((c) => c + c).join("") : s;
  const num = parseInt(v, 16);
  return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
}

export function rgbToHex(r: number, g: number, b: number) {
  const to = (x: number) =>
    Math.round(clamp255(x)).toString(16).padStart(2, "0");
  return `#${to(r)}${to(g)}${to(b)}`;
}

export function mix(hexA: string, hexB: string, t: number) {
  const a = hexToRgb(hexA);
  const b = hexToRgb(hexB);
  return rgbToHex(
    a.r + (b.r - a.r) * t,
    a.g + (b.g - a.g) * t,
    a.b + (b.b - a.b) * t
  );
}

export function lighten(hex: string, t: number) {
  return mix(hex, "#FFFFFF", t);
}

export function darken(hex: string, t: number) {
  return mix(hex, "#000000", t);
}

export function TreePfp({ seed }: { seed: string }) {
  const base = TREE_COLORS[hashToIndex(seed, TREE_COLORS.length)];
  const hi = lighten(base, 0.28);
  const lo = darken(base, 0.22);

  return (
    <div
      className="w-10 h-10 rounded-full shrink-0"
      style={{
        background: `radial-gradient(120% 120% at 30% 25%, ${hi} 0%, ${base} 45%, ${lo} 100%)`,
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.35)",
      }}
    />
  );
}