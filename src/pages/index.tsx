"use client";

import * as React from "react";
import { AnimatePresence } from "motion/react";
import { IntroOverlay } from "@/components/layout/intro";
import { SkillTreeBuilder } from "@/components/tree/skillTree";
import { useMe } from "@/components/hooks/useMe";

export default function AppRoot() {
  const [showIntro, setShowIntro] = React.useState(false);
  const { me, isLoading } = useMe();

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    setShowIntro(localStorage.getItem("onboardingComplete") !== "1");
  }, []);

  const finishIntro = () => {
    localStorage.setItem("onboardingComplete", "1");
    setShowIntro(false);
  };

  if (isLoading) return null; // or splash screen

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#f4f4f3]">
      <SkillTreeBuilder username={me?.name} />

      <AnimatePresence>
        {showIntro && <IntroOverlay onComplete={finishIntro} />}
      </AnimatePresence>
    </div>
  );
}