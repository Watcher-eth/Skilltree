// src/components/tree/reconcileEdges.ts

import { CanvasNode } from "@/components/tree/types"
import { CanvasEdge } from "@/components/tree/types"

function edgeId(from: string, to: string) {
  return `e:${from}->${to}`;
}

export function reconcileEdges(allNodes: CanvasNode[], _currentEdges: CanvasEdge[]) {
  const seen = new Set<string>();
  const out: CanvasEdge[] = [];

  const userId = "user-root";

  const hubs = allNodes.filter((n) => n.kind === "hub" && (n as any).group);
  const skills = allNodes.filter((n) => n.kind === "skill" && (n as any).group);

  for (const hub of hubs) {
    const uh = `${userId}→${hub.id}`;
    if (!seen.has(uh)) {
      seen.add(uh);
      out.push({ id: edgeId(userId, hub.id), from: userId, to: hub.id });
    }

    for (const skill of skills.filter((s) => (s as any).group === (hub as any).group)) {
      const hs = `${hub.id}→${skill.id}`;
      if (!seen.has(hs)) {
        seen.add(hs);
        out.push({ id: edgeId(hub.id, skill.id), from: hub.id, to: skill.id });
      }
    }
  }

  return out;
}