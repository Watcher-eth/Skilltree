// convex/schema.ts
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

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

  // optional metadata
  subtitle: v.optional(v.string()),
  description: v.optional(v.string()),
  group: v.optional(v.string()),
  skillId: v.optional(v.string()),

  // ✅ allow missing (do NOT require string)
  category: v.optional(v.string()),
});

export default defineSchema({
  skillTrees: defineTable({
    title: v.string(),
    description: v.optional(v.string()),
    isPublic: v.boolean(),
    slug: v.string(),
    ownerId: v.optional(v.id("users")),
    nodeCount: v.number(),
    edgeCount: v.number(),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_slug", ["slug"])
    .index("by_owner", ["ownerId"])
    .index("by_public", ["isPublic", "updatedAt"]),
    
  treeSnapshots: defineTable({
    treeId: v.id("skillTrees"),
    version: v.number(),
    createdAt: v.number(),

    // ✅ top-level, not nested
    nodes: v.array(node),
    edges: v.array(edge),
  }).index("by_tree_version", ["treeId", "version"]),

  // if you don’t have users yet, you can delete this table,
  // but leaving it here is fine if you reference ownerId later.

    users: defineTable({
      provider: v.string(),
      providerAccountId: v.string(),
      email: v.optional(v.string()),
      name: v.string(),
      avatar: v.string(),
      createdAt: v.number(),
      onboarded: v.boolean(),
    
      // ✅ new: public profile url: /u/[handle]
      handle: v.optional(v.string()),
    })
      .index("by_provider", ["provider", "providerAccountId"])
      .index("by_handle", ["handle"]),
    
    
    // OPTIONAL (for following tab to actually show something)
    follows: defineTable({
      followerId: v.id("users"),
      followingId: v.id("users"),
      createdAt: v.number(),
    })
      .index("by_follower", ["followerId", "createdAt"])
      .index("by_pair", ["followerId", "followingId"]),

});

