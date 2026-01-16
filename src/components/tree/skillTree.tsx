"use client";

import * as React from "react";
import { nanoid } from "nanoid";
import type { CanvasEdge, CanvasNode, Skill, SkillCategory } from "./types";
import { LeftMenu } from "./menu";
import { Canvas } from "./Canvas";
import { TopBar } from "@/components/layout/top";
import { BottomBar } from "@/components/layout/bottom";
import { NODE_SIZE, PORT_R } from "./Node";

type Snapshot = {
  nodes: CanvasNode[];
  edges: CanvasEdge[];
  selectedId: string | null;
  treeName: string;
};

function edgeId() {
  return `e-${nanoid(8)}`;
}

function hubId(group: string, cat: string) {
    return `hub-${group.toLowerCase().replaceAll("&", "and").replaceAll(" ", "-")}__${cat
      .toLowerCase()
      .replaceAll("&", "and")
      .replaceAll("/", "-")
      .replaceAll(" ", "-")}`;
  }
  
  function wedgeKey(group: string, cat: string) {
    return `${group} / ${cat}`;
  }
/** ------------------ placement + geometry helpers ------------------ */

function stableHash(str: string) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function angleDiff(a: number, b: number) {
  return Math.atan2(Math.sin(a - b), Math.cos(a - b));
}

const WEDGES = [0, -35, 35, 180, 145, 215].map((d) => (d * Math.PI) / 180);

function wedgeAngleForCategory(key: string, usedAngles: number[]) {
    const base = stableHash(key) % WEDGES.length;
    for (let k = 0; k < WEDGES.length; k++) {
      const a = WEDGES[(base + k) % WEDGES.length];
      const tooClose = usedAngles.some((u) => Math.abs(angleDiff(a, u)) < (28 * Math.PI) / 180);
      if (!tooClose) return a;
    }
    return WEDGES[base];
  }

function polar(origin: { x: number; y: number }, angle: number, r: number) {
  return { x: origin.x + Math.cos(angle) * r, y: origin.y + Math.sin(angle) * r };
}

function centerOf(n: CanvasNode) {
  return { x: n.x + NODE_SIZE.w / 2, y: n.y + NODE_SIZE.h / 2 };
}

function rectForNode(n: CanvasNode, pad = 22) {
  return {
    x1: n.x - pad - PORT_R,
    y1: n.y - pad,
    x2: n.x + NODE_SIZE.w + pad + PORT_R,
    y2: n.y + NODE_SIZE.h + pad,
  };
}

function intersects(a: ReturnType<typeof rectForNode>, b: ReturnType<typeof rectForNode>) {
  return !(a.x2 < b.x1 || a.x1 > b.x2 || a.y2 < b.y1 || a.y1 > b.y2);
}

function findFreeSpot(nodes: CanvasNode[], desired: { x: number; y: number }, pad = 24): { x: number; y: number } {
  const targetRect = (x: number, y: number) => ({
    x1: x - pad - PORT_R,
    y1: y - pad,
    x2: x + NODE_SIZE.w + pad + PORT_R,
    y2: y + NODE_SIZE.h + pad,
  });

  const existingRects = nodes.map((n) => rectForNode(n, pad));

  const d0 = targetRect(desired.x, desired.y);
  if (!existingRects.some((r) => intersects(d0, r))) return desired;

  const step = 38;
  const maxRings = 170;

  for (let ring = 1; ring <= maxRings; ring++) {
    const r = ring * step;
    const samples = 22 + ring;

    for (let i = 0; i < samples; i++) {
      const t = (i / samples) * Math.PI * 2;
      const c = { x: desired.x + Math.cos(t) * r, y: desired.y + Math.sin(t) * r };
      const rr = targetRect(c.x, c.y);
      if (!existingRects.some((er) => intersects(rr, er))) return c;
    }
  }

  return desired;
}

function makeUserNode(): CanvasNode {
  return {
    id: "user-root",
    kind: "user",
    title: "You",
    subtitle: "Root",
    description: "This is the root of your skill tree.",
    category: null,
    x: -130,
    y: 220,
  };
}

/** ------------------ edge reconciliation (FIX) ------------------ */

function keyEdge(from: string, to: string) {
  return `${from}→${to}`;
}

/**
 * Rebuilds edges so rules are ALWAYS true:
 * - user-root -> hub(category) exists
 * - hub(category) -> every skill(category) exists
 * - no dangling edges (missing nodes) remain
 */
