import type { NextApiRequest, NextApiResponse } from "next";

function mustGetKey() {
  const key = process.env.SKILLSMP_API_KEY;
  if (!key) throw new Error("Missing SKILLSMP_API_KEY in env");
  return key;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== "GET") return res.status(405).json({ success: false, error: "Method not allowed" });

    const q = String(req.query.q ?? "").trim();
    const page = String(req.query.page ?? "1");
    const limit = String(req.query.limit ?? "20");

    if (!q) return res.status(200).json({ success: true, data: { skills: [], pagination: null } });

    const url = new URL("https://skillsmp.com/api/v1/skills/search");
    url.searchParams.set("q", q);
    url.searchParams.set("page", page);
    url.searchParams.set("limit", limit);

    const upstream = await fetch(url.toString(), {
      headers: { Authorization: `Bearer ${mustGetKey()}` },
    });

    const json = await upstream.json();

    // Pass-through status + body
    return res.status(upstream.status).json(json);
  } catch (e: any) {
    return res.status(500).json({ success: false, error: e?.message ?? "Unknown error" });
  }
}