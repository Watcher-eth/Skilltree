// components/tree/skillsInstall.ts
import type { CanvasNode } from "../components/tree/types";

export function extractSkillPackages(nodes: CanvasNode[]) {
  return nodes
    .filter((n) => n.kind === "skill" && n.skillId)
    .map((n) =>
      n.title
        .toLowerCase()
        .replaceAll(" ", "-")
    );
}

export function installCommandForSkills(pkgs: string[]) {
  if (!pkgs.length) return "bunx skills i";
  return `bunx skills i ${pkgs.join(" ")}`;
}