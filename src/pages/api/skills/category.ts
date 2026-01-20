import type { NextApiRequest, NextApiResponse } from "next";
import { ConvexHttpClient } from "convex/browser";
import { api as skillsApi } from "../../../../convex-indexer/_generated/api";

const client = new ConvexHttpClient(process.env.INDEXER_CONVEX_URL!);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ success: false });
  }

  const group = String(req.query.group ?? "");
  const category = String(req.query.category ?? "");
  const limit = Number(req.query.limit ?? 50);

  if (!group || !category) {
    return res.status(400).json({ success: false });
  }

  const rows = await client.query(
    skillsApi.skills_public.byGroupCategory,
    { group, category, limit }
  );

  const skills = rows.map((r: any) => ({
    id: r.skillKey,
    name: r.name,
    description: r.description,
    author: r.author,
    githubUrl: r.repoUrl,
    stars: r.stars,
    updatedAt: r.updatedAt,
    group: r.group,
    category: r.category,
  }));

  res.json({ success: true, data: { skills } });
}