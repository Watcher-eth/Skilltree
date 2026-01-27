"use client";

import Link from "next/link";
import { Download, GitFork } from "lucide-react";
import SkillSettingsMenu from "../tree/settingsDialog";
import { darken, hashToIndex, lighten, TREE_COLORS } from "../profile/trees";
import { UserMenu } from "./userMenu";

type Props = {
  treeName: string;
  onTreeNameChange: (v: string) => void;
  onSave: () => void;
  onFork?: () => void;
  onOpenCode: () => void;
  saving?: boolean;
  lastSavedAt?: number | null;
  username?: string;
  userId?: string;
  onOpenInstall: () => void;
  mode?: "edit" | "view";

  treeHref?: string;
};

export function TopBar({
  treeName,
  onTreeNameChange,
  onSave,
  onFork,
  onOpenCode,
  onOpenInstall,
  saving,
  userId,
  username,
  mode = "edit",
  treeHref,
}: Props) {
  const base = TREE_COLORS[hashToIndex(username ?? "anon", TREE_COLORS.length)];
  const hi = lighten(base, 0.28);
  const lo = darken(base, 0.22);

  const TitleInner =
    mode === "edit" ? <></> : (
      <span className="truncate font-semibold text-[#222222]">
        {treeName}
      </span>
    );

  const Title = (
   <div>
      {treeHref && mode === "view" ? (
        <div
        className="text-2xl flex items-center"
      ><Link href={treeHref} className="text-2xl min-w-0">
          {TitleInner}
        </Link>   </div>
      ) : (
        <></>)}
 </div>
  );

  return (
    <div className="fixed top-6 left-6 right-6 z-40 pointer-events-none">
      <div className="pointer-events-auto flex items-center justify-between">
        {/* ✅ LEFT: title */}
        <div className="flex items-center gap-2 min-w-0">
          {Title}
        </div>

        {/* RIGHT: actions */}
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 flex items-center justify-center">
            <UserMenu
              userId={userId}
              trigger={
                <button
                  type="button"
                  className="w-6 h-6 rounded-full shrink-0"
                  style={{
                    background: `radial-gradient(120% 120% at 30% 25%, ${hi} 0%, ${base} 45%, ${lo} 100%)`,
                    boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.35)",
                  }}
                  aria-label="Open user menu"
                />
              }
            />
            {mode === "edit" ? <SkillSettingsMenu /> : null}
          </div>

          <button
            onClick={onOpenInstall}
            className="h-8 w-8 rounded-full flex items-center justify-center hover:bg-white"
          >
            <Download className="h-5 w-5 text-black/60" />
          </button>

          {mode === "edit" ? (
            <button
              onClick={onSave}
              disabled={saving}
              className="ml-2 h-8 px-4 rounded-full bg-black text-white text-[13px] font-semibold shadow-sm hover:opacity-95 disabled:opacity-60"
            >
              {saving ? "Saving…" : "Save"}
            </button>
          ) : (
            <button
              onClick={onFork}
              className="ml-2 h-8 px-4 rounded-full bg-black text-white text-[13px] font-semibold shadow-sm hover:opacity-95 flex items-center gap-2"
            >
              <GitFork className="h-4 w-4" />
              Fork
            </button>
          )}
        </div>
      </div>
    </div>
  );
}