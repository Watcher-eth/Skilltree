"use client";

import * as React from "react";
import type { CanvasNode } from "@/components/tree/types";
import { Copy, TerminalSquare } from "lucide-react";
import { showCopiedToast } from "@/lib/toast";

function cmdForNode(n: CanvasNode) {
  const name = (n.title || "skill").toLowerCase().replaceAll(" ", "-");
  return `bunx skills i ${name}`;
}

export function RightInspector({ node }: { node: CanvasNode }) {
  const cmd = cmdForNode(node);

  return (
    <div className="w-[360px] rounded-[18px] bg-white/85 backdrop-blur border border-black/10 shadow-[0_16px_45px_rgba(0,0,0,0.08)] overflow-hidden">
      <div className="px-4 pt-4 pb-3 border-b border-black/5">
        <div className="text-[13px] font-semibold text-black/80">
          {node.title}
        </div>
        <div className="mt-1 text-[12px] text-black/45">
          {node.kind === "user"
            ? "Root"
            : node.kind === "hub"
            ? "Category hub"
            : "Skill"}
        </div>
      </div>

      <div className="p-4 space-y-3">
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-wider text-black/40">
            Category
          </div>
          <div className="mt-1 text-[13px] text-black/70">
            {node.category ?? "—"}
          </div>
        </div>

        <div>
          <div className="text-[11px] font-semibold uppercase tracking-wider text-black/40">
            Description
          </div>
          <div className="mt-1 text-[13px] leading-relaxed text-black/70">
            {node.description ?? "—"}
          </div>
        </div>

        <div>
          <div className="text-[11px] font-semibold uppercase tracking-wider text-black/40">
            Command
          </div>
          <div className="mt-2 flex items-center gap-2 rounded-[12px] border border-black/10 bg-black/[0.03] px-3 py-2">
            <TerminalSquare className="h-4 w-4 text-black/50" />
            <code className="truncate text-[12px] text-black/70">
              {cmd}
            </code>
            <button
              className="ml-auto inline-flex h-7 w-7 items-center justify-center rounded-[10px] border border-black/10 bg-white hover:bg-black/[0.03]"
              onClick={async () => {
                await navigator.clipboard.writeText(cmd);
                showCopiedToast("Command copied");
              }}
              title="Copy"
            >
              <Copy className="h-4 w-4 text-black/55" />
            </button>
          </div>
        </div>
      </div>

      <div className="px-4 pb-4">
        <button onClick={async () => {
                await navigator.clipboard.writeText(cmd);
                showCopiedToast("Command copied");
              }} className="h-10 w-full rounded-[14px] border border-black/10 bg-white text-[13px] font-semibold hover:bg-black/[0.03]">
          Copy Command
        </button>
      </div>
    </div>
  );
}