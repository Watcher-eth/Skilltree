"use client";

import React from "react";
import { useRouter } from "next/router";
import { X, ExternalLink, UserIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { BookTextIcon } from "../ui/book-text";
import { UserRoundPlusIcon } from "../ui/user-round-plus";
import { LayoutPanelTopIcon } from "../ui/layout-panel-top";

interface SidebarProps {
  showBanner: boolean;
  user: any;
  tab: "profile" | "following";
  onCloseBanner: () => void;
}

export function Sidebar({ showBanner, user, tab, onCloseBanner }: SidebarProps) {
  const router = useRouter();

  const setTab = (next: "profile" | "following") => {
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, tab: next },
      },
      undefined,
      { scroll: false } // IMPORTANT: no shallow so SSR updates
    );
  };

  const navItems = [
    { icon: LayoutPanelTopIcon, label: "Your Trees", key: "profile" as const },
    { icon: UserRoundPlusIcon, label: "Following", key: "following" as const },
    { icon: BookTextIcon, label: "Settings", key: "settings" as const },
  ];

  return (
    <aside className="w-[220px] border-r border-gray-100 flex flex-col h-screen bg-background">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2">
          <AppMark />
          <span className="font-semibold text-foreground">Skills</span>
        </div>
        <div className="w-7 h-7 rounded-full bg-[#f27a8c] flex items-center justify-center">
          <UserIcon className="w-4 h-4 text-white" strokeWidth={2.5} />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 py-2">
        {navItems.map((item) => {
          const isActive =
            (item.key === "profile" && tab === "profile") ||
            (item.key === "following" && tab === "following");

          const onClick =
            item.key === "settings"
              ? undefined
              : () => setTab(item.key === "profile" ? "profile" : "following");

          return (
            <button
              key={item.label}
              onClick={onClick}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors",
                isActive
                  ? "bg-secondary/80 text-foreground font-medium"
                  : "text-muted-foreground hover:bg-secondary/50",
                item.key === "settings" && "cursor-not-allowed opacity-60"
              )}
            >
              <item.icon className="w-5 h-5" size={20} />
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div className="p-2">
        {showBanner && (
          <div className="relative rounded-xl overflow-hidden mb-3">
            <button
              onClick={onCloseBanner}
              className="absolute top-2 right-2 z-10 w-5 h-5 rounded-full bg-black/20 flex items-center justify-center hover:bg-black/30 transition-colors"
            >
              <X className="w-3 h-3 text-white" />
            </button>

            <PromoIllustration />

            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/20 to-transparent">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-[#1a1a2e] flex items-center justify-center">
                  <FamilyIconSmall />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-medium text-foreground">
                    Available on iOS
                  </div>
                  <div className="text-[10px] text-muted-foreground">
                    Get the app on mobile
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground" />
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center gap-2 px-2 py-2 text-xs text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">
            Developers
          </a>
          <span>·</span>
          <a href="#" className="hover:text-foreground transition-colors">
            Privacy
          </a>
          <span>·</span>
          <a href="#" className="hover:text-foreground transition-colors">
            Terms
          </a>
        </div>
      </div>
    </aside>
  );
}

function FamilyIconSmall() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="8" height="8" rx="2" fill="white" />
      <rect x="13" y="3" width="8" height="8" rx="2" fill="white" />
      <rect x="3" y="13" width="8" height="8" rx="2" fill="white" />
      <rect x="13" y="13" width="8" height="8" rx="2" fill="white" />
    </svg>
  );
}

function PromoIllustration() {
  return (
    <div className="w-full h-32 bg-gradient-to-br from-[#fef3c7] via-[#e0f2fe] to-[#dbeafe] relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-24 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="p-1.5 h-full">
          <div className="w-full h-1.5 bg-gray-100 rounded mb-1" />
          <div className="grid grid-cols-2 gap-1 h-12">
            <div className="bg-[#93c5fd] rounded" />
            <div className="bg-[#fde68a] rounded" />
            <div className="bg-[#6ee7b7] rounded" />
            <div className="bg-[#c4b5fd] rounded" />
          </div>
        </div>
      </div>
      <div className="absolute top-3 right-6 w-3 h-3 text-[#4ade80]">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L9 9H2l5.5 4.5L5 22l7-5 7 5-2.5-8.5L22 9h-7L12 2z" />
        </svg>
      </div>
      <div className="absolute top-10 right-4">
        <span className="text-lg">❤️</span>
      </div>
      <div className="absolute bottom-6 right-8 w-5 h-5 bg-[#fcd34d] rounded-full opacity-80" />
    </div>
  );
}

function AppMark() {
  return (
    <div className="grid h-6 w-6 place-items-center">
      <svg viewBox="0 0 64 64" className="h-full w-full" fill="none" aria-hidden="true">
        <rect x="18" y="18" width="20" height="20" rx="5" fill="#FFFFFF" />
        <circle cx="14" cy="28" r="8" fill="#1C1C1E" />
        <circle cx="42" cy="28" r="8" fill="#1C1C1E" />
        <circle cx="28" cy="14" r="8" fill="#1C1C1E" />
        <circle cx="28" cy="42" r="8" fill="#1C1C1E" />
        <circle cx="18" cy="18" r="8" fill="#1C1C1E" />
        <circle cx="38" cy="18" r="8" fill="#1C1C1E" />
        <circle cx="18" cy="38" r="8" fill="#1C1C1E" />
        <circle cx="38" cy="38" r="8" fill="#1C1C1E" />
        <rect x="20.5" y="20.5" width="15" height="15" rx="4" fill="#FFFFFF" />
      </svg>
    </div>
  );
}