"use client";

import {  Download } from "lucide-react";
import SkillSettingsMenu from "../tree/settingsDialog"
import { darken, hashToIndex, lighten, TREE_COLORS } from "../profile/trees"
import Link from "next/link"

type Props = {
  treeName: string;
  onTreeNameChange: (v: string) => void;
  onSave: () => void;
  onOpenCode: () => void;
  saving?: boolean;
  lastSavedAt?: number | null;
  username?: string; 
  userId?: string;
  onOpenInstall: () => void;

};

export function TopBar({
  treeName,
  onTreeNameChange,
  onSave,
  onOpenCode,
  onOpenInstall,
  saving, 
  userId,
username  
}: Props) {

  const base = TREE_COLORS[hashToIndex(username ?? "anon", TREE_COLORS.length)];
  const hi = lighten(base, 0.28);
  const lo = darken(base, 0.22);
  return (
    <div className="fixed top-6 left-1/2 right-6 z-40 pointer-events-none">
      <div className="pointer-events-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
 
</div>
         
        </div>

        <div className="flex items-center gap-2">
        {/* <button className="h-8 w-8 rounded-full flex items-center justify-center hover:bg-white"
        onClick={onOpenCode}
          >
            <Code2 className="h-5 w-5 text-black/60" />
          </button> */}

          <div className="h-8 w-8 flex items-center justify-center">
            
            
              <Link
              href={"/u/" + userId}
              className="w-6 h-6 rounded-full shrink-0 "
              style={{
                background: `radial-gradient(120% 120% at 30% 25%, ${hi} 0%, ${base} 45%, ${lo} 100%)`,
                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.35)",
              }}
            />
  <SkillSettingsMenu />
</div>

          <button onClick={onOpenInstall} className="h-8 w-8 rounded-full flex items-center justify-center hover:bg-white">
            <Download className="h-5 w-5 text-black/60" />
          </button>

          <button
  onClick={onSave}
  disabled={saving}
  className="ml-2 h-8 px-4 rounded-full bg-black text-white text-[13px] font-semibold shadow-sm hover:opacity-95 disabled:opacity-60"
>
  {saving ? "Saving…" : "Save"}
</button>
        </div>
      </div>
    </div>
  );
}