"use client";

import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

export default function PublicTree({ slug }: { slug: string }) {
  const data = useQuery(api.skillTrees.getBySlug, { slug });

  if (!data) return <div>Not found</div>;
  if (!data.snapshot) return <div>Empty tree</div>;

  return (
    <div>
      <h1>{data.tree.title}</h1>
      {/* render snapshot.nodes / snapshot.edges */}
    </div>
  );
}