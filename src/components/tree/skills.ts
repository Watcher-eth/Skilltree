import type { Skill, SkillCategory } from "./types";

export const CATEGORIES: SkillCategory[] = [
  "Frontend",
  "Backend",
  "AI/ML",
  "Crypto",
  "Data",
  "Debugging",
  "Design",
];

export const SKILLS: Skill[] = [
  // Frontend
  { id: "react", title: "React", description: "Components, state, hooks, rendering, performance.", category: "Frontend", color: "blue" },
  { id: "next", title: "Next.js", description: "Routing, SSR/SSG, app router, data fetching, caching.", category: "Frontend", color: "blue" },
  { id: "tailwind", title: "Tailwind", description: "Utility-first styling, variants, design systems.", category: "Frontend", color: "slate" },

  // Backend
  { id: "api-design", title: "API Design", description: "REST patterns, pagination, caching, auth, errors.", category: "Backend", color: "green" },
  { id: "postgres", title: "Postgres", description: "Schemas, indexes, query planning, migrations.", category: "Backend", color: "green" },

  // AI/ML
  { id: "prompting", title: "Prompting", description: "Instruction design, tools, evals, guardrails.", category: "AI/ML", color: "purple" },
  { id: "rag", title: "RAG", description: "Chunking, embeddings, retrieval, reranking, evals.", category: "AI/ML", color: "purple" },

  // Crypto
  { id: "evm", title: "EVM Basics", description: "Accounts, txs, gas, events, ERC20/721.", category: "Crypto", color: "rose" },
  { id: "solidity", title: "Solidity", description: "Contracts, security, testing, deployment.", category: "Crypto", color: "rose" },

  // Data
  { id: "analytics", title: "Analytics", description: "Tracking plans, metrics, funnels, dashboards.", category: "Data", color: "amber" },
  { id: "etl", title: "ETL", description: "Pipelines, transforms, reliability, observability.", category: "Data", color: "amber" },

  // Debugging
  { id: "profiling", title: "Profiling", description: "CPU/memory profiling, flamegraphs, regressions.", category: "Debugging", color: "slate" },
  { id: "logging", title: "Logging", description: "Structured logs, tracing, error boundaries.", category: "Debugging", color: "slate" },

  // Design
  { id: "ui-systems", title: "UI Systems", description: "Spacing, typography, components, accessibility.", category: "Design", color: "purple" },
  { id: "motion", title: "Motion", description: "Micro-interactions, layout transitions, easing.", category: "Design", color: "purple" },
];