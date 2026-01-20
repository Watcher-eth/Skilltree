import type { GetServerSideProps } from "next";
import { ConvexHttpClient } from "convex/browser";
import { api } from "../../../convex/_generated/api";
import { SkillTreeBuilder } from "@/components/tree/skillTree";
import { Id } from "../../../convex/_generated/dataModel";
import { useMe } from "@/components/hooks/useMe";

type Props =
  | { ok: true; tree: any; snapshot: any }
  | { ok: false };

export default function EditSkillTreePage(props: Props) {
  const { me, isLoading } = useMe();

  if (!props.ok) return <div className="p-8">Not found</div>;
  if (isLoading) return null;

  return (
    <SkillTreeBuilder
      initialTree={props.tree}
      initialSnapshot={props.snapshot}
      username={me?.name}
    />
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const id = ctx.params?.id;
  if (typeof id !== "string") return { props: { ok: false } };

  const client = new ConvexHttpClient(
    process.env.NEXT_PUBLIC_CONVEX_URL!
  );

  const data = await client.query(api.skillTrees.getById, {
    treeId: id as Id<"skillTrees">,
  });

  if (!data) return { props: { ok: false } };

  return {
    props: {
      ok: true,
      tree: data.tree,
      snapshot: data.snapshot,
    },
  };
};