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
    "E-commerce Development",
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
export const SKILLS: Skill[] = [
  // Development → Frontend
  { id: "react", title: "React", description: "Components, state, hooks, rendering, performance.", group: "Development", category: "Frontend" },
  { id: "next", title: "Next.js", description: "Routing, SSR/SSG, app router, caching.", group: "Development", category: "Frontend" },
  { id: "tailwind", title: "Tailwind", description: "Utility-first styling, variants, design systems.", group: "Development", category: "Frontend" },

  // Development → Backend
  { id: "api-design", title: "API Design", description: "REST patterns, pagination, caching, auth, errors.", group: "Development", category: "Backend" },
  { id: "postgres", title: "Postgres", description: "Schemas, indexes, query planning, migrations.", group: "Development", category: "Backend" },

  // Data & AI → LLM & AI
  { id: "prompting", title: "Prompting", description: "Instruction design, tools, evals, guardrails.", group: "Data & AI", category: "LLM & AI" },
  { id: "rag", title: "RAG", description: "Chunking, embeddings, retrieval, reranking, evals.", group: "Data & AI", category: "LLM & AI" },

  // Blockchain → Smart Contracts
  { id: "solidity", title: "Solidity", description: "Contracts, security, testing, deployment.", group: "Blockchain", category: "Smart Contracts" },
  { id: "evm", title: "EVM Basics", description: "Accounts, txs, gas, events, ERC20/721.", group: "Blockchain", category: "Smart Contracts" },

  // DevOps → CI/CD
  { id: "github-actions", title: "GitHub Actions", description: "Workflows, caching, secrets, deployments.", group: "DevOps", category: "CI/CD" },

  // Tools → Debugging
  { id: "logging", title: "Logging", description: "Structured logs, tracing, error boundaries.", group: "Tools", category: "Debugging" },
  { id: "profiling", title: "Profiling", description: "CPU/memory profiling, regressions.", group: "Tools", category: "Debugging" },
];