// src/components/tree/skillTreeViewer.tsx
"use client";

import * as React from "react";
import type { CanvasEdge, CanvasNode } from "./types";
import type { Id } from "../../../convex/_generated/dataModel";
import { Canvas, type CanvasHandle } from "./Canvas";
import { TopBar } from "@/components/layout/top";
import { useRouter } from "next/router";
import { useMe } from "@/components/hooks/useMe";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { RightInspector } from "@/components/layout/right";
import { InstallSkillsDialog } from "../layout/installDialog"

type InitialTree = {
  _id: Id<"skillTrees">;
  title: string;
};

type InitialSnapshot = {
  nodes: CanvasNode[];
  edges: CanvasEdge[];
};

function makeUserNode(): CanvasNode {
  return {
    id: "user-root",
    kind: "user",
    title: "You",
    subtitle: "Root",
    description: "Your Agent",
    category: null,
    x: -130,
    y: 220,
  };
}

function sanitizeNodes(nodes: CanvasNode[]) {
  return nodes.map((n) => {
    const out: any = { ...n };
    if (out.category == null) delete out.category;
    if (out.subtitle == null) delete out.subtitle;
    if (out.description == null) delete out.description;
    if (out.group == null) delete out.group;
    if (out.skillId == null) delete out.skillId;
    if (out.author == null) delete out.author;
    if (out.githubStars == null) delete out.githubStars;
    return out;
  });
}

function sanitizeEdges(edges: CanvasEdge[]) {
  return edges.map((e) => ({ id: e.id, from: e.from, to: e.to }));
}

export function SkillTreeViewer({
  initialTree,
  initialSnapshot,
}: {
  initialTree: InitialTree;
  initialSnapshot?: InitialSnapshot;
}) {
  const router = useRouter();
  const { me, isLoading } = useMe();
  const createTree = useMutation(api.skillTrees.create);

  const [installOpen, setInstallOpen] = React.useState(false);

  const [treeName] = React.useState(initialTree?.title ?? "Skill Tree");
  const [nodes] = React.useState<CanvasNode[]>(() =>
    initialSnapshot?.nodes?.length ? initialSnapshot.nodes : [makeUserNode()]
  );
  const [edges] = React.useState<CanvasEdge[]>(() => initialSnapshot?.edges ?? []);
  const [selectedId, setSelectedId] = React.useState<string | null>(null);

  const canvasRef = React.useRef<CanvasHandle | null>(null);

  const selectedNode = React.useMemo(() => {
    if (!selectedId) return null;
    return nodes.find((n) => n.id === selectedId) ?? null;
  }, [nodes, selectedId]);

  const onFork = React.useCallback(async () => {
    if (isLoading) return;
    if (!me?._id) {
      router.push("/api/auth/signin"); // or your sign-in route
      return;
    }

    const cleanNodes = sanitizeNodes(JSON.parse(JSON.stringify(nodes)));
    const cleanEdges = sanitizeEdges(JSON.parse(JSON.stringify(edges)));

    const res = await createTree({
      title: `${treeName} (fork)`,
      description: "",
      isPublic: true,
      ownerId: me._id,
      nodes: cleanNodes,
      edges: cleanEdges,
    });

    router.push(`/edit/${res.treeId}`);
  }, [createTree, edges, isLoading, me?._id, nodes, router, treeName]);

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#f4f4f3]">
  <TopBar
  treeName={treeName}
  onTreeNameChange={() => {}}
  onSave={() => {}}
  onFork={() => void onFork()}
  onOpenInstall={() => void setInstallOpen(true)}
  onOpenCode={() => {}}
  saving={false}
  lastSavedAt={null}
  username={me?.name}
  userId={me?._id}
  mode="view"
  treeHref={`/t/${initialTree._id}`}
/>

      <Canvas
        ref={canvasRef}
        nodes={nodes}
        edges={edges}
        selectedId={selectedId}
        onSelectNode={(id) => setSelectedId(id)}
        onMoveNode={() => {}}
        readOnly
      />
<InstallSkillsDialog
  open={installOpen}
  onOpenChange={setInstallOpen}
  nodes={nodes}
/>
      {selectedNode ? (
        <div className="fixed right-6 top-[76px] z-30">
          <RightInspector node={selectedNode} />
        </div>
      ) : null}
    </div>
  );
}