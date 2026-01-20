"use client";

import { motion } from "motion/react";
import { Search, ChevronDown, Plus, Sparkles } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import type { Skill, SkillCategory } from "./types";
import { CATEGORY_TREE } from "@/lib/categories";
import { GROUPS, type SkillGroup } from "./skills";
import { cn } from "@/lib/utils";
import { toAppSkill } from "@/lib/normalize";
import React from "react"
import { AnimatePresence } from "motion/react"

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
      githubUrl?: string;
      skillUrl?: string;
      stars?: number;
      updatedAt?: number;
    }>;
    pagination?: any;
  };
  error?: string;
};

type SkillsMpAiSearchResponse = {
  success: boolean;
  data?: {
    data?: Array<{
      score: number;
      skill: {
        id: string;
        name: string;
        author?: string;
        description?: string;
        githubUrl?: string;
        skillUrl?: string;
        stars?: number;
        updatedAt?: number;
      };
    }>;
    has_more?: boolean;
  };
  error?: string;
};

function useDebouncedValue<T>(value: T, ms: number) {
  const [v, setV] = React.useState(value);
  React.useEffect(() => {
    const t = window.setTimeout(() => setV(value), ms);
    return () => window.clearTimeout(t);
  }, [value, ms]);
  return v;
}

export function LeftMenu({ onAddSkill }: Props) {
  const [openGroup, setOpenGroup] = React.useState<SkillGroup | null>(null);
  const [openCat, setOpenCat] = React.useState<SkillCategory | null>(null);
  const [q, setQ] = React.useState("");
  const dq = useDebouncedValue(q.trim(), 180);

  // cache category -> skills
  const catCache = React.useRef(new Map<string, { skills: Skill[]; at: number }>());
  const [catSkills, setCatSkills] = React.useState<Skill[]>([]);
  const [catLoading, setCatLoading] = React.useState(false);
  const [catError, setCatError] = React.useState<string | null>(null);

  // search results
  const [searchLoading, setSearchLoading] = React.useState(false);
  const [searchError, setSearchError] = React.useState<string | null>(null);
  const [searchResults, setSearchResults] = React.useState<Skill[]>([]);
  const [searchMode, setSearchMode] = React.useState<"keyword" | "semantic">("keyword");

  const activeGroup = openGroup;
  const activeCat = openCat;

  const catKey = activeGroup && activeCat ? `${activeGroup}::${activeCat}` : null;

  // fetch skills for the currently open category
  React.useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();

    async function run() {
      if (!activeGroup || !activeCat) return;

      setCatError(null);

      const key = `${activeGroup}::${activeCat}`;
      const cached = catCache.current.get(key);

      // cache for 10 minutes
      if (cached && Date.now() - cached.at < 10 * 60 * 1000) {
        setCatSkills(cached.skills);
        return;
      }

      setCatLoading(true);
      try {
        // best-effort: query category label (and group to help relevance)
        const res = await fetch(
          `/api/skills/category?group=${encodeURIComponent(activeGroup)}&category=${encodeURIComponent(activeCat)}&limit=24`
        )
        const json = (await res.json()) as SkillsMpSearchResponse;

        if (!res.ok || !json.success) {
          throw new Error(json.error ?? "Failed to fetch category skills");
        }

        const skillsMp = json.data?.skills ?? [];
        const normalized = skillsMp.map((s) =>
          toAppSkill(s, { group: activeGroup, category: activeCat })
        );

        if (cancelled) return;

        catCache.current.set(key, { skills: normalized, at: Date.now() });
        setCatSkills(normalized);
      } catch (e: any) {
        if (cancelled) return;
        if (e?.name === "AbortError") return;
        setCatError(e?.message ?? "Failed to fetch skills");
        setCatSkills([]);
      } finally {
        if (!cancelled) setCatLoading(false);
      }
    }

    run();
    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [catKey]); // re-run when group/category changes

  // search bar: keyword for short queries; semantic for longer queries
  React.useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();

    async function run() {
      setSearchError(null);

      if (!dq) {
        setSearchResults([]);
        setSearchLoading(false);
        return;
      }

      const useSemantic = dq.length >= 16 || dq.includes("?") || dq.toLowerCase().startsWith("how ");
      setSearchMode(useSemantic ? "semantic" : "keyword");
      setSearchLoading(true);

      try {
        if (useSemantic) {
          const res = await fetch(`/api/skills/ai-search?q=${encodeURIComponent(dq)}`, {
            signal: controller.signal,
          });
          const json = (await res.json()) as SkillsMpAiSearchResponse;

          if (!res.ok || !json.success) throw new Error(json.error ?? "AI search failed");

          const rows = json.data?.data ?? [];
          const normalized = rows
            .slice(0, 12)
            .map((r) =>
              toAppSkill(r.skill, activeGroup && activeCat ? { group: activeGroup, category: activeCat } : undefined)
            );

          if (cancelled) return;
          setSearchResults(normalized);
        } else {
          const res = await fetch(`/api/skills/search?q=${encodeURIComponent(dq)}&limit=12`, {
            signal: controller.signal,
          });
          const json = (await res.json()) as SkillsMpSearchResponse;

          if (!res.ok || !json.success) throw new Error(json.error ?? "Search failed");

          const skillsMp = json.data?.skills ?? [];
          const normalized = skillsMp.map((s) =>
            toAppSkill(s, activeGroup && activeCat ? { group: activeGroup, category: activeCat } : undefined)
          );

          if (cancelled) return;
          setSearchResults(normalized);
        }
      } catch (e: any) {
        if (cancelled) return;
        if (e?.name === "AbortError") return;
        setSearchError(e?.message ?? "Search failed");
        setSearchResults([]);
      } finally {
        if (!cancelled) setSearchLoading(false);
      }
    }

    run();
    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [dq, activeGroup, activeCat]);
