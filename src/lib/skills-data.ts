// // src/components/skillsData.ts

// import { SkillGroup } from "@/components/tree/skills";
// import { Skill, SkillCategory } from "@/components/tree/types";
// import { CATEGORY_TREE } from "./categories";

// export const GROUPS = Object.keys(CATEGORY_TREE) as SkillGroup[];

// export const SKILLS: Skill[] = [
//   // ---------------------------------------------
//   // Development → CMS & Platforms (HARDCODED)
//   // ---------------------------------------------
//   {
//     id: "command-name",
//     title: "command-name",
//     description:
//       'Use when the user asks to "create a plugin", "scaffold a plugin", "understand plugin structure", "organize plugin components", "set up plugin.json", "use ${CLAUDE_PLUGIN_ROOT}", "add commands/agents/skills/hooks", "configure auto-discovery", or needs guidance on plugin directory layout, manifest configuration, component organization, file naming conventions, or Claude Code plugin architecture best practices.',
//     group: "Development",
//     category: "CMS & Platforms",
//   },
//   {
//     id: "skill-development",
//     title: "skill-development",
//     description:
//       'Use when the user wants to "create a skill", "add a skill to plugin", "write a new skill", "improve skill description", "organize skill content", or needs guidance on skill structure, progressive disclosure, or skill development best practices for Claude Code plugins.',
//     group: "Development",
//     category: "CMS & Platforms",
//   },
//   {
//     id: "rule-identifier",
//     title: "rule-identifier",
//     description:
//       'Use when the user asks to "create a hookify rule", "write a hook rule", "configure hookify", "add a hookify rule", or needs guidance on hookify rule syntax and patterns.',
//     group: "Development",
//     category: "CMS & Platforms",
//   },
//   {
//     id: "command-development",
//     title: "command-development",
//     description:
//       'Use when the user asks to "create a slash command", "add a command", "write a custom command", "define command arguments", "use command frontmatter", "organize commands", "create command with file references", "interactive command", "use AskUserQuestion in command", or needs guidance on slash command structure, YAML frontmatter fields, dynamic arguments, bash execution in commands, user interaction patterns, or command development best practices for Claude Code.',
//     group: "Development",
//     category: "CMS & Platforms",
//   },
//   {
//     id: "frontend-design-claude-code",
//     title: "frontend-design",
//     description:
//       "Create distinctive, production-grade frontend interfaces with high design quality. Use when the user asks to build web components, pages, or applications. Generates creative, polished code that avoids generic AI aesthetics.",
//     group: "Development",
//     category: "CMS & Platforms",
//   },
//   {
//     id: "hook-development",
//     title: "hook-development",
//     description:
//       'Use when the user asks to "create a hook", "add a PreToolUse/PostToolUse/Stop hook", "validate tool use", "implement prompt-based hooks", "use ${CLAUDE_PLUGIN_ROOT}", "set up event-driven automation", "block dangerous commands", or mentions hook events (PreToolUse, PostToolUse, Stop, SubagentStop, SessionStart, SessionEnd, UserPromptSubmit, PreCompact, Notification). Focus on Claude Code plugin hooks with prompt-based hooks API.',
//     group: "Development",
//     category: "CMS & Platforms",
//   },
//   {
//     id: "configured-agent",
//     title: "configured-agent",
//     description:
//       'Use when the user asks about "plugin settings", "store plugin configuration", "user-configurable plugin", ".local.md files", "plugin state files", "read YAML frontmatter", "per-project plugin settings", or wants to make plugin behavior configurable. Documents the .claude/plugin-name.local.md pattern (YAML frontmatter + markdown).',
//     group: "Development",
//     category: "CMS & Platforms",
//   },
//   {
//     id: "docs-write",
//     title: "docs-write",
//     description:
//       "Write documentation following Metabase's conversational, clear, and user-focused style. Use when creating or editing documentation files (markdown, MDX, etc.).",
//     group: "Development",
//     category: "CMS & Platforms",
//   },
//   {
//     id: "documentation-lookup",
//     title: "documentation-lookup",
//     description:
//       "Use when the user asks about libraries/frameworks/API references or needs code examples (React, Vue, Next.js, Prisma, Supabase, etc.).",
//     group: "Development",
//     category: "CMS & Platforms",
//   },
//   {
//     id: "web-artifacts-builder",
//     title: "web-artifacts-builder",
//     description:
//       "Suite of tools for creating elaborate multi-component HTML artifacts using React, Tailwind CSS, shadcn/ui. Use for complex artifacts (state, routing, many components).",
//     group: "Development",
//     category: "CMS & Platforms",
//   },
//   {
//     id: "brand-guidelines",
//     title: "brand-guidelines",
//     description:
//       "Applies Anthropic brand colors/typography to artifacts. Use when brand colors or style guidelines matter.",
//     group: "Development",
//     category: "CMS & Platforms",
//   },
//   {
//     id: "frontend-design-anthropic-skills",
//     title: "frontend-design (anthropics/skills)",
//     description:
//       "Create distinctive, production-grade frontend UI. Use for websites, landing pages, dashboards, React components, HTML/CSS layouts, styling/beautifying web UI.",
//     group: "Development",
//     category: "CMS & Platforms",
//   },
//   {
//     id: "theme-factory",
//     title: "theme-factory",
//     description:
//       "Toolkit for styling artifacts with a theme (10 presets + custom). Use for slides/docs/HTML pages.",
//     group: "Development",
//     category: "CMS & Platforms",
//   },
//   {
//     id: "doc-coauthoring",
//     title: "doc-coauthoring",
//     description:
//       "Workflow for co-authoring documentation/specs/decision docs with progressive iteration and reader validation.",
//     group: "Development",
//     category: "CMS & Platforms",
//   },
//   {
//     id: "payload",
//     title: "payload",
//     description:
//       "Use when working with Payload CMS projects (payload.config.ts, collections, fields, hooks, access control, Payload API). Great for debugging validation/security/relationship queries/transactions/hook behavior.",
//     group: "Development",
//     category: "CMS & Platforms",
//   },
//   {
//     id: "wox-plugin-creator",
//     title: "wox-plugin-creator",
//     description:
//       "Create and scaffold Wox plugins (nodejs/python/script-nodejs/script-python). Use when cloning SDK templates or preparing plugins for publish.",
//     group: "Development",
//     category: "CMS & Platforms",
//   },
//   {
//     id: "design-principles",
//     title: "design-principles",
//     description:
//       "Swiss International Style design system. Use when building UI components, modifying styles, or creating new pages (strict ruleset).",
//     group: "Development",
//     category: "CMS & Platforms",
//   },
//   {
//     id: "nextjs-app-router-patterns",
//     title: "nextjs-app-router-patterns",
//     description:
//       "Master Next.js 14+ App Router with Server Components, streaming, parallel routes, and advanced data fetching.",
//     group: "Development",
//     category: "CMS & Platforms",
//   },
//   {
//     id: "github-actions-templates",
//     title: "github-actions-templates",
//     description:
//       "Create production-ready GitHub Actions workflows for automated testing, building, and deploying applications.",
//     group: "Development",
//     category: "CMS & Platforms",
//   },
//   {
//     id: "react-native-architecture",
//     title: "react-native-architecture",
//     description:
//       "Build production React Native apps with Expo, navigation, native modules, offline sync, and cross-platform patterns.",
//     group: "Development",
//     category: "CMS & Platforms",
//   },
//   {
//     id: "tailwind-design-system",
//     title: "tailwind-design-system",
//     description:
//       "Build scalable design systems with Tailwind CSS, tokens, component libraries, and responsive patterns.",
//     group: "Development",
//     category: "CMS & Platforms",
//   },
//   {
//     id: "dbt-transformation-patterns",
//     title: "dbt-transformation-patterns",
//     description:
//       "Master dbt for analytics engineering: model organization, testing, docs, incremental strategies.",
//     group: "Development",
//     category: "CMS & Platforms",
//   },
//   {
//     id: "godot-gdscript-patterns",
//     title: "godot-gdscript-patterns",
//     description:
//       "Master Godot 4 GDScript patterns (signals, scenes, state machines, optimization).",
//     group: "Development",
//     category: "CMS & Platforms",
//   },
//   {
//     id: "api-design-principles",
//     title: "api-design-principles",
//     description:
//       "REST + GraphQL API design principles for intuitive, scalable APIs.",
//     group: "Development",
//     category: "CMS & Platforms",
//   },
//   {
//     id: "fastapi-templates",
//     title: "fastapi-templates",
//     description:
//       "Production-ready FastAPI templates: async patterns, DI, error handling.",
//     group: "Development",
//     category: "CMS & Platforms",
//   },
//   {
//     id: "website-maintainer",
//     title: "website-maintainer",
//     description:
//       "Use for Repomix documentation website work (VitePress config, multi-language content, translation workflows).",
//     group: "Development",
//     category: "CMS & Platforms",
//   },
//   {
//     id: "skill-developer",
//     title: "skill-developer",
//     description:
//       "Create/manage Claude Code skills (trigger patterns, hooks, skill-rules.json, progressive disclosure, 500-line rule).",
//     group: "Development",
//     category: "CMS & Platforms",
//   },
//   {
//     id: "developer-growth-analysis",
//     title: "developer-growth-analysis",
//     description:
//       "Analyzes recent chat history to identify coding patterns/gaps, curates learning resources, and produces a growth report.",
//     group: "Development",
//     category: "CMS & Platforms",
//   },
//   {
//     id: "artifacts-builder",
//     title: "artifacts-builder",
//     description:
//       "Suite of tools for complex multi-component HTML artifacts using React/Tailwind/shadcn.",
//     group: "Development",
//     category: "CMS & Platforms",
//   },
//   {
//     id: "web-design-reviewer",
//     title: "web-design-reviewer",
//     description:
//       "Visually inspect websites to find/fix design issues (responsive, a11y, consistency, layout breakage).",
//     group: "Development",
//     category: "CMS & Platforms",
//   },
//   {
//     id: "ui-design-system",
//     title: "ui-design-system",
//     description:
//       "UI design system toolkit: design tokens, component docs, responsive calculations, dev handoff.",
//     group: "Development",
//     category: "CMS & Platforms",
//   },
//   {
//     id: "obsidian-markdown",
//     title: "obsidian-markdown",
//     description:
//       "Create/edit Obsidian flavored Markdown (wikilinks, embeds, callouts, frontmatter, tags).",
//     group: "Development",
//     category: "CMS & Platforms",
//   },
//   {
//     id: "senior-frontend",
//     title: "senior-frontend",
//     description:
//       "Frontend skill for React/Next/TS/Tailwind: scaffolding, performance, bundle analysis, UI best practices.",
//     group: "Development",
//     category: "CMS & Platforms",
//   },
//   {
//     id: "notion-spec-to-implementation",
//     title: "notion-spec-to-implementation",
//     description:
//       "Turn Notion specs into implementation plans, tasks, and progress tracking.",
//     group: "Development",
//     category: "CMS & Platforms",
//   },
//   {
//     id: "senior-backend",
//     title: "senior-backend",
//     description:
//       "Backend skill for Node/Express/Go/Python/Postgres/GraphQL/REST: DB optimization, security, perf tuning.",
//     group: "Development",
//     category: "CMS & Platforms",
//   },
//   {
//     id: "ux-researcher-designer",
//     title: "ux-researcher-designer",
//     description:
//       "UX research toolkit: personas, journey maps, usability testing frameworks, synthesis.",
//     group: "Development",
//     category: "CMS & Platforms",
//   },
//   {
//     id: "planning-with-files",
//     title: "planning-with-files",
//     description:
//       "Persistent markdown workflow for planning/progress tracking/knowledge storage.",
//     group: "Development",
//     category: "CMS & Platforms",
//   },
//   {
//     id: "railway-templates",
//     title: "railway-templates",
//     description:
//       "Search/deploy services from Railway templates (Ghost, Strapi, n8n, Minio, etc.).",
//     group: "Development",
//     category: "CMS & Platforms",
//   },
//   {
//     id: "n8n-code-javascript",
//     title: "n8n-code-javascript",
//     description:
//       "Write JavaScript in n8n Code nodes ($input/$json/$node, HTTP requests, DateTime).",
//     group: "Development",
//     category: "CMS & Platforms",
//   },
//   {
//     id: "senior-fullstack",
//     title: "senior-fullstack",
//     description:
//       "Fullstack skill: React/Next/Node/GraphQL/Postgres, code quality, patterns, stack guidance.",
//     group: "Development",
//     category: "CMS & Platforms",
//   },
//   {
//     id: "n8n-expression-syntax",
//     title: "n8n-expression-syntax",
//     description:
//       "Validate n8n expression syntax ({{}}), troubleshoot expression errors, access $json/$node.",
//     group: "Development",
//     category: "CMS & Platforms",
//   },
//   {
//     id: "n8n-workflow-patterns",
//     title: "n8n-workflow-patterns",
//     description:
//       "Workflow architectural patterns for n8n (webhooks, HTTP integrations, DB ops, AI agent flows, schedules).",
//     group: "Development",
//     category: "CMS & Platforms",
//   },
//   {
//     id: "railway-database",
//     title: "railway-database",
//     description:
//       "Add Railway database services (Postgres, Redis, MySQL, MongoDB) and wire connections.",
//     group: "Development",
//     category: "CMS & Platforms",
//   },
//   {
//     id: "json-canvas",
//     title: "json-canvas",
//     description:
//       "Create/edit JSON Canvas (.canvas) with nodes/edges/groups (Obsidian canvas).",
//     group: "Development",
//     category: "CMS & Platforms",
//   },
//   {
//     id: "obsidian-bases",
//     title: "obsidian-bases",
//     description:
//       "Create/edit Obsidian Bases (.base) with views, filters, formulas, and summaries.",
//     group: "Development",
//     category: "CMS & Platforms",
//   },
//   {
//     id: "railway-new",
//     title: "railway-new",
//     description:
//       "Create Railway projects/services with proper config, deploy from GitHub, add services to existing projects.",
//     group: "Development",
//     category: "CMS & Platforms",
//   },
//   {
//     id: "feature-design-assistant",
//     title: "feature-design-assistant",
//     description:
//       "Turn ideas into designs/specs through collaborative dialogue (planning architecture, major changes).",
//     group: "Development",
//     category: "CMS & Platforms",
//   },
//   {
//     id: "n8n-mcp-tools-expert",
//     title: "n8n-mcp-tools-expert",
//     description:
//       "Expert guide for using n8n-mcp MCP tools effectively (node search, configs, templates, common patterns).",
//     group: "Development",
//     category: "CMS & Platforms",
//   },

//   // ---------------------------------------------
//   // (keep your existing other skills below)
//   // ---------------------------------------------
//   { id: "react", title: "React", description: "Components, state, hooks, performance.", group: "Development", category: "Frontend" },
//   { id: "next", title: "Next.js", description: "Routing, SSR/SSG, app router, caching.", group: "Development", category: "Frontend" },
//   { id: "tailwind", title: "Tailwind", description: "Utility-first styling, variants.", group: "Development", category: "Frontend" },

//   { id: "api-design", title: "API Design", description: "REST patterns, pagination, auth, errors.", group: "Development", category: "Backend" },
//   { id: "postgres", title: "Postgres", description: "Schemas, indexes, migrations, query planning.", group: "Development", category: "Backend" },

//   { id: "prompting", title: "Prompting", description: "Instruction design, evals, guardrails.", group: "Data & AI", category: "LLM & AI" },
//   { id: "rag", title: "RAG", description: "Chunking, embeddings, retrieval, reranking.", group: "Data & AI", category: "LLM & AI" },

//   { id: "logging", title: "Logging", description: "Structured logs, tracing, error boundaries.", group: "Tools", category: "Debugging" },
//   { id: "profiling", title: "Profiling", description: "CPU/memory profiling, flamegraphs.", group: "Tools", category: "Debugging" },

//   { id: "gh-actions", title: "GitHub Actions", description: "Workflows, caching, secrets, deploys.", group: "DevOps", category: "CI/CD" },

