// pages/[slug].tsx
import type { GetServerSideProps } from "next";
import { ConvexHttpClient } from "convex/browser";
import { api } from "../../convex/_generated/api";

import { Canvas } from "@/components/tree/Canvas";
import type { CanvasNode, CanvasEdge } from "@/components/tree/types";

type Props =
  | { ok: true; tree: any; snapshot: any }
  | { ok: false };

export default function PublicSkillTreePage(props: Props) {
  if (!props.ok) return <div className="p-8">Not found.</div>;

  const nodes = (props.snapshot?.nodes ?? []) as CanvasNode[];
  const edges = (props.snapshot?.edges ?? []) as CanvasEdge[];

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#f4f4f3]">
      <div className="fixed top-6 left-6 z-40">
        <div className="text-[22px] font-semibold text-black/80">
          {props.tree.title}
        </div>
      </div>

      <Canvas
        nodes={nodes}
        edges={edges}
        selectedId={null}
        onSelectNode={() => {}}
        onMoveNode={() => {}}
        readOnly
      />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const slug = ctx.params?.slug;
  if (typeof slug !== "string") return { props: { ok: false } };

  const url = process.env.CONVEX_URL || process.env.NEXT_PUBLIC_CONVEX_URL;
  if (!url) return { props: { ok: false } };

  const client = new ConvexHttpClient(url);

  const data = await client.query(api.skillTrees.getBySlug, { slug });
  if (!data) return { props: { ok: false } };

  return {
    props: {
      ok: true,
      tree: data.tree,
      snapshot: data.snapshot,
    },
  };
};