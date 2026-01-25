"use client";

import { useSession } from "next-auth/react";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

export function useMe() {
  const { data: session, status } = useSession();

  const provider = session?.user?.provider;
  const providerAccountId = session?.user?.providerAccountId;

  const shouldQuery = !!(provider && providerAccountId);

  const me = useQuery(
    api.users.getMe,
    shouldQuery ? { provider: provider!, providerAccountId: providerAccountId! } : "skip"
  );

  const isLoading =
    status === "loading" || (shouldQuery && me === undefined); // ✅ only "loading" if we actually queried

  return {
    me: me ?? null, // ✅ unauth => null, not undefined
    isLoading,
    status,
  };
}