import type { Skill, SkillCategory } from "@/components/tree/types";
import { CATEGORY_TREE } from "@/lib/categories";
import type { SkillGroup } from "@/components/tree/skills";

type SkillsMpSkill = {
  id: string;
  name: string;
  author?: string;
  description?: string;
  githubUrl?: string;
  skillUrl?: string;
  stars?: number;
  updatedAt?: number;
};

function tokenize(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s\-_/]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

/**
 * If you don't have explicit category metadata from SkillsMP,
 * infer it by matching against your CATEGORY_TREE labels.
 */
export function inferGroupAndCategory(input: SkillsMpSkill): { group: SkillGroup; category: SkillCategory } | null {
  const hay = `${input.name} ${input.description ?? ""} ${input.author ?? ""}`.toLowerCase();
  const hayTokens = new Set(tokenize(hay));

  let best: { group: SkillGroup; category: SkillCategory; score: number } | null = null;

  for (const [group, cats] of Object.entries(CATEGORY_TREE) as Array<[SkillGroup, SkillCategory[]]>) {
    for (const cat of cats) {
      const catTokens = tokenize(String(cat));
      let score = 0;

      for (const t of catTokens) {
        if (hayTokens.has(t)) score += 3;
      }

      // group name also helps
      for (const t of tokenize(String(group))) {
        if (hayTokens.has(t)) score += 1;
      }

      if (!best || score > best.score) best = { group, category: cat, score };
    }
  }

  // require some signal; otherwise return null (we'll fall back to current open group/cat)
  if (!best || best.score < 2) return null;
  return { group: best.group, category: best.category };
}


export function toAppSkill(
  raw: any,
  ctx?: { group: string; category: string }
): Skill {
  return {
    id: String(raw.id),
    title: typeof raw.name === "string" ? raw.name : String(raw.name ?? ""),
    description: typeof raw.description === "string" ? raw.description : "",
    author: typeof raw.author === "string" ? raw.author : undefined,
    group: ctx?.group ?? raw.group ?? "Development",
    category: ctx?.category ?? raw.category ?? "General",
    githubStars:
      typeof raw.githubStars === "number" ? raw.githubStars : undefined,
  };
}