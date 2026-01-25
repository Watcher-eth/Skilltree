"use client";

import * as React from "react";
import { AnimatePresence } from "motion/react";
import { useRouter } from "next/router";
import { IntroOverlay } from "@/components/layout/intro";
import { SkillTreeBuilder } from "@/components/tree/skillTree";
import { useMe } from "@/components/hooks/useMe";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function AppRoot() {
  const router = useRouter();
  const { me, isLoading, status } = useMe();

  const myTree = useQuery(
    api.skillTrees.getMyLatest,
    me ? { userId: me._id } : "skip"
  );

  const [showIntro, setShowIntro] = React.useState(false);

  React.useEffect(() => {
    if (!me) return;
    if (myTree === undefined) return;
    if (!myTree) return;
    router.replace(`/edit/${myTree._id}`);
  }, [me, myTree, router]);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    setShowIntro(localStorage.getItem("onboardingComplete") !== "1");
  }, []);

  // ✅ Only block while NextAuth is still resolving session OR while myTree is loading *after* we have me
  if (isLoading) return null;
  if (me && myTree === undefined) return null;

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#f4f4f3]">
      <SkillTreeBuilder username={me?.name} userId={me?._id} />

      <AnimatePresence>
        {showIntro && (
          <IntroOverlay
            onComplete={() => {
              localStorage.setItem("onboardingComplete", "1");
              setShowIntro(false);
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}