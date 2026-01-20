"use client";

import { useSession } from "next-auth/react";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

export function useMe() {
  const { data: session, status } = useSession();

  const provider = session?.user?.provider;
  const providerAccountId = session?.user?.providerAccountId;

  const me = useQuery(
    api.users.getMe,
    provider && providerAccountId
      ? { provider, providerAccountId }
      : "skip"
  );

  return {
    me,
    isLoading: status === "loading" || (provider && !me),
  };
}