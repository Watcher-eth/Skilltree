"use client";

import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSkillSettings } from "@/lib/skillSettings";

/* ───────────────────────── helpers ───────────────────────── */

function Row(props: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cn("flex items-center justify-between gap-3", props.className)}>
      {props.children}
    </div>
  );
}

function Label({ k, s }: { k: string; s?: string }) {
  return (
    <div className="min-w-0">
      <div className="text-[13px] font-medium text-black/80">{k}</div>
      {s ? <div className="text-[11px] text-black/45">{s}</div> : null}
    </div>
  );
}

function Preset({
  active,
  children,
  onClick,
  className,
}: {
  active?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "h-9 rounded-xl border text-[12px] transition-colors",
        "flex items-center justify-center select-none",
        active
          ? [
              "border-[#00a6fb]",
              "bg-[#00a6fb]/[0.06]",
              "text-[#00a6fb]",
              "font-semibold",
              "cursor-default",
            ]
          : [
              "border-black/10",
              "bg-white",
              "text-black/60",
              "hover:border-black/20",
              "hover:text-black",
            ],
        className
      )}
    >
      {children}
    </button>
  );
}

/* ───────────────────────── component ───────────────────────── */

export default function SkillSettingsMenu() {
  const { settings, setSettings } = useSkillSettings();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          aria-label="Skill settings"
          className="h-8 w-8 rounded-full flex items-center justify-center hover:bg-white"
        >
          <Settings className="h-5 w-5 text-black/60" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className={cn(
          "w-[360px] rounded-3xl space-y-3 border border-black/10",
          "bg-white p-4",
          "shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)]"
        )}
      >
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <div className="text-[13px] font-semibold text-black">
            Skill Settings
          </div>
          <div className="rounded-full border border-black/10 bg-black/[0.04] px-2 py-0.5 text-[11px] text-black/50">
            Local
          </div>
        </div>

        {/* Package Manager */}
        <div>
          <Row className="mb-2">
            <Label
              k="Package Manager"
              s="Used for generated install commands."
            />
          </Row>

          <div className="flex gap-2">
            {(["npm", "yarn", "pnpm", "bun"] as const).map((pm) => (
              <Preset
                key={pm}
                active={settings.packageManager === pm}
                onClick={() =>
                  setSettings((s) => ({ ...s, packageManager: pm }))
                }
                className="flex-1"
              >
                {pm}
              </Preset>
            ))}
          </div>
        </div>

        {/* Infinite Skill Points */}
        <div className="mt-5">
          <Row className="mb-2">
            <Label
              k="Infinite Skill Points"
              s="Disable skill point limits when building."
            />
          </Row>

          <div className="flex gap-2">
            <Preset
              active={!settings.infinitePoints}
              onClick={() =>
                setSettings((s) => ({ ...s, infinitePoints: false }))
              }
              className="flex-1"
            >
              No
            </Preset>
            <Preset
              active={settings.infinitePoints}
              onClick={() =>
                setSettings((s) => ({ ...s, infinitePoints: true }))
              }
              className="flex-1"
            >
              Yes
            </Preset>
          </div>
        </div>

        {/* Featured Only */}
        <div className="mt-5">
          <Row className="mb-2">
            <Label
              k="Featured Skills Only"
              s="Hide experimental and low-signal skills."
            />
          </Row>

          <div className="flex gap-2">
            <Preset
              active={!settings.featuredOnly}
              onClick={() =>
                setSettings((s) => ({ ...s, featuredOnly: false }))
              }
              className="flex-1"
            >
              No
            </Preset>
            <Preset
              active={settings.featuredOnly}
              onClick={() =>
                setSettings((s) => ({ ...s, featuredOnly: true }))
              }
              className="flex-1"
            >
              Yes
            </Preset>
          </div>
        </div>

        {/* Language */}
        <div className="mt-5">
          <Row className="mb-2">
            <Label
              k="Language"
              s="Preferred implementation language."
            />
          </Row>

          <div className="grid grid-cols-3 gap-2">
            {[
              ["js/ts", "JS / TS"],
              ["python", "Python"],
              ["rust", "Rust"],
              ["sql", "SQL"],
              ["c", "C"],
              ["cpp", "C++"],
              ["go", "Go"],
            ].map(([key, label]) => (
              <Preset
                key={key}
                active={settings.language === key}
                onClick={() =>
                  setSettings((s) => ({
                    ...s,
                    language: key as any,
                  }))
                }
              >
                {label}
              </Preset>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 text-[11px] text-black/40">
          Settings apply locally and affect skill discovery & install commands.
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}