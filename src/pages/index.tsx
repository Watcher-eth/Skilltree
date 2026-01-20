"use client";

import * as React from "react";
import { AnimatePresence } from "motion/react";
import { IntroOverlay } from "@/components/layout/intro";
import { SkillTreeBuilder } from "@/components/tree/skillTree"

export function AppRoot() {
  const [showIntro, setShowIntro] = React.useState(false);

  React.useEffect(() => {
    setShowIntro(localStorage.getItem("onboardingComplete") !== "1");
  }, []);

  const finishIntro = () => {
    localStorage.setItem("onboardingComplete", "1");
    setShowIntro(false);
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#f4f4f3]">
      <SkillTreeBuilder />

      <AnimatePresence>
        {showIntro && <IntroOverlay onComplete={finishIntro} />}
      </AnimatePresence>
    </div>
  );
}