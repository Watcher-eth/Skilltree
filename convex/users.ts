import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

/* -------------------- AUTH UPSERT -------------------- */

export const upsertFromAuth = mutation({
  args: {
    provider: v.string(),
    providerAccountId: v.string(),
    email: v.optional(v.string()),
    name: v.string(),
    avatar: v.string(),
    onboarded: v.boolean(),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("users")
      .withIndex("by_provider", (q) =>
        q
          .eq("provider", args.provider)
          .eq("providerAccountId", args.providerAccountId)
      )
      .unique();

    if (existing) {
      await ctx.db.patch(existing._id, {
        name: args.name,
        avatar: args.avatar,
      });
      return existing._id;
    }

    return await ctx.db.insert("users", {
      ...args,
      createdAt: Date.now(),
    });
  },
});

/* -------------------- GET CURRENT USER -------------------- */

export const getMe = query({
  args: {
    provider: v.string(),
    providerAccountId: v.string(),
  },
  handler: async (ctx, { provider, providerAccountId }) => {
    const user = await ctx.db
      .query("users")
      .withIndex("by_provider", (q) =>
        q.eq("provider", provider).eq("providerAccountId", providerAccountId)
      )
      .unique();

    // 🔑 DO NOT THROW
    return user ?? null;
  },
});

/* -------------------- UPDATE PROFILE (NEW) -------------------- */

export const updateProfile = mutation({
  args: {
    userId: v.id("users"),
    name: v.string(),
    avatar: v.string(),
  },
  handler: async (ctx, args) => {
    const user = await ctx.db.get(args.userId);
    // if (!user) {
    //   throw new Error("User not found");
    // }

    await ctx.db.patch(args.userId, {
        name: args.name,
        avatar: args.avatar,
        onboarded: true,
      });
  },
});