//   { id: "evm", title: "EVM Basics", description: "Accounts, txs, gas, events, ERC20/721.", group: "Blockchain", category: "Smart Contracts" },
//   { id: "solidity", title: "Solidity", description: "Contracts, security, testing, deployment.", group: "Blockchain", category: "Smart Contracts" },
//   {
//     id: "pr-creator",
//     title: "pr-creator",
//     description:
//       "Use this skill when asked to create a pull request (PR). It ensures all PRs follow the repository's established templates and standards.",
//     group: "Tools",
//     category: "Automation Tools",
//   },
//   {
//     id: "create-pull-request",
//     title: "create-pull-request",
//     description:
//       "Create a GitHub pull request following project conventions. Use when the user asks to create a PR, submit changes for review, or open a pull request. Handles commit analysis, branch management, and PR creation using the gh CLI tool.",
//     group: "Tools",
//     category: "Automation Tools",
//   },
//   {
//     id: "command-name-automation",
//     title: "command-name",
//     description:
//       'Use when the user asks to "create a plugin", "scaffold a plugin", "understand plugin structure", "organize plugin components", "set up plugin.json", "use ${CLAUDE_PLUGIN_ROOT}", "add commands/agents/skills/hooks", "configure auto-discovery", or needs guidance on plugin directory layout, manifest configuration, component organization, file naming conventions, or Claude Code plugin architecture best practices.',
//     group: "Tools",
//     category: "Automation Tools",
//   },
//   {
//     id: "frontend-design-automation",
//     title: "frontend-design",
//     description:
//       "Create distinctive, production-grade frontend interfaces with high design quality. Use this skill when the user asks to build web components, pages, or applications. Generates creative, polished code that avoids generic AI aesthetics.",
//     group: "Tools",
//     category: "Automation Tools",
//   },
//   {
//     id: "typescript-write",
//     title: "typescript-write",
//     description:
//       "Write TypeScript and JavaScript code following Metabase coding standards and best practices. Use when developing or refactoring TypeScript/JavaScript code.",
//     group: "Tools",
//     category: "Automation Tools",
//   },
//   {
//     id: "docs-review",
//     title: "docs-review",
//     description:
//       "Review documentation changes for compliance with the Metabase writing style guide. Use when reviewing pull requests, files, or diffs containing documentation markdown files.",
//     group: "Tools",
//     category: "Automation Tools",
//   },
//   {
//     id: "clojure-review",
//     title: "clojure-review",
//     description:
//       "Review Clojure and ClojureScript code changes for compliance with Metabase coding standards, style violations, and code quality issues. Use when reviewing pull requests or diffs containing Clojure/ClojureScript code.",
//     group: "Tools",
//     category: "Automation Tools",
//   },
//   {
//     id: "typescript-review",
//     title: "typescript-review",
//     description:
//       "Review TypeScript and JavaScript code changes for compliance with Metabase coding standards, style violations, and code quality issues. Use when reviewing pull requests or diffs containing TypeScript/JavaScript code.",
//     group: "Tools",
//     category: "Automation Tools",
//   },
//   {
//     id: "frontend-design-anthropics-skills-automation",
//     title: "frontend-design (anthropics/skills)",
//     description:
//       "Create distinctive, production-grade frontend interfaces with high design quality. Use for websites, landing pages, dashboards, React components, HTML/CSS layouts, or styling/beautifying web UI. Avoid generic AI aesthetics.",
//     group: "Tools",
//     category: "Automation Tools",
//   },
//   {
//     id: "code-review-agno",
//     title: "code-review",
//     description: "Code review assistance with linting, style checking, and best practices.",
//     group: "Tools",
//     category: "Automation Tools",
//   },
//   {
//     id: "commit-helper",
//     title: "commit-helper",
//     description:
//       "Help create git commits and PRs with properly formatted messages and release notes following CockroachDB conventions. Use when committing changes or creating pull requests.",
//     group: "Tools",
//     category: "Automation Tools",
//   },
//   {
//     id: "run-nx-generator",
//     title: "run-nx-generator",
//     description:
//       "Run Nx generators with prioritization for workspace-plugin generators. Use when generating code, scaffolding new features, or automating repetitive tasks in the monorepo.",
//     group: "Tools",
//     category: "Automation Tools",
//   },
//   {
//     id: "wox-plugin-creator-automation",
//     title: "wox-plugin-creator",
//     description:
//       "Create and scaffold Wox plugins (nodejs, python, script-nodejs, script-python). Use when cloning official SDK templates, generating script plugin templates, or preparing plugins for publish.",
//     group: "Tools",
//     category: "Automation Tools",
//   },
//   {
//     id: "shellcheck-configuration",
//     title: "shellcheck-configuration",
//     description:
//       "Master ShellCheck static analysis configuration and usage for shell script quality. Use when setting up linting infrastructure, fixing code issues, or ensuring script portability.",
//     group: "Tools",
//     category: "Automation Tools",
//   },
//   {
//     id: "gitlab-ci-patterns",
//     title: "gitlab-ci-patterns",
//     description:
//       "Build GitLab CI/CD pipelines with multi-stage workflows, caching, and distributed runners for scalable automation.",
//     group: "Tools",
//     category: "Automation Tools",
//   },
//   {
//     id: "github-actions-templates-automation",
//     title: "github-actions-templates",
//     description:
//       "Create production-ready GitHub Actions workflows for automated testing, building, and deploying applications.",
//     group: "Tools",
//     category: "Automation Tools",
//   },
//   {
//     id: "monorepo-management",
//     title: "monorepo-management",
//     description:
//       "Master monorepo management with Turborepo, Nx, and pnpm workspaces for scalable multi-package repos with optimized builds and dependency management.",
//     group: "Tools",
//     category: "Automation Tools",
//   },
//   {
//     id: "turborepo-caching",
//     title: "turborepo-caching",
//     description:
//       "Configure Turborepo for efficient monorepo builds with local/remote caching. Use for setup and pipeline optimization.",
//     group: "Tools",
//     category: "Automation Tools",
//   },
//   {
//     id: "nx-workspace-patterns",
//     title: "nx-workspace-patterns",
//     description:
//       "Configure and optimize Nx monorepo workspaces. Use when setting up Nx, boundaries, caching, and affected commands.",
//     group: "Tools",
//     category: "Automation Tools",
//   },
//   {
//     id: "code-review-excellence",
//     title: "code-review-excellence",
//     description:
//       "Master effective code review practices to provide constructive feedback, catch bugs early, and foster knowledge sharing while maintaining team morale.",
//     group: "Tools",
//     category: "Automation Tools",
//   },
//   {
//     id: "bats-testing-patterns",
//     title: "bats-testing-patterns",
//     description:
//       "Master Bats (Bash Automated Testing System) for shell script testing. Use when writing tests for shell scripts or CI pipelines.",
//     group: "Tools",
//     category: "Automation Tools",
//   },
//   {
//     id: "react-modernization",
//     title: "react-modernization",
//     description:
//       "Upgrade React apps to latest versions, migrate class components to hooks, and adopt concurrent features.",
//     group: "Tools",
//     category: "Automation Tools",
//   },
//   {
//     id: "changelog-automation",
//     title: "changelog-automation",
//     description:
//       "Automate changelog generation from commits, PRs, and releases following Keep a Changelog format.",
//     group: "Tools",
//     category: "Automation Tools",
//   },
//   {
//     id: "copilot",
//     title: "copilot",
//     description: "Hand off a task to GitHub Copilot.",
//     group: "Tools",
//     category: "Automation Tools",
//   },
//   {
//     id: "fetch-diff",
//     title: "fetch-diff",
//     description: "Fetch PR diff with filtering and line numbers for code review.",
//     group: "Tools",
//     category: "Automation Tools",
//   },
//   {
//     id: "test-driven-development",
//     title: "test-driven-development",
//     description:
//       "Use when implementing any feature or bugfix, before writing implementation code.",
//     group: "Tools",
//     category: "Automation Tools",
//   },
//   {
//     id: "lint-fixer",
//     title: "lint-fixer",
//     description:
//       "Run npm run lint and fix linting issues. Use when fixing lint errors after code changes or validating style guidelines.",
//     group: "Tools",
//     category: "Automation Tools",
//   },
//   {
//     id: "website-maintainer-automation",
//     title: "website-maintainer",
//     description:
//       "Use when working on Repomix documentation website in website/ (VitePress config, multi-language content, translation workflows).",
//     group: "Tools",
//     category: "Automation Tools",
//   },
//   {
//     id: "developer-growth-analysis-automation",
//     title: "developer-growth-analysis",
//     description:
//       "Analyzes recent chat history to identify coding patterns/gaps, curates resources, and produces a growth report.",
//     group: "Tools",
//     category: "Automation Tools",
//   },
//   {
//     id: "changelog-generator",
//     title: "changelog-generator",
//     description:
//       "Automatically creates user-facing changelogs from git commits by analyzing history, categorizing changes, and transforming technical commits into clear release notes.",
//     group: "Tools",
//     category: "Automation Tools",
//   },
//   {
//     id: "docs-sync",
//     title: "docs-sync",
//     description:
//       "Analyze main branch implementation/config to find missing/incorrect/outdated docs in docs/. Only update English docs under docs/** and never touch translated docs under docs/ja, docs/ko, docs/zh. Provide a report and ask approval before editing.",
//     group: "Tools",
//     category: "Automation Tools",
//   },
//   {
//     id: "generate-release-notes",
//     title: "generate-release-notes",
//     description:
//       "Generate comprehensive release notes from git commits and pull requests. Use for changelogs and version release docs.",
//     group: "Tools",
//     category: "Automation Tools",
//   },
//   {
//     id: "nuget-manager",
//     title: "nuget-manager",
//     description:
//       "Manage NuGet packages in .NET projects/solutions. Uses dotnet CLI; strict procedures for direct file edits only when updating versions.",
//     group: "Tools",
//     category: "Automation Tools",
//   },
//   {
//     id: "find-bugs",
//     title: "find-bugs",
//     description:
//       "Find bugs, security vulnerabilities, and code quality issues in local branch changes. Use for audits or security reviews.",
//     group: "Tools",
//     category: "Automation Tools",
//   },
//   {
//     id: "code-reviewer",
//     title: "code-reviewer",
//     description:
//       "Comprehensive code review for TS/JS/Python/Swift/Kotlin/Go. Includes analysis, security scanning, and review checklist generation.",
//     group: "Tools",
//     category: "Automation Tools",
//   },
//   {
//     id: "deslop",
//     title: "deslop",
//     description:
//       "Remove AI-generated code slop: unnecessary comments, defensive checks, type casts; fix style inconsistencies vs main.",
//     group: "Tools",
//     category: "Automation Tools",
//   },
//   {
//     id: "move-code-quality",
//     title: "move-code-quality",
//     description:
//       "Analyze Move language packages against Move Book code quality checklist; checks Move 2024 Edition compliance and best practices.",
//     group: "Tools",
//     category: "Automation Tools",
//   },
//   {
//     id: "n8n-code-javascript-automation",
//     title: "n8n-code-javascript",
//     description:
//       "Write JavaScript in n8n Code nodes ($input/$json/$node, HTTP requests, DateTime, troubleshooting).",
//     group: "Tools",
//     category: "Automation Tools",
//   },
//   {
//     id: "senior-fullstack-automation",
//     title: "senior-fullstack",
//     description:
//       "Fullstack skill: React/Next/Node/GraphQL/Postgres, scaffolding, code quality analysis, patterns, workflow setup.",
//     group: "Tools",
//     category: "Automation Tools",
//   },
//   {
//     id: "guidance",
//     title: "guidance",
//     description:
//       "Constrained generation with regex/grammars for valid JSON/XML/code; enforce structured formats; build multi-step workflows.",
//     group: "Tools",
//     category: "Automation Tools",
//   },
//   {
//     id: "git-commit-helper",
//     title: "git-commit-helper",
//     description:
//       "Generate descriptive commit messages by analyzing git diffs. Use when writing commit messages or reviewing staged changes.",
//     group: "Tools",
//     category: "Automation Tools",
//   },
//   {
//     id: "senior-qa",
//     title: "senior-qa",
//     description:
//       "QA/testing skill for React/Next/Node apps: test suite generation, coverage analysis, E2E setup, quality metrics.",
//     group: "Tools",
//     category: "Automation Tools",
//   },
//   {
//     id: "feature-design-assistant-automation",
//     title: "feature-design-assistant",
//     description:
//       "Turn ideas into designs/specs through collaborative dialogue. Use when planning new features or major architecture changes.",
//     group: "Tools",
//     category: "Automation Tools",
//   },
//   {
//     id: "gh-fix-ci",
//     title: "gh-fix-ci",
//     description:
//       "Inspect GitHub PR checks with gh, pull failing GitHub Actions logs, summarize failure context, create fix plan, then implement after approval.",
//     group: "Tools",
//     category: "Automation Tools",
//   },
//   {
//     id: "code-review-sentry",
//     title: "code-review (sentry)",
//     description:
//       "Perform code reviews following Sentry engineering practices (security, performance, testing, design review).",
//     group: "Tools",
//     category: "Automation Tools",
//   },
//   {
//     id: "code-review-shareai",
//     title: "code-review (shareAI-lab)",
//     description:
//       "Perform thorough code reviews with security, performance, and maintainability analysis.",
//     group: "Tools",
//     category: "Automation Tools",
//   },
//   {
//     id: "prowler-pr",
//     title: "prowler-pr",
//     description:
//       "Creates Pull Requests for Prowler following the project template and conventions (PR title, changelog gate, labeler, CODEOWNERS, etc.).",
//     group: "Tools",
//     category: "Automation Tools",
//   },
//   {
//     id: "prowler",
//     title: "prowler",
//     description:
//       "Main entry point for Prowler development — quick reference for all components (not PR CI gates).",
//     group: "Tools",
//     category: "Automation Tools",
//   },
//     {
//     id: "debugging:clojure-review:metabase",
//     title: "clojure-review",
//     description:
//       "Review Clojure and ClojureScript code changes for compliance with Metabase coding standards, style violations, and code quality issues. Use when reviewing pull requests or diffs containing Clojure/ClojureScript code.",
//     group: "Tools",
//     category: "Debugging",
//   },
//   {
//     id: "debugging:typescript-review:metabase",
//     title: "typescript-review",
//     description:
//       "Review TypeScript and JavaScript code changes for compliance with Metabase coding standards, style violations, and code quality issues. Use when reviewing pull requests or diffs containing TypeScript/JavaScript code.",
//     group: "Tools",
//     category: "Debugging",
//   },
//   {
//     id: "debugging:webapp-testing:anthropics-skills",
//     title: "webapp-testing",
//     description:
//       "Toolkit for interacting with and testing local web applications using Playwright. Supports verifying frontend functionality, debugging UI behavior, capturing browser screenshots, and viewing browser logs.",
//     group: "Tools",
//     category: "Debugging",
//   },
//   {
//     id: "debugging:shellcheck-configuration:wshobson",
//     title: "shellcheck-configuration",
//     description:
//       "Master ShellCheck static analysis configuration and usage for shell script quality. Use when setting up linting infrastructure, fixing code issues, or ensuring script portability.",
//     group: "Tools",
//     category: "Debugging",
//   },
//   {
//     id: "debugging:debugging-strategies:wshobson",
//     title: "debugging-strategies",
//     description:
//       "Master systematic debugging techniques, profiling tools, and root cause analysis to efficiently track down bugs across any codebase or technology stack. Use when investigating bugs, performance issues, or unexpected behavior.",
//     group: "Tools",
//     category: "Debugging",
//   },
//   {
//     id: "debugging:sql-optimization-patterns:wshobson",
//     title: "sql-optimization-patterns",
//     description:
//       "Master SQL query optimization, indexing strategies, and EXPLAIN analysis to dramatically improve database performance and eliminate slow queries. Use when debugging slow queries, designing database schemas, or optimizing application performance.",
//     group: "Tools",
//     category: "Debugging",
//   },
//   {
//     id: "debugging:memory-forensics:wshobson",
//     title: "memory-forensics",
//     description:
//       "Master memory forensics techniques including memory acquisition, process analysis, and artifact extraction using Volatility and related tools. Use when analyzing memory dumps, investigating incidents, or performing malware analysis from RAM captures.",
//     group: "Tools",
//     category: "Debugging",
//   },
//   {
//     id: "debugging:python-performance-optimization:wshobson",
//     title: "python-performance-optimization",
//     description:
//       "Profile and optimize Python code using cProfile, memory profilers, and performance best practices. Use when debugging slow Python code, optimizing bottlenecks, or improving application performance.",
//     group: "Tools",
//     category: "Debugging",
//   },
//   {
//     id: "debugging:startup-metrics-framework:wshobson",
//     title: "startup-metrics-framework",
//     description:
//       'Use when the user asks about "key startup metrics", "SaaS metrics", "CAC and LTV", "unit economics", "burn multiple", "rule of 40", "marketplace metrics", or requests guidance on tracking and optimizing business performance metrics.',
//     group: "Tools",
//     category: "Debugging",
//   },
//   {
//     id: "debugging:distributed-tracing:wshobson",
//     title: "distributed-tracing",
//     description:
//       "Implement distributed tracing with Jaeger and Tempo to track requests across microservices and identify performance bottlenecks. Use when debugging microservices, analyzing request flows, or implementing observability for distributed systems.",
//     group: "Tools",
//     category: "Debugging",
//   },
//   {
//     id: "debugging:anti-reversing-techniques:wshobson",
//     title: "anti-reversing-techniques",
//     description:
//       "Understand anti-reversing, obfuscation, and protection techniques encountered during software analysis. Use when analyzing protected binaries, bypassing anti-debugging for authorized analysis, or understanding software protection mechanisms.",
//     group: "Tools",
//     category: "Debugging",
//   },
//   {
//     id: "debugging:protocol-reverse-engineering:wshobson",
//     title: "protocol-reverse-engineering",
//     description:
//       "Master network protocol reverse engineering including packet analysis, protocol dissection, and custom protocol documentation. Use when analyzing network traffic, understanding proprietary protocols, or debugging network communication.",
//     group: "Tools",
//     category: "Debugging",
//   },
//   {
//     id: "debugging:binary-analysis-patterns:wshobson",
//     title: "binary-analysis-patterns",
//     description:
//       "Master binary analysis patterns including disassembly, decompilation, control flow analysis, and code pattern recognition. Use when analyzing executables, understanding compiled code, or performing static analysis on binaries.",
//     group: "Tools",
//     category: "Debugging",
//   },
//   {
//     id: "debugging:e2e-testing-patterns:wshobson",
//     title: "e2e-testing-patterns",
//     description:
//       "Master end-to-end testing with Playwright and Cypress to build reliable test suites that catch bugs, improve confidence, and enable fast deployment. Use when implementing E2E tests, debugging flaky tests, or establishing testing standards.",
//     group: "Tools",
//     category: "Debugging",
//   },
//   {
//     id: "debugging:screen-reader-testing:wshobson",
//     title: "screen-reader-testing",
//     description:
//       "Test web applications with screen readers including VoiceOver, NVDA, and JAWS. Use when validating screen reader compatibility, debugging accessibility issues, or ensuring assistive technology support.",
//     group: "Tools",
//     category: "Debugging",
//   },
//   {
//     id: "debugging:code-review-excellence:wshobson",
//     title: "code-review-excellence",
//     description:
//       "Master effective code review practices to provide constructive feedback, catch bugs early, and foster knowledge sharing while maintaining team morale. Use when reviewing pull requests, establishing review standards, or mentoring developers.",
//     group: "Tools",
//     category: "Debugging",
//   },
//   {
//     id: "debugging:go-concurrency-patterns:wshobson",
//     title: "go-concurrency-patterns",
//     description:
//       "Master Go concurrency with goroutines, channels, sync primitives, and context. Use when building concurrent Go applications, implementing worker pools, or debugging race conditions.",
//     group: "Tools",
//     category: "Debugging",
//   },
//   {
//     id: "debugging:evals-context:roocodeinc",
//     title: "evals-context",
//     description:
//       'Context for Roo Code evals system structure (packages/evals, apps/web-evals) vs public evals page (apps/web-roo-code/src/app/evals). Use when tasks mention "evals", "evaluation", "eval runs", or evals infrastructure.',
//     group: "Tools",
//     category: "Debugging",
//   },
//   {
//     id: "debugging:developer-growth-analysis:composiohq",
//     title: "developer-growth-analysis",
//     description:
//       "Analyzes recent chat history to identify coding patterns, development gaps, and areas for improvement; curates learning resources and produces a growth report.",
//     group: "Tools",
//     category: "Debugging",
//   },
//   {
//     id: "debugging:web-design-reviewer:github",
//     title: "web-design-reviewer",
//     description:
//       'Visual inspection of websites (local/remote) to identify and fix design issues. Triggers on "review website design", "check the UI", "fix the layout", etc. Detects responsive/accessibility/consistency/layout breakage and fixes at source.',
//     group: "Tools",
//     category: "Debugging",
//   },
//   {
//     id: "debugging:webapp-testing:github",
//     title: "webapp-testing (github)",
//     description:
//       "Toolkit for interacting with and testing local web applications using Playwright. Supports verifying frontend functionality, debugging UI behavior, capturing screenshots, and viewing browser logs.",
//     group: "Tools",
//     category: "Debugging",
//   },
//   {
//     id: "debugging:phoenix-observability:davila7",
//     title: "phoenix-observability",
//     description:
//       "Open-source AI observability platform for LLM tracing, evaluation, and monitoring. Use when debugging LLM apps with traces, running evaluations, or monitoring production AI systems.",
//     group: "Tools",
//     category: "Debugging",
//   },
//   {
//     id: "debugging:langsmith-observability:davila7",
//     title: "langsmith-observability",
//     description:
//       "LLM observability platform for tracing, evaluation, and monitoring. Use when debugging LLM apps, evaluating outputs, monitoring production, or building systematic testing pipelines.",
//     group: "Tools",
//     category: "Debugging",
//   },
//   {
//     id: "debugging:tensorboard:davila7",
//     title: "tensorboard",
//     description:
//       "Visualize training metrics, debug models with histograms, compare experiments, visualize model graphs, and profile performance with TensorBoard.",
//     group: "Tools",
//     category: "Debugging",
//   },
//   {
//     id: "debugging:code-reviewer:davila7",
//     title: "code-reviewer",
//     description:
//       "Comprehensive code review for TypeScript/JavaScript/Python/Swift/Kotlin/Go. Includes automated analysis, best practices, security scanning, and review checklist generation.",
//     group: "Tools",
//     category: "Debugging",
//   },
//   {
//     id: "debugging:senior-fullstack:davila7",
//     title: "senior-fullstack",
//     description:
//       "Fullstack guidance for React/Next/Node/GraphQL/Postgres: scaffolding, code quality, patterns, and workflow setup.",
//     group: "Tools",
//     category: "Debugging",
//   },
//   {
//     id: "debugging:error-resolver:davila7",
//     title: "error-resolver",
//     description:
//       "Systematic error diagnosis and resolution using first-principle analysis. Use when encountering any error message, stack trace, or unexpected behavior. Supports replay functionality.",
//     group: "Tools",
//     category: "Debugging",
//   },
//   {
//     id: "debugging:react-best-practices:davila7",
//     title: "react-best-practices",
//     description:
//       "React/Next performance optimization guide with 40+ rules for eliminating waterfalls, optimizing bundles, and improving rendering. Use when optimizing or refactoring React apps.",
//     group: "Tools",
//     category: "Debugging",
//   },
//   {
//     id: "debugging:senior-qa:davila7",
//     title: "senior-qa",
//     description:
//       "QA/testing strategies for React/Next/Node apps: test suite generation, coverage analysis, E2E setup, and quality metrics.",
//     group: "Tools",
//     category: "Debugging",
//   },
//   {
//     id: "debugging:railway-metrics:davila7",
//     title: "railway-metrics",
//     description:
//       'Query resource usage metrics for Railway services (CPU/memory/network/disk). Use when user asks "is my service slow" or wants resource usage data.',
//     group: "Tools",
//     category: "Debugging",
//   },
//   {
//     id: "debugging:code-review:shareai-lab",
//     title: "code-review (shareAI-lab)",
//     description:
//       "Perform thorough code reviews with security, performance, and maintainability analysis.",
//     group: "Tools",
//     category: "Debugging",
//   },
//   {
//     id: "debugging:prowler:prowler-cloud",
//     title: "prowler",
//     description:
//       "Main entry point for Prowler development — component overview and navigation (not PR CI gates/workflows).",
//     group: "Tools",
//     category: "Debugging",
//   },
//   {
//     id: "debugging:pair-programming:ruvnet",
//     title: "pair-programming",
//     description:
//       "AI-assisted pair programming with driver/navigator modes, verification, quality monitoring, and testing. Supports TDD, debugging, refactoring, and learning sessions.",
//     group: "Tools",
//     category: "Debugging",
//   },
//   {
//     id: "debugging:debug:elie222",
//     title: "debug",
//     description:
//       "Runtime debugging workflow with automated log collection. Use when fixing bugs that require runtime evidence, or when you’d otherwise ask the user to reproduce and report logs.",
//     group: "Tools",
//     category: "Debugging",
//   },
//   {
//     id: "debugging:error-tracking:diet103",
//     title: "error-tracking",
//     description:
//       "Add Sentry v8 error tracking and performance monitoring. Use when adding error handling, creating controllers, instrumenting cron jobs, or tracking DB performance.",
//     group: "Tools",
//     category: "Debugging",
//   },
//   {
//     id: "debugging:clickhouse-query:civitai",
//     title: "clickhouse-query",
//     description:
//       "Run ClickHouse queries for analytics and metrics exploration. Read-only by default.",
//     group: "Tools",
//     category: "Debugging",
//   },
//   {
//     id: "debugging:code-review:cockroachdb-pebble",
//     title: "code-review (pebble)",
//     description:
//       "Review Pebble code/PRs/diffs for correctness issues (resource leaks, concurrency bugs, iterator misuse, lint violations).",
//     group: "Tools",
//     category: "Debugging",
//   },
//   {
//     id: "debugging:code-review:thinkinaixyz",
//     title: "code-review (ThinkInAIXYZ)",
//     description:
//       "Comprehensive code review assistant analyzing code quality, security, and best practices.",
//     group: "Tools",
//     category: "Debugging",
//   },
//   {
//     id: "debugging:v3-performance-optimization:ruvnet",
//     title: "v3-performance-optimization",
//     description:
//       "Benchmarking and optimization suite for aggressive v3 performance targets (speedups, memory reduction, search improvements).",
//     group: "Tools",
//     category: "Debugging",
//   },
//   {
//     id: "debugging:idapython:mrexodia",
//     title: "idapython",
//     description:
//       "IDA Pro Python scripting for reverse engineering (IDA API usage, disassembly/decompilation workflows, database manipulation).",
//     group: "Tools",
//     category: "Debugging",
//   },
//   {
//     id: "debugging:systematic-debugging:chriswiles",
//     title: "systematic-debugging",
//     description:
//       "Four-phase debugging methodology emphasizing root cause analysis: NO FIXES WITHOUT ROOT CAUSE FIRST.",
//     group: "Tools",
//     category: "Debugging",
//   },
//   {
//     id: "debugging:hunt-data-source-identification:otrf",
//     title: "hunt-data-source-identification",
//     description:
//       "Identify relevant security data sources that could capture behavior defined in a structured hunt hypothesis; translate investigative intent into candidate telemetry sources.",
//     group: "Tools",
//     category: "Debugging",
//   },
//   {
//     id: "debugging:hunt-research-system-and-tradecraft:otrf",
//     title: "hunt-research-system-and-tradecraft",
//     description:
//       "Research system internals and adversary tradecraft to ground a threat hunt in real behavior. Use before defining a concrete hunt hypothesis or selecting data sources.",
//     group: "Tools",
//     category: "Debugging",
//   },
//   {
//     id: "debugging:hunt-analytics-generation:otrf",
//     title: "hunt-analytics-generation",
//     description:
//       "Generate query-agnostic analytics modeling adversary behavior; define how behavior should manifest in data before query execution/validation.",
//     group: "Tools",
//     category: "Debugging",
//   },
//   {
//     id: "debugging:session-logs:clawdbot",
//     title: "session-logs",
//     description:
//       "Search and analyze your own conversation history from session log files using jq.",
//     group: "Tools",
//     category: "Debugging",
//   },
//   {
//     id: "debugging:explore:parcadei",
//     title: "explore",
//     description:
//       "Meta-skill for internal codebase exploration at varying depths (quick/deep/architecture).",
//     group: "Tools",
//     category: "Debugging",
//   },
//   {
//     id: "debugging:braintrust-analyze:parcadei",
//     title: "braintrust-analyze",
//     description:
//       "Analyze Claude Code sessions via Braintrust.",
//     group: "Tools",
//     category: "Debugging",
//   },
//   {
//     id: "debugging:tldr-code:parcadei",
//     title: "tldr-code",
//     description:
//       "Token-efficient code analysis via multi-layer stack (AST/Call Graph/CFG/DFG/PDG) for large token savings.",
//     group: "Tools",
//     category: "Debugging",
//   },
// {
//   id: "n8n-mcp-Development-expert",
//   title: "n8n-mcp-Development-expert",
//   description:
//     "Expert guide for using n8n-mcp MCP Development effectively (node search, configs, templates, common patterns).",
//   group: "Development",
//   category: "CMS & Platforms",
// },

// { id: "react", title: "React", description: "Components, state, hooks, performance.", group: "Development", category: "Frontend" },
// { id: "next", title: "Next.js", description: "Routing, SSR/SSG, app router, caching.", group: "Development", category: "Frontend" },
// { id: "tailwind", title: "Tailwind", description: "Utility-first styling, variants.", group: "Development", category: "Frontend" },

// { id: "api-design", title: "API Design", description: "REST patterns, pagination, auth, errors.", group: "Development", category: "Backend" },
// { id: "postgres", title: "Postgres", description: "Schemas, indexes, migrations, query planning.", group: "Development", category: "Backend" },

// { id: "prompting", title: "Prompting", description: "Instruction design, evals, guardrails.", group: "Data & AI", category: "LLM & AI" },
// { id: "rag", title: "RAG", description: "Chunking, embeddings, retrieval, reranking.", group: "Data & AI", category: "LLM & AI" },

// { id: "logging", title: "Logging", description: "Structured logs, tracing, error boundaries.", group: "Development", category: "Debugging" },
// { id: "profiling", title: "Profiling", description: "CPU/memory profiling, flamegraphs.", group: "Development", category: "Debugging" },

// { id: "gh-actions", title: "GitHub Actions", description: "Workflows, caching, secrets, deploys.", group: "DevOps", category: "CI/CD" },

// { id: "evm", title: "EVM Basics", description: "Accounts, txs, gas, events, ERC20/721.", group: "Blockchain", category: "Smart Contracts" },
// { id: "solidity", title: "Solidity", description: "Contracts, security, testing, deployment.", group: "Blockchain", category: "Smart Contracts" },
// {
//   id: "debugging:clojure-review:metabase",
//   title: "clojure-review",
//   description:
//     "Review Clojure and ClojureScript code changes for compliance with Metabase coding standards, style violations, and code quality issues. Use when reviewing pull requests or diffs containing Clojure/ClojureScript code.",
//   group: "Development",
//   category: "Debugging",
// },
// {
//   id: "debugging:typescript-review:metabase",
//   title: "typescript-review",
//   description:
//     "Review TypeScript and JavaScript code changes for compliance with Metabase coding standards, style violations, and code quality issues. Use when reviewing pull requests or diffs containing TypeScript/JavaScript code.",
//   group: "Development",
//   category: "Debugging",
// },
// {
//   id: "debugging:webapp-testing:anthropics-skills",
//   title: "webapp-testing",
//   description:
//     "Toolkit for interacting with and testing local web applications using Playwright. Supports verifying frontend functionality, debugging UI behavior, capturing browser screenshots, and viewing browser logs.",
//   group: "Development",
//   category: "Debugging",
// },
// {
//   id: "debugging:shellcheck-configuration:wshobson",
//   title: "shellcheck-configuration",
//   description:
//     "Master ShellCheck static analysis configuration and usage for shell script quality. Use when setting up linting infrastructure, fixing code issues, or ensuring script portability.",
//   group: "Development",
//   category: "Debugging",
// },
// {
//   id: "debugging:debugging-strategies:wshobson",
//   title: "debugging-strategies",
//   description:
//     "Master systematic debugging techniques, profiling Development, and root cause analysis to efficiently track down bugs across any codebase or technology stack. Use when investigating bugs, performance issues, or unexpected behavior.",
//   group: "Development",
//   category: "Debugging",
// },
// {
//   id: "debugging:sql-optimization-patterns:wshobson",
//   title: "sql-optimization-patterns",
//   description:
//     "Master SQL query optimization, indexing strategies, and EXPLAIN analysis to dramatically improve database performance and eliminate slow queries. Use when debugging slow queries, designing database schemas, or optimizing application performance.",
//   group: "Development",
//   category: "Debugging",
// },
// {
//   id: "debugging:memory-forensics:wshobson",
//   title: "memory-forensics",
//   description:
//     "Master memory forensics techniques including memory acquisition, process analysis, and artifact extraction using Volatility and related Development. Use when analyzing memory dumps, investigating incidents, or performing malware analysis from RAM captures.",
//   group: "Development",
//   category: "Debugging",
// },
// {
//   id: "debugging:python-performance-optimization:wshobson",
//   title: "python-performance-optimization",
//   description:
//     "Profile and optimize Python code using cProfile, memory profilers, and performance best practices. Use when debugging slow Python code, optimizing bottlenecks, or improving application performance.",
//   group: "Development",
//   category: "Debugging",
// },
// {
//   id: "debugging:startup-metrics-framework:wshobson",
//   title: "startup-metrics-framework",
//   description:
//     'Use when the user asks about "key startup metrics", "SaaS metrics", "CAC and LTV", "unit economics", "burn multiple", "rule of 40", "marketplace metrics", or requests guidance on tracking and optimizing business performance metrics.',
//   group: "Development",
//   category: "Debugging",
// },
// {
//   id: "debugging:distributed-tracing:wshobson",
//   title: "distributed-tracing",
//   description:
//     "Implement distributed tracing with Jaeger and Tempo to track requests across microservices and identify performance bottlenecks. Use when debugging microservices, analyzing request flows, or implementing observability for distributed systems.",
//   group: "Development",
//   category: "Debugging",
// },
// {
//   id: "debugging:anti-reversing-techniques:wshobson",
//   title: "anti-reversing-techniques",
//   description:
//     "Understand anti-reversing, obfuscation, and protection techniques encountered during software analysis. Use when analyzing protected binaries, bypassing anti-debugging for authorized analysis, or understanding software protection mechanisms.",
//   group: "Development",
//   category: "Debugging",
// },
// {
//   id: "debugging:protocol-reverse-engineering:wshobson",
//   title: "protocol-reverse-engineering",
//   description:
//     "Master network protocol reverse engineering including packet analysis, protocol dissection, and custom protocol documentation. Use when analyzing network traffic, understanding proprietary protocols, or debugging network communication.",
//   group: "Development",
//   category: "Debugging",
// },
// {
//   id: "debugging:binary-analysis-patterns:wshobson",
//   title: "binary-analysis-patterns",
//   description:
//     "Master binary analysis patterns including disassembly, decompilation, control flow analysis, and code pattern recognition. Use when analyzing executables, understanding compiled code, or performing static analysis on binaries.",
//   group: "Development",
//   category: "Debugging",
// },
// {
//   id: "debugging:e2e-testing-patterns:wshobson",
//   title: "e2e-testing-patterns",
//   description:
//     "Master end-to-end testing with Playwright and Cypress to build reliable test suites that catch bugs, improve confidence, and enable fast deployment. Use when implementing E2E tests, debugging flaky tests, or establishing testing standards.",
//   group: "Development",
//   category: "Debugging",
// },
// {
//   id: "debugging:screen-reader-testing:wshobson",
//   title: "screen-reader-testing",
//   description:
//     "Test web applications with screen readers including VoiceOver, NVDA, and JAWS. Use when validating screen reader compatibility, debugging accessibility issues, or ensuring assistive technology support.",
//   group: "Development",
//   category: "Debugging",
// },
// {
//   id: "debugging:code-review-excellence:wshobson",
//   title: "code-review-excellence",
//   description:
//     "Master effective code review practices to provide constructive feedback, catch bugs early, and foster knowledge sharing while maintaining team morale. Use when reviewing pull requests, establishing review standards, or mentoring developers.",
//   group: "Development",
//   category: "Debugging",
// },
// {
//   id: "debugging:go-concurrency-patterns:wshobson",
//   title: "go-concurrency-patterns",
//   description:
//     "Master Go concurrency with goroutines, channels, sync primitives, and context. Use when building concurrent Go applications, implementing worker pools, or debugging race conditions.",
//   group: "Development",
//   category: "Debugging",
// },
// {
//   id: "debugging:evals-context:roocodeinc",
//   title: "evals-context",
//   description:
//     'Context for Roo Code evals system structure (packages/evals, apps/web-evals) vs public evals page (apps/web-roo-code/src/app/evals). Use when tasks mention "evals", "evaluation", "eval runs", or evals infrastructure.',
//   group: "Development",
//   category: "Debugging",
// },
// {
//   id: "debugging:developer-growth-analysis:composiohq",
//   title: "developer-growth-analysis",
//   description:
//     "Analyzes recent chat history to identify coding patterns, development gaps, and areas for improvement; curates learning resources and produces a growth report.",
//   group: "Development",
//   category: "Debugging",
// },
// {
//   id: "debugging:web-design-reviewer:github",
//   title: "web-design-reviewer",
//   description:
//     'Visual inspection of websites (local/remote) to identify and fix design issues. Triggers on "review website design", "check the UI", "fix the layout", etc. Detects responsive/accessibility/consistency/layout breakage and fixes at source.',
//   group: "Development",
//   category: "Debugging",
// },
// {
//   id: "debugging:webapp-testing:github",
//   title: "webapp-testing (github)",
//   description:
//     "Toolkit for interacting with and testing local web applications using Playwright. Supports verifying frontend functionality, debugging UI behavior, capturing screenshots, and viewing browser logs.",
//   group: "Development",
//   category: "Debugging",
// },
// {
//   id: "debugging:phoenix-observability:davila7",
//   title: "phoenix-observability",
//   description:
//     "Open-source AI observability platform for LLM tracing, evaluation, and monitoring. Use when debugging LLM apps with traces, running evaluations, or monitoring production AI systems.",
//   group: "Development",
//   category: "Debugging",
// },
// {
//   id: "debugging:langsmith-observability:davila7",
//   title: "langsmith-observability",
//   description:
//     "LLM observability platform for tracing, evaluation, and monitoring. Use when debugging LLM apps, evaluating outputs, monitoring production, or building systematic testing pipelines.",
//   group: "Development",
//   category: "Debugging",
// },
// {
//   id: "debugging:tensorboard:davila7",
//   title: "tensorboard",
//   description:
//     "Visualize training metrics, debug models with histograms, compare experiments, visualize model graphs, and profile performance with TensorBoard.",
//   group: "Development",
//   category: "Debugging",
// },
// {
//   id: "debugging:code-reviewer:davila7",
//   title: "code-reviewer",
//   description:
//     "Comprehensive code review for TypeScript/JavaScript/Python/Swift/Kotlin/Go. Includes automated analysis, best practices, security scanning, and review checklist generation.",
//   group: "Development",
//   category: "Debugging",
// },
// {
//   id: "debugging:senior-fullstack:davila7",
//   title: "senior-fullstack",
//   description:
//     "Fullstack guidance for React/Next/Node/GraphQL/Postgres: scaffolding, code quality, patterns, and workflow setup.",
//   group: "Development",
//   category: "Debugging",
// },
// {
//   id: "debugging:error-resolver:davila7",
//   title: "error-resolver",
//   description:
//     "Systematic error diagnosis and resolution using first-principle analysis. Use when encountering any error message, stack trace, or unexpected behavior. Supports replay functionality.",
//   group: "Development",
//   category: "Debugging",
// },
// {
//   id: "debugging:react-best-practices:davila7",
//   title: "react-best-practices",
//   description:
//     "React/Next performance optimization guide with 40+ rules for eliminating waterfalls, optimizing bundles, and improving rendering. Use when optimizing or refactoring React apps.",
//   group: "Development",
//   category: "Debugging",
// },
// {
//   id: "debugging:senior-qa:davila7",
//   title: "senior-qa",
//   description:
//     "QA/testing strategies for React/Next/Node apps: test suite generation, coverage analysis, E2E setup, and quality metrics.",
//   group: "Development",
//   category: "Debugging",
// },
// {
//   id: "debugging:railway-metrics:davila7",
//   title: "railway-metrics",
//   description:
//     'Query resource usage metrics for Railway services (CPU/memory/network/disk). Use when user asks "is my service slow" or wants resource usage data.',
//   group: "Development",
//   category: "Debugging",
// },
// {
//   id: "debugging:code-review:shareai-lab",
//   title: "code-review (shareAI-lab)",
//   description:
//     "Perform thorough code reviews with security, performance, and maintainability analysis.",
//   group: "Development",
//   category: "Debugging",
// },
// {
//   id: "debugging:prowler:prowler-cloud",
//   title: "prowler",
//   description:
//     "Main entry point for Prowler development — component overview and navigation (not PR CI gates/workflows).",
//   group: "Development",
//   category: "Debugging",
// },
// {
//   id: "debugging:pair-programming:ruvnet",
//   title: "pair-programming",
//   description:
//     "AI-assisted pair programming with driver/navigator modes, verification, quality monitoring, and testing. Supports TDD, debugging, refactoring, and learning sessions.",
//   group: "Development",
//   category: "Debugging",
// },
// {
//   id: "debugging:debug:elie222",
//   title: "debug",
//   description:
//     "Runtime debugging workflow with automated log collection. Use when fixing bugs that require runtime evidence, or when you’d otherwise ask the user to reproduce and report logs.",
//   group: "Development",
//   category: "Debugging",
// },
// {
//   id: "debugging:error-tracking:diet103",
//   title: "error-tracking",
//   description:
//     "Add Sentry v8 error tracking and performance monitoring. Use when adding error handling, creating controllers, instrumenting cron jobs, or tracking DB performance.",
//   group: "Development",
//   category: "Debugging",
// },
// {
//   id: "debugging:clickhouse-query:civitai",
//   title: "clickhouse-query",
//   description:
//     "Run ClickHouse queries for analytics and metrics exploration. Read-only by default.",
//   group: "Development",
//   category: "Debugging",
// },
// {
//   id: "debugging:code-review:cockroachdb-pebble",
//   title: "code-review (pebble)",
//   description:
//     "Review Pebble code/PRs/diffs for correctness issues (resource leaks, concurrency bugs, iterator misuse, lint violations).",
//   group: "Development",
//   category: "Debugging",
// },
// {
//   id: "debugging:code-review:thinkinaixyz",
//   title: "code-review (ThinkInAIXYZ)",
//   description:
//     "Comprehensive code review assistant analyzing code quality, security, and best practices.",
//   group: "Development",
//   category: "Debugging",
// },
// {
//   id: "debugging:v3-performance-optimization:ruvnet",
//   title: "v3-performance-optimization",
//   description:
//     "Benchmarking and optimization suite for aggressive v3 performance targets (speedups, memory reduction, search improvements).",
//   group: "Development",
//   category: "Debugging",
// },
// {
//   id: "debugging:idapython:mrexodia",
//   title: "idapython",
//   description:
//     "IDA Pro Python scripting for reverse engineering (IDA API usage, disassembly/decompilation workflows, database manipulation).",
//   group: "Development",
//   category: "Debugging",
// },
// {
//   id: "debugging:systematic-debugging:chriswiles",
//   title: "systematic-debugging",
//   description:
//     "Four-phase debugging methodology emphasizing root cause analysis: NO FIXES WITHOUT ROOT CAUSE FIRST.",
//   group: "Development",
//   category: "Debugging",
// },
// {
//   id: "debugging:hunt-data-source-identification:otrf",
//   title: "hunt-data-source-identification",
//   description:
//     "Identify relevant security data sources that could capture behavior defined in a structured hunt hypothesis; translate investigative intent into candidate telemetry sources.",
//   group: "Development",
//   category: "Debugging",
// },
// {
//   id: "debugging:hunt-research-system-and-tradecraft:otrf",
//   title: "hunt-research-system-and-tradecraft",
//   description:
//     "Research system internals and adversary tradecraft to ground a threat hunt in real behavior. Use before defining a concrete hunt hypothesis or selecting data sources.",
//   group: "Development",
//   category: "Debugging",
// },
// {
//   id: "debugging:hunt-analytics-generation:otrf",
//   title: "hunt-analytics-generation",
//   description:
//     "Generate query-agnostic analytics modeling adversary behavior; define how behavior should manifest in data before query execution/validation.",
//   group: "Development",
//   category: "Debugging",
// },
// {
//   id: "debugging:session-logs:clawdbot",
//   title: "session-logs",
//   description:
//     "Search and analyze your own conversation history from session log files using jq.",
//   group: "Development",
//   category: "Debugging",
// },
// {
//   id: "debugging:explore:parcadei",
//   title: "explore",
//   description:
//     "Meta-skill for internal codebase exploration at varying depths (quick/deep/architecture).",
//   group: "Development",
//   category: "Debugging",
// },
// {
//   id: "debugging:braintrust-analyze:parcadei",
//   title: "braintrust-analyze",
//   description:
//     "Analyze Claude Code sessions via Braintrust.",
//   group: "Development",
//   category: "Debugging",
// },
// {
//   id: "debugging:tldr-code:parcadei",
//   title: "tldr-code",
//   description:
//     "Token-efficient code analysis via multi-layer stack (AST/Call Graph/CFG/DFG/PDG) for large token savings.",
//   group: "Development",
//   category: "Debugging",
// },

