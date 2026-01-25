"use client";

import React, { useState } from "react";
import { Sidebar } from "@/components/profile/sidebar";
import { motion, AnimatePresence } from "framer-motion";

export function ProfileLayout({
  children,
  user,
  tab,
}: {
  children: React.ReactNode;
  user: any;
  tab: "profile" | "following";
}) {
  const [showSidebarBanner, setShowSidebarBanner] = useState(true);

  return (
    <div className="flex min-h-screen w-full bg-background">
      <Sidebar
        showBanner={showSidebarBanner}
        onCloseBanner={() => setShowSidebarBanner(false)}
        user={user}
        tab={tab}
      />

      <div className="flex-1 w-full">
        <AnimatePresence mode="wait" initial={false}>
          <motion.main
            key={tab}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 420, damping: 32 }}
            className="w-full"
          >
            {children}
          </motion.main>
        </AnimatePresence>
      </div>
    </div>
  );
}