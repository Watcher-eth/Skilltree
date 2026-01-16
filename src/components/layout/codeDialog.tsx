"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
} from "@/components/ui/dialog";
import { Share2, Download, X } from "lucide-react";
import type { CanvasNode } from "@/components/tree/types";
import { cn } from "@/lib/utils";

type Props = {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  nodes: CanvasNode[];
  treeName: string;
};

export function CodeViewerDialog({
  open,
  onOpenChange,
  nodes,
  treeName,
}: Props) {
  const groups = React.useMemo(() => {
    const map = new Map<string, CanvasNode[]>();
    for (const n of nodes) {
      if (n.kind === "skill" && n.group) {
        if (!map.has(n.group)) map.set(n.group, []);
        map.get(n.group)!.push(n);
      }
    }
    return Array.from(map.entries());
  }, [nodes]);

  const [activeGroup, setActiveGroup] = React.useState<string | null>(
    groups[0]?.[0] ?? null
  );

  const skills =
    groups.find(([g]) => g === activeGroup)?.[1] ?? [];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {/* Overlay */}
      <DialogOverlay className="bg-black/40 backdrop-blur-sm" />

      <DialogContent
        className="
          max-w-none w-auto
          p-0.5 bg-transparent border-none shadow-none
        "
      >
        {/* FROSTED SHELL */}
        <div
          className="
            rounded-2xl
            bg-white/60
            backdrop-blur-2xl
            shadow-[0_40px_120px_rgba(0,0,0,0.25)]
            p-2
          "
        >
             <div className="flex items-start px-2.5 py-2 min-w-[55vw] justify-between">
                  <div>
                    <div className="text-[20px] font-semibold">
                     Overview
                    </div>
                    <div className="text-[14px] text-black/50 mt-0">
                     All active Skills
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="h-9 px-3 rounded-full border border-black/10 flex items-center gap-2 text-[13px]">
                      <Share2 className="h-4 w-4" />
                      Share
                    </button>
                    <button className="h-9 px-3 rounded-full bg-black text-white flex items-center gap-2 text-[13px]">
                      <Download className="h-4 w-4" />
                      Download
                    </button>
                    <button
                      onClick={() => onOpenChange(false)}
                      className="ml-2 h-9 w-9 rounded-full hover:bg-black/5 flex items-center justify-center"
                    >
                      <X className="h-4 w-4 text-black/60" />
                    </button>
                  </div>
                </div>
          {/* INNER GRID */}
          <div className="grid grid-cols-[260px_1fr] h-[520px]">
            {/* LEFT SIDEBAR */}
            <div className="px-2.5 py-5">
              <div className="text-[11px] tracking-wide text-black/50 mb-3">
                GROUPS
              </div>

              <div className="space-y-1">
                {groups.map(([group]) => {
                  const active = group === activeGroup;
                  return (
                    <button
                      key={group}
                      onClick={() => setActiveGroup(group)}
                      className={cn(
                        "w-full text-left px-2.5 py-2 rounded-[12px] text-[14px]",
                        active
                          ? "bg-white shadow-sm font-medium"
                          : "text-black/70 hover:bg-white/50"
                      )}
                    >
                      {group}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* RIGHT WHITE CARD */}
            <div className="p-2">
              <div
                className="
                  max-h-[200px] 
                  bg-white
                  rounded-2xl
                  px-6 py-5
                  flex flex-col
                  shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                "
              >
                {/* Header */}
               


                {/* Skill list */}
                <div className="flex-1 overflow-auto pr-1">
                  <div className="space-y-3">
                    {skills.map((s) => (
                      <div
                        key={s.id}
                        className="rounded-[14px] border border-black/10 px-4 py-3"
                      >
                        <div className="text-[15px] font-medium">
                          {s.title}
                        </div>
                        {s.category && (
                          <div className="text-[12px] text-black/45 mt-0.5">
                            {s.category}
                          </div>
                        )}
                      </div>
                    ))}

                    {!skills.length && (
                      <div className="text-black/40 italic text-sm">
                        No skills in this group.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* END RIGHT CARD */}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}