// // ----------------------------
// // Frontend → Core / Frameworks
// // ----------------------------
// {
//   id: "frontend:cache-components:vercel",
//   title: "cache-components",
//   description:
//     "Expert guidance for Next.js Cache Components and Partial Prerendering (PPR), including cache lifetimes, tagging, invalidation, and performance debugging.",
//   group: "Development",
//   category: "Frontend",
// },
// {
//   id: "frontend:nextjs-app-router-patterns:wshobson",
//   title: "nextjs-app-router-patterns",
//   description:
//     "Next.js 14+ App Router patterns covering Server Components, streaming, parallel routes, and advanced data fetching.",
//   group: "Development",
//   category: "Frontend",
// },
// {
//   id: "frontend:nextjs-15:prowler-cloud",
//   title: "nextjs-15",
//   description:
//     "Next.js 15 App Router patterns: Server vs Client Components, Server Actions, caching, revalidation, and streaming.",
//   group: "Development",
//   category: "Frontend",
// },
// {
//   id: "frontend:react-19:prowler-cloud",
//   title: "react-19",
//   description:
//     "React 19 patterns with the React Compiler, including hook rules and ref-as-prop guidance.",
//   group: "Development",
//   category: "Frontend",
// },
// {
//   id: "frontend:typescript-advanced-types:wshobson",
//   title: "typescript-advanced-types",
//   description:
//     "Advanced TypeScript patterns: generics, conditional types, mapped types, and template literal types.",
//   group: "Development",
//   category: "Frontend",
// },
// {
//   id: "frontend:modern-javascript-patterns:wshobson",
//   title: "modern-javascript-patterns",
//   description:
//     "Modern ES6+ JavaScript patterns including async/await, modules, promises, iterators, and functional programming.",
//   group: "Development",
//   category: "Frontend",
// },

// // ----------------------------
// // Frontend → State / Data
// // ----------------------------
// {
//   id: "frontend:react-state-management:wshobson",
//   title: "react-state-management",
//   description:
//     "Modern React state management with Redux Toolkit, Zustand, Jotai, and React Query.",
//   group: "Development",
//   category: "Frontend",
// },
// {
//   id: "frontend:zustand-5:prowler-cloud",
//   title: "zustand-5",
//   description:
//     "Zustand 5 patterns for client-side state management, selectors, slices, and persistence.",
//   group: "Development",
//   category: "Frontend",
// },
// {
//   id: "frontend:tanstack-query:exceptionless",
//   title: "tanstack-query",
//   description:
//     "TanStack Query patterns for data fetching, caching, mutations, optimistic updates, and invalidation.",
//   group: "Development",
//   category: "Frontend",
// },

// // ----------------------------
// // Frontend → Design Systems / Styling
// // ----------------------------
// {
//   id: "frontend:frontend-design:anthropics",
//   title: "frontend-design",
//   description:
//     "Production-grade frontend interface design with high visual quality and non-generic UI aesthetics.",
//   group: "Development",
//   category: "Frontend",
// },
// {
//   id: "frontend:tailwind-design-system:wshobson",
//   title: "tailwind-design-system",
//   description:
//     "Scalable design systems built with Tailwind CSS, design tokens, responsive patterns, and component libraries.",
//   group: "Development",
//   category: "Frontend",
// },
// {
//   id: "frontend:tailwind-4:prowler-cloud",
//   title: "tailwind-4",
//   description:
//     "Tailwind CSS v4 best practices for dynamic styling, variants, and performance-safe class usage.",
//   group: "Development",
//   category: "Frontend",
// },
// {
//   id: "frontend:ui-design-system:davila7",
//   title: "ui-design-system",
//   description:
//     "UI design system toolkit for design tokens, component documentation, responsive sizing, and dev handoff.",
//   group: "Development",
//   category: "Frontend",
// },
// {
//   id: "frontend:ui-ux-pro-max:nextlevelbuilder",
//   title: "ui-ux-pro-max",
//   description:
//     "Advanced UI/UX design intelligence covering layouts, palettes, typography, animations, accessibility, and shadcn/ui.",
//   group: "Development",
//   category: "Frontend",
// },

// // ----------------------------
// // Frontend → Architecture / Modernization
// // ----------------------------
// {
//   id: "frontend:react-modernization:wshobson",
//   title: "react-modernization",
//   description:
//     "Upgrade React apps to modern hooks, concurrent features, and current best practices.",
//   group: "Development",
//   category: "Frontend",
// },
// {
//   id: "frontend:react-best-practices:davila7",
//   title: "react-best-practices",
//   description:
//     "React and Next.js performance optimization guide with rules for eliminating waterfalls and improving render efficiency.",
//   group: "Development",
//   category: "Frontend",
// },
// {
//   id: "frontend:senior-frontend:davila7",
//   title: "senior-frontend",
//   description:
//     "End-to-end frontend engineering practices for React, Next.js, TypeScript, Tailwind, and performance optimization.",
//   group: "Development",
//   category: "Frontend",
// },
// {
//   id: "frontend:frontend-dev-guidelines:diet103",
//   title: "frontend-dev-guidelines",
//   description:
//     "Modern frontend development guidelines covering Suspense, lazy loading, routing, styling, and TypeScript patterns.",
//   group: "Development",
//   category: "Frontend",
// },

// // ----------------------------
// // Frontend → Artifacts / Components
// // ----------------------------
// {
//   id: "frontend:web-artifacts-builder:anthropics",
//   title: "web-artifacts-builder",
//   description:
//     "Build complex multi-component frontend artifacts using React, Tailwind CSS, and shadcn/ui.",
//   group: "Development",
//   category: "Frontend",
// },
// {
//   id: "frontend:artifacts-builder:composiohq",
//   title: "artifacts-builder",
//   description:
//     "Tooling for generating complex frontend artifacts with state management and routing.",
//   group: "Development",
//   category: "Frontend",
// },
// {
//   id: "frontend:core-components:chriswiles",
//   title: "core-components",
//   description:
//     "Core UI component library and design system patterns.",
//   group: "Development",
//   category: "Frontend",
// },
// {
//   id: "frontend:react-ui-patterns:chriswiles",
//   title: "react-ui-patterns",
//   description:
//     "Modern React UI patterns for loading states, error handling, and async data flows.",
//   group: "Development",
//   category: "Frontend",
// },
// {
//   id: "frontend:formik-patterns:chriswiles",
//   title: "formik-patterns",
//   description:
//     "Formik form handling and validation patterns for complex forms.",
//   group: "Development",
//   category: "Frontend",
// },
// {
//   id: "frontend:form-refactorer:redpanda-data",
//   title: "form-refactorer",
//   description:
//     "Refactor legacy forms to react-hook-form with Zod validation and modern field components.",
//   group: "Development",
//   category: "Frontend",
// },

// // ----------------------------
// // Frontend → Other Frameworks
// // ----------------------------
// {
//   id: "frontend:react-native-architecture:wshobson",
//   title: "react-native-architecture",
//   description:
//     "Production React Native architecture with Expo, navigation, offline sync, and native modules.",
//   group: "Development",
//   category: "Frontend",
// },
// {
//   id: "frontend:svelte:epicenterhq",
//   title: "svelte",
//   description:
//     "Svelte 5 patterns including TanStack Query, shadcn-svelte components, and composition techniques.",
//   group: "Development",
//   category: "Frontend",
// },
// {
//   id: "frontend:angular-migration:wshobson",
//   title: "angular-migration",
//   description:
//     "Incremental migration from AngularJS to modern Angular using hybrid patterns.",
//   group: "Development",
//   category: "Frontend",
// },
// {
//   id: "frontend:angular-modernization:bitwarden",
//   title: "angular-modernization",
//   description:
//     "Modernize Angular components and directives using CLI migrations and best practices.",
//   group: "Development",
//   category: "Frontend",
// },
// // ----------------------------
// // Package & Distribution → Monorepos & Dependency Management
// // ----------------------------
// {
//   id: "package-distribution:monorepo-management:wshobson",
//   title: "monorepo-management",
//   description:
//     "Monorepo management with Turborepo, Nx, and pnpm workspaces for scalable multi-package repositories.",
//   group: "Development",
//   category: "Package & Distribution",
// },
// {
//   id: "package-distribution:turborepo-caching:wshobson",
//   title: "turborepo-caching",
//   description:
//     "Configure Turborepo local and remote caching for faster, distributed monorepo builds.",
//   group: "Development",
//   category: "Package & Distribution",
// },
// {
//   id: "package-distribution:dependency-upgrade:wshobson",
//   title: "dependency-upgrade",
//   description:
//     "Safely manage major dependency upgrades with compatibility analysis and staged rollouts.",
//   group: "Development",
//   category: "Package & Distribution",
// },
// {
//   id: "package-distribution:analyzing-dependencies:jeremylongshore",
//   title: "analyzing-dependencies",
//   description:
//     "Analyze project dependencies for vulnerabilities, outdated versions, and license compliance.",
//   group: "Development",
//   category: "Package & Distribution",
// },

// // ----------------------------
// // Package & Distribution → Packaging (Language-specific)
// // ----------------------------
// {
//   id: "package-distribution:python-packaging:wshobson",
//   title: "python-packaging",
//   description:
//     "Create and publish distributable Python packages using pyproject.toml and PyPI best practices.",
//   group: "Development",
//   category: "Package & Distribution",
// },
// {
//   id: "package-distribution:python-env:benchflow-ai",
//   title: "python-env",
//   description:
//     "Fast Python environment and dependency management using uv, venvs, and pyproject.toml.",
//   group: "Development",
//   category: "Package & Distribution",
// },
// {
//   id: "package-distribution:managing-cargo-dependencies:hashintel",
//   title: "managing-cargo-dependencies",
//   description:
//     "Cargo.toml dependency management patterns for Rust workspaces and libraries.",
//   group: "Development",
//   category: "Package & Distribution",
// },
// {
//   id: "package-distribution:build-cmake:iplug2",
//   title: "build-cmake",
//   description:
//     "Build distributable projects using CMake with Ninja, Xcode, or Visual Studio generators.",
//   group: "Development",
//   category: "Package & Distribution",
// },

// // ----------------------------
// // Package & Distribution → Releases & Versioning
// // ----------------------------
// {
//   id: "package-distribution:changelog-automation:wshobson",
//   title: "changelog-automation",
//   description:
//     "Automate changelog generation from commits and PRs following Keep a Changelog.",
//   group: "Development",
//   category: "Package & Distribution",
// },
// {
//   id: "package-distribution:prepare-changelog:nextest-rs",
//   title: "prepare-changelog",
//   description:
//     "Prepare high-quality changelog entries for releases using Keep a Changelog conventions.",
//   group: "Development",
//   category: "Package & Distribution",
// },
// {
//   id: "package-distribution:version-bumper:jeremylongshore",
//   title: "version-bumper",
//   description:
//     "Automated semantic version bumping across package manifests and catalogs.",
//   group: "Development",
//   category: "Package & Distribution",
// },
// {
//   id: "package-distribution:release-prep:massgen",
//   title: "release-prep",
//   description:
//     "Prepare release documentation, announcements, and validation before tagging a release.",
//   group: "Development",
//   category: "Package & Distribution",
// },
// {
//   id: "package-distribution:windsurf-release-automation:jeremylongshore",
//   title: "windsurf-release-automation",
//   description:
//     "Semantic-release style automation for version bumps, changelogs, and publishing.",
//   group: "Development",
//   category: "Package & Distribution",
// },

// // ----------------------------
// // Package & Distribution → CI/CD & Publishing
// // ----------------------------
// {
//   id: "package-distribution:publish-package-cicd:joelhooks",
//   title: "publish-package-cicd",
//   description:
//     "CI/CD publishing workflows for npm packages using Changesets and npm Trusted Publishers (OIDC).",
//   group: "Development",
//   category: "Package & Distribution",
// },
// {
//   id: "package-distribution:hdwallet-verdaccio-local-publish-pipeline:shapeshift",
//   title: "hdwallet-verdaccio-local-publish-pipeline",
//   description:
//     "Local package publishing pipelines using Verdaccio for testing package releases.",
//   group: "Development",
//   category: "Package & Distribution",
// },
// {
//   id: "package-distribution:pypi-server:benchflow-ai",
//   title: "pypi-server",
//   description:
//     "Host and serve Python packages via a local PyPI-compatible server for private distribution.",
//   group: "Development",
//   category: "Package & Distribution",
// },

// // ----------------------------
// // Package & Distribution → Repo / Artifact Utilities
// // ----------------------------
// {
//   id: "package-distribution:repomix:mrgoonie",
//   title: "repomix",
//   description:
//     "Package entire repositories into AI-friendly artifacts with configurable include/exclude rules.",
//   group: "Development",
//   category: "Package & Distribution",
// },
// {
//   id: "package-distribution:generate-sparkle-appcast:caldis",
//   title: "generate-sparkle-appcast",
//   description:
//     "Generate Sparkle appcast.xml files from build artifacts and recent git changes.",
//   group: "Development",
//   category: "Package & Distribution",
// },

// // ----------------------------
// // E-commerce Development → Payments & Billing
// // ----------------------------
// {
//   id: "ecommerce-development:stripe-integration:wshobson",
//   title: "stripe-integration",
//   description:
//     "Implement Stripe payment processing including checkout, subscriptions, webhooks, and PCI-compliant flows.",
//   group: "Development",
//   category: "E-commerce Development",
// },
// {
//   id: "ecommerce-development:paypal-integration:wshobson",
//   title: "paypal-integration",
//   description:
//     "Integrate PayPal payments with express checkout, subscriptions, and refund management.",
//   group: "Development",
//   category: "E-commerce Development",
// },
// {
//   id: "ecommerce-development:billing-automation:wshobson",
//   title: "billing-automation",
//   description:
//     "Automated billing systems for subscriptions, invoicing, recurring payments, and dunning workflows.",
//   group: "Development",
//   category: "E-commerce Development",
// },
// {
//   id: "ecommerce-development:stripe-best-practices:anthropics",
//   title: "stripe-best-practices",
//   description:
//     "Best practices for building robust Stripe integrations including webhooks, Connect, and subscriptions.",
//   group: "Development",
//   category: "E-commerce Development",
// },

// // ----------------------------
// // E-commerce Development → Platforms (Shopify / WooCommerce / Headless)
// // ----------------------------
// {
//   id: "ecommerce-development:shopify:mrgoonie",
//   title: "shopify",
//   description:
//     "Build Shopify apps, extensions, themes, and checkout customizations using GraphQL, REST, and Polaris UI.",
//   group: "Development",
//   category: "E-commerce Development",
// },
// {
//   id: "ecommerce-development:shopify-apps:alinaqi",
//   title: "shopify-apps",
//   description:
//     "Shopify app development including Admin API, checkout extensions, billing, and Remix-based apps.",
//   group: "Development",
//   category: "E-commerce Development",
// },
// {
//   id: "ecommerce-development:woocommerce-backend-dev:woocommerce",
//   title: "woocommerce-backend-dev",
//   description:
//     "WooCommerce backend development with PHP hooks, classes, and REST API extensions.",
//   group: "Development",
//   category: "E-commerce Development",
// },
// {
//   id: "ecommerce-development:woocommerce:alinaqi",
//   title: "woocommerce",
//   description:
//     "WooCommerce REST API integration for products, orders, customers, and webhooks.",
//   group: "Development",
//   category: "E-commerce Development",
// },
// {
//   id: "ecommerce-development:medusa:alinaqi",
//   title: "medusa",
//   description:
//     "Medusa headless commerce development including modules, workflows, APIs, and admin UI.",
//   group: "Development",
//   category: "E-commerce Development",
// },

// // ----------------------------
// // E-commerce Development → Checkout & Web Payments
// // ----------------------------
// {
//   id: "ecommerce-development:web-payments:alinaqi",
//   title: "web-payments",
//   description:
//     "Stripe Checkout, subscriptions, customer portals, and payment webhooks.",
//   group: "Development",
//   category: "E-commerce Development",
// },
// {
//   id: "ecommerce-development:payment-integration:microck",
//   title: "payment-integration",
//   description:
//     "Secure payment gateway integrations with PCI compliance, fraud prevention, and multi-currency support.",
//   group: "Development",
//   category: "E-commerce Development",
// },
// {
//   id: "ecommerce-development:laravel-cashier-paddle:microck",
//   title: "laravel-cashier-paddle",
//   description:
//     "Subscription billing and payment processing using Laravel Cashier with Paddle.",
//   group: "Development",
//   category: "E-commerce Development",
// },

// // ----------------------------
// // E-commerce Development → Commerce UX & Operations
// // ----------------------------
// {
//   id: "ecommerce-development:user-journey-mapper:jeremylongshore",
//   title: "user-journey-mapper",
//   description:
//     "Map and analyze user journeys across e-commerce funnels and checkout flows.",
//   group: "Development",
//   category: "E-commerce Development",
// },
// {
//   id: "ecommerce-development:service-blueprinting:prorise-cool",
//   title: "service-blueprinting",
//   description:
//     "Service blueprints for e-commerce systems including frontstage, backstage, and support processes.",
//   group: "Development",
//   category: "E-commerce Development",
// },

// // ----------------------------
// // E-commerce Development → Automation & Tooling
// // ----------------------------
// {
//   id: "ecommerce-development:shopping-browser-automation:masslab-sii",
//   title: "shopping-browser-automation",
//   description:
//     "Automate e-commerce browsing, product comparison, cart management, and checkout flows.",
//   group: "Development",
//   category: "E-commerce Development",
// },
// {
//   id: "ecommerce-development:shopping-admin-browser-automation:masslab-sii",
//   title: "shopping-admin-browser-automation",
//   description:
//     "Automate Magento and e-commerce admin workflows including orders, customers, and analytics.",
//   group: "Development",
//   category: "E-commerce Development",
// },
// // ----------------------------
// // Backend → Core API Foundations
// // ----------------------------
// {
//   id: "backend:api-design-principles:wshobson",
//   title: "api-design-principles",
//   description:
//     "Design scalable, intuitive REST and GraphQL APIs with proper versioning, error handling, and consistency.",
//   group: "Development",
//   category: "Backend",
// },
// {
//   id: "backend:designing-apis:cloudai-x",
//   title: "designing-apis",
//   description:
//     "Design REST and GraphQL APIs including endpoints, contracts, versioning, and documentation.",
//   group: "Development",
//   category: "Backend",
// },
// {
//   id: "backend:api-contract:jeremylongshore",
//   title: "api-contract",
//   description:
//     "Define shared API contracts, request/response schemas, and interfaces coordinating frontend and backend.",
//   group: "Development",
//   category: "Backend",
// },

// // ----------------------------
// // Backend → Frameworks & Servers
// // ----------------------------
// {
//   id: "backend:senior-backend:davila7",
//   title: "senior-backend",
//   description:
//     "Comprehensive backend development for Node.js, Python, Go, REST, GraphQL, databases, and performance tuning.",
//   group: "Development",
//   category: "Backend",
// },
// {
//   id: "backend:fastapi-templates:wshobson",
//   title: "fastapi-templates",
//   description:
//     "Production-ready FastAPI backends with async patterns, dependency injection, and error handling.",
//   group: "Development",
//   category: "Backend",
// },
// {
//   id: "backend:django-drf:prowler-cloud",
//   title: "django-drf",
//   description:
//     "Django REST Framework patterns using ViewSets, serializers, routers, filters, and permissions.",
//   group: "Development",
//   category: "Backend",
// },
// {
//   id: "backend:route-handlers:davepoon",
//   title: "route-handlers",
//   description:
//     "Build API routes and handlers using Next.js App Router with streaming and modern server patterns.",
//   group: "Development",
//   category: "Backend",
// },

// // ----------------------------
// // Backend → Authentication & Security
// // ----------------------------
// {
//   id: "backend:auth-implementation-patterns:wshobson",
//   title: "auth-implementation-patterns",
//   description:
//     "JWT, OAuth2, RBAC, session management, and secure authentication/authorization systems.",
//   group: "Development",
//   category: "Backend",
// },
// {
//   id: "backend:auth-patterns:davepoon",
//   title: "auth-patterns",
//   description:
//     "Authentication patterns in Next.js including Auth.js, middleware, protected routes, and sessions.",
//   group: "Development",
//   category: "Backend",
// },
// {
//   id: "backend:handling-api-errors:jeremylongshore",
//   title: "handling-api-errors",
//   description:
//     "Standardized API error handling with correct HTTP status codes and response formats.",
//   group: "Development",
//   category: "Backend",
// },

// // ----------------------------
// // Backend → Validation & Schemas
// // ----------------------------
// {
//   id: "backend:zod-4:prowler-cloud",
//   title: "zod-4",
//   description:
//     "Zod v4 schema validation patterns for request parsing, adapters, and migrations from v3.",
//   group: "Development",
//   category: "Backend",
// },
// {
//   id: "backend:validating-api-schemas:jeremylongshore",
//   title: "validating-api-schemas",
//   description:
//     "Validate API schemas against OpenAPI, JSON Schema, and GraphQL specifications.",
//   group: "Development",
//   category: "Backend",
// },

// // ----------------------------
// // Backend → GraphQL
// // ----------------------------
// {
//   id: "backend:graphql-schema:chriswiles",
//   title: "graphql-schema",
//   description:
//     "GraphQL schema design, queries, mutations, and type generation patterns.",
//   group: "Development",
//   category: "Backend",
// },
// {
//   id: "backend:building-graphql-server:jeremylongshore",
//   title: "building-graphql-server",
//   description:
//     "Build production GraphQL servers with resolvers, schemas, and subscriptions.",
//   group: "Development",
//   category: "Backend",
// },

// // ----------------------------
// // Backend → Integrations & Webhooks
// // ----------------------------
// {
//   id: "backend:api-integration-specialist:davila7",
//   title: "api-integration-specialist",
//   description:
//     "Integrate third-party APIs with OAuth, rate limits, retries, and robust error handling.",
//   group: "Development",
//   category: "Backend",
// },
// {
//   id: "backend:creating-webhook-handlers:jeremylongshore",
//   title: "creating-webhook-handlers",
//   description:
//     "Webhook endpoints with signature verification, retries, and payload validation.",
//   group: "Development",
//   category: "Backend",
// },

// // ----------------------------
// // Backend → Rate Limiting & Gateways
// // ----------------------------
// {
//   id: "backend:building-api-gateway:jeremylongshore",
//   title: "building-api-gateway",
//   description:
//     "API gateways with routing, authentication, rate limiting, and load balancing.",
//   group: "Development",
//   category: "Backend",
// },
// {
//   id: "backend:rate-limit-middleware:jeremylongshore",
//   title: "rate-limit-middleware",
//   description:
//     "Rate limiting middleware to protect backend services from abuse and overload.",
//   group: "Development",
//   category: "Backend",
// },
// {
//   id: "backend:throttling-apis:jeremylongshore",
//   title: "throttling-apis",
//   description:
//     "API throttling strategies to control request throughput and protect infrastructure.",
//   group: "Development",
//   category: "Backend",
// },

