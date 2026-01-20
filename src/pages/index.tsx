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
  const { me, isLoading } = useMe();

  const myTree = useQuery(
    api.skillTrees.getMyLatest,
    me ? { userId: me._id } : "skip"
  );

  const [showIntro, setShowIntro] = React.useState(false);
  
  React.useEffect(() => {
    if (!me) return;
    if (myTree === undefined) return; // still loading
    if (!myTree) return;              // user has no tree
  
    router.replace(`/edit/${myTree._id}`);
  }, [me, myTree, router]);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    setShowIntro(localStorage.getItem("onboardingComplete") !== "1");
  }, []);

  if (isLoading || myTree === undefined) return null;

  // Only reaches here if user has NO tree yet
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#f4f4f3]">
      <SkillTreeBuilder username={me?.name} />

      <AnimatePresence>
        {showIntro && <IntroOverlay onComplete={() => {
          localStorage.setItem("onboardingComplete", "1");
          setShowIntro(false);
        }} />}
      </AnimatePresence>
    </div>
  );
}