"use client";

import * as React from "react";

export type PackageManager = "npm" | "yarn" | "pnpm" | "bun";
export type Language =
  | "js/ts"
  | "python"
  | "rust"
  | "sql"
  | "c"
  | "cpp"
  | "go"  | "";
    

export type SkillSettings = {
  packageManager: PackageManager;
  infinitePoints: boolean;
  featuredOnly: boolean;
  language: Language;
};

const DEFAULT_SETTINGS: SkillSettings = {
  packageManager: "bun",
  infinitePoints: false,
  featuredOnly: false,
  language: "",
};

const Ctx = React.createContext<{
  settings: SkillSettings;
  setSettings: React.Dispatch<React.SetStateAction<SkillSettings>>;
} | null>(null);

export function SkillSettingsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [settings, setSettings] = React.useState<SkillSettings>(() => {
    if (typeof window === "undefined") return DEFAULT_SETTINGS;
    try {
      const raw = localStorage.getItem("skill-settings");
      return raw ? { ...DEFAULT_SETTINGS, ...JSON.parse(raw) } : DEFAULT_SETTINGS;
    } catch {
      return DEFAULT_SETTINGS;
    }
  });

  React.useEffect(() => {
    localStorage.setItem("skill-settings", JSON.stringify(settings));
  }, [settings]);

  return (
    <Ctx.Provider value={{ settings, setSettings }}>
      {children}
    </Ctx.Provider>
  );
}

export function useSkillSettings() {
  const ctx = React.useContext(Ctx);
  if (!ctx) {
    throw new Error("useSkillSettings must be used inside SkillSettingsProvider");
  }
  return ctx;
}