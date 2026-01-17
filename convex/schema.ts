import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    // optional if you want a profile page, display name, etc.
    name: v.optional(v.string()),
    avatarUrl: v.optional(v.string()),
  }),

  skillTrees: defineTable({
    ownerId: v.optional(v.id("users")), // if you add auth later, this becomes required
    title: v.string(),
    description: v.optional(v.string()),
    isPublic: v.boolean(),
    slug: v.optional(v.string()),

    // denormalized for quick list views
    nodeCount: v.number(),
    edgeCount: v.number(),

    updatedAt: v.number(),
    createdAt: v.number(),
  })
    .index("by_owner", ["ownerId"])
    .index("by_public", ["isPublic", "updatedAt"])
    .index("by_slug", ["slug"]),

  treeSnapshots: defineTable({
    treeId: v.id("skillTrees"),

    // store the whole canvas payload as one doc
    // Convex is fine with nested arrays/objects (within size limits)
    nodes: v.array(
      v.object({
        id: v.string(),
        kind: v.union(v.literal("user"), v.literal("hub"), v.literal("skill")),
        title: v.string(),
        subtitle: v.optional(v.string()),
        description: v.optional(v.string()),

        // your existing node fields:
        skillId: v.optional(v.string()),
        group: v.optional(v.string()),
        category: v.optional(v.string()),

        x: v.number(),
        y: v.number(),
      })
    ),
    edges: v.array(
      v.object({
        id: v.string(),
        from: v.string(),
        to: v.string(),
      })
    ),

    version: v.number(),
    createdAt: v.number(),
  }).index("by_tree_version", ["treeId", "version"]),
});