console.log("LeftMenu", searchResults)
  return (
    <TooltipProvider delayDuration={120}>
      <div className="fixed left-6 top-18 z-30 w-[260px] select-none h-[calc(100vh-6rem)]">
        <div className="flex p-1.5 flex-col rounded-[24px] bg-white/20 backdrop-blur border border-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.06)] overflow-hidden h-full">
        <div className="flex flex-col rounded-[20px] bg-white/80 backdrop-blur border border-black/5  overflow-hidden h-full">
          {/* Header */}
          <div className="px-4 pt-3 pb-3">
            <div className="text-[12px] text-black/50 mt-1">Builder</div>

            {/* Search */}
            <div className="mt-4">
              <div className="flex items-center gap-2 rounded-[14px] border border-black/10 bg-white px-3 py-2">
                <Search className="h-4 w-4 text-black/45" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search skills…"
                  className="w-full bg-transparent text-[13px] outline-none placeholder:text-black/35"
                />
                {dq ? (
                  <span
                    className={cn(
                      "ml-1 inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px]",
                      searchMode === "semantic"
                        ? "border-black/10 bg-black/[0.03] text-black/65"
                        : "border-black/10 bg-white text-black/50"
                    )}
                    title={searchMode === "semantic" ? "Semantic search" : "Keyword search"}
                  >
                    {searchMode === "semantic" ? <Sparkles className="h-3 w-3" /> : null}
                    {searchMode === "semantic" ? "AI" : "KW"}
                  </span>
                ) : null}
              </div>

              {/* Search results */}
              <AnimatePresence initial={false}>
                {dq ? (
                  <motion.div
                    layout
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mt-3 overflow-hidden"
                  >
                    <div className="rounded-[14px] border border-black/10 bg-white overflow-hidden">
                      {searchLoading ? (
                        <div className="px-3 py-3 text-[12px] text-black/45">Searching…</div>
                      ) : searchError ? (
                        <div className="px-3 py-3 text-[12px] text-red-600/70">{searchError}</div>
                      ) : searchResults.length ? (
                        <div className="py-1">
                          {searchResults.map((s) => (
                            <Tooltip key={`${s.id}`}>
                              <TooltipTrigger asChild>
                                <button
                                  onClick={() => onAddSkill(s)}
                                  className="w-full px-3 py-2 flex items-center justify-between hover:bg-black/[0.03] text-left"
                                >
                                  <div className="min-w-0">
                                    <div className="text-[13px] font-medium truncate">{s.title}</div>
                                    <div className="text-[11px] text-black/45 truncate">
                                      {s.group} • {s.category}
                                    </div>
                                  </div>
                                  <span className="h-7 w-7 rounded-full border border-black/10 bg-white flex items-center justify-center">
                                    <Plus className="h-4 w-4 text-black/60" />
                                  </span>
                                </button>
                              </TooltipTrigger>
                              <TooltipContent side="right" className="max-w-[260px]">
                                <div className="text-[12px] leading-relaxed">{s.description}</div>
                              </TooltipContent>
                            </Tooltip>
                          ))}
                        </div>
                      ) : (
                        <div className="px-3 py-3 text-[12px] text-black/45">
                          No results for <span className="font-medium text-black/70">“{dq}”</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </div>

          {/* Sections */}
          <div className="flex-1 min-h-0 px-2 pb-3 overflow-y-auto overscroll-contain scrollbar-thin scrollbar-thumb-black/20">
            <div className="px-2 py-2 text-[11px] font-medium text-black/40">Sections</div>

            <div className="space-y-2 px-2 pb-2">
              {GROUPS.map((group) => {
                const isGroupOpen = openGroup === group;
                const cats = CATEGORY_TREE[group] ?? [];

                return (
                  <motion.div key={group} layout className="rounded-[16px] border border-black/10 bg-white overflow-hidden">
                    <button
                    onClick={() => {
                      if (isGroupOpen) {
                        setOpenGroup(null);
                        setOpenCat(null);
                      } else {
                        setOpenGroup(group);
                        setOpenCat(null);
                      }
                    }}
                      className="w-full px-3 py-3 flex items-center justify-between hover:bg-black/[0.03]"
                    >
                      <div className="text-[13px] font-medium">{group}</div>
                      <motion.div
                        animate={{ rotate: isGroupOpen ? 180 : 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 24 }}
                      >
                        <ChevronDown className="h-4 w-4 text-black/45" />
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isGroupOpen ? (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.18 }}
                          className="overflow-hidden"
                        >
                          <div className="px-2 pb-2 space-y-2">
                            {cats.map((cat) => {
                              const isCatOpen = openCat === cat;

                              return (
                                <div key={`${group}-${cat}`} className="rounded-[14px] border border-black/10 bg-white overflow-hidden">
                                  <button
                                    onClick={() => setOpenCat(isCatOpen ? null : (cat as SkillCategory))}
                                    className="w-full px-3 py-2.5 flex items-center justify-between hover:bg-black/[0.03]"
                                  >
                                    <div className="text-[12.5px] font-medium">{cat}</div>
                                    <motion.div
                                      animate={{ rotate: isCatOpen ? 180 : 0 }}
                                      transition={{ type: "spring", stiffness: 300, damping: 24 }}
                                    >
                                      <ChevronDown className="h-4 w-4 text-black/35" />
                                    </motion.div>
                                  </button>

                                  <AnimatePresence initial={false}>
                                    {isCatOpen ? (
                                      <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.16 }}
                                        className="overflow-hidden"
                                      >
                                        <div className="px-2 pb-2">
                                          {catLoading ? (
                                            <div className="px-2 py-2 text-[12px] text-black/45">Loading…</div>
                                          ) : catError ? (
                                            <div className="px-2 py-2 text-[12px] text-red-600/70">{catError}</div>
                                          ) : catSkills.length ? (
                                            catSkills.slice(0, 24).map((s) => (
                                              <Tooltip key={s.id}>
                                                <TooltipTrigger asChild>
                                                  <button
                                                    onClick={() => onAddSkill(s)}
                                                    className="w-full px-2 py-2 rounded-[12px] hover:bg-black/[0.03] flex items-center justify-between text-left"
                                                  >
                                                    <div className="text-[13px] truncate">{s.title}</div>
                                                    <span className="h-7 w-7 rounded-full border border-black/10 bg-white flex items-center justify-center">
                                                      <Plus className="h-4 w-4 text-black/60" />
                                                    </span>
                                                  </button>
                                                </TooltipTrigger>
                                                <TooltipContent side="right" className="max-w-[260px]">
                                                  <div className="text-[12px] leading-relaxed">{s.description}</div>
                                                </TooltipContent>
                                              </Tooltip>
                                            ))
                                          ) : (
                                            <div className="px-2 py-2 text-[12px] text-black/45">
                                              No results for this category yet.
                                            </div>
                                          )}
                                        </div>
                                      </motion.div>
                                    ) : null}
                                  </AnimatePresence>
                                </div>
                              );
                            })}
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      </div>
    </TooltipProvider>
  );
}