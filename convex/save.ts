import type { CanvasEdge, CanvasNode } from "@/components/tree/types";

export type SavePayload = {
  treeName: string;
  nodes: CanvasNode[];
  edges: CanvasEdge[];
  description?: string;
  isPublic?: boolean;
};

export function makeSlug(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 64);
}