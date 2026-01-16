import type { SkillCategoryGroup, SkillSubcategory } from "@/lib/categories";

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
    // what you previously called category (Frontend, Backend...) is actually the subcategory:
    category: SkillSubcategory;
  
    // optional but useful:
    group?: SkillCategoryGroup;
  };
export type NodeKind = "user" | "hub" | "skill";

export type CanvasNode = {
  id: string;
  kind: NodeKind;
  title: string;
  subtitle?: string | null;
  description?: string | null;
  skillId?: string | null;
  category?: SkillCategory | null;

  x: number; // world
  y: number; // world
};

export type CanvasEdge = {
  id: string;
  from: string;
  to: string;
};