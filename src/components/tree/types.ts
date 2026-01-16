import type { SkillCategoryGroup, SkillSubcategory } from "@/lib/categories";
import { SkillGroup } from "./skills";

export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "AI/ML"
  | "Crypto"
  | "Data"
  | "Debugging"
  | "Design";

  export type Skill = {
    id: string;
    title: string;
    description?: string;
  
    group: SkillGroup;           // REQUIRED
    category: SkillSubcategory;  // REQUIRED (subcategory)
  };


export type NodeKind = "user" | "hub" | "skill";

export type CanvasNode = {
  id: string;
  kind: "user" | "hub" | "skill";

  title: string;
  subtitle?: string | null;
  description?: string | null;

  skillId?: string | null;

  // semantics:
  group?: SkillGroup | null;           // hubs + skills
  category?: SkillSubcategory | null;  // ONLY skills

  x: number;
  y: number;
};
export type CanvasEdge = {
  id: string;
  from: string;
  to: string;
};