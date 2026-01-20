import type { NextApiRequest, NextApiResponse } from "next";
import { ConvexHttpClient } from "convex/browser";
import { api as skillsApi } from "../../../../convex-indexer/_generated/api";

const client = new ConvexHttpClient(
  process.env.INDEXER_CONVEX_URL!
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "GET") {
      return res.status(405).json({ success: false });
    }

    const q = String(req.query.q ?? "").trim();
    const limit = Number(req.query.limit ?? 20);

    if (!q) {
      return res.json({
        success: true,
        data: { skills: [] },
      });
    }

    const rows = await client.query(
      skillsApi.skills_public.search,
      { q, limit }
    );

    // 🔑 normalize Convex → client shape
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

    return res.json({
      success: true,
      data: {
        skills,
        pagination: null,
      },
    });
  } catch (e: any) {
    console.error("INDEXER SEARCH ERROR", e);
    return res.status(500).json({
      success: false,
      error: e?.message ?? "Unknown error",
    });
  }
}