// // ----------------------------
// // Backend → Real-Time & Async
// // ----------------------------
// {
//   id: "backend:websocket-handler-setup:jeremylongshore",
//   title: "websocket-handler-setup",
//   description:
//     "WebSocket servers and handlers for real-time backend communication.",
//   group: "Development",
//   category: "Backend",
// },
// // ----------------------------
// // LLM & AI
// // ----------------------------
// {
//   id: "llm-ai:skill-writer:pytorch",
//   title: "skill-writer",
//   description:
//     "Guide users through creating Agent Skills for Claude Code, including SKILL.md structure and frontmatter.",
//   group: "Data & AI",
//   category: "LLM & AI",
// },
// {
//   id: "llm-ai:skill-creator:google-gemini",
//   title: "skill-creator",
//   description:
//     "Guide for creating effective skills that extend Gemini CLI with specialized workflows.",
//   group: "Data & AI",
//   category: "LLM & AI",
// },
// {
//   id: "llm-ai:command-name:anthropics",
//   title: "command-name",
//   description:
//     "Guidance for creating plugins, commands, agents, and organizing Claude Code plugin architecture.",
//   group: "Data & AI",
//   category: "LLM & AI",
// },
// {
//   id: "llm-ai:claude-opus-4-5-migration:anthropics",
//   title: "claude-opus-4-5-migration",
//   description:
//     "Migrate prompts and code from Claude Sonnet or Opus versions to Opus 4.5.",
//   group: "Data & AI",
//   category: "LLM & AI",
// },
// {
//   id: "llm-ai:skill-development:anthropics",
//   title: "skill-development",
//   description:
//     "Best practices for creating, improving, and organizing Claude Code skills.",
//   group: "Data & AI",
//   category: "LLM & AI",
// },
// {
//   id: "llm-ai:command-development:anthropics",
//   title: "command-development",
//   description:
//     "Create slash commands with YAML frontmatter, arguments, and interactive behavior in Claude Code.",
//   group: "Data & AI",
//   category: "LLM & AI",
// },
// {
//   id: "llm-ai:agent-identifier:anthropics",
//   title: "agent-identifier",
//   description:
//     "Guidance for creating and configuring autonomous agents in Claude Code plugins.",
//   group: "Data & AI",
//   category: "LLM & AI",
// },
// {
//   id: "llm-ai:mcp-integration:anthropics",
//   title: "mcp-integration",
//   description:
//     "Integrate Model Context Protocol (MCP) servers into Claude Code plugins.",
//   group: "Data & AI",
//   category: "LLM & AI",
// },
// {
//   id: "llm-ai:hook-development:anthropics",
//   title: "hook-development",
//   description:
//     "Create PreToolUse, PostToolUse, Stop, and other event-driven hooks in Claude Code.",
//   group: "Data & AI",
//   category: "LLM & AI",
// },
// {
//   id: "llm-ai:configured-agent:anthropics",
//   title: "configured-agent",
//   description:
//     "Store and manage plugin configuration using .local.md files and YAML frontmatter.",
//   group: "Data & AI",
//   category: "LLM & AI",
// },
// {
//   id: "llm-ai:skill-creator:openai",
//   title: "skill-creator",
//   description:
//     "Guide for creating effective skills that extend Codex with specialized workflows.",
//   group: "Data & AI",
//   category: "LLM & AI",
// },
// {
//   id: "llm-ai:skill-creator:tldraw",
//   title: "skill-creator",
//   description:
//     "Guide for creating skills that extend Claude with custom workflows and integrations.",
//   group: "Data & AI",
//   category: "LLM & AI",
// },
// {
//   id: "llm-ai:documentation-lookup:upstash",
//   title: "documentation-lookup",
//   description:
//     "Look up library, framework, and API documentation with examples and references.",
//   group: "Data & AI",
//   category: "LLM & AI",
// },
// {
//   id: "llm-ai:mcp-builder:anthropics",
//   title: "mcp-builder",
//   description:
//     "Build high-quality MCP servers to connect LLMs with external tools and services.",
//   group: "Data & AI",
//   category: "LLM & AI",
// },
// {
//   id: "llm-ai:web-artifacts-builder:anthropics",
//   title: "web-artifacts-builder",
//   description:
//     "Create complex multi-component HTML artifacts using React, Tailwind, and shadcn/ui.",
//   group: "Data & AI",
//   category: "LLM & AI",
// },
// {
//   id: "llm-ai:brand-guidelines:anthropics",
//   title: "brand-guidelines",
//   description:
//     "Apply Anthropic brand colors, typography, and visual standards to artifacts.",
//   group: "Data & AI",
//   category: "LLM & AI",
// },
// {
//   id: "llm-ai:internal-comms:anthropics",
//   title: "internal-comms",
//   description:
//     "Write internal communications such as status updates, incident reports, and newsletters.",
//   group: "Data & AI",
//   category: "LLM & AI",
// },
// {
//   id: "llm-ai:docx:anthropics",
//   title: "docx",
//   description:
//     "Create, edit, and analyze professional .docx documents with tracked changes and comments.",
//   group: "Data & AI",
//   category: "LLM & AI",
// },
// {
//   id: "llm-ai:rag-implementation:wshobson",
//   title: "rag-implementation",
//   description:
//     "Build Retrieval-Augmented Generation systems using vector databases and semantic search.",
//   group: "Data & AI",
//   category: "LLM & AI",
// },
// {
//   id: "llm-ai:prompt-engineering-patterns:wshobson",
//   title: "prompt-engineering-patterns",
//   description:
//     "Advanced prompt engineering techniques for reliable, controllable LLM behavior.",
//   group: "Data & AI",
//   category: "LLM & AI",
// },
// {
//   id: "llm-ai:llm-evaluation:wshobson",
//   title: "llm-evaluation",
//   description:
//     "Evaluate LLM applications using automated metrics, benchmarks, and human feedback.",
//   group: "Data & AI",
//   category: "LLM & AI",
// },
// {
//   id: "llm-ai:embedding-strategies:wshobson",
//   title: "embedding-strategies",
//   description:
//     "Select and optimize embedding models for semantic search and RAG pipelines.",
//   group: "Data & AI",
//   category: "LLM & AI",
// },
// {
//   id: "llm-ai:similarity-search-patterns:wshobson",
//   title: "similarity-search-patterns",
//   description:
//     "Implement efficient vector similarity search and nearest-neighbor retrieval.",
//   group: "Data & AI",
//   category: "LLM & AI",
// },
// {
//   id: "llm-ai:langchain-architecture:wshobson",
//   title: "langchain-architecture",
//   description:
//     "Design LLM applications using LangChain agents, memory, and tool integrations.",
//   group: "Data & AI",
//   category: "LLM & AI",
// },
// {
//   id: "llm-ai:copilot:mlflow",
//   title: "copilot",
//   description:
//     "Hand off development tasks to GitHub Copilot through MLflow integration.",
//   group: "Data & AI",
//   category: "LLM & AI",
// },
// {
//   id: "llm-ai:agent-memory:yamadashy",
//   title: "agent-memory",
//   description:
//     "Save, recall, and organize agent memory and long-term context.",
//   group: "Data & AI",
//   category: "LLM & AI",
// },
// {
//   id: "llm-ai:skill-developer:langfuse",
//   title: "skill-developer",
//   description:
//     "Create and manage Claude Code skills following Anthropic best practices.",
//   group: "Data & AI",
//   category: "LLM & AI",
// },
// {
//   id: "llm-ai:langsmith-fetch:composiohq",
//   title: "langsmith-fetch",
//   description:
//     "Fetch and analyze LangChain and LangGraph execution traces from LangSmith.",
//   group: "Data & AI",
//   category: "LLM & AI",
// },
// {
//   id: "llm-ai:mcp-builder:composiohq",
//   title: "mcp-builder",
//   description:
//     "Build MCP servers to connect LLMs with external APIs and services.",
//   group: "Data & AI",
//   category: "LLM & AI",
// },
// // ----------------------------
// // Data Analysis
// // ----------------------------
// {
//   id: "data-analysis:xlsx:anthropics",
//   title: "xlsx",
//   description:
//     "Comprehensive spreadsheet creation, editing, and analysis with formulas, formatting, visualization, and recalculation support.",
//   group: "Data & AI",
//   category: "Data Analysis",
// },
// {
//   id: "data-analysis:analyzing-financial-statements:anthropics",
//   title: "analyzing-financial-statements",
//   description:
//     "Calculate key financial ratios and metrics from financial statements for investment analysis.",
//   group: "Data & AI",
//   category: "Data Analysis",
// },
// {
//   id: "data-analysis:sql-optimization-patterns:wshobson",
//   title: "sql-optimization-patterns",
//   description:
//     "Master SQL query optimization, indexing strategies, and EXPLAIN analysis to eliminate slow queries.",
//   group: "Data & AI",
//   category: "Data Analysis",
// },
// {
//   id: "data-analysis:grafana-dashboards:wshobson",
//   title: "grafana-dashboards",
//   description:
//     "Create and manage production Grafana dashboards for real-time metrics visualization.",
//   group: "Data & AI",
//   category: "Data Analysis",
// },
// {
//   id: "data-analysis:market-sizing-analysis:wshobson",
//   title: "market-sizing-analysis",
//   description:
//     "Calculate TAM, SAM, SOM and assess market opportunity sizing for startups.",
//   group: "Data & AI",
//   category: "Data Analysis",
// },
// {
//   id: "data-analysis:startup-metrics-framework:wshobson",
//   title: "startup-metrics-framework",
//   description:
//     "Track and optimize SaaS, marketplace, and startup performance metrics (CAC, LTV, burn, Rule of 40).",
//   group: "Data & AI",
//   category: "Data Analysis",
// },
// {
//   id: "data-analysis:team-composition-analysis:wshobson",
//   title: "team-composition-analysis",
//   description:
//     "Plan team structure, hiring needs, compensation, and equity allocation.",
//   group: "Data & AI",
//   category: "Data Analysis",
// },
// {
//   id: "data-analysis:data-storytelling:wshobson",
//   title: "data-storytelling",
//   description:
//     "Transform data into compelling narratives using visualization and persuasive structure.",
//   group: "Data & AI",
//   category: "Data Analysis",
// },
// {
//   id: "data-analysis:attack-tree-construction:wshobson",
//   title: "attack-tree-construction",
//   description:
//     "Build attack trees to visualize threat paths and identify defense gaps.",
//   group: "Data & AI",
//   category: "Data Analysis",
// },
// {
//   id: "data-analysis:dbt-transformation-patterns:wshobson",
//   title: "dbt-transformation-patterns",
//   description:
//     "Analytics engineering with dbt: models, testing, documentation, and incremental strategies.",
//   group: "Data & AI",
//   category: "Data Analysis",
// },
// {
//   id: "data-analysis:kpi-dashboard-design:wshobson",
//   title: "kpi-dashboard-design",
//   description:
//     "Design KPI dashboards with effective metric selection and visualization patterns.",
//   group: "Data & AI",
//   category: "Data Analysis",
// },
// {
//   id: "data-analysis:startup-financial-modeling:wshobson",
//   title: "startup-financial-modeling",
//   description:
//     "Build multi-year financial models including revenue, burn rate, runway, and cash flow.",
//   group: "Data & AI",
//   category: "Data Analysis",
// },
// {
//   id: "data-analysis:shap:davila7",
//   title: "shap",
//   description:
//     "Model interpretability using SHAP for feature importance, explainability, and bias analysis.",
//   group: "Data & AI",
//   category: "Data Analysis",
// },
// {
//   id: "data-analysis:exploratory-data-analysis:davila7",
//   title: "exploratory-data-analysis",
//   description:
//     "Perform comprehensive EDA on scientific datasets across 200+ file formats.",
//   group: "Data & AI",
//   category: "Data Analysis",
// },
// {
//   id: "data-analysis:scikit-survival:davila7",
//   title: "scikit-survival",
//   description:
//     "Survival and time-to-event analysis with Cox models, RSF, and censored data handling.",
//   group: "Data & AI",
//   category: "Data Analysis",
// },
// {
//   id: "data-analysis:cellxgene-census:davila7",
//   title: "cellxgene-census",
//   description:
//     "Query CZ CELLxGENE Census for population-scale single-cell expression analysis.",
//   group: "Data & AI",
//   category: "Data Analysis",
// },
// {
//   id: "data-analysis:clinical-decision-support:davila7",
//   title: "clinical-decision-support",
//   description:
//     "Generate evidence-based clinical decision support documents with statistical analysis.",
//   group: "Data & AI",
//   category: "Data Analysis",
// },
// {
//   id: "data-analysis:statsmodels:davila7",
//   title: "statsmodels",
//   description:
//     "Statistical modeling toolkit including OLS, GLM, ARIMA, and hypothesis testing.",
//   group: "Data & AI",
//   category: "Data Analysis",
// },
// {
//   id: "data-analysis:senior-data-scientist:davila7",
//   title: "senior-data-scientist",
//   description:
//     "Advanced data science workflows covering experimentation, causal inference, and analytics.",
//   group: "Data & AI",
//   category: "Data Analysis",
// },
// {
//   id: "data-analysis:tensorboard:davila7",
//   title: "tensorboard",
//   description:
//     "Visualize training metrics, debug models, and compare experiments with TensorBoard.",
//   group: "Data & AI",
//   category: "Data Analysis",
// },
// {
//   id: "data-analysis:neurokit2:davila7",
//   title: "neurokit2",
//   description:
//     "Analyze physiological biosignals including ECG, EEG, EDA, and EMG.",
//   group: "Data & AI",
//   category: "Data Analysis",
// },
// {
//   id: "data-analysis:seaborn:davila7",
//   title: "seaborn",
//   description:
//     "Statistical visualization library for exploratory analysis and publication figures.",
//   group: "Data & AI",
//   category: "Data Analysis",
// },
// {
//   id: "data-analysis:deeptools:davila7",
//   title: "deeptools",
//   description:
//     "NGS analysis toolkit for ChIP-seq, RNA-seq, and ATAC-seq visualization.",
//   group: "Data & AI",
//   category: "Data Analysis",
// },
// {
//   id: "data-analysis:ux-researcher-designer:davila7",
//   title: "ux-researcher-designer",
//   description:
//     "UX research toolkit for personas, journey mapping, and usability testing.",
//   group: "Data & AI",
//   category: "Data Analysis",
// },
// {
//   id: "data-analysis:anndata:davila7",
//   title: "anndata",
//   description:
//     "Manage annotated data matrices for single-cell genomics and biological datasets.",
//   group: "Data & AI",
//   category: "Data Analysis",
// },
// {
//   id: "data-analysis:plotly:davila7",
//   title: "plotly",
//   description:
//     "Interactive scientific and statistical visualization library for Python.",
//   group: "Data & AI",
//   category: "Data Analysis",
// },
// {
//   id: "data-analysis:umap-learn:davila7",
//   title: "umap-learn",
//   description:
//     "UMAP dimensionality reduction for visualization and clustering preprocessing.",
//   group: "Data & AI",
//   category: "Data Analysis",
// },
// {
//   id: "data-analysis:xlsx:davila7",
//   title: "xlsx",
//   description:
//     "Spreadsheet toolkit for creating, editing, analyzing, and visualizing tabular data.",
//   group: "Data & AI",
//   category: "Data Analysis",
// },
// {
//   id: "data-analysis:statistical-analysis:davila7",
//   title: "statistical-analysis",
//   description:
//     "Hypothesis testing, regression, Bayesian stats, and APA-style reporting.",
//   group: "Data & AI",
//   category: "Data Analysis",
// },
// {
//   id: "data-analysis:market-research-reports:davila7",
//   title: "market-research-reports",
//   description:
//     "Generate consulting-style market research reports with strategic frameworks.",
//   group: "Data & AI",
//   category: "Data Analysis",
// },
// {
//   id: "data-analysis:reactome-database:davila7",
//   title: "reactome-database",
//   description:
//     "Query Reactome for pathway analysis, enrichment, and gene-pathway mapping.",
//   group: "Data & AI",
//   category: "Data Analysis",
// },
// {
//   id: "data-analysis:networkx:davila7",
//   title: "networkx",
//   description:
//     "Create, analyze, and visualize complex networks and graph structures.",
//   group: "Data & AI",
//   category: "Data Analysis",
// },
// {
//   id: "data-analysis:geopandas:davila7",
//   title: "geopandas",
//   description:
//     "Geospatial vector data analysis with shapefiles, GeoJSON, and PostGIS.",
//   group: "Data & AI",
//   category: "Data Analysis",
// },
// {
//   id: "data-analysis:vaex:davila7",
//   title: "vaex",
//   description:
//     "Out-of-core DataFrame processing for billion-row datasets.",
//   group: "Data & AI",
//   category: "Data Analysis",
// },
// {
//   id: "data-analysis:excel-analysis:davila7",
//   title: "excel-analysis",
//   description:
//     "Analyze Excel spreadsheets, pivot tables, and charts.",
//   group: "Data & AI",
//   category: "Data Analysis",
// },
// {
//   id: "data-analysis:dask:davila7",
//   title: "dask",
//   description:
//     "Parallel and distributed computing for pandas and NumPy workloads.",
//   group: "Data & AI",
//   category: "Data Analysis",
// },
// {
//   id: "data-analysis:scientific-visualization:davila7",
//   title: "scientific-visualization",
//   description:
//     "Create publication-ready scientific figures with advanced layout control.",
//   group: "Data & AI",
//   category: "Data Analysis",
// },
// {
//   id: "data-analysis:polars:davila7",
//   title: "polars",
//   description:
//     "High-performance DataFrame library built on Apache Arrow.",
//   group: "Data & AI",
//   category: "Data Analysis",
// },
// {
//   id: "data-analysis:datacommons-client:davila7",
//   title: "datacommons-client",
//   description:
//     "Query public statistical datasets including demographics and economic indicators.",
//   group: "Data & AI",
//   category: "Data Analysis",
// },
// {
//   id: "data-analysis:pydeseq2:davila7",
//   title: "pydeseq2",
//   description:
//     "Differential gene expression analysis using Python DESeq2.",
//   group: "Data & AI",
//   category: "Data Analysis",
// },
// {
//   id: "data-analysis:matplotlib:davila7",
//   title: "matplotlib",
//   description:
//     "Foundational plotting library for scientific and statistical visualization.",
//   group: "Data & AI",
//   category: "Data Analysis",
// },
// {
//   id: "data-analysis:scvi-tools:davila7",
//   title: "scvi-tools",
//   description:
//     "Probabilistic modeling for single-cell and spatial omics data.",
//   group: "Data & AI",
//   category: "Data Analysis",
// },
// {
//   id: "data-analysis:scientific-schematics:davila7",
//   title: "scientific-schematics",
//   description:
//     "Generate publication-quality scientific diagrams and schematics.",
//   group: "Data & AI",
//   category: "Data Analysis",
// },
// {
//   id: "data-analysis:hypogenic:davila7",
//   title: "hypogenic",
//   description:
//     "Automated hypothesis generation and testing using LLMs.",
//   group: "Data & AI",
//   category: "Data Analysis",
// },
// {
//   id: "data-analysis:g2-legend-expert:antvis",
//   title: "g2-legend-expert",
//   description:
//     "Expert knowledge for legend rendering and interaction in G2 visualizations.",
//   group: "Data & AI",
//   category: "Data Analysis",
// },
// {
//   id: "data-analysis:timescaledb:2025emma",
//   title: "timescaledb",
//   description:
//     "Time-series analytics with PostgreSQL hypertables and continuous aggregates.",
//   group: "Data & AI",
//   category: "Data Analysis",
// },
// {
//   id: "data-analysis:clickhouse-query:civitai",
//   title: "clickhouse-query",
//   description:
//     "Run analytical queries on ClickHouse for metrics and event data.",
//   group: "Data & AI",
//   category: "Data Analysis",
// },
// {
//   id: "data-analysis:market-research-reports:k-dense-ai",
//   title: "market-research-reports",
//   description:
//     "Generate large-scale consulting-style market research reports.",
//   group: "Data & AI",
//   category: "Data Analysis",
// },
// // ----------------------------
// // Data Engineering
// // ----------------------------
// {
//   id: "data-engineering:airflow-dag-patterns:wshobson",
//   title: "airflow-dag-patterns",
//   description:
//     "Build production Apache Airflow DAGs with best practices for operators, sensors, testing, and deployment.",
//   group: "Data & AI",
//   category: "Data Engineering",
// },
// {
//   id: "data-engineering:sql-optimization-patterns:wshobson",
//   title: "sql-optimization-patterns",
//   description:
//     "Master SQL query optimization, indexing strategies, and EXPLAIN analysis to dramatically improve database performance.",
//   group: "Data & AI",
//   category: "Data Engineering",
// },
// {
//   id: "data-engineering:ml-pipeline-workflow:wshobson",
//   title: "ml-pipeline-workflow",
//   description:
//     "Build end-to-end MLOps pipelines from data preparation through model training and production deployment.",
//   group: "Data & AI",
//   category: "Data Engineering",
// },
// {
//   id: "data-engineering:data-quality-frameworks:wshobson",
//   title: "data-quality-frameworks",
//   description:
//     "Implement data quality validation with Great Expectations, dbt tests, and data contracts.",
//   group: "Data & AI",
//   category: "Data Engineering",
// },
// {
//   id: "data-engineering:database-migration:wshobson",
//   title: "database-migration",
//   description:
//     "Execute zero-downtime database migrations with schema changes, transformations, and rollback strategies.",
//   group: "Data & AI",
//   category: "Data Engineering",
// },
// {
//   id: "data-engineering:data-storytelling:wshobson",
//   title: "data-storytelling",
//   description:
//     "Transform data into compelling narratives for analytics and stakeholder communication.",
//   group: "Data & AI",
//   category: "Data Engineering",
// },
// {
//   id: "data-engineering:projection-patterns:wshobson",
//   title: "projection-patterns",
//   description:
//     "Build read models and projections from event streams for CQRS and event-sourced systems.",
//   group: "Data & AI",
//   category: "Data Engineering",
// },
// {
//   id: "data-engineering:spark-optimization:wshobson",
//   title: "spark-optimization",
//   description:
//     "Optimize Apache Spark jobs with partitioning, caching, shuffle tuning, and memory optimization.",
//   group: "Data & AI",
//   category: "Data Engineering",
// },
// {
//   id: "data-engineering:dbt-transformation-patterns:wshobson",
//   title: "dbt-transformation-patterns",
//   description:
//     "Master dbt for analytics engineering: transformations, testing, documentation, and incremental models.",
//   group: "Data & AI",
//   category: "Data Engineering",
// },
// {
//   id: "data-engineering:kpi-dashboard-design:wshobson",
//   title: "kpi-dashboard-design",
//   description:
//     "Design effective KPI dashboards with real-time monitoring and visualization best practices.",
//   group: "Data & AI",
//   category: "Data Engineering",
// },
// {
//   id: "data-engineering:snowflake-semanticview:github",
//   title: "snowflake-semanticview",
//   description:
//     "Create, alter, and validate Snowflake semantic views using Snowflake CLI.",
//   group: "Data & AI",
//   category: "Data Engineering",
// },
// {
//   id: "data-engineering:zarr-python:davila7",
//   title: "zarr-python",
//   description:
//     "Chunked N-D arrays for cloud storage with compression and parallel I/O.",
//   group: "Data & AI",
//   category: "Data Engineering",
// },
// {
//   id: "data-engineering:cocoindex:davila7",
//   title: "cocoindex",
//   description:
//     "Build ETL pipelines for AI data processing including vector embeddings and knowledge graphs.",
//   group: "Data & AI",
//   category: "Data Engineering",
// },
// {
//   id: "data-engineering:senior-data-engineer:davila7",
//   title: "senior-data-engineer",
//   description:
//     "World-class data engineering skill for scalable pipelines, ETL/ELT, and data infrastructure.",
//   group: "Data & AI",
//   category: "Data Engineering",
// },
// {
//   id: "data-engineering:pinecone:davila7",
//   title: "pinecone",
//   description:
//     "Managed vector database for production AI applications and large-scale semantic search.",
//   group: "Data & AI",
//   category: "Data Engineering",
// },
// {
//   id: "data-engineering:ray-data:davila7",
//   title: "ray-data",
//   description:
//     "Scalable distributed data processing for ML workloads across CPU and GPU.",
//   group: "Data & AI",
//   category: "Data Engineering",
// },
// {
//   id: "data-engineering:n8n-workflow-patterns:davila7",
//   title: "n8n-workflow-patterns",
//   description:
//     "Proven architectural patterns for building robust n8n workflows.",
//   group: "Data & AI",
//   category: "Data Engineering",
// },
// {
//   id: "data-engineering:railway-database:davila7",
//   title: "railway-database",
//   description:
//     "Add and connect managed databases (Postgres, Redis, MySQL, MongoDB) on Railway.",
//   group: "Data & AI",
//   category: "Data Engineering",
// },
// {
//   id: "data-engineering:vaex:davila7",
//   title: "vaex",
//   description:
//     "Out-of-core DataFrame processing for billion-row datasets beyond RAM limits.",
//   group: "Data & AI",
//   category: "Data Engineering",
// },
// {
//   id: "data-engineering:polars:davila7",
//   title: "polars",
//   description:
//     "High-performance DataFrame library built on Apache Arrow for fast ETL.",
//   group: "Data & AI",
//   category: "Data Engineering",
// },
// {
//   id: "data-engineering:timescaledb:2025emma",
//   title: "timescaledb",
//   description:
//     "PostgreSQL extension for high-performance time-series analytics.",
//   group: "Data & AI",
//   category: "Data Engineering",
// },
// {
//   id: "data-engineering:bloblang-authoring:redpanda",
//   title: "bloblang-authoring",
//   description:
//     "Create and debug Bloblang transformation scripts for streaming pipelines.",
//   group: "Data & AI",
//   category: "Data Engineering",
// },
// {
//   id: "data-engineering:component-search:redpanda",
//   title: "component-search",
//   description:
//     "Discover Redpanda Connect components for streaming data pipelines.",
//   group: "Data & AI",
//   category: "Data Engineering",
// },
// {
//   id: "data-engineering:pipeline-assistant:redpanda",
//   title: "pipeline-assistant",
//   description:
//     "Create, validate, and fix Redpanda Connect pipeline configurations.",
//   group: "Data & AI",
//   category: "Data Engineering",
// },
// {
//   id: "data-engineering:dsql:awslabs",
//   title: "dsql",
//   description:
//     "Build PostgreSQL-compatible serverless distributed SQL databases with Aurora DSQL.",
//   group: "Data & AI",
//   category: "Data Engineering",
// },
// {
//   id: "data-engineering:clickhouse-query:civitai",
//   title: "clickhouse-query",
//   description:
//     "Run ClickHouse queries for analytics and metrics exploration.",
//   group: "Data & AI",
//   category: "Data Engineering",
// },
// {
//   id: "data-engineering:vaex:k-dense-ai",
//   title: "vaex",
//   description:
//     "Out-of-core processing for massive tabular datasets with lazy evaluation.",
//   group: "Data & AI",
//   category: "Data Engineering",
// },
// {
//   id: "data-engineering:polars:k-dense-ai",
//   title: "polars",
//   description:
//     "Fast in-memory DataFrame library optimized for ETL pipelines.",
//   group: "Data & AI",
//   category: "Data Engineering",
// },
// {
//   id: "data-engineering:zarr-python:k-dense-ai",
//   title: "zarr-python",
//   description:
//     "Chunked compressed N-D arrays for large-scale scientific pipelines.",
//   group: "Data & AI",
//   category: "Data Engineering",
// },
// {
//   id: "data-engineering:query-builder:clidey",
//   title: "query-builder",
//   description:
//     "Convert natural language questions into SQL queries.",
//   group: "Data & AI",
//   category: "Data Engineering",
// },
// {
//   id: "data-engineering:schema-designer:clidey",
//   title: "schema-designer",
//   description:
//     "Design database schemas and model data relationships.",
//   group: "Data & AI",
//   category: "Data Engineering",
// },
// {
//   id: "data-engineering:whodb:clidey",
//   title: "whodb",
//   description:
//     "Database querying, schema exploration, and data analysis toolkit.",
//   group: "Data & AI",
//   category: "Data Engineering",
// },
// {
//   id: "data-engineering:hunt-analytics-generation:otrf",
//   title: "hunt-analytics-generation",
//   description:
//     "Generate behavior-driven analytics definitions for threat hunting.",
//   group: "Data & AI",
//   category: "Data Engineering",
// },
// {
//   id: "data-engineering:model-debugging:pollinations",
//   title: "model-debugging",
//   description:
//     "Debug and diagnose model errors in Pollinations services.",
//   group: "Data & AI",
//   category: "Data Engineering",
// },
// {
//   id: "data-engineering:docetl:ucbepic",
//   title: "docetl",
//   description:
//     "Build LLM-powered ETL pipelines for unstructured document processing.",
//   group: "Data & AI",
//   category: "Data Engineering",
// },
// {
//   id: "data-engineering:test-with-spanner:storj",
//   title: "test-with-spanner",
//   description:
//     "Run unit tests requiring the Google Spanner emulator.",
//   group: "Data & AI",
//   category: "Data Engineering",
// },
// {
//   id: "data-engineering:23-database-sharding:tencent",
//   title: "23-database-sharding",
//   description:
//     "Database sharding strategies including shard keys and cross-shard queries.",
//   group: "Data & AI",
//   category: "Data Engineering",
// },
// {
//   id: "data-engineering:22-yaml-pipeline-transfer:tencent",
//   title: "22-yaml-pipeline-transfer",
//   description:
//     "YAML pipeline conversion and Pipeline-as-Code workflows.",
//   group: "Data & AI",
//   category: "Data Engineering",
// },
// {
//   id: "data-engineering:n8n-workflow-patterns:czlonkowski",
//   title: "n8n-workflow-patterns",
//   description:
//     "Workflow architectural patterns from real-world n8n pipelines.",
//   group: "Data & AI",
//   category: "Data Engineering",
// },
// {
//   id: "data-engineering:setup-timescaledb-hypertables:timescale",
//   title: "setup-timescaledb-hypertables",
//   description:
//     "Step-by-step guide for designing TimescaleDB hypertables and policies.",
//   group: "Data & AI",
//   category: "Data Engineering",
// },
// {
//   id: "data-engineering:databases:mrgoonie",
//   title: "databases",
//   description:
//     "Work with MongoDB and PostgreSQL including schema design and performance tuning.",
//   group: "Data & AI",
//   category: "Data Engineering",
// },
// {
//   id: "data-engineering:loading-datasets:pymc-labs",
//   title: "loading-datasets",
//   description:
//     "Load internal example datasets for CausalPy workflows.",
//   group: "Data & AI",
//   category: "Data Engineering",
// },
// {
//   id: "data-engineering:oracle:steipete",
//   title: "oracle",
//   description:
//     "Bundle prompts and files for second-model review using @steipete/oracle CLI.",
//   group: "Data & AI",
//   category: "Data Engineering",
// },
// {
//   id: "data-engineering:insforge-schema-patterns:insforge",
//   title: "insforge-schema-patterns",
//   description:
//     "Database schema patterns including social graphs and multi-tenancy with RLS.",
//   group: "Data & AI",
//   category: "Data Engineering",
// },
// {
//   id: "data-engineering:validating-database-integrity:jeremylongshore",
//   title: "validating-database-integrity",
//   description:
//     "Ensure database integrity through comprehensive validation rules.",
//   group: "Data & AI",
//   category: "Data Engineering",
// },
// {
//   id: "data-engineering:managing-database-partitions:jeremylongshore",
//   title: "managing-database-partitions",
//   description:
//     "Implement and optimize database partitioning strategies.",
//   group: "Data & AI",
//   category: "Data Engineering",
// },
// {
//   id: "data-engineering:analyzing-database-indexes:jeremylongshore",
//   title: "analyzing-database-indexes",
//   description:
//     "Design and optimize database indexes to improve query performance.",
//   group: "Data & AI",
//   category: "Data Engineering",
// },
// {
//   id: "data-engineering:schema-optimization-orchestrator:jeremylongshore",
//   title: "schema-optimization-orchestrator",
//   description:
//     "Multi-phase schema optimization workflow orchestrator.",
//   group: "Data & AI",
//   category: "Data Engineering",
// },
// // ----------------------------
// // Machine Learning
// // ----------------------------
// {
//   id: "machine-learning:ml-pipeline-workflow:wshobson",
//   title: "ml-pipeline-workflow",
//   description:
//     "Build end-to-end MLOps pipelines from data preparation through model training, validation, and production deployment.",
//   group: "Data & AI",
//   category: "Machine Learning",
// },
// {
//   id: "machine-learning:prompt-engineering-patterns:wshobson",
//   title: "prompt-engineering-patterns",
//   description:
//     "Master advanced prompt engineering techniques to maximize LLM performance, reliability, and controllability in production.",
//   group: "Data & AI",
//   category: "Machine Learning",
// },
// {
//   id: "machine-learning:llm-evaluation:wshobson",
//   title: "llm-evaluation",
//   description:
//     "Implement comprehensive evaluation strategies for LLM applications using automated metrics, human feedback, and benchmarking.",
//   group: "Data & AI",
//   category: "Machine Learning",
// },
// {
//   id: "machine-learning:embedding-strategies:wshobson",
//   title: "embedding-strategies",
//   description:
//     "Select and optimize embedding models for semantic search and RAG applications.",
//   group: "Data & AI",
//   category: "Machine Learning",
// },
// {
//   id: "machine-learning:torch-geometric:davila7",
//   title: "torch-geometric",
//   description:
//     "Graph Neural Networks with PyG: node/graph classification, link prediction, and geometric deep learning.",
//   group: "Data & AI",
//   category: "Machine Learning",
// },
// {
//   id: "machine-learning:shap:davila7",
//   title: "shap",
//   description:
//     "Model interpretability using SHAP for feature importance, explainability, and bias analysis.",
//   group: "Data & AI",
//   category: "Machine Learning",
// },
// {
//   id: "machine-learning:moe-training:davila7",
//   title: "moe-training",
//   description:
//     "Train Mixture of Experts (MoE) models with DeepSpeed or HuggingFace for scalable sparse architectures.",
//   group: "Data & AI",
//   category: "Machine Learning",
// },
// {
//   id: "machine-learning:senior-ml-engineer:davila7",
//   title: "senior-ml-engineer",
//   description:
//     "World-class ML engineering skill for production ML systems, MLOps, and scalable deployment.",
//   group: "Data & AI",
//   category: "Machine Learning",
// },
// {
//   id: "machine-learning:phoenix-observability:davila7",
//   title: "phoenix-observability",
//   description:
//     "AI observability platform for tracing, evaluating, and monitoring LLM applications.",
//   group: "Data & AI",
//   category: "Machine Learning",
// },
// {
//   id: "machine-learning:axolotl:davila7",
//   title: "axolotl",
//   description:
//     "Fine-tune LLMs with Axolotl using LoRA, QLoRA, DPO, GRPO, and multimodal support.",
//   group: "Data & AI",
//   category: "Machine Learning",
// },
// {
//   id: "machine-learning:scikit-survival:davila7",
//   title: "scikit-survival",
//   description:
//     "Survival analysis and time-to-event modeling with scikit-survival.",
//   group: "Data & AI",
//   category: "Machine Learning",
// },
// {
//   id: "machine-learning:transformer-lens-interpretability:davila7",
//   title: "transformer-lens-interpretability",
//   description:
//     "Mechanistic interpretability research using TransformerLens and activation patching.",
//   group: "Data & AI",
//   category: "Machine Learning",
// },
// {
//   id: "machine-learning:evaluating-llms-harness:davila7",
//   title: "evaluating-llms-harness",
//   description:
//     "Benchmark LLMs across 60+ academic benchmarks including MMLU and HumanEval.",
//   group: "Data & AI",
//   category: "Machine Learning",
// },
// {
//   id: "machine-learning:pyhealth:davila7",
//   title: "pyhealth",
//   description:
//     "Healthcare AI toolkit for clinical ML models using EHR and physiological data.",
//   group: "Data & AI",
//   category: "Machine Learning",
// },
// {
//   id: "machine-learning:geniml:davila7",
//   title: "geniml",
//   description:
//     "Machine learning on genomic interval data including BED files and scATAC-seq.",
//   group: "Data & AI",
//   category: "Machine Learning",
// },
// {
//   id: "machine-learning:fine-tuning-with-trl:davila7",
//   title: "fine-tuning-with-trl",
//   description:
//     "Fine-tune LLMs with TRL using SFT, DPO, PPO, and GRPO.",
//   group: "Data & AI",
//   category: "Machine Learning",
// },
// {
//   id: "machine-learning:peft-fine-tuning:davila7",
//   title: "peft-fine-tuning",
//   description:
//     "Parameter-efficient fine-tuning using LoRA, QLoRA, and related techniques.",
//   group: "Data & AI",
//   category: "Machine Learning",
// },
// {
//   id: "machine-learning:senior-computer-vision:davila7",
//   title: "senior-computer-vision",
//   description:
//     "World-class computer vision skill for image, video, and visual AI systems.",
//   group: "Data & AI",
//   category: "Machine Learning",
// },
// {
//   id: "machine-learning:deepspeed:davila7",
//   title: "deepspeed",
//   description:
//     "Distributed training with DeepSpeed including ZeRO, FP16/BF16/FP8, and pipeline parallelism.",
//   group: "Data & AI",
//   category: "Machine Learning",
// },
// {
//   id: "machine-learning:llama-factory:davila7",
//   title: "llama-factory",
//   description:
//     "Fine-tune LLMs with LLaMA-Factory using no-code WebUI and QLoRA.",
//   group: "Data & AI",
//   category: "Machine Learning",
// },
// {
//   id: "machine-learning:pytorch-lightning:davila7",
//   title: "pytorch-lightning",
//   description:
//     "High-level PyTorch framework for scalable training with minimal boilerplate.",
//   group: "Data & AI",
//   category: "Machine Learning",
// },
// {
//   id: "machine-learning:knowledge-distillation:davila7",
//   title: "knowledge-distillation",
//   description:
//     "Compress large models using teacher–student knowledge distillation.",
//   group: "Data & AI",
//   category: "Machine Learning",
// },
// {
//   id: "machine-learning:pyvene-interventions:davila7",
//   title: "pyvene-interventions",
//   description:
//     "Causal interventions and activation patching for neural networks.",
//   group: "Data & AI",
//   category: "Machine Learning",
// },
// {
//   id: "machine-learning:modal-serverless-gpu:davila7",
//   title: "modal-serverless-gpu",
//   description:
//     "Serverless GPU platform for running ML workloads and deploying models.",
//   group: "Data & AI",
//   category: "Machine Learning",
// },
// {
//   id: "machine-learning:evaluating-code-models:davila7",
//   title: "evaluating-code-models",
//   description:
//     "Benchmark code generation models across HumanEval, MBPP, and MultiPL-E.",
//   group: "Data & AI",
//   category: "Machine Learning",
// },
// {
//   id: "machine-learning:senior-prompt-engineer:davila7",
//   title: "senior-prompt-engineer",
//   description:
//     "World-class prompt engineering for LLM optimization and AI product development.",
//   group: "Data & AI",
//   category: "Machine Learning",
// },
// {
//   id: "machine-learning:aeon:davila7",
//   title: "aeon",
//   description:
//     "Time series machine learning for forecasting, anomaly detection, and classification.",
//   group: "Data & AI",
//   category: "Machine Learning",
// },
// {
//   id: "machine-learning:pymc-bayesian-modeling:davila7",
//   title: "pymc-bayesian-modeling",
//   description:
//     "Bayesian modeling with PyMC using MCMC and variational inference.",
//   group: "Data & AI",
//   category: "Machine Learning",
// },
// {
//   id: "machine-learning:tensorrt-llm:davila7",
//   title: "tensorrt-llm",
//   description:
//     "Optimize LLM inference with NVIDIA TensorRT for low-latency, high-throughput serving.",
//   group: "Data & AI",
//   category: "Machine Learning",
// },
// {
//   id: "machine-learning:grpo-rl-training:davila7",
//   title: "grpo-rl-training",
//   description:
//     "GRPO reinforcement learning fine-tuning for reasoning-focused models.",
//   group: "Data & AI",
//   category: "Machine Learning",
// },
// {
//   id: "machine-learning:training-llms-megatron:davila7",
//   title: "training-llms-megatron",
//   description:
//     "Train large-scale LLMs with NVIDIA Megatron-Core using advanced parallelism.",
//   group: "Data & AI",
//   category: "Machine Learning",
// },
// {
//   id: "machine-learning:scikit-learn:davila7",
//   title: "scikit-learn",
//   description:
//     "Machine learning with scikit-learn for classification, regression, clustering, and pipelines.",
//   group: "Data & AI",
//   category: "Machine Learning",
// },
// {
//   id: "machine-learning:huggingface-accelerate:davila7",
//   title: "huggingface-accelerate",
//   description:
//     "Simple distributed training API for PyTorch, DeepSpeed, FSDP, and Megatron.",
//   group: "Data & AI",
//   category: "Machine Learning",
// },
// {
//   id: "machine-learning:modal:davila7",
//   title: "modal",
//   description:
//     "Run Python and ML workloads in the cloud with serverless containers and GPUs.",
//   group: "Data & AI",
//   category: "Machine Learning",
// },
// {
//   id: "machine-learning:rwkv-architecture:davila7",
//   title: "rwkv-architecture",
//   description:
//     "RWKV RNN-Transformer hybrid with linear-time inference and infinite context.",
//   group: "Data & AI",
//   category: "Machine Learning",
// },
// {
//   id: "machine-learning:gptq:davila7",
//   title: "gptq",
//   description:
//     "Post-training 4-bit quantization for LLMs with minimal accuracy loss.",
//   group: "Data & AI",
//   category: "Machine Learning",
// },
// {
//   id: "machine-learning:transformers:davila7",
//   title: "transformers",
//   description:
//     "Use pre-trained transformer models for NLP, vision, audio, and multimodal tasks.",
//   group: "Data & AI",
//   category: "Machine Learning",
// },
// {
//   id: "machine-learning:sparse-autoencoder-training:davila7",
//   title: "sparse-autoencoder-training",
//   description:
//     "Train Sparse Autoencoders (SAEs) for interpretability and feature discovery.",
//   group: "Data & AI",
//   category: "Machine Learning",
// },
// {
//   id: "machine-learning:mlflow:davila7",
//   title: "mlflow",
//   description:
//     "Track ML experiments, manage model registry, and deploy models with MLflow.",
//   group: "Data & AI",
//   category: "Machine Learning",
// },
// {
//   id: "machine-learning:weights-and-biases:davila7",
//   title: "weights-and-biases",
//   description:
//     "Track experiments, visualize training, and manage models with W&B.",
//   group: "Data & AI",
//   category: "Machine Learning",
// },
// {
//   id: "machine-learning:mamba-architecture:davila7",
//   title: "mamba-architecture",
//   description:
//     "State-space model architecture with linear-time inference and long context.",
//   group: "Data & AI",
//   category: "Machine Learning",
// },
// {
//   id: "machine-learning:hqq-quantization:davila7",
//   title: "hqq-quantization",
//   description:
//     "Half-Quadratic Quantization for LLMs without calibration data.",
//   group: "Data & AI",
//   category: "Machine Learning",
// },
// {
//   id: "machine-learning:model-merging:davila7",
//   title: "model-merging",
//   description:
//     "Merge multiple fine-tuned models using mergekit without retraining.",
//   group: "Data & AI",
//   category: "Machine Learning",
// },
// {
//   id: "machine-learning:ray-train:davila7",
//   title: "ray-train",
//   description:
//     "Distributed training orchestration with Ray across clusters.",
//   group: "Data & AI",
//   category: "Machine Learning",
// },
// {
//   id: "machine-learning:nnsight-remote-interpretability:davila7",
//   title: "nnsight-remote-interpretability",
//   description:
//     "Remote interpretability experiments on massive models using nnsight.",
//   group: "Data & AI",
//   category: "Machine Learning",
// },
// {
//   id: "machine-learning:skypilot-multi-cloud-orchestration:davila7",
//   title: "skypilot-multi-cloud-orchestration",
//   description:
//     "Multi-cloud orchestration for ML workloads with cost optimization.",
//   group: "Data & AI",
//   category: "Machine Learning",
// },
// {
//   id: "machine-learning:hypogenic:davila7",
//   title: "hypogenic",
//   description:
//     "Automated hypothesis generation and testing using LLMs.",
//   group: "Data & AI",
//   category: "Machine Learning",
// },
// // ----------------------------
// // Testing
// // ----------------------------
// {
//   id: "testing:writing-bundler-tests:oven-sh",
//   title: "writing-bundler-tests",
//   description:
//     "Guides writing bundler tests using itBundled/expectBundled in Bun.",
//   group: "Testing & Security",
//   category: "Testing",
// },
// {
//   id: "testing:writing-dev-server-tests:oven-sh",
//   title: "writing-dev-server-tests",
//   description:
//     "Guides writing HMR and Dev Server tests in Bun.",
//   group: "Testing & Security",
//   category: "Testing",
// },
// {
//   id: "testing:test-writer:leonardomso",
//   title: "test-writer",
//   description:
//     "Generate comprehensive Vitest tests for JavaScript concept documentation.",
//   group: "Testing & Security",
//   category: "Testing",
// },
// {
//   id: "testing:write-unit-tests:tldraw",
//   title: "write-unit-tests",
//   description:
//     "Writing unit and integration tests for the tldraw SDK using Vitest.",
//   group: "Testing & Security",
//   category: "Testing",
// },
// {
//   id: "testing:write-e2e-tests:tldraw",
//   title: "write-e2e-tests",
//   description:
//     "Writing Playwright E2E tests for tldraw applications.",
//   group: "Testing & Security",
//   category: "Testing",
// },
// {
//   id: "testing:webapp-testing:anthropics",
//   title: "webapp-testing",
//   description:
//     "Toolkit for testing local web applications using Playwright.",
//   group: "Testing & Security",
//   category: "Testing",
// },
// {
//   id: "testing:python-testing-patterns:wshobson",
//   title: "python-testing-patterns",
//   description:
//     "Comprehensive testing strategies in Python with pytest.",
//   group: "Testing & Security",
//   category: "Testing",
// },
// {
//   id: "testing:e2e-testing-patterns:wshobson",
//   title: "e2e-testing-patterns",
//   description:
//     "End-to-end testing patterns with Playwright and Cypress.",
//   group: "Testing & Security",
//   category: "Testing",
// },
// {
//   id: "testing:web3-testing:wshobson",
//   title: "web3-testing",
//   description:
//     "Test smart contracts using Hardhat and Foundry.",
//   group: "Testing & Security",
//   category: "Testing",
// },
// {
//   id: "testing:javascript-testing-patterns:wshobson",
//   title: "javascript-testing-patterns",
//   description:
//     "Testing strategies with Jest, Vitest, and Testing Library.",
//   group: "Testing & Security",
//   category: "Testing",
// },
// {
//   id: "testing:temporal-python-testing:wshobson",
//   title: "temporal-python-testing",
//   description:
//     "Test Temporal workflows with pytest, mocking, and replay testing.",
//   group: "Testing & Security",
//   category: "Testing",
// },
// {
//   id: "testing:web-renderer-test:remotion-dev",
//   title: "web-renderer-test",
//   description:
//     "Add test cases to the Remotion web renderer.",
//   group: "Testing & Security",
//   category: "Testing",
// },
// {
//   id: "testing:verify-tests-fail-without-fix:dotnet",
//   title: "verify-tests-fail-without-fix",
//   description:
//     "Verifies UI tests catch bugs by failing without the fix.",
//   group: "Testing & Security",
//   category: "Testing",
// },
// {
//   id: "testing:try-fix:dotnet",
//   title: "try-fix",
//   description:
//     "Proposes and tests independent fix attempts with automated rollback.",
//   group: "Testing & Security",
//   category: "Testing",
// },
// {
//   id: "testing:write-tests:dotnet",
//   title: "write-tests",
//   description:
//     "Creates UI tests for GitHub issues and verifies reproduction.",
//   group: "Testing & Security",
//   category: "Testing",
// },
// {
//   id: "testing:systematic-debugging:obra",
//   title: "systematic-debugging",
//   description:
//     "Structured debugging workflow before proposing fixes.",
//   group: "Testing & Security",
//   category: "Testing",
// },
// {
//   id: "testing:testing-python:jlowin",
//   title: "testing-python",
//   description:
//     "Write and evaluate effective Python tests using pytest.",
//   group: "Testing & Security",
//   category: "Testing",
// },
// {
//   id: "testing:e2e-frontend-validation:mastra-ai",
//   title: "e2e-frontend-validation",
//   description:
//     "End-to-end frontend validation workflow using Playwright MCP.",
//   group: "Testing & Security",
//   category: "Testing",
// },
// {
//   id: "testing:test-coverage-improver:openai",
//   title: "test-coverage-improver",
//   description:
//     "Identify low coverage and propose high-impact tests.",
//   group: "Testing & Security",
//   category: "Testing",
// },
// {
//   id: "testing:webapp-testing:github",
//   title: "webapp-testing",
//   description:
//     "Playwright-based toolkit for web app testing and debugging.",
//   group: "Testing & Security",
//   category: "Testing",
// },
// {
//   id: "testing:cts-triage:gfx-rs",
//   title: "cts-triage",
//   description:
//     "Run and investigate CTS test suite failures.",
//   group: "Testing & Security",
//   category: "Testing",
// },
// {
//   id: "testing:senior-qa:davila7",
//   title: "senior-qa",
//   description:
//     "Comprehensive QA and test automation skill for modern web apps.",
//   group: "Testing & Security",
//   category: "Testing",
// },
// {
//   id: "testing:prowler-test-ui:prowler-cloud",
//   title: "prowler-test-ui",
//   description:
//     "Playwright E2E testing patterns for the Prowler UI.",
//   group: "Testing & Security",
//   category: "Testing",
// },
// {
//   id: "testing:playwright:prowler-cloud",
//   title: "playwright",
//   description:
//     "Playwright testing patterns including POM and selectors.",
//   group: "Testing & Security",
//   category: "Testing",
// },
// {
//   id: "testing:prowler-test-sdk:prowler-cloud",
//   title: "prowler-test-sdk",
//   description:
//     "Testing patterns for the Prowler Python SDK.",
//   group: "Testing & Security",
//   category: "Testing",
// },
// {
//   id: "testing:prowler-test-api:prowler-cloud",
//   title: "prowler-test-api",
//   description:
//     "Testing patterns for Prowler APIs including RBAC and RLS.",
//   group: "Testing & Security",
//   category: "Testing",
// },
// {
//   id: "testing:pytest:prowler-cloud",
//   title: "pytest",
//   description:
//     "Pytest testing patterns including fixtures and parametrization.",
//   group: "Testing & Security",
//   category: "Testing",
// },
// {
//   id: "testing:g2-unit-testing-skills:antvis",
//   title: "g2-unit-testing-skills",
//   description:
//     "Unit testing guidelines for the G2 visualization library.",
//   group: "Testing & Security",
//   category: "Testing",
// },
// {
//   id: "testing:gpui-test:longbridge",
//   title: "gpui-test",
//   description:
//     "Writing tests for GPUI applications.",
//   group: "Testing & Security",
//   category: "Testing",
// },
// {
//   id: "testing:gpui-element:longbridge",
//   title: "gpui-element",
//   description:
//     "Implement custom UI elements with GPUI’s low-level API.",
//   group: "Testing & Security",
//   category: "Testing",
// },
// {
//   id: "testing:route-tester:diet103",
//   title: "route-tester",
//   description:
//     "Test authenticated routes using cookie-based authentication.",
//   group: "Testing & Security",
//   category: "Testing",
// },
// {
//   id: "testing:web-e2e:uniswap",
//   title: "web-e2e",
//   description:
//     "Run and debug Playwright E2E tests for Uniswap’s web app.",
//   group: "Testing & Security",
//   category: "Testing",
// },
// {
//   id: "testing:agent-browser:everyinc",
//   title: "agent-browser",
//   description:
//     "Browser automation via Vercel agent-browser CLI.",
//   group: "Testing & Security",
//   category: "Testing",
// },
// {
//   id: "testing:browser:danielmiessler",
//   title: "browser",
//   description:
//     "Debug-first browser automation with full visibility.",
//   group: "Testing & Security",
//   category: "Testing",
// },
// {
//   id: "testing:testing-patterns:chriswiles",
//   title: "testing-patterns",
//   description:
//     "Jest testing patterns and TDD workflows.",
//   group: "Testing & Security",
//   category: "Testing",
// },
// {
//   id: "testing:test-gen:phodal",
//   title: "test-gen",
//   description:
//     "Generate comprehensive unit tests for code files.",
//   group: "Testing & Security",
//   category: "Testing",
// },
// {
//   id: "testing:e2e-tester:redpanda-data",
//   title: "e2e-tester",
//   description:
//     "Write and debug Playwright E2E tests with testcontainers.",
//   group: "Testing & Security",
//   category: "Testing",
// },
// {
//   id: "testing:create-unit-test:anysoftkeyboard",
//   title: "create-unit-test",
//   description:
//     "Create and run unit tests following project conventions.",
//   group: "Testing & Security",
//   category: "Testing",
// },
// {
//   id: "testing:test-with-spanner:storj",
//   title: "test-with-spanner",
//   description:
//     "Run unit tests requiring the Spanner emulator.",
//   group: "Testing & Security",
//   category: "Testing",
// },
// {
//   id: "testing:tdd:parcadei",
//   title: "tdd",
//   description:
//     "Test-driven development workflow: plan → test → implement.",
//   group: "Testing & Security",
//   category: "Testing",
// },
// {
//   id: "testing:test:parcadei",
//   title: "test",
//   description:
//     "Comprehensive testing workflow covering unit to E2E tests.",
//   group: "Testing & Security",
//   category: "Testing",
// },
// {
//   id: "testing:complete-skill:parcadei",
//   title: "complete-skill",
//   description:
//     "Complete end-to-end testing skill.",
//   group: "Testing & Security",
//   category: "Testing",
// },
// {
//   id: "testing:ispc-lit-tests:ispc",
//   title: "ispc-lit-tests",
//   description:
//     "Best practices for creating ISPC regression tests.",
//   group: "Testing & Security",
//   category: "Testing",
// },
// {
//   id: "testing:03-unit-testing:tencentblueking",
//   title: "03-unit-testing",
//   description:
//     "Unit testing guide covering JUnit5, MockK, and TDD practices.",
//   group: "Testing & Security",
//   category: "Testing",
// },
// {
//   id: "testing:backend-testing:exceptionless",
//   title: "backend-testing",
//   description:
//     "Backend testing with xUnit and integration test utilities.",
//   group: "Testing & Security",
//   category: "Testing",
// },
// {
//   id: "testing:e2e-testing-frontend:exceptionless",
//   title: "e2e-testing-frontend",
//   description:
//     "End-to-end frontend testing with Playwright.",
//   group: "Testing & Security",
//   category: "Testing",
// },
// {
//   id: "testing:frontend-testing:exceptionless",
//   title: "frontend-testing",
//   description:
//     "Frontend unit and component testing with Vitest.",
//   group: "Testing & Security",
//   category: "Testing",
// },
// {
//   id: "testing:debug-with-valgrind:facet-rs",
//   title: "debug-with-valgrind",
//   description:
//     "Debug crashes and memory errors using Valgrind.",
//   group: "Testing & Security",
//   category: "Testing",
// },
// // ----------------------------
// // Code Quality
// // ----------------------------
// {
//   id: "code-quality:pr-creator:google-gemini",
//   title: "pr-creator",
//   description:
//     "Create pull requests following repository templates and standards.",
//   group: "Testing & Security",
//   category: "Code Quality",
// },
// {
//   id: "code-quality:typescript-write:metabase",
//   title: "typescript-write",
//   description:
//     "Write TypeScript and JavaScript code following Metabase standards.",
//   group: "Testing & Security",
//   category: "Code Quality",
// },
// {
//   id: "code-quality:docs-review:metabase",
//   title: "docs-review",
//   description:
//     "Review documentation for compliance with the Metabase style guide.",
//   group: "Testing & Security",
//   category: "Code Quality",
// },
// {
//   id: "code-quality:clojure-review:metabase",
//   title: "clojure-review",
//   description:
//     "Review Clojure/ClojureScript code for quality and style violations.",
//   group: "Testing & Security",
//   category: "Code Quality",
// },
// {
//   id: "code-quality:typescript-review:metabase",
//   title: "typescript-review",
//   description:
//     "Review TypeScript/JavaScript code for quality and style compliance.",
//   group: "Testing & Security",
//   category: "Code Quality",
// },
// {
//   id: "code-quality:code-review:agno-agi",
//   title: "code-review",
//   description:
//     "Code review assistance with linting, style checking, and best practices.",
//   group: "Testing & Security",
//   category: "Code Quality",
// },
// {
//   id: "code-quality:shellcheck-configuration:wshobson",
//   title: "shellcheck-configuration",
//   description:
//     "Configure ShellCheck static analysis for shell script quality.",
//   group: "Testing & Security",
//   category: "Code Quality",
// },
// {
//   id: "code-quality:sast-configuration:wshobson",
//   title: "sast-configuration",
//   description:
//     "Configure Static Application Security Testing (SAST) tools.",
//   group: "Testing & Security",
//   category: "Code Quality",
// },
// {
//   id: "code-quality:reviewing-code:jlowin",
//   title: "reviewing-code",
//   description:
//     "Review code for quality, maintainability, and correctness.",
//   group: "Testing & Security",
//   category: "Code Quality",
// },
// {
//   id: "code-quality:lint-fixer:yamadashy",
//   title: "lint-fixer",
//   description:
//     "Run linting and automatically fix lint errors.",
//   group: "Testing & Security",
//   category: "Code Quality",
// },
// {
//   id: "code-quality:code-change-verification:openai",
//   title: "code-change-verification",
//   description:
//     "Run mandatory verification when runtime or build code changes.",
//   group: "Testing & Security",
//   category: "Code Quality",
// },
// {
//   id: "code-quality:docs-sync:openai",
//   title: "docs-sync",
//   description:
//     "Audit and sync documentation with codebase changes.",
//   group: "Testing & Security",
//   category: "Code Quality",
// },
// {
//   id: "code-quality:vscode-ext-commands:github",
//   title: "vscode-ext-commands",
//   description:
//     "Guidelines for contributing commands to VS Code extensions.",
//   group: "Testing & Security",
//   category: "Code Quality",
// },
// {
//   id: "code-quality:code-reviewer:davila7",
//   title: "code-reviewer",
//   description:
//     "Comprehensive multi-language code review skill.",
//   group: "Testing & Security",
//   category: "Code Quality",
// },
// {
//   id: "code-quality:deslop:davila7",
//   title: "deslop",
//   description:
//     "Remove AI-generated code slop and style inconsistencies.",
//   group: "Testing & Security",
//   category: "Code Quality",
// },
// {
//   id: "code-quality:move-code-quality:davila7",
//   title: "move-code-quality",
//   description:
//     "Analyze Move language packages against official quality standards.",
//   group: "Testing & Security",
//   category: "Code Quality",
// },
// {
//   id: "code-quality:n8n-validation-expert:davila7",
//   title: "n8n-validation-expert",
//   description:
//     "Interpret and fix validation errors and warnings.",
//   group: "Testing & Security",
//   category: "Code Quality",
// },
// {
//   id: "code-quality:code-review:davila7",
//   title: "code-review",
//   description:
//     "Perform code reviews following Sentry engineering practices.",
//   group: "Testing & Security",
//   category: "Code Quality",
// },
// {
//   id: "code-quality:code-review:shareai-lab",
//   title: "code-review",
//   description:
//     "Thorough code review with security and maintainability analysis.",
//   group: "Testing & Security",
//   category: "Code Quality",
// },
// {
//   id: "code-quality:prowler-ci:prowler-cloud",
//   title: "prowler-ci",
//   description:
//     "Assist with CI checks, PR gates, and GitHub Actions workflows.",
//   group: "Testing & Security",
//   category: "Code Quality",
// },
// {
//   id: "code-quality:prowler-compliance:prowler-cloud",
//   title: "prowler-compliance",
//   description:
//     "Create and manage compliance frameworks (CIS, NIST, ISO, etc.).",
//   group: "Testing & Security",
//   category: "Code Quality",
// },
// {
//   id: "code-quality:verification-quality-assurance:ruvnet",
//   title: "verification-quality-assurance",
//   description:
//     "Truth scoring, quality verification, and automatic rollback system.",
//   group: "Testing & Security",
//   category: "Code Quality",
// },
// {
//   id: "code-quality:woocommerce-dev-cycle:woocommerce",
//   title: "woocommerce-dev-cycle",
//   description:
//     "Run tests, linting, and quality checks for WooCommerce development.",
//   group: "Testing & Security",
//   category: "Code Quality",
// },
// {
//   id: "code-quality:woocommerce-code-review:woocommerce",
//   title: "woocommerce-code-review",
//   description:
//     "Review WooCommerce code changes for coding standards compliance.",
//   group: "Testing & Security",
//   category: "Code Quality",
// },
// {
//   id: "code-quality:tests-maintenance:jetbrains",
//   title: "tests-maintenance",
//   description:
//     "Maintain test suite quality and readability.",
//   group: "Testing & Security",
//   category: "Code Quality",
// },
// {
//   id: "code-quality:doc-sync:jetbrains",
//   title: "doc-sync",
//   description:
//     "Keep documentation in sync with code changes.",
//   group: "Testing & Security",
//   category: "Code Quality",
// },
// {
//   id: "code-quality:reviewing-changes:bitwarden",
//   title: "reviewing-changes",
//   description:
//     "Android-specific code review workflow enhancements.",
//   group: "Testing & Security",
//   category: "Code Quality",
// },
// {
//   id: "code-quality:vscode-release-notes-writer:microsoft",
//   title: "vscode-release-notes-writer",
//   description:
//     "Write and review VS Code release notes.",
//   group: "Testing & Security",
//   category: "Code Quality",
// },
// {
//   id: "code-quality:code-review:cockroachdb",
//   title: "code-review",
//   description:
//     "Review Pebble codebase changes for correctness and performance.",
//   group: "Testing & Security",
//   category: "Code Quality",
// },
// {
//   id: "code-quality:code-review:kyegomez",
//   title: "code-review",
//   description:
//     "Comprehensive code review focusing on security and performance.",
//   group: "Testing & Security",
//   category: "Code Quality",
// },
// {
//   id: "code-quality:every-style-editor:everyinc",
//   title: "every-style-editor",
//   description:
//     "Ensure copy adheres to Every’s style guide.",
//   group: "Testing & Security",
//   category: "Code Quality",
// },
// {
//   id: "code-quality:git:epicenterhq",
//   title: "git",
//   description:
//     "Git commit and pull request guidelines using conventional commits.",
//   group: "Testing & Security",
//   category: "Code Quality",
// },
// {
//   id: "code-quality:qlty-check:parcadei",
//   title: "qlty-check",
//   description:
//     "Code quality checks, formatting, and metrics via qlty CLI.",
//   group: "Testing & Security",
//   category: "Code Quality",
// },
// {
//   id: "code-quality:web-design-guidelines:vercel-labs",
//   title: "web-design-guidelines",
//   description:
//     "Review UI code for web interface and accessibility guidelines.",
//   group: "Testing & Security",
//   category: "Code Quality",
// },
// // ----------------------------
// // Research — Academic
// // ----------------------------
// {
//   id: "research:hybrid-search-implementation:wshobson",
//   title: "hybrid-search-implementation",
//   description:
//     "Combine vector and keyword search for improved retrieval in RAG and search systems.",
//   group: "Research",
//   category: "Academic",
// },
// {
//   id: "research:content-research-writer:composiohq",
//   title: "content-research-writer",
//   description:
//     "Research-assisted academic and long-form writing with citations and outline iteration.",
//   group: "Research",
//   category: "Academic",
// },
// {
//   id: "research:scientific-writing",
//   title: "scientific-writing",
//   description:
//     "Write full scientific manuscripts using IMRAD structure, formal citations, and reporting standards.",
//   group: "Research",
//   category: "Academic",
// },
// {
//   id: "research:research-grants",
//   title: "research-grants",
//   description:
//     "Write competitive research grant proposals (NSF, NIH, DOE, DARPA) with agency-specific requirements.",
//   group: "Research",
//   category: "Academic",
// },
// {
//   id: "research:evaluating-llms-harness",
//   title: "evaluating-llms-harness",
//   description:
//     "Benchmark LLMs using academic evaluation suites like MMLU, HumanEval, GSM8K, and TruthfulQA.",
//   group: "Research",
//   category: "Academic",
// },
// {
//   id: "research:literature-review",
//   title: "literature-review",
//   description:
//     "Conduct systematic literature reviews and meta-analyses with verified citations.",
//   group: "Research",
//   category: "Academic",
// },
// {
//   id: "research:clinical-decision-support",
//   title: "clinical-decision-support",
//   description:
//     "Generate evidence-based clinical decision support documents with statistical analysis.",
//   group: "Research",
//   category: "Academic",
// },
// {
//   id: "research:biorxiv-database",
//   title: "biorxiv-database",
//   description:
//     "Search and retrieve life-science preprints from bioRxiv with metadata and PDFs.",
//   group: "Research",
//   category: "Academic",
// },
// {
//   id: "research:peer-review",
//   title: "peer-review",
//   description:
//     "Systematic peer review of manuscripts and grants covering methodology and rigor.",
//   group: "Research",
//   category: "Academic",
// },
// {
//   id: "research:research-lookup",
//   title: "research-lookup",
//   description:
//     "Search academic literature and technical research with citations via Perplexity models.",
//   group: "Research",
//   category: "Academic",
// },
// {
//   id: "research:biomni",
//   title: "biomni",
//   description:
//     "Autonomous biomedical research agent for genomics, drug discovery, and clinical analysis.",
//   group: "Research",
//   category: "Academic",
// },
// {
//   id: "research:denario",
//   title: "denario",
//   description:
//     "Multi-agent scientific research system from data analysis to publication.",
//   group: "Research",
//   category: "Academic",
// },
// {
//   id: "research:paper-2-web",
//   title: "paper-2-web",
//   description:
//     "Convert academic papers into websites, posters, and video abstracts.",
//   group: "Research",
//   category: "Academic",
// },
// {
//   id: "research:venue-templates",
//   title: "venue-templates",
//   description:
//     "Access LaTeX templates and submission requirements for major journals and conferences.",
//   group: "Research",
//   category: "Academic",
// },
// {
//   id: "research:uspto-database",
//   title: "uspto-database",
//   description:
//     "Search USPTO patents and trademarks for prior art and IP analysis.",
//   group: "Research",
//   category: "Academic",
// },
// {
//   id: "research:perplexity-search",
//   title: "perplexity-search",
//   description:
//     "AI-powered web and academic search with real-time citations.",
//   group: "Research",
//   category: "Academic",
// },
// {
//   id: "research:citation-management",
//   title: "citation-management",
//   description:
//     "Manage academic citations, DOIs, BibTeX, and reference validation.",
//   group: "Research",
//   category: "Academic",
// },
// {
//   id: "research:chroma",
//   title: "chroma",
//   description:
//     "Open-source embedding database for semantic search and academic RAG workflows.",
//   group: "Research",
//   category: "Academic",
// },
// {
//   id: "research:protocolsio-integration",
//   title: "protocolsio-integration",
//   description:
//     "Manage and publish scientific protocols using the protocols.io API.",
//   group: "Research",
//   category: "Academic",
// },
// {
//   id: "research:openalex-database",
//   title: "openalex-database",
//   description:
//     "Query and analyze 240M+ scholarly works using the OpenAlex database.",
//   group: "Research",
//   category: "Academic",
// },
// {
//   id: "research:scientific-critical-thinking",
//   title: "scientific-critical-thinking",
//   description:
//     "Evaluate research rigor, experimental design, and evidence quality.",
//   group: "Research",
//   category: "Academic",
// },
// {
//   id: "research:pubmed-database",
//   title: "pubmed-database",
//   description:
//     "Direct API access to PubMed for biomedical literature searches.",
//   group: "Research",
//   category: "Academic",
// },
// {
//   id: "research:hypogenic",
//   title: "hypogenic",
//   description:
//     "Automated hypothesis generation and testing from datasets and literature.",
//   group: "Research",
//   category: "Academic",
// },
// {
//   id: "research:scientific-brainstorming",
//   title: "scientific-brainstorming",
//   description:
//     "Creative research ideation and interdisciplinary hypothesis exploration.",
//   group: "Research",
//   category: "Academic",
// },
// {
//   id: "research:agentdb-vector-search",
//   title: "agentdb-vector-search",
//   description:
//     "Semantic vector search for intelligent academic document retrieval.",
//   group: "Research",
//   category: "Academic",
// },
// {
//   id: "research:web-research",
//   title: "web-research",
//   description:
//     "Structured web research workflows for academic and technical discovery.",
//   group: "Research",
//   category: "Academic",
// },
// {
//   id: "research:arxiv-search",
//   title: "arxiv-search",
//   description:
//     "Search arXiv for preprints across CS, physics, math, and biology.",
//   group: "Research",
//   category: "Academic",
// },
// {
//   id: "research:advanced-evaluation",
//   title: "advanced-evaluation",
//   description:
//     "LLM-as-judge evaluation pipelines and rubric-based model comparison.",
//   group: "Research",
//   category: "Academic",
// },
// // ----------------------------
// // Research — Scientific Computing
// // ----------------------------
// {
//   id: "research:fluidsim",
//   title: "fluidsim",
//   description:
//     "Computational fluid dynamics simulations using pseudospectral FFT methods for 2D/3D flows.",
//   group: "Research",
//   category: "Scientific Computing",
// },
// {
//   id: "research:exploratory-data-analysis",
//   title: "exploratory-data-analysis",
//   description:
//     "Comprehensive exploratory analysis of scientific datasets across 200+ formats.",
//   group: "Research",
//   category: "Scientific Computing",
// },
// {
//   id: "research:cellxgene-census",
//   title: "cellxgene-census",
//   description:
//     "Population-scale single-cell analysis using CZ CELLxGENE Census (61M+ cells).",
//   group: "Research",
//   category: "Scientific Computing",
// },
// {
//   id: "research:alphafold-database",
//   title: "alphafold-database",
//   description:
//     "Access and analyze AlphaFold protein structure predictions for structural biology.",
//   group: "Research",
//   category: "Scientific Computing",
// },
// {
//   id: "research:geniml",
//   title: "geniml",
//   description:
//     "Machine learning on genomic interval data including ATAC-seq and region embeddings.",
//   group: "Research",
//   category: "Scientific Computing",
// },
// {
//   id: "research:diffdock",
//   title: "diffdock",
//   description:
//     "Diffusion-based protein–ligand docking for structure-based drug discovery.",
//   group: "Research",
//   category: "Scientific Computing",
// },
// {
//   id: "research:hmdb-database",
//   title: "hmdb-database",
//   description:
//     "Human Metabolome Database access for metabolomics and biomarker discovery.",
//   group: "Research",
//   category: "Scientific Computing",
// },
// {
//   id: "research:dnanexus-integration",
//   title: "dnanexus-integration",
//   description:
//     "Cloud genomics workflows using DNAnexus for FASTQ/BAM/VCF pipelines.",
//   group: "Research",
//   category: "Scientific Computing",
// },
// {
//   id: "research:benchling-integration",
//   title: "benchling-integration",
//   description:
//     "Benchling API integration for lab data, registries, and ELN workflows.",
//   group: "Research",
//   category: "Scientific Computing",
// },
// {
//   id: "research:neurokit2",
//   title: "neurokit2",
//   description:
//     "Physiological signal processing for ECG, EEG, EDA, EMG, and psychophysiology.",
//   group: "Research",
//   category: "Scientific Computing",
// },
// {
//   id: "research:biopython",
//   title: "biopython",
//   description:
//     "Core Python toolkit for molecular biology, sequence analysis, and BLAST workflows.",
//   group: "Research",
//   category: "Scientific Computing",
// },
// {
//   id: "research:bioservices",
//   title: "bioservices",
//   description:
//     "Unified Python interface to 40+ bioinformatics databases (UniProt, KEGG, ChEMBL).",
//   group: "Research",
//   category: "Scientific Computing",
// },
// {
//   id: "research:deeptools",
//   title: "deeptools",
//   description:
//     "NGS visualization and QC toolkit for ChIP-seq, RNA-seq, and ATAC-seq.",
//   group: "Research",
//   category: "Scientific Computing",
// },
// {
//   id: "research:chembl-database",
//   title: "chembl-database",
//   description:
//     "Drug discovery and bioactivity analysis using the ChEMBL database.",
//   group: "Research",
//   category: "Scientific Computing",
// },
// {
//   id: "research:omero-integration",
//   title: "omero-integration",
//   description:
//     "Microscopy image management and analysis via the OMERO platform.",
//   group: "Research",
//   category: "Scientific Computing",
// },
// {
//   id: "research:qutip",
//   title: "qutip",
//   description:
//     "Quantum system simulation and analysis using QuTiP for open and closed systems.",
//   group: "Research",
//   category: "Scientific Computing",
// },
// {
//   id: "research:cirq",
//   title: "cirq",
//   description:
//     "Quantum circuit design, simulation, and execution on quantum hardware.",
//   group: "Research",
//   category: "Scientific Computing",
// },
// {
//   id: "research:simpy",
//   title: "simpy",
//   description:
//     "Discrete-event simulation framework for systems with queues and shared resources.",
//   group: "Research",
//   category: "Scientific Computing",
// },
// {
//   id: "research:scanpy",
//   title: "scanpy",
//   description:
//     "Single-cell RNA-seq analysis including QC, clustering, and trajectory inference.",
//   group: "Research",
//   category: "Scientific Computing",
// },
// {
//   id: "research:rdkit",
//   title: "rdkit",
//   description:
//     "Cheminformatics toolkit for molecular descriptors, similarity, and reactions.",
//   group: "Research",
//   category: "Scientific Computing",
// },
// {
//   id: "research:deepchem",
//   title: "deepchem",
//   description:
//     "Molecular machine learning toolkit for drug discovery and ADMET prediction.",
//   group: "Research",
//   category: "Scientific Computing",
// },
// {
//   id: "research:molfeat",
//   title: "molfeat",
//   description:
//     "Molecular featurization library for machine learning and QSAR models.",
//   group: "Research",
//   category: "Scientific Computing",
// },
// {
//   id: "research:opentargets-database",
//   title: "opentargets-database",
//   description:
//     "Therapeutic target identification using genetics, omics, and drug evidence.",
//   group: "Research",
//   category: "Scientific Computing",
// },
// {
//   id: "research:pydeseq2",
//   title: "pydeseq2",
//   description:
//     "Differential gene expression analysis for bulk RNA-seq using DESeq2.",
//   group: "Research",
//   category: "Scientific Computing",
// },
// {
//   id: "research:scikit-bio",
//   title: "scikit-bio",
//   description:
//     "Biological data analysis including phylogenetics and microbiome statistics.",
//   group: "Research",
//   category: "Scientific Computing",
// },
// // ----------------------------
// // Research — Computational Chemistry
// // ----------------------------
// {
//   id: "research:rdkit",
//   title: "rdkit",
//   description:
//     "Core cheminformatics toolkit for molecular structures, descriptors, fingerprints, and reactions.",
//   group: "Research",
//   category: "Computational Chemistry",
// },
// {
//   id: "research:datamol",
//   title: "datamol",
//   description:
//     "Pythonic wrapper around RDKit for streamlined drug discovery workflows.",
//   group: "Research",
//   category: "Computational Chemistry",
// },
// {
//   id: "research:medchem",
//   title: "medchem",
//   description:
//     "Medicinal chemistry filters including Lipinski, Veber, PAINS, and structural alerts.",
//   group: "Research",
//   category: "Computational Chemistry",
// },
// {
//   id: "research:diffdock",
//   title: "diffdock",
//   description:
//     "Diffusion-based molecular docking for protein–ligand pose prediction.",
//   group: "Research",
//   category: "Computational Chemistry",
// },
// {
//   id: "research:esm",
//   title: "esm",
//   description:
//     "Protein language models for sequence, structure, and functional protein design.",
//   group: "Research",
//   category: "Computational Chemistry",
// },
// {
//   id: "research:deepchem",
//   title: "deepchem",
//   description:
//     "Molecular machine learning toolkit for ADMET, toxicity, and property prediction.",
//   group: "Research",
//   category: "Computational Chemistry",
// },
// {
//   id: "research:torchdrug",
//   title: "torchdrug",
//   description:
//     "Graph neural networks for molecular, protein, and drug discovery tasks.",
//   group: "Research",
//   category: "Computational Chemistry",
// },
// {
//   id: "research:pytdc",
//   title: "pytdc",
//   description:
//     "Therapeutics Data Commons benchmarks for ADME, toxicity, and DTI modeling.",
//   group: "Research",
//   category: "Computational Chemistry",
// },
// {
//   id: "research:zinc-database",
//   title: "zinc-database",
//   description:
//     "Virtual screening and compound sourcing from the ZINC database.",
//   group: "Research",
//   category: "Computational Chemistry",
// },
// {
//   id: "research:pubchem-database",
//   title: "pubchem-database",
//   description:
//     "Chemical structure, similarity, and bioactivity search via PubChem.",
//   group: "Research",
//   category: "Computational Chemistry",
// },
// {
//   id: "research:chembl-database",
//   title: "chembl-database",
//   description:
//     "Bioactivity and SAR analysis using the ChEMBL database.",
//   group: "Research",
//   category: "Computational Chemistry",
// },
// {
//   id: "research:drugbank-database",
//   title: "drugbank-database",
//   description:
//     "Drug properties, targets, interactions, and pharmacology analysis.",
//   group: "Research",
//   category: "Computational Chemistry",
// },
// {
//   id: "research:opentargets-database",
//   title: "opentargets-database",
//   description:
//     "Target–disease association analysis for drug discovery.",
//   group: "Research",
//   category: "Computational Chemistry",
// },
// {
//   id: "research:hmdb-database",
//   title: "hmdb-database",
//   description:
//     "Metabolomics database for chemical properties and biomarker discovery.",
//   group: "Research",
//   category: "Computational Chemistry",
// },
// {
//   id: "research:metabolomics-workbench-database",
//   title: "metabolomics-workbench-database",
//   description:
//     "NIH metabolomics datasets with MS/NMR spectra and annotations.",
//   group: "Research",
//   category: "Computational Chemistry",
// },
// {
//   id: "research:string-database",
//   title: "string-database",
//   description:
//     "Protein–protein interaction networks supporting systems drug discovery.",
//   group: "Research",
//   category: "Computational Chemistry",
// },
// {
//   id: "research:uniprot-database",
//   title: "uniprot-database",
//   description:
//     "Protein sequence and annotation database for target validation.",
//   group: "Research",
//   category: "Computational Chemistry",
// },
// {
//   id: "research:kegg-database",
//   title: "kegg-database",
//   description:
//     "Pathway and compound mapping for metabolism and drug interaction analysis.",
//   group: "Research",
//   category: "Computational Chemistry",
// },

