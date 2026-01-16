"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, ChevronDown, Plus } from "lucide-react";
import type { Skill, SkillCategory } from "./types";
import { CATEGORIES, SKILLS } from "./skills";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {
  onAddSkill: (skill: Skill) => void;
};

function groupByCategory(skills: Skill[]) {
  const map = new Map<SkillCategory, Skill[]>();
  for (const c of CATEGORIES) map.set(c, []);
  for (const s of skills) map.get(s.category)!.push(s);
  return map;
}

export function LeftMenu({ onAddSkill }: Props) {
  const [openCat, setOpenCat] = React.useState<SkillCategory | null>("Frontend");
  const [q, setQ] = React.useState("");

  const grouped = React.useMemo(() => groupByCategory(SKILLS), []);
  const query = q.trim().toLowerCase();

  const searchResults = React.useMemo(() => {
    if (!query) return [];
    return SKILLS.filter((s) => {
      const hay = `${s.title} ${s.description} ${s.category}`.toLowerCase();
      return hay.includes(query);
    }).slice(0, 12);
  }, [query]);

  return (
    <TooltipProvider delayDuration={120}>
      <aside className="fixed left-6 top-22 z-30 w-[260px] select-none">
        <div className="rounded-[20px] bg-white/80 backdrop-blur border border-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.06)] overflow-hidden">
          {/* Header */}
          <div className="px-4 pt-3 pb-3">
            <div className="flex items-center gap-2">
         
              <div>
                <div className="text-[12px] text-black/50 mt-1">Builder</div>
              </div>
            </div>

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
              </div>

              {/* Search results */}
              <AnimatePresence initial={false}>
                {query ? (
                  <motion.div
                    layout
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mt-3 overflow-hidden"
                  >
                    <div className="rounded-[14px] border border-black/10 bg-white">
                      {searchResults.length ? (
                        <div className="py-1">
                          {searchResults.map((s) => (
                            <Tooltip key={s.id}>
                              <TooltipTrigger asChild>
                                <button
                                  onClick={() => onAddSkill(s)}
                                  className="w-full px-3 py-2 flex items-center justify-between hover:bg-black/[0.03] text-left"
                                >
                                  <div>
                                    <div className="text-[13px] font-medium">{s.title}</div>
                                    <div className="text-[11px] text-black/45">{s.category}</div>
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
                          No results for <span className="font-medium text-black/70">“{q.trim()}”</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </div>

          {/* Sections */}
          <div className="px-2 pb-3">
            <div className="px-2 py-2 text-[11px] font-medium text-black/40">Sections</div>

            <div className="space-y-2 px-2 pb-2">
              {CATEGORIES.map((cat) => {
                const isOpen = openCat === cat;
                const items = grouped.get(cat) ?? [];

                return (
                  <motion.div key={cat} layout className="rounded-[16px] border border-black/10 bg-white overflow-hidden">
                    <button
                      onClick={() => setOpenCat(isOpen ? null : cat)} // ✅ only one open at a time
                      className="w-full px-3 py-3 flex items-center justify-between hover:bg-black/[0.03]"
                    >
                      <div className="text-[13px] font-medium">{cat}</div>
                      <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ type: "spring", stiffness: 300, damping: 24 }}>
                        <ChevronDown className="h-4 w-4 text-black/45" />
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.18 }}
                          className="overflow-hidden"
                        >
                          <div className="px-2 pb-2">
                            {items.map((s) => (
                              <Tooltip key={s.id}>
                                <TooltipTrigger asChild>
                                  <button
                                    onClick={() => onAddSkill(s)}
                                    className="w-full px-2 py-2 rounded-[12px] hover:bg-black/[0.03] flex items-center justify-between text-left"
                                  >
                                    <div className="text-[13px]">{s.title}</div>
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
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </aside>
    </TooltipProvider>
  );
}