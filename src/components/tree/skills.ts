// src/components/tree/skills.ts
import type { Skill } from "./types";

export const CATEGORY_TREE = {
  Tools: [
    "Productivity & Integration",
    "Automation Tools",
    "Debugging",
    "System Administration",
    "IDE Plugins",
    "CLI Tools",
    "Domain & DNS Tools",
  ],
  Development: [
    "CMS & Platforms",
    "Architecture Patterns",
    "Full Stack",
    "Frontend",
    "Scripting",
    "Game Development",
    "Mobile",
    "Backend",
    "Package & Distribution",
    "E-commerce",
    "Framework Internals",
  ],
  "Data & AI": ["LLM & AI", "Data Analysis", "Data Engineering", "Machine Learning"],
  Business: [
    "Project Management",
    "Sales & Marketing",
    "Finance & Investment",
    "Health & Fitness",
    "Business Apps",
    "Real Estate & Legal",
    "Payment",
    "E-commerce",
  ],
  DevOps: ["CI/CD", "Git Workflows", "Cloud", "Containers", "Monitoring"],
  "Testing & Security": ["Testing", "Code Quality", "Security"],
  Documentation: ["Knowledge Base", "Technical Docs", "Education"],
  "Content & Media": ["Content Creation", "Documents", "Design", "Media"],
  Research: [
    "Academic",
    "Scientific Computing",
    "Computational Chemistry",
    "Bioinformatics",
    "Lab Tools",
    "Astronomy & Physics",
  ],
  Databases: ["SQL Databases", "Database Tools", "NoSQL Databases"],
  Lifestyle: [
    "Divination & Mysticism",
    "Literature & Writing",
    "Philosophy & Ethics",
    "Wellness & Health",
    "Arts & Crafts",
    "Culinary Arts",
  ],
  Blockchain: ["Web3 Tools", "Smart Contracts", "DeFi"],
} as const;

export type SkillGroup = keyof typeof CATEGORY_TREE;
export type SkillCategory = (typeof CATEGORY_TREE)[SkillGroup][number];

export const GROUPS = Object.keys(CATEGORY_TREE) as SkillGroup[];

export function allCategories(): SkillCategory[] {
  return GROUPS.flatMap((g) => CATEGORY_TREE[g]);
}

// ✅ Sample local skills (keep small; replace later when API works)