//   {
//     id: "databases:create-database-migration",
//     title: "create-database-migration",
//     description:
//       "Create database migrations to add tables, columns, settings, or otherwise change the schema of Ghost's MySQL database.",
//     group: "Databases",
//     category: "Database Tools",
//   },
//   {
//     id: "databases:generate-migration",
//     title: "generate-migration",
//     description:
//       "Generate Django database migrations for Sentry, including schema changes, indexes, and conflict resolution.",
//     group: "Databases",
//     category: "Database Tools",
//   },
//   {
//     id: "databases:sql-optimization-patterns",
//     title: "sql-optimization-patterns",
//     description:
//       "Master SQL query optimization, indexing strategies, and EXPLAIN analysis to improve database performance.",
//     group: "Databases",
//     category: "Database Tools",
//   },
//   {
//     id: "databases:database-migration",
//     title: "database-migration",
//     description:
//       "Execute database migrations across ORMs and platforms with zero-downtime strategies and rollback procedures.",
//     group: "Databases",
//     category: "Database Tools",
//   },
//   {
//     id: "databases:db-migrations-and-schema-changes",
//     title: "db-migrations-and-schema-changes",
//     description:
//       "Manage Alembic database migrations and schema changes across SQLite and Postgres in letta-cloud workflows.",
//     group: "Databases",
//     category: "Database Tools",
//   },
//   {
//     id: "databases:dsql",
//     title: "dsql",
//     description:
//       "Build and deploy PostgreSQL-compatible serverless distributed SQL databases using Aurora DSQL.",
//     group: "Databases",
//     category: "Database Tools",
//   },
//   {
//     id: "databases:whodb",
//     title: "whodb",
//     description:
//       "Database operations including querying, schema exploration, and analysis across SQL and NoSQL databases.",
//     group: "Databases",
//     category: "Database Tools",
//   },
//   {
//     id: "databases:databases",
//     title: "databases",
//     description:
//       "Work with MongoDB and PostgreSQL for schema design, migrations, indexing, replication, and backups.",
//     group: "Databases",
//     category: "Database Tools",
//   },
//   {
//     id: "databases:managing-database-replication",
//     title: "managing-database-replication",
//     description:
//       "Manage database replication, failover, high availability, replication lag, and read scaling.",
//     group: "Databases",
//     category: "Database Tools",
//   },
//   {
//     id: "databases:comparing-database-schemas",
//     title: "comparing-database-schemas",
//     description:
//       "Compare database schemas, generate migration scripts, and provide rollback procedures.",
//     group: "Databases",
//     category: "Database Tools",
//   },
//   {
//     id: "databases:managing-database-migrations",
//     title: "managing-database-migrations",
//     description:
//       "Manage schema migrations with versioning, automation, and rollback support.",
//     group: "Databases",
//     category: "Database Tools",
//   },
//   {
//     id: "databases:managing-database-sharding",
//     title: "managing-database-sharding",
//     description:
//       "Design and implement horizontal database sharding strategies for scalable systems.",
//     group: "Databases",
//     category: "Database Tools",
//   },
//   {
//     id: "databases:analyzing-database-indexes",
//     title: "analyzing-database-indexes",
//     description:
//       "Analyze query patterns and recommend optimal database indexes to improve performance.",
//     group: "Databases",
//     category: "Database Tools",
//   },
//   {
//     id: "databases:optimizing-sql-queries",
//     title: "optimizing-sql-queries",
//     description:
//       "Analyze and optimize SQL queries by identifying bottlenecks, indexes, and execution plan issues.",
//     group: "Databases",
//     category: "Database Tools",
//   },
//   {
//     id: "databases:managing-database-testing",
//     title: "managing-database-testing",
//     description:
//       "Generate test data, wrap tests in transactions, and validate schemas for reliable database testing.",
//     group: "Databases",
//     category: "Database Tools",
//   },
//   {
//     id: "databases:managing-database-recovery",
//     title: "managing-database-recovery",
//     description:
//       "Perform disaster recovery, point-in-time recovery (PITR), and automated failover for databases.",
//     group: "Databases",
//     category: "Database Tools",
//   },
//   {
//     id: "databases:automating-database-backups",
//     title: "automating-database-backups",
//     description:
//       "Automate database backups with scheduling, compression, encryption, and restore procedures.",
//     group: "Databases",
//     category: "Database Tools",
//   },
//   {
//     id: "databases:supabase-migration-deep-dive",
//     title: "supabase-migration-deep-dive",
//     description:
//       "Execute major Supabase migrations and re-architecture using the strangler fig pattern.",
//     group: "Databases",
//     category: "Database Tools",
//   },
//   {
//     id: "databases:monitoring-database-health",
//     title: "monitoring-database-health",
//     description:
//       "Monitor database health with real-time metrics, alerts, and automated remediation.",
//     group: "Databases",
//     category: "Database Tools",
//   },
//   {
//     id: "databases:designing-database-schemas",
//     title: "designing-database-schemas",
//     description:
//       "Design database schemas with migration support and best practices.",
//     group: "Databases",
//     category: "Database Tools",
//   },
//   {
//     id: "databases:analyzing-query-performance",
//     title: "analyzing-query-performance",
//     description:
//       "Analyze EXPLAIN plans to identify slow queries, missing indexes, and performance bottlenecks.",
//     group: "Databases",
//     category: "Database Tools",
//   },
//   {
//     id: "databases:sql-migration-generator",
//     title: "sql-migration-generator",
//     description:
//       "Generate SQL migration files automatically for backend development workflows.",
//     group: "Databases",
//     category: "Database Tools",
//   },
//   {
//     id: "databases:cursor-upgrade-migration",
//     title: "cursor-upgrade-migration",
//     description:
//       "Upgrade Cursor versions and migrate settings safely between releases.",
//     group: "Databases",
//     category: "Database Tools",
//   },
//   {
//     id: "databases:sql-optimization-patterns",
//     title: "sql-optimization-patterns",
//     description:
//       "Master SQL query optimization, indexing strategies, and EXPLAIN analysis to dramatically improve database performance and eliminate slow queries.",
//     group: "Databases",
//     category: "SQL Databases",
//   },
//   {
//     id: "databases:database-migration",
//     title: "database-migration",
//     description:
//       "Execute database migrations across ORMs and platforms with zero-downtime strategies, data transformation, and rollback procedures.",
//     group: "Databases",
//     category: "SQL Databases",
//   },
//   {
//     id: "databases:postgresql-table-design",
//     title: "postgresql-table-design",
//     description:
//       "Design a PostgreSQL-specific schema covering best practices, data types, indexing, constraints, performance patterns, and advanced features.",
//     group: "Databases",
//     category: "SQL Databases",
//   },
//   {
//     id: "databases:postgres-schema-design",
//     title: "postgres-schema-design",
//     description:
//       "Comprehensive PostgreSQL table design reference covering data types, indexing, constraints, and performance patterns.",
//     group: "Databases",
//     category: "SQL Databases",
//   },
//   {
//     id: "databases:postgresql",
//     title: "postgresql",
//     description:
//       "PostgreSQL database documentation covering SQL queries, schema design, administration, performance tuning, and advanced features.",
//     group: "Databases",
//     category: "SQL Databases",
//   },
//   {
//     id: "databases:timescaledb",
//     title: "timescaledb",
//     description:
//       "TimescaleDB PostgreSQL extension for high-performance time-series analytics with hypertables, compression, and continuous aggregates.",
//     group: "Databases",
//     category: "SQL Databases",
//   },
//   {
//     id: "databases:dsql",
//     title: "dsql",
//     description:
//       "Aurora DSQL: PostgreSQL-compatible serverless distributed SQL database with schema management and migrations.",
//     group: "Databases",
//     category: "SQL Databases",
//   },
//   {
//     id: "databases:postgres-query",
//     title: "postgres-query",
//     description:
//       "Run PostgreSQL queries for testing, debugging, EXPLAIN ANALYZE, and performance analysis using read-only connections.",
//     group: "Databases",
//     category: "SQL Databases",
//   },
//   {
//     id: "databases:query-builder",
//     title: "query-builder",
//     description:
//       "Convert natural language questions into SQL queries for relational databases.",
//     group: "Databases",
//     category: "SQL Databases",
//   },
//   {
//     id: "databases:schema-designer",
//     title: "schema-designer",
//     description:
//       "Design database schemas, create tables, and model relational data structures.",
//     group: "Databases",
//     category: "SQL Databases",
//   },
//   {
//     id: "databases:whodb",
//     title: "whodb",
//     description:
//       "Database operations including querying, schema exploration, and analysis across SQL and NoSQL databases.",
//     group: "Databases",
//     category: "SQL Databases",
//   },
//   {
//     id: "databases:sql-injection-testing",
//     title: "sql-injection-testing",
//     description:
//       "Identify, exploit, and understand SQL injection vulnerabilities across database systems.",
//     group: "Databases",
//     category: "SQL Databases",
//   },
//   {
//     id: "databases:sqlmap-database-penetration-testing",
//     title: "sqlmap-database-penetration-testing",
//     description:
//       "Automated SQL injection testing, database enumeration, and exploitation using SQLMap.",
//     group: "Databases",
//     category: "SQL Databases",
//   },
//   {
//     id: "databases:44-database-design",
//     title: "44-database-design",
//     description:
//       "Database design standards including naming conventions, indexing strategies, sharding, and archival policies.",
//     group: "Databases",
//     category: "SQL Databases",
//   },
//   {
//     id: "databases:29-4-process-dao-database",
//     title: "29-4-process-dao-database",
//     description:
//       "DAO-layer and database table structure analysis with JOOQ usage, indexing, and sharding strategies.",
//     group: "Databases",
//     category: "SQL Databases",
//   },
//   {
//     id: "databases:06-database-script-management",
//     title: "06-database-script-management",
//     description:
//       "Database script management including DDL/DML standards, versioning, migrations, and rollback strategies.",
//     group: "Databases",
//     category: "SQL Databases",
//   },
//   {
//     id: "databases:postgis-skill",
//     title: "postgis-skill",
//     description:
//       "PostGIS SQL techniques for working with geospatial data in PostgreSQL.",
//     group: "Databases",
//     category: "SQL Databases",
//   },
//   {
//     id: "databases:writing-hashql-jexpr",
//     title: "writing-hashql-jexpr",
//     description:
//       "HashQL J-Expr syntax for writing structured query expressions in JSONC files.",
//     group: "Databases",
//     category: "SQL Databases",
//   },
//   {
//     id: "databases:design-postgres-tables",
//     title: "design-postgres-tables",
//     description:
//       "PostgreSQL table design best practices including indexing, constraints, and performance patterns.",
//     group: "Databases",
//     category: "SQL Databases",
//   },
//   {
//     id: "databases:setup-timescaledb-hypertables",
//     title: "setup-timescaledb-hypertables",
//     description:
//       "Step-by-step setup of TimescaleDB hypertables, indexes, compression, and continuous aggregates.",
//     group: "Databases",
//     category: "SQL Databases",
//   },
//   {
//     id: "databases:migrate-postgres-tables-to-hypertables",
//     title: "migrate-postgres-tables-to-hypertables",
//     description:
//       "Guide for migrating PostgreSQL tables to TimescaleDB hypertables with performance validation.",
//     group: "Databases",
//     category: "SQL Databases",
//   },
//   {
//     id: "databases:find-hypertable-candidates",
//     title: "find-hypertable-candidates",
//     description:
//       "Analyze PostgreSQL databases to identify tables suitable for TimescaleDB hypertables.",
//     group: "Databases",
//     category: "SQL Databases",
//   },
//   {
//     id: "databases:databases",
//     title: "databases",
//     description:
//       "Work with MongoDB and PostgreSQL including schema design, migrations, indexing, replication, and backups.",
//     group: "Databases",
//     category: "SQL Databases",
//   },
//   {
//     id: "databases:insforge-schema-patterns",
//     title: "insforge-schema-patterns",
//     description:
//       "Database schema patterns for social graphs, e-commerce, content platforms, and multi-tenancy with RLS.",
//     group: "Databases",
//     category: "SQL Databases",
//   },
//     {
//       id: "databases:vector-index-tuning",
//       title: "vector-index-tuning",
//       description:
//         "Optimize vector index performance for latency, recall, and memory using HNSW tuning, quantization strategies, and scalable vector search infrastructure.",
//       group: "Databases",
//       category: "NoSQL Databases",
//     },
//     {
//       id: "databases:cocoindex",
//       title: "cocoindex",
//       description:
//         "Toolkit for developing ETL and data transformation pipelines with CocoIndex, including embedding documents into vector databases and building AI search indexes.",
//       group: "Databases",
//       category: "NoSQL Databases",
//     },
//     {
//       id: "databases:pinecone",
//       title: "pinecone",
//       description:
//         "Managed vector database for production AI applications with hybrid search, metadata filtering, namespaces, and low-latency retrieval.",
//       group: "Databases",
//       category: "NoSQL Databases",
//     },
//     {
//       id: "databases:chroma",
//       title: "chroma",
//       description:
//         "Open-source embedding database supporting vector and full-text search with metadata filtering, suitable for semantic search and RAG.",
//       group: "Databases",
//       category: "NoSQL Databases",
//     },
//     {
//       id: "databases:agentdb-performance-optimization",
//       title: "agentdb-performance-optimization",
//       description:
//         "Optimize AgentDB performance with quantization, HNSW indexing, caching, and batch operations for large-scale vector search.",
//       group: "Databases",
//       category: "NoSQL Databases",
//     },
//     {
//       id: "databases:agentdb-advanced-features",
//       title: "agentdb-advanced-features",
//       description:
//         "Advanced AgentDB capabilities including QUIC sync, hybrid search, custom distance metrics, and distributed system integration.",
//       group: "Databases",
//       category: "NoSQL Databases",
//     },
//     {
//       id: "databases:meilisearch-admin",
//       title: "meilisearch-admin",
//       description:
//         "Inspect Meilisearch index health, tasks, settings, and status for debugging and monitoring search infrastructure.",
//       group: "Databases",
//       category: "NoSQL Databases",
//     },
//     {
//       id: "databases:redis-inspect",
//       title: "redis-inspect",
//       description:
//         "Inspect Redis cache keys, values, and TTLs for debugging and monitoring cache state in read-only mode.",
//       group: "Databases",
//       category: "NoSQL Databases",
//     },
//     {
//       id: "databases:v3-memory-unification",
//       title: "v3-memory-unification",
//       description:
//         "Unify multiple memory systems into AgentDB using HNSW indexing for large-scale memory and retrieval optimization.",
//       group: "Databases",
//       category: "NoSQL Databases",
//     },
//     {
//       id: "databases:whodb",
//       title: "whodb",
//       description:
//         "Unified database operations across MongoDB, Redis, Elasticsearch, and SQL systems including querying and schema exploration.",
//       group: "Databases",
//       category: "NoSQL Databases",
//     },
//     {
//       id: "databases:index-at-creation",
//       title: "index-at-creation",
//       description:
//         "Index data at creation time to improve retrieval efficiency and reduce downstream indexing overhead.",
//       group: "Databases",
//       category: "NoSQL Databases",
//     },
//     {
//       id: "databases:databases",
//       title: "databases",
//       description:
//         "Work with MongoDB and PostgreSQL for schema design, migrations, indexing, backups, and production administration.",
//       group: "Databases",
//       category: "NoSQL Databases",
//     },
//     {
//       id: "databases:optimizing-cache-performance",
//       title: "optimizing-cache-performance",
//       description:
//         "Analyze and improve caching strategies including TTLs, key design, hit rates, and invalidation for systems like Redis.",
//       group: "Databases",
//       category: "NoSQL Databases",
//     },
//     {
//       id: "databases:implementing-database-caching",
//       title: "implementing-database-caching",
//       description:
//         "Implement multi-tier database caching using Redis, in-memory caches, and CDNs to reduce load and improve latency.",
//       group: "Databases",
//       category: "NoSQL Databases",
//     },
//     {
//       id: "databases:modeling-nosql-data",
//       title: "modeling-nosql-data",
//       description:
//         "Design NoSQL data models for MongoDB and DynamoDB including access patterns, embedding vs referencing, and shard keys.",
//       group: "Databases",
//       category: "NoSQL Databases",
//     },
//     {
//       id: "databases:elasticsearch-index-manager",
//       title: "elasticsearch-index-manager",
//       description:
//         "Manage Elasticsearch index lifecycle, settings, and operations for search and analytics workloads.",
//       group: "Databases",
//       category: "NoSQL Databases",
//     },
//     {
//       id: "databases:firestore-index-creator",
//       title: "firestore-index-creator",
//       description:
//         "Create and manage Firestore indexes for efficient querying and performance optimization.",
//       group: "Databases",
//       category: "NoSQL Databases",
//     },
//     {
//       id: "databases:redis-cache-manager",
//       title: "redis-cache-manager",
//       description:
//         "Manage Redis cache operations including configuration, invalidation, and performance tuning.",
//       group: "Databases",
//       category: "NoSQL Databases",
//     },
//     {
//       id: "databases:managing-api-cache",
//       title: "managing-api-cache",
//       description:
//         "Implement intelligent API response caching using Redis, Memcached, and CDN layers.",
//       group: "Databases",
//       category: "NoSQL Databases",
//     },
//     {
//       id: "databases:firestore-operations-manager",
//       title: "firestore-operations-manager",
//       description:
//         "Manage Firestore CRUD operations, batch writes, queries, indexes, and migrations.",
//       group: "Databases",
//       category: "NoSQL Databases",
//     },
//     {
//       id: "databases:dynamodb",
//       title: "dynamodb",
//       description:
//         "AWS DynamoDB NoSQL database for scalable key-value and document storage with indexing and capacity management.",
//       group: "Databases",
//       category: "NoSQL Databases",
//     },
//     {
//       id: "databases:rag-skills",
//       title: "rag-skills",
//       description:
//         "RAG best practices covering ingestion, embeddings, retrieval, and performance using vector databases.",
//       group: "Databases",
//       category: "NoSQL Databases",
//     },
//     {
//       id: "databases:moai-platform-firestore",
//       title: "moai-platform-firestore",
//       description:
//         "Firebase Firestore specialist covering NoSQL patterns, real-time sync, offline caching, and security rules.",
//       group: "Databases",
//       category: "NoSQL Databases",
//     },
//     {
//       id: "databases:database-design",
//       title: "database-design",
//       description:
//         "Database schema design, optimization, and migration patterns across SQL and NoSQL systems.",
//       group: "Databases",
//       category: "NoSQL Databases",
//     },
//     {
//       id: "databases:setup",
//       title: "setup",
//       description:
//         "Troubleshoot MongoDB connection, authentication, and configuration issues.",
//       group: "Databases",
//       category: "NoSQL Databases",
//     },
//     {
//       id: "databases:mongodb-usage",
//       title: "mongodb-usage",
//       description:
//         "Query MongoDB databases, inspect collections, schemas, indexes, and records.",
//       group: "Databases",
//       category: "NoSQL Databases",
//     },
//     {
//       id: "databases:cloudbase-document-database-web-sdk",
//       title: "cloudbase-document-database-web-sdk",
//       description:
//         "Use CloudBase document database Web SDK for querying, aggregation, and geolocation-based NoSQL operations.",
//       group: "Databases",
//       category: "NoSQL Databases",
//     },
//     {
//       id: "databases:axiom-cloudkit-ref",
//       title: "axiom-cloudkit-ref",
//       description:
//         "Reference for CloudKit database APIs, sync patterns, zones, conflict resolution, and shared databases.",
//       group: "Databases",
//       category: "NoSQL Databases",
//     },
//     {
//       id: "databases:database-implementation",
//       title: "database-implementation",
//       description:
//         "Database schema design, migrations, query optimization, and rollback strategies using SQL and ORMs.",
//       group: "Databases",
//       category: "NoSQL Databases",
//     },
//     {
//       id: "databases:mongodb",
//       title: "mongodb",
//       description:
//         "Comprehensive MongoDB guide covering CRUD, aggregation, indexing, replication, sharding, and security.",
//       group: "Databases",
//       category: "NoSQL Databases",
//     },
    