function reconcileEdges(allNodes: CanvasNode[], currentEdges: CanvasEdge[]) {
  const nodeIds = new Set(allNodes.map((n) => n.id));

  // Keep only edges that still point to existing nodes
  const base = currentEdges.filter((e) => nodeIds.has(e.from) && nodeIds.has(e.to));

  const seen = new Set<string>();
  const out: CanvasEdge[] = [];

  // de-dupe existing
  for (const e of base) {
    const k = keyEdge(e.from, e.to);
    if (seen.has(k)) continue;
    seen.add(k);
    out.push(e);
  }

  const userId = "user-root";

  // For each category hub, ensure user->hub and hub->each skill
  const hubs = allNodes.filter((n) => n.kind === "hub" && n.category);
  for (const hub of hubs) {
    const cat = hub.category as SkillCategory;

    // user -> hub (one per category)
    const kUH = keyEdge(userId, hub.id);
    if (!seen.has(kUH)) {
      seen.add(kUH);
      out.push({ id: edgeId(), from: userId, to: hub.id });
    }

    // hub -> every skill in that category
    const skills = allNodes.filter((n) => n.kind === "skill" && n.category === cat);
    for (const s of skills) {
      const kHS = keyEdge(hub.id, s.id);
      if (!seen.has(kHS)) {
        seen.add(kHS);
        out.push({ id: edgeId(), from: hub.id, to: s.id });
      }
    }
  }

  return out;
}

/** ------------------ component ------------------ */

