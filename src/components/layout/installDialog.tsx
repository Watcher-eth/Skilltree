"use client";

import * as React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Download, X, Terminal } from "lucide-react";
import type { CanvasNode } from "@/components/tree/types";
import { toast } from "sonner"
import { showCopiedToast } from "@/lib/toast"

const DOT_COLORS = [
  "#8B5CF6",
  "#22C55E",
  "#F59E0B",
  "#3B82F6",
  "#EF4444",
  "#A855F7",
];

function colorFor(id: string) {
  let hash = 0;
  for (let i = 0; i < id.length; i++) hash += id.charCodeAt(i);
  return DOT_COLORS[hash % DOT_COLORS.length];
}

function buildInstallCommand(nodes: CanvasNode[]) {
  const skills = nodes.map((n) =>
    n.title.toLowerCase().replaceAll(" ", "-")
  );
  return `bunx skills i ${skills.join(" ")}`;
}

export function InstallSkillsDialog({
  open,
  onOpenChange,
  nodes,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  nodes: CanvasNode[];
}) {
  const skills = React.useMemo(
    () => nodes.filter((n) => n.kind === "skill"),
    [nodes]
  );

  const [selected, setSelected] = React.useState<CanvasNode[]>(skills);

  React.useEffect(() => {
    if (open) setSelected(skills);
  }, [open, skills]);

  const visible = selected.slice(0, 9);
  const overflow = selected.length - visible.length;

  const command = buildInstallCommand(selected);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-full max-w-[420px] rounded-xl border-0 bg-white  p-0 shadow-2xl">
        {/* TOP */}
        <div className="p-5 pb-3 max-w-[420px]">
          {/* Icon */}
          <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-[#00a6fb]/[0.06]">
            <Terminal strokeWidth={3} className="h-4 w-4 text-[#00a6fb]" />
          </div>

          {/* Title */}
          <h2 className="text-[18px] font-semibold text-gray-900">
            Quick Install
          </h2>

          {/* Description */}
          <p className="mb-1 text-[13px] leading-relaxed text-gray-500">
            Install all selected skills in this tree using the vercel skills CLI.
          </p>

          {/* SKILLS GRID (3 × 3) */}
          {visible.length > 0 && (
            <div className="mt-4 mb-4 grid grid-cols-3 gap-2">
              {visible.map((skill) => (
                <div
                  key={skill.id}
                  className="flex flex-row items-center gap-1.5 rounded-full bg-gray-100 px-2 py-1 text-[12px] font-medium text-gray-700"
                >
                  <span
                    className="h-3 w-3 shrink-0 rounded-full"
                    style={{ backgroundColor: colorFor(skill.id) }}
                  />
                  <span className="truncate">
                    {skill.title}
                  </span>
                  <button
                    onClick={() =>
                      setSelected((prev) =>
                        prev.filter((s) => s.id !== skill.id)
                      )
                    }
                    className="ml-auto flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-gray-400 hover:bg-gray-200"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}

              {overflow > 0 && (
                <div className="flex items-center justify-center rounded-full bg-gray-100 px-2 py-1 text-[12px] font-medium text-gray-500">
                  +{overflow} more
                </div>
              )}
            </div>
          )}

          {/* COMMAND */}
          <div className="mt-3">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
              Command
            </div>

            <div className="mt-2 flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2">
              <Terminal className="h-4 w-4 shrink-0 text-gray-500" />
              <code className="truncate text-[12px] text-gray-800">
                {command}
              </code>
            </div>
          </div>
        </div>

        {/* BOTTOM TRAY */}
        <div style={{ maxWidth: "420px", borderRadius: "0 0 16px 16px" }} className="flex items-center justify-between rounded-b-2xl border-t border-gray-100 bg-gray-50 px-5 py-4">
          <button
            onClick={() => onOpenChange(false)}
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-[13px] font-medium text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={async () => {
              await navigator.clipboard.writeText(command);
              showCopiedToast();

              onOpenChange(false);
            }}
            style={{ backgroundColor: "#00a6fb", color: "white" }}
            className="rounded-lg border border-[#00a6fb] px-4 py-2 text-[13px] font-semibold hover:opacity-90"
          >
            Copy Command
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}