//       {
//         id: "crypto:defi-protocol-templates",
//         title: "defi-protocol-templates",
//         description:
//           "Production-ready templates for building DeFi protocols including staking, AMMs, governance, and lending systems.",
//         group: "Blockchain",
//         category: "Web3 Tools",
//       },
//       {
//         id: "crypto:react-native-architecture",
//         title: "react-native-architecture",
//         description:
//           "Architect production-grade React Native apps with Expo, navigation, native modules, offline sync, and cross-platform patterns.",
//         group: "Blockchain",
//         category: "Web3 Tools",
//       },
//       {
//         id: "crypto:web3-testing",
//         title: "web3-testing",
//         description:
//           "Comprehensive smart contract testing using Hardhat and Foundry with unit tests, integration tests, and mainnet forking.",
//         group: "Blockchain",
//         category: "Web3 Tools",
//       },
//       {
//         id: "crypto:nft-standards",
//         title: "nft-standards",
//         description:
//           "Implement NFT standards like ERC-721 and ERC-1155 with metadata handling, minting strategies, and marketplace integration.",
//         group: "Blockchain",
//         category: "Web3 Tools",
//       },
//       {
//         id: "crypto:solidity-security",
//         title: "solidity-security",
//         description:
//           "Smart contract security best practices to prevent vulnerabilities and implement secure Solidity patterns.",
//         group: "Blockchain",
//         category: "Web3 Tools",
//       },
//       {
//         id: "crypto:ccxt",
//         title: "ccxt",
//         description:
//           "Blockchaincurrency trading library supporting 150+ exchanges for trading, market data, and order management.",
//         group: "Blockchain",
//         category: "Web3 Tools",
//       },
//       {
//         id: "crypto:coingecko",
//         title: "coingecko",
//         description:
//           "CoinGecko API integration for cryptocurrency prices, market caps, volumes, and historical market data.",
//         group: "Blockchain",
//         category: "Web3 Tools",
//       },
//       {
//         id: "crypto:cryptofeed",
//         title: "cryptofeed",
//         description:
//           "Real-time cryptocurrency market data feeds via WebSockets with normalized order books, trades, and tickers.",
//         group: "Blockchain",
//         category: "Web3 Tools",
//       },
//       {
//         id: "crypto:reference-sdk",
//         title: "reference-sdk",
//         description:
//           "Reference SDK implementations for blockchain and crypto integrations.",
//         group: "Blockchain",
//         category: "Web3 Tools",
//       },
//       {
//         id: "crypto:web3-security",
//         title: "web3-security",
//         description:
//           "Web3 and blockchain security research covering smart contract auditing, DeFi vulnerabilities, and blockchain gaming security.",
//         group: "Blockchain",
//         category: "Web3 Tools",
//       },
//       {
//         id: "crypto:pinme",
//         title: "pinme",
//         description:
//           "Deploy and pin files, folders, and static websites to IPFS for decentralized storage and sharing.",
//         group: "Blockchain",
//         category: "Web3 Tools",
//       },
//       {
//         id: "crypto:1k-adding-chains",
//         title: "1k-adding-chains",
//         description:
//           "Guide for adding new blockchain chains and protocols with architecture and integration patterns.",
//         group: "Blockchain",
//         category: "Web3 Tools",
//       },
//       {
//         id: "crypto:webf-native-plugins",
//         title: "webf-native-plugins",
//         description:
//           "Install WebF native plugins to access device capabilities like payments, camera, geolocation, and sharing.",
//         group: "Blockchain",
//         category: "Web3 Tools",
//       },
//       {
//         id: "crypto:webf-quickstart",
//         title: "webf-quickstart",
//         description:
//           "Quickstart guide for setting up WebF projects using React, Vue, or Svelte with Vite.",
//         group: "Blockchain",
//         category: "Web3 Tools",
//       },
//       {
//         id: "crypto:webf-native-plugin-dev",
//         title: "webf-native-plugin-dev",
//         description:
//           "Develop custom WebF native plugins that expose Flutter and platform capabilities as JavaScript APIs.",
//         group: "Blockchain",
//         category: "Web3 Tools",
//       },
//       {
//         id: "crypto:tracking-crypto-portfolio",
//         title: "tracking-crypto-portfolio",
//         description:
//           "Track multi-chain crypto portfolios with real-time valuations and performance metrics.",
//         group: "Blockchain",
//         category: "Web3 Tools",
//       },
//       {
//         id: "crypto:contract-test-creator",
//         title: "contract-test-creator",
//         description:
//           "Automatically generate contract tests for blockchain and smart contract test automation.",
//         group: "Blockchain",
//         category: "Web3 Tools",
//       },
//       {
//         id: "crypto:monitoring-whale-activity",
//         title: "monitoring-whale-activity",
//         description:
//           "Monitor large crypto transactions and whale wallet movements across blockchains.",
//         group: "Blockchain",
//         category: "Web3 Tools",
//       },
//       {
//         id: "crypto:aggregating-crypto-news",
//         title: "aggregating-crypto-news",
//         description:
//           "Aggregate breaking crypto news, announcements, and market-moving events in real time.",
//         group: "Blockchain",
//         category: "Web3 Tools",
//       },
//       {
//         id: "crypto:monitoring-cross-chain-bridges",
//         title: "monitoring-cross-chain-bridges",
//         description:
//           "Monitor cross-chain bridges for security, liquidity, and transaction status.",
//         group: "Blockchain",
//         category: "Web3 Tools",
//       },
//       {
//         id: "crypto:auditing-wallet-security",
//         title: "auditing-wallet-security",
//         description:
//           "Audit crypto wallet security including key management and transaction signing practices.",
//         group: "Blockchain",
//         category: "Web3 Tools",
//       },
//       {
//         id: "crypto:optimizing-defi-yields",
//         title: "optimizing-defi-yields",
//         description:
//           "Analyze and compare DeFi yield opportunities with APY calculations across protocols.",
//         group: "Blockchain",
//         category: "Web3 Tools",
//       },
//       {
//         id: "crypto:analyzing-nft-rarity",
//         title: "analyzing-nft-rarity",
//         description:
//           "Calculate NFT rarity scores and floor prices across collections and marketplaces.",
//         group: "Blockchain",
//         category: "Web3 Tools",
//       },
//       {
//         id: "crypto:simulating-flash-loans",
//         title: "simulating-flash-loans",
//         description:
//           "Simulate flash loan arbitrage strategies and profitability across DeFi protocols.",
//         group: "Blockchain",
//         category: "Web3 Tools",
//       },
//       {
//         id: "crypto:analyzing-mempool",
//         title: "analyzing-mempool",
//         description:
//           "Monitor blockchain mempools for pending transactions, front-running, and MEV opportunities.",
//         group: "Blockchain",
//         category: "Web3 Tools",
//       },
//       {
//         id: "crypto:analyzing-on-chain-data",
//         title: "analyzing-on-chain-data",
//         description:
//           "Perform on-chain analysis including whale tracking, token flows, and network activity.",
//         group: "Blockchain",
//         category: "Web3 Tools",
//       },
//       {
//         id: "crypto:tracking-token-launches",
//         title: "tracking-token-launches",
//         description:
//           "Monitor new token launches, IDOs, and fair launches with contract verification.",
//         group: "Blockchain",
//         category: "Web3 Tools",
//       },
//       {
//         id: "crypto:exploring-blockchain-data",
//         title: "exploring-blockchain-data",
//         description:
//           "Query and analyze blockchain data including blocks, transactions, and smart contracts.",
//         group: "Blockchain",
//         category: "Web3 Tools",
//       },
//       {
//         id: "crypto:interface-lint",
//         title: "interface-lint",
//         description:
//           "Format and lint Solidity interface files following EigenLayer conventions.",
//         group: "Blockchain",
//         category: "Web3 Tools",
//       },
//       {
//         id: "crypto:ton-vulnerability-scanner",
//         title: "ton-vulnerability-scanner",
//         description:
//           "Scan TON smart contracts for critical vulnerabilities in FunC codebases.",
//         group: "Blockchain",
//         category: "Web3 Tools",
//       },
//       {
//         id: "crypto:cairo-vulnerability-scanner",
//         title: "cairo-vulnerability-scanner",
//         description:
//           "Scan Cairo and StarkNet smart contracts for critical security vulnerabilities.",
//         group: "Blockchain",
//         category: "Web3 Tools",
//       },
//       {
//         id: "crypto:cosmos-vulnerability-scanner",
//         title: "cosmos-vulnerability-scanner",
//         description:
//           "Audit Cosmos SDK blockchains and CosmWasm contracts for consensus-critical vulnerabilities.",
//         group: "Blockchain",
//         category: "Web3 Tools",
//       },
//       {
//         id: "crypto:token-integration-analyzer",
//         title: "token-integration-analyzer",
//         description:
//           "Analyze ERC20 and ERC721 token implementations and integrations for non-standard behaviors.",
//         group: "Blockchain",
//         category: "Web3 Tools",
//       },
//       {
//         id: "crypto:chain-integration",
//         title: "chain-integration",
//         description:
//           "Integrate new blockchains into ShapeShift Web and HDWallet infrastructure.",
//         group: "Blockchain",
//         category: "Web3 Tools",
//       },
//       {
//         id: "crypto:swapper-integration",
//         title: "swapper-integration",
//         description:
//           "Integrate DEX aggregators, swappers, and bridges into ShapeShift Web.",
//         group: "Blockchain",
//         category: "Web3 Tools",
//       },
//       {
//         id: "crypto:cosmwasm-contract",
//         title: "cosmwasm-contract",
//         description:
//           "Develop CosmWasm smart contracts using the Abstract SDK.",
//         group: "Blockchain",
//         category: "Web3 Tools",
//       },
//       {
//         id: "crypto:solidity-development",
//         title: "solidity-development",
//         description:
//           "Solidity smart contract development workflow for ERC20 and blockchain applications.",
//         group: "Blockchain",
//         category: "Web3 Tools",
//       },
//         {
//           id: "bsc:defi-protocol-templates",
//           title: "defi-protocol-templates",
//           description:
//             "Implement DeFi protocols with production-ready templates for staking, AMMs, governance, and lending systems.",
//           group: "Blockchain",
//           category: "Smart Contracts",
//         },
//         {
//           id: "bsc:web3-testing",
//           title: "web3-testing",
//           description:
//             "Test smart contracts comprehensively using Hardhat and Foundry with unit tests, integration tests, and mainnet forking.",
//           group: "Blockchain",
//           category: "Smart Contracts",
//         },
//         {
//           id: "bsc:nft-standards",
//           title: "nft-standards",
//           description:
//             "Implement NFT standards (ERC-721, ERC-1155) with proper metadata handling, minting strategies, and marketplace integration.",
//           group: "Blockchain",
//           category: "Smart Contracts",
//         },
//         {
//           id: "bsc:solidity-security",
//           title: "solidity-security",
//           description:
//             "Master smart contract security best practices to prevent vulnerabilities and implement secure Solidity patterns.",
//           group: "Blockchain",
//           category: "Smart Contracts",
//         },
//         {
//           id: "bsc:web3-security",
//           title: "web3-security",
//           description:
//             "Guide for Web3 and blockchain security research including smart contract auditing, DeFi vulnerabilities, and blockchain gaming security.",
//           group: "Blockchain",
//           category: "Smart Contracts",
//         },
//         {
//           id: "bsc:checking-infrastructure-compliance",
//           title: "checking-infrastructure-compliance",
//           description:
//             "Check infrastructure compliance against SOC2, HIPAA, and PCI-DSS standards.",
//           group: "Blockchain",
//           category: "Smart Contracts",
//         },
//         {
//           id: "bsc:contract-test-creator",
//           title: "contract-test-creator",
//           description:
//             "Generate and run smart contract tests using automated contract testing workflows.",
//           group: "Blockchain",
//           category: "Smart Contracts",
//         },
//         {
//           id: "bsc:performing-security-audits",
//           title: "performing-security-audits",
//           description:
//             "Conduct comprehensive security audits using vulnerability scanning, compliance checks, and cryptography review.",
//           group: "Blockchain",
//           category: "Smart Contracts",
//         },
//         {
//           id: "bsc:validating-api-contracts",
//           title: "validating-api-contracts",
//           description:
//             "Validate API contracts using consumer-driven testing and OpenAPI validation.",
//           group: "Blockchain",
//           category: "Smart Contracts",
//         },
//         {
//           id: "bsc:auditing-wallet-security",
//           title: "auditing-wallet-security",
//           description:
//             "Review crypto wallet security including private key management and transaction signing.",
//           group: "Blockchain",
//           category: "Smart Contracts",
//         },
//         {
//           id: "bsc:clay-security-basics",
//           title: "clay-security-basics",
//           description:
//             "Apply Clay security best practices for secrets, API keys, and access control.",
//           group: "Blockchain",
//           category: "Smart Contracts",
//         },
//         {
//           id: "bsc:simulating-flash-loans",
//           title: "simulating-flash-loans",
//           description:
//             "Simulate flash loan arbitrage strategies and profitability across DeFi protocols.",
//           group: "Blockchain",
//           category: "Smart Contracts",
//         },
//         {
//           id: "bsc:analyzing-on-chain-data",
//           title: "analyzing-on-chain-data",
//           description:
//             "Perform on-chain analysis including whale tracking, token flows, and network activity.",
//           group: "Blockchain",
//           category: "Smart Contracts",
//         },
//         {
//           id: "bsc:exploring-blockchain-data",
//           title: "exploring-blockchain-data",
//           description:
//             "Query and analyze blockchain data including blocks, transactions, and smart contracts.",
//           group: "Blockchain",
//           category: "Smart Contracts",
//         },
//         {
//           id: "bsc:identify-vault-protocol",
//           title: "identify-vault-protocol",
//           description:
//             "Identify unknown ERC-4626 vault protocols using on-chain contract analysis.",
//           group: "Blockchain",
//           category: "Smart Contracts",
//         },
//         {
//           id: "bsc:add-vault-abi-methods",
//           title: "add-vault-abi-methods",
//           description:
//             "Expose vault smart contract ABI methods in protocol integrations.",
//           group: "Blockchain",
//           category: "Smart Contracts",
//         },
//         {
//           id: "bsc:add-vault-protocol",
//           title: "add-vault-protocol",
//           description:
//             "Integrate new ERC-4626 vault protocols with contract address and metadata.",
//           group: "Blockchain",
//           category: "Smart Contracts",
//         },
//         {
//           id: "bsc:interface-lint",
//           title: "interface-lint",
//           description:
//             "Format and lint Solidity interfaces following EigenLayer conventions.",
//           group: "Blockchain",
//           category: "Smart Contracts",
//         },
//         {
//           id: "bsc:unit-test-writer",
//           title: "unit-test-writer",
//           description:
//             "Write Solidity unit tests for smart contracts following project conventions.",
//           group: "Blockchain",
//           category: "Smart Contracts",
//         },
//         {
//           id: "bsc:integration-test-writer",
//           title: "integration-test-writer",
//           description:
//             "Write Solidity integration tests for cross-contract interactions and upgrade flows.",
//           group: "Blockchain",
//           category: "Smart Contracts",
//         },
//         {
//           id: "bsc:ton-vulnerability-scanner",
//           title: "ton-vulnerability-scanner",
//           description:
//             "Scan TON smart contracts for critical vulnerabilities.",
//           group: "Blockchain",
//           category: "Smart Contracts",
//         },
//         {
//           id: "bsc:solana-vulnerability-scanner",
//           title: "solana-vulnerability-scanner",
//           description:
//             "Scan Solana programs for security vulnerabilities and unsafe patterns.",
//           group: "Blockchain",
//           category: "Smart Contracts",
//         },
//         {
//           id: "bsc:entry-point-analyzer",
//           title: "entry-point-analyzer",
//           description:
//             "Identify state-changing entry points in smart contracts for auditing.",
//           group: "Blockchain",
//           category: "Smart Contracts",
//         },
//         {
//           id: "bsc:guidelines-advisor",
//           title: "guidelines-advisor",
//           description:
//             "Smart contract development advisor based on Trail of Bits best practices.",
//           group: "Blockchain",
//           category: "Smart Contracts",
//         },
//         {
//           id: "bsc:cairo-vulnerability-scanner",
//           title: "cairo-vulnerability-scanner",
//           description:
//             "Scan Cairo and StarkNet smart contracts for critical vulnerabilities.",
//           group: "Blockchain",
//           category: "Smart Contracts",
//         },
//         {
//           id: "bsc:cosmos-vulnerability-scanner",
//           title: "cosmos-vulnerability-scanner",
//           description:
//             "Audit Cosmos SDK and CosmWasm contracts for consensus-critical issues.",
//           group: "Blockchain",
//           category: "Smart Contracts",
//         },
//         {
//           id: "bsc:property-based-testing",
//           title: "property-based-testing",
//           description:
//             "Apply property-based testing techniques for smart contracts and protocols.",
//           group: "Blockchain",
//           category: "Smart Contracts",
//         },
//         {
//           id: "bsc:substrate-vulnerability-scanner",
//           title: "substrate-vulnerability-scanner",
//           description:
//             "Scan Substrate and Polkadot pallets for critical vulnerabilities.",
//           group: "Blockchain",
//           category: "Smart Contracts",
//         },
//         {
//           id: "bsc:algorand-vulnerability-scanner",
//           title: "algorand-vulnerability-scanner",
//           description:
//             "Scan Algorand smart contracts for security vulnerabilities.",
//           group: "Blockchain",
//           category: "Smart Contracts",
//         },
//         {
//           id: "bsc:token-integration-analyzer",
//           title: "token-integration-analyzer",
//           description:
//             "Analyze ERC20 and ERC721 token implementations and integrations.",
//           group: "Blockchain",
//           category: "Smart Contracts",
//         },
//         {
//           id: "bsc:api-design",
//           title: "api-design",
//           description:
//             "Best practices for designing CosmWasm smart contract APIs.",
//           group: "Blockchain",
//           category: "Smart Contracts",
//         },
//         {
//           id: "bsc:deployment",
//           title: "deployment",
//           description:
//             "Deploy CosmWasm contracts using cw-orchestrator and Abstract SDK.",
//           group: "Blockchain",
//           category: "Smart Contracts",
//         },
//         {
//           id: "bsc:testing-coverage",
//           title: "testing-coverage",
//           description:
//             "Write tests and analyze coverage for CosmWasm smart contracts.",
//           group: "Blockchain",
//           category: "Smart Contracts",
//         },
//         {
//           id: "bsc:cosmwasm-contract",
//           title: "cosmwasm-contract",
//           description:
//             "Develop CosmWasm smart contracts using the Abstract SDK.",
//           group: "Blockchain",
//           category: "Smart Contracts",
//         },
//         {
//           id: "bsc:solidity-development",
//           title: "solidity-development",
//           description:
//             "Solidity smart contract development workflow for Ethereum applications.",
//           group: "Blockchain",
//           category: "Smart Contracts",
//         },
//         {
//           id: "bsc:smart-contract-security-review",
//           title: "smart-contract-security-review",
//           description:
//             "Security review for Cardano and Scalus smart contracts.",
//           group: "Blockchain",
//           category: "Smart Contracts",
//         },
//         {
//           id: "bsc:rr-solidity",
//           title: "rr-solidity",
//           description:
//             "Comprehensive Solidity development using Foundry for writing, testing, deploying, and auditing contracts.",
//           group: "Blockchain",
//           category: "Smart Contracts",
//         },
//         {
//           id: "bsc:smart-contract-generator",
//           title: "smart-contract-generator",
//           description:
//             "Generate Solidity smart contracts with security best practices.",
//           group: "Blockchain",
//           category: "Smart Contracts",
//         },
//         {
//           id: "bsc:software-crypto-web3",
//           title: "software-crypto-web3",
//           description:
//             "Production-grade blockchain and Web3 development across Ethereum, Solana, and Cosmos.",
//           group: "Blockchain",
//           category: "Smart Contracts",
//         },
//         {
//           id: "bsc:network-security-setup",
//           title: "network-security-setup",
//           description:
//             "Configure secure sandboxed network environments for smart contract development.",
//           group: "Blockchain",
//           category: "Smart Contracts",
//         },
//         {
//           id: "bdefi:defi-protocol-templates",
//           title: "defi-protocol-templates",
//           description: "Implement DeFi protocols with production-ready templates for staking, AMMs, governance, and lending systems.",
//           group: "Blockchain",
//           category: "DeFi",
//         },
//         {
//           id: "bdefi:web3-testing",
//           title: "web3-testing",
//           description: "Test smart contracts comprehensively using Hardhat and Foundry with unit tests, integration tests, and mainnet forking.",
//           group: "Blockchain",
//           category: "DeFi",
//         },
//         {
//           id: "bdefi:nft-standards",
//           title: "nft-standards",
//           description: "Implement NFT standards (ERC-721, ERC-1155) with proper metadata handling, minting strategies, and marketplace integration.",
//           group: "Blockchain",
//           category: "DeFi",
//         },
//         {
//           id: "bdefi:solidity-security",
//           title: "solidity-security",
//           description: "Master smart contract security best practices to prevent common vulnerabilities and implement secure Solidity patterns.",
//           group: "Blockchain",
//           category: "DeFi",
//         },
//         {
//           id: "bdefi:qlty-during-development",
//           title: "qlty-during-development",
//           description: "Quality-focused development workflows emphasizing correctness and reliability during implementation.",
//           group: "Blockchain",
//           category: "DeFi",
//         },
//         {
//           id: "bdefi:parallel-agent-contracts",
//           title: "parallel-agent-contracts",
//           description: "Parallel agent contract patterns for multi-agent blockchain systems.",
//           group: "Blockchain",
//           category: "DeFi",
//         },
//         {
//           id: "bdefi:web3-security",
//           title: "web3-security",
//           description: "Guide for Web3 and blockchain security research including smart contract auditing and DeFi vulnerabilities.",
//           group: "Blockchain",
//           category: "DeFi",
//         },
//         {
//           id: "bdefi:adding-chains",
//           title: "1k-adding-chains",
//           description: "Guide for adding new blockchain chains and protocols to wallets and platforms.",
//           group: "Blockchain",
//           category: "DeFi",
//         },
//         {
//           id: "bdefi:orchestration",
//           title: "orchestration",
//           description: "Mandatory orchestration rules defining agent execution behavior.",
//           group: "Blockchain",
//           category: "DeFi",
//         },
//         {
//           id: "bdefi:contract-test-creator",
//           title: "contract-test-creator",
//           description: "Auto-activating smart contract test creator for DeFi and blockchain systems.",
//           group: "Blockchain",
//           category: "DeFi",
//         },
//         {
//           id: "bdefi:routing-dex-trades",
//           title: "routing-dex-trades",
//           description: "Optimize routing across multiple DEXs for best price execution and minimal slippage.",
//           group: "Blockchain",
//           category: "DeFi",
//         },
//         {
//           id: "bdefi:optimizing-staking-rewards",
//           title: "optimizing-staking-rewards",
//           description: "Compare staking rewards across validators and networks with ROI calculations.",
//           group: "Blockchain",
//           category: "DeFi",
//         },
//         {
//           id: "bdefi:analyzing-liquidity-pools",
//           title: "analyzing-liquidity-pools",
//           description: "Analyze liquidity pools including TVL, volume, fees, and impermanent loss.",
//           group: "Blockchain",
//           category: "DeFi",
//         },
//         {
//           id: "bdefi:optimizing-defi-yields",
//           title: "optimizing-defi-yields",
//           description: "Find and compare DeFi yield opportunities with APY calculations.",
//           group: "Blockchain",
//           category: "DeFi",
//         },
//         {
//           id: "bdefi:simulating-flash-loans",
//           title: "simulating-flash-loans",
//           description: "Simulate flash loan arbitrage strategies across DeFi protocols.",
//           group: "Blockchain",
//           category: "DeFi",
//         },
//         {
//           id: "bdefi:analyzing-mempool",
//           title: "analyzing-mempool",
//           description: "Monitor blockchain mempools for MEV, front-running, and pending transactions.",
//           group: "Blockchain",
//           category: "DeFi",
//         },
//         {
//           id: "bdefi:add-vault-protocol",
//           title: "add-vault-protocol",
//           description: "Add support for new ERC-4626 vault protocols.",
//           group: "Blockchain",
//           category: "DeFi",
//         },
//         {
//           id: "bdefi:guidelines-advisor",
//           title: "guidelines-advisor",
//           description: "Smart contract and DeFi protocol best-practice advisor by Trail of Bits.",
//           group: "Blockchain",
//           category: "DeFi",
//         },
//         {
//           id: "bdefi:token-integration-analyzer",
//           title: "token-integration-analyzer",
//           description: "Analyze ERC20/ERC721 token implementations and DeFi integrations.",
//           group: "Blockchain",
//           category: "DeFi",
//         },
//         {
//           id: "bdefi:rr-solidity",
//           title: "rr-solidity",
//           description: "Comprehensive Solidity development with Foundry for DeFi protocols.",
//           group: "Blockchain",
//           category: "DeFi",
//         },
//         {
//           id: "bdefi:smart-contract-generator",
//           title: "smart-contract-generator",
//           description: "Generate secure Solidity smart contracts for DeFi and Web3.",
//           group: "Blockchain",
//           category: "DeFi",
//         },
//         {
//           id: "bdefi:software-crypto-web3",
//           title: "software-crypto-web3",
//           description: "Production-grade blockchain and DeFi development across EVM, Solana, and Cosmos.",
//           group: "Blockchain",
//           category: "DeFi",
//         },
//         {
//           id: "bdefi:defi-expert",
//           title: "defi-expert",
//           description: "DeFi protocol expert ensuring correct formats, types, and integrations.",
//           group: "Blockchain",
//           category: "DeFi",
//         },
//         {
//           id: "bdefi:defi-mev-battletest",
//           title: "defi-mev-battletest",
//           description: "Expert knowledge for MEV bot development and DeFi trading systems.",
//           group: "Blockchain",
//           category: "DeFi",
//         },
//         {
//           id: "bdefi:liquidity-depth-analyzer",
//           title: "liquidity-depth-analyzer",
//           description: "Analyze DEX liquidity depth, slippage, and price impact.",
//           group: "Blockchain",
//           category: "DeFi",
//         },
//         {
//           id: "bdefi:defi-registry-manager",
//           title: "defi-registry-manager",
//           description: "Manage expansion of tokens, pools, chains, and DEX registries.",
//           group: "Blockchain",
//           category: "DeFi",
//         },
//         {
//           id: "bdefi:hft-quant-expert",
//           title: "hft-quant-expert",
//           description: "Quantitative trading expertise for DeFi and crypto derivatives.",
//           group: "Blockchain",
//           category: "DeFi",
//         },
//         {
//           id: "devops-cicd:pr-creator",
//           title: "pr-creator",
//           description: "Create pull requests following repository templates and standards.",
//           group: "DevOps",
//           category: "CI/CD",
//         },
//         {
//           id: "devops-cicd:gitops-workflow",
//           title: "gitops-workflow",
//           description: "Implement GitOps workflows with ArgoCD and Flux for declarative Kubernetes deployments.",
//           group: "DevOps",
//           category: "CI/CD",
//         },
//         {
//           id: "devops-cicd:deployment-pipeline-design",
//           title: "deployment-pipeline-design",
//           description: "Design multi-stage CI/CD pipelines with approval gates, security checks, and orchestration.",
//           group: "DevOps",
//           category: "CI/CD",
//         },
//         {
//           id: "devops-cicd:gitlab-ci-patterns",
//           title: "gitlab-ci-patterns",
//           description: "Build scalable GitLab CI/CD pipelines with multi-stage workflows and caching.",
//           group: "DevOps",
//           category: "CI/CD",
//         },
//         {
//           id: "devops-cicd:incident-runbook-templates",
//           title: "incident-runbook-templates",
//           description: "Create structured incident response runbooks with escalation and recovery steps.",
//           group: "DevOps",
//           category: "CI/CD",
//         },
//         {
//           id: "devops-cicd:github-actions-templates",
//           title: "github-actions-templates",
//           description: "Create production-ready GitHub Actions workflows for CI/CD automation.",
//           group: "DevOps",
//           category: "CI/CD",
//         },
//         {
//           id: "devops-cicd:monorepo-management",
//           title: "monorepo-management",
//           description: "Manage monorepos using Turborepo, Nx, and pnpm with optimized builds.",
//           group: "DevOps",
//           category: "CI/CD",
//         },
//         {
//           id: "devops-cicd:prometheus-configuration",
//           title: "prometheus-configuration",
//           description: "Configure Prometheus for metrics collection, storage, and alerting.",
//           group: "DevOps",
//           category: "CI/CD",
//         },
//         {
//           id: "devops-cicd:turborepo-caching",
//           title: "turborepo-caching",
//           description: "Optimize Turborepo builds with local and remote caching.",
//           group: "DevOps",
//           category: "CI/CD",
//         },
//         {
//           id: "devops-cicd:dependency-upgrade",
//           title: "dependency-upgrade",
//           description: "Manage major dependency upgrades with compatibility analysis and staged rollout.",
//           group: "DevOps",
//           category: "CI/CD",
//         },
//         {
//           id: "devops-cicd:secrets-management",
//           title: "secrets-management",
//           description: "Secure secrets in CI/CD pipelines using Vault or cloud secret managers.",
//           group: "DevOps",
//           category: "CI/CD",
//         },
//         {
//           id: "devops-cicd:bazel-build-optimization",
//           title: "bazel-build-optimization",
//           description: "Optimize Bazel builds for large-scale monorepos and remote execution.",
//           group: "DevOps",
//           category: "CI/CD",
//         },
//         {
//           id: "devops-cicd:linkerd-patterns",
//           title: "linkerd-patterns",
//           description: "Implement Linkerd service mesh patterns with zero-trust networking.",
//           group: "DevOps",
//           category: "CI/CD",
//         },
//         {
//           id: "devops-cicd:k8s-manifest-generator",
//           title: "k8s-manifest-generator",
//           description: "Generate production-ready Kubernetes manifests following best practices.",
//           group: "DevOps",
//           category: "CI/CD",
//         },
//         {
//           id: "devops-cicd:e2e-testing-patterns",
//           title: "e2e-testing-patterns",
//           description: "Implement end-to-end testing with Playwright and Cypress.",
//           group: "DevOps",
//           category: "CI/CD",
//         },
//         {
//           id: "devops-cicd:code-review-excellence",
//           title: "code-review-excellence",
//           description: "Establish effective code review practices for CI-driven teams.",
//           group: "DevOps",
//           category: "CI/CD",
//         },
//         {
//           id: "devops-cicd:bats-testing-patterns",
//           title: "bats-testing-patterns",
//           description: "Test shell scripts and pipelines using Bats.",
//           group: "DevOps",
//           category: "CI/CD",
//         },
//         {
//           id: "devops-cicd:helm-chart-scaffolding",
//           title: "helm-chart-scaffolding",
//           description: "Design and manage Helm charts for Kubernetes deployments.",
//           group: "DevOps",
//           category: "CI/CD",
//         },
//         {
//           id: "devops-cicd:changelog-automation",
//           title: "changelog-automation",
//           description: "Automate changelog generation from commits and pull requests.",
//           group: "DevOps",
//           category: "CI/CD",
//         },
//         {
//           id: "devops-cicd:terraform-module-library",
//           title: "terraform-module-library",
//           description: "Build reusable Terraform modules for cloud infrastructure.",
//           group: "DevOps",
//           category: "CI/CD",
//         },
//         {
//           id: "devops-cicd:sast-configuration",
//           title: "sast-configuration",
//           description: "Configure SAST tools for automated security scanning in CI/CD.",
//           group: "DevOps",
//           category: "CI/CD",
//         },
//         {
//           id: "devops-cicd:analyze-ci",
//           title: "analyze-ci",
//           description: "Analyze failed GitHub Actions jobs for pull requests.",
//           group: "DevOps",
//           category: "CI/CD",
//         },
//         {
//           id: "devops-cicd:pr-build-status",
//           title: "pr-build-status",
//           description: "Retrieve CI build status and failure details for pull requests.",
//           group: "DevOps",
//           category: "CI/CD",
//         },
//         {
//           id: "devops-cicd:final-release-review",
//           title: "final-release-review",
//           description: "Perform release-readiness audits and diff-based risk analysis.",
//           group: "DevOps",
//           category: "CI/CD",
//         },
//         {
//           id: "devops-cicd:railway-deployment",
//           title: "railway-deployment",
//           description: "Manage Railway deployments including logs, restarts, and redeploys.",
//           group: "DevOps",
//           category: "CI/CD",
//         },
//         {
//           id: "devops-cicd:railway-environment",
//           title: "railway-environment",
//           description: "Manage environment variables and configuration in Railway.",
//           group: "DevOps",
//           category: "CI/CD",
//         },
//         {
//           id: "devops-cicd:senior-devops",
//           title: "senior-devops",
//           description: "Comprehensive DevOps expertise for CI/CD, cloud, IaC, and monitoring.",
//           group: "DevOps",
//           category: "CI/CD",
//         },
//         {
//           id: "devops-cicd:gh-fix-ci",
//           title: "gh-fix-ci",
//           description: "Diagnose and fix failing GitHub Actions CI checks.",
//           group: "DevOps",
//           category: "CI/CD",
//         },
//         {
//           id: "devops-cicd:iterate-pr",
//           title: "iterate-pr",
//           description: "Iterate on pull requests until all CI checks pass.",
//           group: "DevOps",
//           category: "CI/CD",
//         },
//         {
//           id: "devops-cloud:multi-cloud-architecture",
//           title: "multi-cloud-architecture",
//           description: "Design multi-cloud architectures across AWS, Azure, and GCP to avoid vendor lock-in and leverage best-of-breed services.",
//           group: "DevOps",
//           category: "Cloud",
//         },
//         {
//           id: "devops-cloud:gitops-workflow",
//           title: "gitops-workflow",
//           description: "Implement GitOps workflows with ArgoCD and Flux for declarative Kubernetes deployments.",
//           group: "DevOps",
//           category: "Cloud",
//         },
//         {
//           id: "devops-cloud:hybrid-cloud-networking",
//           title: "hybrid-cloud-networking",
//           description: "Configure secure hybrid cloud connectivity using VPNs and dedicated links.",
//           group: "DevOps",
//           category: "Cloud",
//         },
//         {
//           id: "devops-cloud:istio-traffic-management",
//           title: "istio-traffic-management",
//           description: "Configure Istio routing, load balancing, canary deployments, and resilience patterns.",
//           group: "DevOps",
//           category: "Cloud",
//         },
//         {
//           id: "devops-cloud:deployment-pipeline-design",
//           title: "deployment-pipeline-design",
//           description: "Design multi-stage deployment pipelines with approvals and security checks.",
//           group: "DevOps",
//           category: "Cloud",
//         },
//         {
//           id: "devops-cloud:gitlab-ci-patterns",
//           title: "gitlab-ci-patterns",
//           description: "Build scalable GitLab CI/CD pipelines with caching and distributed runners.",
//           group: "DevOps",
//           category: "Cloud",
//         },
//         {
//           id: "devops-cloud:incident-runbook-templates",
//           title: "incident-runbook-templates",
//           description: "Create structured incident response runbooks for cloud systems.",
//           group: "DevOps",
//           category: "Cloud",
//         },
//         {
//           id: "devops-cloud:secrets-management",
//           title: "secrets-management",
//           description: "Secure secrets using Vault, AWS Secrets Manager, and cloud-native tools.",
//           group: "DevOps",
//           category: "Cloud",
//         },
//         {
//           id: "devops-cloud:cost-optimization",
//           title: "cost-optimization",
//           description: "Optimize cloud spend via rightsizing, tagging, and reserved instances.",
//           group: "DevOps",
//           category: "Cloud",
//         },
//         {
//           id: "devops-cloud:linkerd-patterns",
//           title: "linkerd-patterns",
//           description: "Implement Linkerd service mesh for zero-trust cloud networking.",
//           group: "DevOps",
//           category: "Cloud",
//         },
//         {
//           id: "devops-cloud:k8s-manifest-generator",
//           title: "k8s-manifest-generator",
//           description: "Generate production-grade Kubernetes manifests following best practices.",
//           group: "DevOps",
//           category: "Cloud",
//         },
//         {
//           id: "devops-cloud:terraform-module-library",
//           title: "terraform-module-library",
//           description: "Build reusable Terraform modules for AWS, Azure, and GCP.",
//           group: "DevOps",
//           category: "Cloud",
//         },
//         {
//           id: "devops-cloud:azure-resource-visualizer",
//           title: "azure-resource-visualizer",
//           description: "Visualize Azure resource groups with Mermaid architecture diagrams.",
//           group: "DevOps",
//           category: "Cloud",
//         },
//         {
//           id: "devops-cloud:devops-iac-engineer",
//           title: "devops-iac-engineer",
//           description: "Design and implement infrastructure-as-code with Terraform and Kubernetes.",
//           group: "DevOps",
//           category: "Cloud",
//         },
//         {
//           id: "devops-cloud:railway-deployment",
//           title: "railway-deployment",
//           description: "Manage Railway deployments including logs, restarts, and redeploys.",
//           group: "DevOps",
//           category: "Cloud",
//         },
//         {
//           id: "devops-cloud:railway-environment",
//           title: "railway-environment",
//           description: "Manage Railway environment variables and configuration safely.",
//           group: "DevOps",
//           category: "Cloud",
//         },
//         {
//           id: "devops-cloud:modal-serverless-gpu",
//           title: "modal-serverless-gpu",
//           description: "Run GPU workloads serverlessly without infrastructure management.",
//           group: "DevOps",
//           category: "Cloud",
//         },
//         {
//           id: "devops-cloud:lambda-labs-gpu-cloud",
//           title: "lambda-labs-gpu-cloud",
//           description: "Provision on-demand or reserved GPU instances for ML workloads.",
//           group: "DevOps",
//           category: "Cloud",
//         },
//         {
//           id: "devops-cloud:railway-templates",
//           title: "railway-templates",
//           description: "Deploy services from Railway’s template marketplace.",
//           group: "DevOps",
//           category: "Cloud",
//         },
//         {
//           id: "devops-cloud:modal",
//           title: "modal",
//           description: "Run Python workloads in the cloud with autoscaling and GPUs.",
//           group: "DevOps",
//           category: "Cloud",
//         },
//         {
//           id: "devops-cloud:senior-devops",
//           title: "senior-devops",
//           description: "Advanced DevOps expertise across cloud platforms, CI/CD, and monitoring.",
//           group: "DevOps",
//           category: "Cloud",
//         },
//         {
//           id: "devops-cloud:skypilot-multi-cloud-orchestration",
//           title: "skypilot-multi-cloud-orchestration",
//           description: "Orchestrate ML workloads across clouds with cost optimization.",
//           group: "DevOps",
//           category: "Cloud",
//         },
//         {
//           id: "devops-cloud:vercel-deploy",
//           title: "vercel-deploy",
//           description: "Deploy applications and preview builds to Vercel.",
//           group: "DevOps",
//           category: "Cloud",
//         },
//         {
//           id: "devops-cloud:rclone",
//           title: "rclone",
//           description: "Sync and manage files across cloud storage providers.",
//           group: "DevOps",
//           category: "Cloud",
//         },
//         {
//           id: "devops-cloud:aws-penetration-testing",
//           title: "aws-penetration-testing",
//           description: "Perform AWS security assessments and privilege escalation testing.",
//           group: "DevOps",
//           category: "Cloud",
//         },
//         {
//           id: "devops-cloud:cloud-penetration-testing",
//           title: "cloud-penetration-testing",
//           description: "Assess security posture across AWS, Azure, and GCP.",
//           group: "DevOps",
//           category: "Cloud",
//         },
//         {
//           id: "devops-cloud:creating-kubernetes-deployments",
//           title: "creating-kubernetes-deployments",
//           description: "Generate production-ready Kubernetes deployments and services.",
//           group: "DevOps",
//           category: "Cloud",
//         },
//         {
//           id: "devops-cloud:detecting-infrastructure-drift",
//           title: "detecting-infrastructure-drift",
//           description: "Detect infrastructure drift against IaC definitions.",
//           group: "DevOps",
//           category: "Cloud",
//         },
//         {
//           id: "devops-cloud:creating-apm-dashboards",
//           title: "creating-apm-dashboards",
//           description: "Create application performance monitoring dashboards.",
//           group: "DevOps",
//           category: "Cloud",
//         },
//         {
//           id: "devops-containers:gitops-workflow",
//           title: "gitops-workflow",
//           description: "Implement GitOps workflows with ArgoCD and Flux for declarative Kubernetes deployments.",
//           group: "DevOps",
//           category: "Containers",
//         },
//         {
//           id: "devops-containers:grafana-dashboards",
//           title: "grafana-dashboards",
//           description: "Create and manage production Grafana dashboards for system and application metrics.",
//           group: "DevOps",
//           category: "Containers",
//         },
//         {
//           id: "devops-containers:istio-traffic-management",
//           title: "istio-traffic-management",
//           description: "Configure Istio traffic routing, load balancing, and canary deployments.",
//           group: "DevOps",
//           category: "Containers",
//         },
//         {
//           id: "devops-containers:deployment-pipeline-design",
//           title: "deployment-pipeline-design",
//           description: "Design multi-stage CI/CD pipelines for containerized workloads.",
//           group: "DevOps",
//           category: "Containers",
//         },
//         {
//           id: "devops-containers:gitlab-ci-patterns",
//           title: "gitlab-ci-patterns",
//           description: "Build scalable GitLab CI/CD pipelines for container builds and deployments.",
//           group: "DevOps",
//           category: "Containers",
//         },
//         {
//           id: "devops-containers:prometheus-configuration",
//           title: "prometheus-configuration",
//           description: "Configure Prometheus for metrics collection and alerting in container environments.",
//           group: "DevOps",
//           category: "Containers",
//         },
//         {
//           id: "devops-containers:k8s-security-policies",
//           title: "k8s-security-policies",
//           description: "Implement Kubernetes NetworkPolicy, RBAC, and pod security standards.",
//           group: "DevOps",
//           category: "Containers",
//         },
//         {
//           id: "devops-containers:secrets-management",
//           title: "secrets-management",
//           description: "Manage secrets securely for Kubernetes and container pipelines.",
//           group: "DevOps",
//           category: "Containers",
//         },
//         {
//           id: "devops-containers:linkerd-patterns",
//           title: "linkerd-patterns",
//           description: "Deploy Linkerd service mesh for lightweight container networking.",
//           group: "DevOps",
//           category: "Containers",
//         },
//         {
//           id: "devops-containers:k8s-manifest-generator",
//           title: "k8s-manifest-generator",
//           description: "Generate production-ready Kubernetes manifests.",
//           group: "DevOps",
//           category: "Containers",
//         },
//         {
//           id: "devops-containers:helm-chart-scaffolding",
//           title: "helm-chart-scaffolding",
//           description: "Design and manage Helm charts for Kubernetes applications.",
//           group: "DevOps",
//           category: "Containers",
//         },
//         {
//           id: "devops-containers:railway-deployment",
//           title: "railway-deployment",
//           description: "Manage Railway deployments for containerized applications.",
//           group: "DevOps",
//           category: "Containers",
//         },
//         {
//           id: "devops-containers:railway-deploy",
//           title: "railway-deploy",
//           description: "Deploy containerized services to Railway using CLI workflows.",
//           group: "DevOps",
//           category: "Containers",
//         },
//         {
//           id: "devops-containers:senior-devops",
//           title: "senior-devops",
//           description: "Advanced DevOps practices across containers, CI/CD, and cloud platforms.",
//           group: "DevOps",
//           category: "Containers",
//         },
//         {
//           id: "devops-containers:railway-service",
//           title: "railway-service",
//           description: "Manage Railway services including Docker-based services.",
//           group: "DevOps",
//           category: "Containers",
//         },
//         {
//           id: "devops-containers:devops",
//           title: "devops",
//           description: "Deploy and manage Docker containers and cloud-native infrastructure.",
//           group: "DevOps",
//           category: "Containers",
//         },
//         {
//           id: "devops-containers:k8s-troubleshoot",
//           title: "k8s-troubleshoot",
//           description: "Troubleshoot Kubernetes pods, logs, processes, and networking.",
//           group: "DevOps",
//           category: "Containers",
//         },
//         {
//           id: "devops-containers:cert-manager-setup",
//           title: "cert-manager-setup",
//           description: "Set up cert-manager for automated TLS certificates in Kubernetes.",
//           group: "DevOps",
//           category: "Containers",
//         },
//         {
//           id: "devops-containers:istio-service-mesh-config",
//           title: "istio-service-mesh-config",
//           description: "Configure Istio service mesh for Kubernetes microservices.",
//           group: "DevOps",
//           category: "Containers",
//         },
//         {
//           id: "devops-containers:kubernetes-deployment-creator",
//           title: "kubernetes-deployment-creator",
//           description: "Generate Kubernetes deployment manifests automatically.",
//           group: "DevOps",
//           category: "Containers",
//         },
//         {
//           id: "devops-containers:prometheus-config-generator",
//           title: "prometheus-config-generator",
//           description: "Generate Prometheus configurations for Kubernetes monitoring.",
//           group: "DevOps",
//           category: "Containers",
//         },
//         {
//           id: "devops-containers:managing-network-policies",
//           title: "managing-network-policies",
//           description: "Manage Kubernetes network policies and firewall rules.",
//           group: "DevOps",
//           category: "Containers",
//         },
//         {
//           id: "devops-containers:kubernetes-configmap-handler",
//           title: "kubernetes-configmap-handler",
//           description: "Manage Kubernetes ConfigMaps programmatically.",
//           group: "DevOps",
//           category: "Containers",
//         },
//         {
//           id: "devops-containers:fluentd-config-generator",
//           title: "fluentd-config-generator",
//           description: "Generate Fluentd logging configurations for container stacks.",
//           group: "DevOps",
//           category: "Containers",
//         },
//         {
//           id: "devops-containers:generating-helm-charts",
//           title: "generating-helm-charts",
//           description: "Generate Helm charts for Kubernetes applications.",
//           group: "DevOps",
//           category: "Containers",
//         },
//         {
//           id: "devops-containers:helm-chart-generator",
//           title: "helm-chart-generator",
//           description: "Automatically generate Helm charts with best practices.",
//           group: "DevOps",
//           category: "Containers",
//         },
//         {
//           id: "devops-containers:kubernetes-ingress-config",
//           title: "kubernetes-ingress-config",
//           description: "Configure Kubernetes ingress resources with TLS and routing.",
//           group: "DevOps",
//           category: "Containers",
//         },
//         {
//           id: "devops-containers:argocd-app-deployer",
//           title: "argocd-app-deployer",
//           description: "Deploy applications to Kubernetes using ArgoCD.",
//           group: "DevOps",
//           category: "Containers",
//         },
//         {
//           id: "devops-containers:envoy-proxy-config",
//           title: "envoy-proxy-config",
//           description: "Configure Envoy proxy for containerized services.",
//           group: "DevOps",
//           category: "Containers",
//         },
//         {
//           id: "devops-containers:deploying-monitoring-stacks",
//           title: "deploying-monitoring-stacks",
//           description: "Deploy monitoring stacks including Prometheus and Grafana.",
//           group: "DevOps",
//           category: "Containers",
//         },
//         {
//           id: "devops-containers:gh-actions-validator",
//           title: "gh-actions-validator",
//           description: "Validate GitHub Actions workflows for container deployments.",
//           group: "DevOps",
//           category: "Containers",
//         },
//         {
//           id: "devops-containers:windsurf-dockerfile-generation",
//           title: "windsurf-dockerfile-generation",
//           description: "Generate optimized Dockerfiles using AI-driven best practices.",
//           group: "DevOps",
//           category: "Containers",
//         },
//         {
//           id: "devops-containers:eks-cluster-config",
//           title: "eks-cluster-config",
//           description: "Configure Amazon EKS clusters for Kubernetes workloads.",
//           group: "DevOps",
//           category: "Containers",
//         },
//         {
//           id: "devops-containers:consul-service-discovery",
//           title: "consul-service-discovery",
//           description: "Implement Consul-based service discovery for containers.",
//           group: "DevOps",
//           category: "Containers",
//         },
//         {
//           id: "devops-containers:generating-docker-compose-files",
//           title: "generating-docker-compose-files",
//           description: "Generate Docker Compose files for multi-container apps.",
//           group: "DevOps",
//           category: "Containers",
//         },
//         {
//           id: "devops-containers:managing-container-registries",
//           title: "managing-container-registries",
//           description: "Manage container registries and images at scale.",
//           group: "DevOps",
//           category: "Containers",
//         }
// ];