export function SkillTreeBuilder() {
  const [treeName, setTreeName] = React.useState("My skill tree");
  const [nodes, setNodes] = React.useState<CanvasNode[]>(() => [makeUserNode()]);
  const [edges, setEdges] = React.useState<CanvasEdge[]>(() => []);
  const [selectedId, setSelectedId] = React.useState<string | null>(null);

  // undo/redo
  const undoStack = React.useRef<Snapshot[]>([]);
  const redoStack = React.useRef<Snapshot[]>([]);

  const snapshot = React.useCallback((): Snapshot => {
    return {
      nodes: JSON.parse(JSON.stringify(nodes)),
      edges: JSON.parse(JSON.stringify(edges)),
      selectedId,
      treeName,
    };
  }, [nodes, edges, selectedId, treeName]);

  const commit = React.useCallback(
    (reason: string) => {
      undoStack.current.push(snapshot());
      redoStack.current = [];
      void reason;
    },
    [snapshot]
  );

  const canUndo = undoStack.current.length > 0;
  const canRedo = redoStack.current.length > 0;

  const undo = React.useCallback(() => {
    const prev = undoStack.current.pop();
    if (!prev) return;
    redoStack.current.push(snapshot());
    setNodes(prev.nodes);
    setEdges(prev.edges);
    setSelectedId(prev.selectedId);
    setTreeName(prev.treeName);
  }, [snapshot]);

  const redo = React.useCallback(() => {
    const next = redoStack.current.pop();
    if (!next) return;
    undoStack.current.push(snapshot());
    setNodes(next.nodes);
    setEdges(next.edges);
    setSelectedId(next.selectedId);
    setTreeName(next.treeName);
  }, [snapshot]);

  // dragging node (grab offset)
  const dragState = React.useRef<{
    draggingId: string | null;
    grabOffsetX: number;
    grabOffsetY: number;
  }>({ draggingId: null, grabOffsetX: 0, grabOffsetY: 0 });

  const onMoveNodeWorld = React.useCallback((id: string, world: { x: number; y: number }) => {
    setNodes((prev) => {
      const idx = prev.findIndex((n) => n.id === id);
      if (idx === -1) return prev;

      if (dragState.current.draggingId !== id) {
        const n = prev[idx];
        dragState.current = {
          draggingId: id,
          grabOffsetX: world.x - n.x,
          grabOffsetY: world.y - n.y,
        };
      }

      const next = [...prev];
      next[idx] = {
        ...next[idx],
        x: world.x - dragState.current.grabOffsetX,
        y: world.y - dragState.current.grabOffsetY,
      };
      return next;
    });
  }, []);

  React.useEffect(() => {
    const up = () => (dragState.current.draggingId = null);
    window.addEventListener("pointerup", up);
    return () => window.removeEventListener("pointerup", up);
  }, []);

  // selection
  const selectedNode = React.useMemo(() => {
    if (!selectedId) return null;
    return nodes.find((n) => n.id === selectedId) ?? null;
  }, [nodes, selectedId]);

  const deleteSelected = React.useCallback(() => {
    if (!selectedId) return;
    if (selectedId === "user-root") return;

    commit("delete-node");

    setNodes((prev) => prev.filter((n) => n.id !== selectedId));
    // edges will be reconciled in effect below
    setSelectedId(null);
  }, [selectedId, commit]);

  // Save (localStorage)
  const onSave = React.useCallback(() => {
    const payload = { treeName, nodes, edges, savedAt: new Date().toISOString() };
    localStorage.setItem("skilltree:last", JSON.stringify(payload));
  }, [treeName, nodes, edges]);

  /**
   * ✅ FIX: whenever nodes change, reconcile edges to guarantee hub->skill edges exist.
   * This is the key reason your screenshot shows missing edges.
   */
  React.useEffect(() => {
    setEdges((prev) => {
      const next = reconcileEdges(nodes, prev);
      // avoid infinite loops by only updating if something changed
      if (next.length === prev.length) return prev;
      return next;
    });
  }, [nodes]);

  const onAddSkill = React.useCallback(
    (s: Skill) => {
      commit("add-skill");

      const userId = "user-root";
      const hid = hubId(s.group ?? "", s.category);

      setNodes((prev) => {
        const out = [...prev];

        const user = out.find((n) => n.id === userId) ?? null;
        const ux = user?.x ?? 0;
        const uy = user?.y ?? 0;

        let hub = out.find((n) => n.id === hid) ?? null;

        if (!hub) {
          const hubs = out.filter((n) => n.kind === "hub");
          const uC = { x: ux + NODE_SIZE.w / 2, y: uy + NODE_SIZE.h / 2 };

          const usedAngles = hubs.map((h) => {
            const hc = centerOf(h);
            return Math.atan2(hc.y - uC.y, hc.x - uC.x);
          });

          const angle = wedgeAngleForCategory(s.category, usedAngles);
          const radius = 380 + hubs.length * 80;

          const desiredHub = polar({ x: ux, y: uy }, angle, radius);
          const spotHub = findFreeSpot(out, desiredHub, 26);

          hub = {
            id: hid,
            kind: "hub",
            title: s.category,
            subtitle: "Category",
            description: `Category hub for ${s.category}.`,
            category: s.category as SkillCategory,
            x: spotHub.x,
            y: spotHub.y,
          };

          out.push(hub);
        }

        // Place skill outward along hub "lane"
        const existingSkills = out.filter((n) => n.kind === "skill" && n.category === s.category);
        const idx = existingSkills.length;

        const skillNodeId = `skill-${s.id}-${nanoid(6)}`;

        const uC = { x: ux + NODE_SIZE.w / 2, y: uy + NODE_SIZE.h / 2 };
        const hC = centerOf(hub as CanvasNode);

        const laneAngle = Math.atan2(hC.y - uC.y, hC.x - uC.x);
        const outward = 260 + idx * 170;

        const side = idx % 2 === 0 ? 1 : -1;
        const perpUnit = { x: Math.cos(laneAngle + Math.PI / 2), y: Math.sin(laneAngle + Math.PI / 2) };
        const perpMag = side * (90 + Math.floor(idx / 2) * 22);

        const along = polar({ x: hub?.x ?? 0, y: hub?.y ?? 0 }, laneAngle, outward);

        const desiredSkill = {
          x: along.x + perpUnit.x * perpMag,
          y: along.y + perpUnit.y * perpMag,
        };

        const spotSkill = findFreeSpot(out, desiredSkill, 26);

        out.push({
          id: skillNodeId,
          kind: "skill",
          title: s.title,
          subtitle: s.category,
          description: s.description ?? `Learn ${s.title}.`,
          skillId: s.id,
          category: s.category as SkillCategory,
          x: spotSkill.x,
          y: spotSkill.y,
        });

        return out;
      });

      // Selection: pick the newest one (we select after nodes update)
      // We'll do it in a microtask to wait for state update
      queueMicrotask(() => setSelectedId((prevSel) => prevSel)); // no-op; keep behavior stable
    },
    [commit]
  );

  // keyboard shortcuts
  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const meta = e.metaKey || e.ctrlKey;
      if (meta && e.key.toLowerCase() === "z" && !e.shiftKey) {
        e.preventDefault();
        undo();
      } else if ((meta && e.key.toLowerCase() === "z" && e.shiftKey) || (meta && e.key.toLowerCase() === "y")) {
        e.preventDefault();
        redo();
      } else if (e.key === "Backspace" || e.key === "Delete") {
        const t = e.target as HTMLElement | null;
        const tag = t?.tagName?.toLowerCase();
        if (tag === "input" || tag === "textarea") return;
        deleteSelected();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [undo, redo, deleteSelected]);

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#f4f4f3]">
      <TopBar
        treeName={treeName}
        onTreeNameChange={(v) => {
          commit("rename");
          setTreeName(v);
        }}
        onSave={onSave}
      />

      <LeftMenu onAddSkill={onAddSkill} />

      <Canvas
        nodes={nodes}
        edges={edges}
        selectedId={selectedId}
        onSelectNode={(id) => setSelectedId(id)}
        onMoveNode={onMoveNodeWorld}
      />

      <BottomBar
        canUndo={canUndo}
        canRedo={canRedo}
        onUndo={undo}
        onRedo={redo}
        onDelete={selectedId && selectedId !== "user-root" ? deleteSelected : null}
      />

      {selectedNode ? (
        <div className="fixed right-6 top-[76px] z-30">
          <RightInspectorNode node={selectedNode} />
        </div>
      ) : null}
    </div>
  );
}

// local import at bottom to avoid circulars in some setups
import { RightInspector } from "@/components/layout/right";
function RightInspectorNode({ node }: { node: CanvasNode }) {
  return <RightInspector node={node} />;
}