// src/lib/installCommands.ts
import type { CanvasNode } from "@/components/tree/types";
import type { PackageManager } from "@/lib/skillSettings";

export function buildInstallCommand(
  nodes: CanvasNode[],
  pkg: PackageManager
) {
  const skills = nodes.map((n) =>
    n.title.toLowerCase().replaceAll(" ", "-")
  );

  const args = skills.join(" ");

  switch (pkg) {
    case "npm":
      return `npx skills i ${args}`;
    case "yarn":
      return `yarn dlx skills i ${args}`;
    case "pnpm":
      return `pnpm dlx skills i ${args}`;
    case "bun":
    default:
      return `bunx skills i ${args}`;
  }
}