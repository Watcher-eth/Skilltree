"use client";

import * as React from "react";
import { Settings, Code2, Download } from "lucide-react";
import SkillSettingsMenu from "../tree/settingsDialog"

type Props = {
  treeName: string;
  onTreeNameChange: (v: string) => void;
  onSave: () => void;
  onOpenCode: () => void;
  saving?: boolean;
  lastSavedAt?: number | null;
  username?: string; 
  onOpenInstall: () => void;

};

export function TopBar({
  treeName,
  onTreeNameChange,
  onSave,
  onOpenCode,
  onOpenInstall,
  saving, 
username  
}: Props) {
  return (
    <div className="fixed top-6 left-6 right-6 z-40 pointer-events-none">
      <div className="pointer-events-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
  <span className="text-[22px] font-semibold text-black/80">
    {username ? `${username}’s Tree` : treeName}
  </span>

  {/* Optional: allow renaming tree later */}
  {!username && (
    <input
      value={treeName}
      onChange={(e) => onTreeNameChange(e.target.value)}
      className="text-[22px] w-[100px] font-semibold text-black/80 outline-none focus:ring-2 focus:ring-black/10"
    />
  )}
</div>
          <span className="px-2 rounded-full bg-black/[0.05] border border-black/10 text-[12px] font-semibold text-black/55">
            Draft
          </span>
        </div>

        <div className="flex items-center gap-2">
        {/* <button className="h-8 w-8 rounded-full flex items-center justify-center hover:bg-white"
        onClick={onOpenCode}
          >
            <Code2 className="h-5 w-5 text-black/60" />
          </button> */}

          <div className="h-8 w-8 flex items-center justify-center">
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