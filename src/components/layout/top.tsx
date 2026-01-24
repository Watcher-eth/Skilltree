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