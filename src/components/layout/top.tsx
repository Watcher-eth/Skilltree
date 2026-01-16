"use client";

import * as React from "react";
import { ChevronLeft, MoreHorizontal, Settings, Code2 } from "lucide-react";

type Props = {
  treeName: string;
  onTreeNameChange: (v: string) => void;
  onSave: () => void;
};

export function TopBar({ treeName, onTreeNameChange, onSave }: Props) {
  return (
    <div className="fixed top-6 left-6 right-6 z-40 pointer-events-none">
      <div className="pointer-events-auto flex items-center justify-between">
        <div className="flex items-center justify-center">
         
          <div className="flex items-center justify-center">
            <input
              value={treeName}
              onChange={(e) => onTreeNameChange(e.target.value)}
              className=" text-[22px] w-[140px] font-semibold text-black/80 outline-none focus:ring-2 focus:ring-black/10"
            />
            <span className=" px-2 rounded-full bg-black/[0.05] border border-black/10 text-[12px] font-semibold text-black/55 flex items-center">
              Draft
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="h-10 w-10 rounded-full bg-white/80 backdrop-blur border border-black/10 shadow-sm flex items-center justify-center hover:bg-white">
            <MoreHorizontal className="h-5 w-5 text-black/60" />
          </button>
          <button className="h-10 w-10 rounded-full bg-white/80 backdrop-blur border border-black/10 shadow-sm flex items-center justify-center hover:bg-white">
            <Settings className="h-5 w-5 text-black/60" />
          </button>
          <button className="h-10 w-10 rounded-full bg-white/80 backdrop-blur border border-black/10 shadow-sm flex items-center justify-center hover:bg-white">
            <Code2 className="h-5 w-5 text-black/60" />
          </button>

          <button
            onClick={onSave}
            className="ml-2 h-10 px-4 rounded-[14px] bg-black text-white text-[13px] font-semibold shadow-sm hover:opacity-95"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}