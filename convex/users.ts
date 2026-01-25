import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 32);
}

function uniqueSuffix() {
  return Math.random().toString(36).slice(2, 7);
}

async function ensureUniqueHandle(ctx: any, desired: string) {
  const base = slugify(desired) || "user";
  let handle = base;

  for (let i = 0; i < 6; i++) {
    const exists = await ctx.db
      .query("users")
      .withIndex("by_handle", (q: any) => q.eq("handle", handle))
      .unique();

    if (!exists) return handle;
    handle = `${base}-${uniqueSuffix()}`;
  }

  return `${base}-${Date.now().toString(36).slice(2, 6)}`;
}

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
        q.eq("provider", args.provider).eq("providerAccountId", args.providerAccountId)
      )
      .unique();

    if (existing) {
      // ✅ backfill handle if missing
      if (!existing.handle) {
        const handle = await ensureUniqueHandle(ctx, existing.name || args.name);
        await ctx.db.patch(existing._id, { handle });
      }

      await ctx.db.patch(existing._id, {
        name: args.name,
        avatar: args.avatar,
      });
      return existing._id;
    }

    const handle = await ensureUniqueHandle(ctx, args.name);

    return await ctx.db.insert("users", {
      ...args,
      handle,
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
      .withIndex("by_provider", (q) => q.eq("provider", provider).eq("providerAccountId", providerAccountId))
      .unique();

    return user ?? null;
  },
});

/* -------------------- UPDATE PROFILE -------------------- */

export const updateProfile = mutation({
  args: {
    userId: v.id("users"),
    name: v.string(),
    avatar: v.string(),
    // ✅ allow changing handle
    handle: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const patch: any = {
      name: args.name,
      avatar: args.avatar,
      onboarded: true,
    };

    if (args.handle) {
      const handle = await ensureUniqueHandle(ctx, args.handle);
      patch.handle = handle;
    }

    await ctx.db.patch(args.userId, patch);
  },
});

/* -------------------- PUBLIC PROFILE LOOKUP -------------------- */

export const getByIdPublic = query({
  args: { userId: v.id("users") },
  handler: async (ctx, { userId }) => {
    const user = await ctx.db.get(userId);
    if (!user) return null;

    return {
      _id: user._id,
      name: user.name,
      avatar: user.avatar,
      createdAt: user.createdAt,
      onboarded: user.onboarded,
    };
  },
});

export const listPublic = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, { limit }) => {
    const rows = await ctx.db.query("users").order("desc").take(limit ?? 20);
    return rows.map((u) => ({
      _id: u._id,
      name: u.name,
      avatar: u.avatar,
      provider: u.provider,
      providerAccountId: u.providerAccountId,
      createdAt: u.createdAt,
    }));
  },
});