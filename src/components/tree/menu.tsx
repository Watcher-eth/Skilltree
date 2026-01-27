"use client";

import * as React from "react";
import {
  Search,
  Plus,
  Boxes,
  Wrench,
  Code,
  Brain,
  Briefcase,
  Server,
  ShieldCheck,
  FileText,
  Video,
  FlaskConical,
  Database,
  Heart,
  Blocks,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { Skill, SkillCategory } from "./types";
import { CATEGORY_TREE } from "@/lib/categories";
import { GROUPS, type SkillGroup } from "./skills";
import { cn } from "@/lib/utils";
import { toAppSkill } from "@/lib/normalize";
import { GROUP_ANIMATED_ICONS } from "./categoryIcons";
import { AnimatePresence } from "motion/react"

/* ───────────────── TYPES ───────────────── */

type Props = {
  onAddSkill: (skill: Skill) => void;
};

type SkillsMpSearchResponse = {
  success: boolean;
  data?: {
    skills?: Array<{
      id: string;
      name: string;
      author?: string;
      description?: string;
    }>;
  };
  error?: string;
};

/* ───────────────── ICON MAP ───────────────── */

export const GROUP_ICONS: Record<
  keyof typeof CATEGORY_TREE,
  React.ElementType
> = {
  Tools: Wrench,
  Development: Code,
  "Data & AI": Brain,
  Business: Briefcase,
  DevOps: Server,
  "Testing & Security": ShieldCheck,
  Documentation: FileText,
  "Content & Media": Video,
  Research: FlaskConical,
  Databases: Database,
  Lifestyle: Heart,
  Blockchain: Blocks,
};

function GroupIcon({ group }: { group: string }) {
  const Icon =
    GROUP_ANIMATED_ICONS[group as keyof typeof GROUP_ANIMATED_ICONS] ??
    Boxes;

  return (
    <span className="flex hover:scale-110 transition-all h-10 w-10 items-center justify-center">
      <Icon
        size={20}
        className="block color-gray-500 leading-none"
      />
    </span>
  );
}
/* ───────────────── CATEGORY COLORS ───────────────── */

const CATEGORY_DOT_COLORS = [
  "bg-blue-500",
  "bg-emerald-500",
  "bg-violet-500",
  "bg-amber-500",
  "bg-rose-500",
  "bg-cyan-500",
];

function categoryDotColor(cat: string) {
  let hash = 0;
  for (let i = 0; i < cat.length; i++) {
    hash = (hash << 5) - hash + cat.charCodeAt(i);
    hash |= 0;
  }
  return CATEGORY_DOT_COLORS[Math.abs(hash) % CATEGORY_DOT_COLORS.length];
}

/* ───────────────── HOOKS ───────────────── */

function useDebouncedValue<T>(value: T, ms: number) {
  const [v, setV] = React.useState(value);
  React.useEffect(() => {
    const t = window.setTimeout(() => setV(value), ms);
    return () => window.clearTimeout(t);
  }, [value, ms]);
  return v;
}

/* ───────────────── COMPONENT ───────────────── */

export function LeftMenu({ onAddSkill }: Props) {
  const [openGroup, setOpenGroup] =
    React.useState<SkillGroup | null>("Development");
  const [openCat, setOpenCat] = React.useState<SkillCategory | null>(null);

  const [q, setQ] = React.useState("");
  const dq = useDebouncedValue(q.trim(), 180);

  const [catSkills, setCatSkills] = React.useState<Skill[]>([]);
  const [catLoading, setCatLoading] = React.useState(false);
  const [catError, setCatError] = React.useState<string | null>(null);

  const [searchResults, setSearchResults] = React.useState<Skill[]>([]);
  const [searchLoading, setSearchLoading] = React.useState(false);
  const [searchError, setSearchError] = React.useState<string | null>(null);

  /* ───────── CATEGORY FETCH ───────── */

  React.useEffect(() => {
    if (!openGroup || !openCat) return;

    let cancelled = false;
    const controller = new AbortController();

    async function run() {
      setCatLoading(true);
      setCatError(null);

      try {
        const res = await fetch(
          `/api/skills/search?q=${encodeURIComponent(
            `${openCat} ${openGroup}`
          )}&limit=24`,
          { signal: controller.signal }
        );

        const json = (await res.json()) as SkillsMpSearchResponse;
        if (!res.ok || !json.success)
          throw new Error(json.error ?? "Failed");

        const normalized =
        json.data?.skills?.map((raw) => {
          const s = toAppSkill(raw as any, { group: openGroup!, category: openCat! });
      
          // ✅ ok to log s here
          console.log("category fetch item", s);
      
          return {
            ...s,
            title:
              typeof (s as any).title === "string"
                ? (s as any).title
                : String((s as any).title ?? (raw as any).name ?? ""),
            description:
              typeof (s as any).description === "string"
                ? (s as any).description
                : String((s as any).description ?? ""),
          } as Skill;
        }) ?? [];
      
      // ✅ log AFTER normalized exists
      console.log("category fetch normalized", normalized);
        if (!cancelled) setCatSkills(normalized);
      } catch (e: any) {
        if (!cancelled) setCatError(e.message);
      } finally {
        if (!cancelled) setCatLoading(false);
      }
    }

    run();
    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [openGroup, openCat]);

  /* ───────── SEARCH ───────── */

  React.useEffect(() => {
    if (!dq) {
      setSearchResults([]);
      return;
    }

    let cancelled = false;
    const controller = new AbortController();

    async function run() {
      setSearchLoading(true);
      setSearchError(null);

      try {
        const res = await fetch(
          `/api/skills/search?q=${encodeURIComponent(dq)}&limit=20`,
          { signal: controller.signal }
        );

        const json = (await res.json()) as SkillsMpSearchResponse;
        if (!res.ok || !json.success)
          throw new Error(json.error ?? "Search failed");

        const normalized =
        json.data?.skills?.map((raw) => {
          const s = toAppSkill(
            raw as any,
            openGroup && openCat ? { group: openGroup, category: openCat } : undefined
          );
      
          return {
            ...s,
            title: typeof (s as any).title === "string" ? (s as any).title : String((s as any).title ?? (raw as any).name ?? ""),
            description:
              typeof (s as any).description === "string"
                ? (s as any).description
                : String((s as any).description ?? ""),
          } as Skill;
        }) ?? [];

        if (!cancelled) setSearchResults(normalized);
      } catch (e: any) {
        if (!cancelled) setSearchError(e.message);
      } finally {
        if (!cancelled) setSearchLoading(false);
      }
    }

    run();
    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [dq, openGroup, openCat]);

  /* ───────────────── RENDER ───────────────── */
  return (
    <TooltipProvider delayDuration={120}>
      <div className="h-full flex">
        {/* ICON RAIL */}
        <div className="p-2 bg-white/90 backdrop-blur-md  border-r border-gray-100  flex flex-col items-center py-3 gap-2">
          {GROUPS.map((group) => {
            const active = openGroup === group;
            return (
              <Tooltip key={group}>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => {
                      setOpenGroup(group);
                      setOpenCat(null);
                    }}
                    className={cn(
                      "h-10 w-10  flex items-center justify-center transition",
                      active
                        ? "bg-[#00a6fb]/10 rounded-xl backdrop-blur-md text-[#00a6fb]"
                        : "rounded-xl "
                    )}
                  >
                    <GroupIcon group={group} />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="right">{group}</TooltipContent>
              </Tooltip>
            );
          })}
        </div>

        {/* MAIN PANEL */}
        <div className="w-[260px] bg-white/60 backdrop-blur-md rounded-r-xl overflow-hidden flex flex-col">
          {/* HEADER */}
          <div className="px-4 pt-3 pb-3 border-b border-gray-100">
            <div className="text-[12px] text-black/50">{openGroup}</div>

            <div className="mt-3 flex items-center gap-2 rounded-md bg-black/[0.06] px-3 py-2">
              <Search className="h-4 w-4 text-black/40" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search skills…"
                className="w-full bg-transparent text-[13px] outline-none placeholder:text-black/35"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="flex-1 overflow-y-auto pr-2 py-2">
            {dq ? (
              <div className="space-y-1">
                {searchLoading && (
                  <div className="text-[12px] text-black/40 px-2 py-1">
                    Searching…
                  </div>
                )}
                {searchError && (
                  <div className="text-[12px] text-red-600 px-2 py-1">
                    {searchError}
                  </div>
                )}
                {!searchLoading &&
                  !searchError &&
                  searchResults.map((s) => (
                    <Tooltip key={s.id}>
                      <TooltipTrigger asChild>
                        <button
                          onClick={() => onAddSkill(s)}
                          className="w-full flex items-center justify-between px-2 py-2 rounded hover:bg-black/[0.06]"
                        >
                          <span className="text-[13px] truncate">
                            {s.title}
                          </span>
                          <Plus className="h-4 w-4 text-black/40" />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent side="right" className="max-w-xs">
                        {s.description}
                      </TooltipContent>
                    </Tooltip>
                  ))}
              </div>
            ) : (
<AnimatePresence mode="wait">
{openGroup &&
                  CATEGORY_TREE[openGroup]?.map((cat) => {
                    const isOpen = openCat === cat;
                    return (
                      <div key={cat} className="relative mb-2">
                       

                        <button
                          onClick={() =>
                            setOpenCat(isOpen ? null : (cat as SkillCategory))
                          }
                          className="flex items-center gap-2 text-[13px] font-medium px-4 py-1 rounded hover:scale-102 transition-all"
                        >
                          <span
                            className={cn(
                              "h-2.5 w-2.5 rounded-full",
                              categoryDotColor(cat)
                            )}
                          />
                          <span className="truncate">{cat}</span>
                        </button>

                        {isOpen && (
                          <div className="pl-4 mt-1 space-y-1">
                            {catLoading && (
                              <div className="text-[12px] text-black/40 px-2 py-1">
                                Loading…
                              </div>
                            )}
                            {catError && (
                              <div className="text-[12px] text-red-600 px-2 py-1">
                                {catError}
                              </div>
                            )}
                            {!catLoading &&
                              !catError &&
                              catSkills.map((s) => (
                                <Tooltip key={s.id}>
                                  <TooltipTrigger asChild>
                                    <button
                                      onClick={() => onAddSkill(s)}
                                      className="w-full flex items-center justify-between px-2 py-1.5 rounded hover:bg-black/[0.06]"
                                    >
                                      <span className="text-[13px] truncate">
                                        {s.title}
                                      </span>
                                      <Plus className="h-4 w-4 text-black/40" />
                                    </button>
                                  </TooltipTrigger>
                                  <TooltipContent side="right" className="max-w-xs">
                                    {s.description}
                                  </TooltipContent>
                                </Tooltip>
                              ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
              </AnimatePresence>
            )}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}