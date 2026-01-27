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

// ✅ Keep validators in sync with convex/schema.ts
const edge = v.object({
  id: v.string(),
  from: v.string(),
  to: v.string(),
});

const node = v.object({
  id: v.string(),
  kind: v.union(v.literal("user"), v.literal("hub"), v.literal("skill")),
  title: v.string(),
  x: v.float64(),
  y: v.float64(),

  subtitle: v.optional(v.string()),
  description: v.optional(v.string()),
  group: v.optional(v.string()),
  skillId: v.optional(v.string()),
  category: v.optional(v.string()),

  author: v.optional(v.string()),
  githubStars: v.optional(v.number()),
});

export const create = mutation({
  args: {
    title: v.string(),
    description: v.optional(v.string()),
    isPublic: v.boolean(),

    // ✅ Strong validation: gives you pinpoint errors instead of "Server Error"
    nodes: v.array(node),
    edges: v.array(edge),

    // If you're 100% sure this is a real Convex users _id, you can make this required again.
    ownerId: v.optional(v.id("users")),
  },
  handler: async (ctx, args) => {
    const t = now();

    const nodes = args.nodes;
    const edges = args.edges;

    const treeId = await ctx.db.insert("skillTrees", {
      title: args.title,
      description: args.description ?? "",
      isPublic: args.isPublic,
      slug: uniqueSlug(args.title),

      // ✅ Only set if provided
      ownerId: args.ownerId,

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

    // ✅ Strong validation here too
    nodes: v.array(node),
    edges: v.array(edge),
  },
  handler: async (ctx, args) => {
    const t = now();

    const tree = await ctx.db.get(args.treeId);
    if (!tree) throw new Error("Tree not found");

    const nodes = args.nodes;
    const edges = args.edges;

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

export const getById = query({
  args: { treeId: v.id("skillTrees") },
  handler: async (ctx, args) => {
    const tree = await ctx.db.get(args.treeId);
    if (!tree) return null;

    const latest = await ctx.db
      .query("treeSnapshots")
      .withIndex("by_tree_version", (q) => q.eq("treeId", args.treeId))
      .order("desc")
      .first();

    if (!latest) {
      return { tree, snapshot: null };
    }

    return {
      tree,
      snapshot: {
        nodes: latest.nodes,
        edges: latest.edges,
      },
    };
  },
});

export const getMyLatest = query({
  args: { userId: v.id("users") },
  handler: async (ctx, { userId }) => {
    return await ctx.db
      .query("skillTrees")
      .withIndex("by_owner", (q) => q.eq("ownerId", userId))
      .order("desc")
      .first();
  },
});

export const listPublicByOwner = query({
  args: {
    ownerId: v.id("users"),
    limit: v.optional(v.number()),
  },
  handler: async (ctx, { ownerId, limit }) => {
    const rows = await ctx.db
      .query("skillTrees")
      .withIndex("by_owner", (q) => q.eq("ownerId", ownerId))
      .order("desc")
      .take(limit ?? 50);

    return rows
      .filter((t) => t.isPublic)
      .map((t) => ({
        _id: t._id,
        title: t.title,
        slug: t.slug,
        nodeCount: t.nodeCount,
        edgeCount: t.edgeCount,
        createdAt: t.createdAt,
        updatedAt: t.updatedAt,
      }));
  },
});