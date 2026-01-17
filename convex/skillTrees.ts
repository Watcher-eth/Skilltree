// convex/skillTrees.ts
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

function now() {
  return Date.now();
}

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 56);
}

function uniqueSlug(title: string) {
  const base = slugify(title) || "skill-tree";
  const suffix = Math.random().toString(36).slice(2, 7);
  return `${base}-${suffix}`;
}

export const create = mutation({
  args: {
    title: v.string(),
    description: v.optional(v.string()),
    isPublic: v.boolean(),
    nodes: v.any(),
    edges: v.any(),
  },
  handler: async (ctx, args) => {
    const t = now();

    const nodes = Array.isArray(args.nodes) ? args.nodes : [];
    const edges = Array.isArray(args.edges) ? args.edges : [];

    const treeId = await ctx.db.insert("skillTrees", {
      title: args.title,
      description: args.description ?? "",
      isPublic: args.isPublic,
      slug: uniqueSlug(args.title),
      nodeCount: nodes.length,
      edgeCount: edges.length,
      createdAt: t,
      updatedAt: t,
    });

    await ctx.db.insert("treeSnapshots", {
      treeId,
      version: 1,
      nodes,
      edges,
      createdAt: t,
    });

    return { treeId };
  },
});

export const saveSnapshot = mutation({
  args: {
    treeId: v.id("skillTrees"),
    title: v.string(),
    description: v.optional(v.string()),
    isPublic: v.boolean(),
    nodes: v.any(),
    edges: v.any(),
  },
  handler: async (ctx, args) => {
    const t = now();

    const tree = await ctx.db.get(args.treeId);
    if (!tree) throw new Error("Tree not found");

    const nodes = Array.isArray(args.nodes) ? args.nodes : [];
    const edges = Array.isArray(args.edges) ? args.edges : [];

    const latest = await ctx.db
      .query("treeSnapshots")
      .withIndex("by_tree_version", (q) => q.eq("treeId", args.treeId))
      .order("desc")
      .first();

    const nextVersion = (latest?.version ?? 0) + 1;

    await ctx.db.patch(args.treeId, {
      title: args.title,
      description: args.description ?? "",
      isPublic: args.isPublic,
      nodeCount: nodes.length,
      edgeCount: edges.length,
      updatedAt: t,
    });

    await ctx.db.insert("treeSnapshots", {
      treeId: args.treeId,
      version: nextVersion,
      nodes,
      edges,
      createdAt: t,
    });

    return { version: nextVersion };
  },
});

export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    const tree = await ctx.db
      .query("skillTrees")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .unique();

    if (!tree) return null;

    const latest = await ctx.db
      .query("treeSnapshots")
      .withIndex("by_tree_version", (q) => q.eq("treeId", tree._id))
      .order("desc")
      .first();

    if (!latest) return { tree, snapshot: null };

    return {
      tree,
      snapshot: {
        nodes: latest.nodes,
        edges: latest.edges,
      },
    };
  },
});