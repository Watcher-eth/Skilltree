"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { signIn, useSession } from "next-auth/react";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import type { Id } from "../../../convex/_generated/dataModel";
import { Check } from "lucide-react";

type Step = 0 | 1 | 2 | 3;
type Platform = "claude_code" | "cursor";

export function IntroOverlay({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = React.useState<Step>(0);
  const [platform, setPlatform] = React.useState<Platform | null>(null);

  const [userId, setUserId] = React.useState<Id<"users"> | null>(null);
  const [profile, setProfile] = React.useState({ name: "", avatar: "" });

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem("onboardingComplete") === "1") onComplete();
  }, [onComplete]);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const p = localStorage.getItem("preferredPlatform");
    if (p === "claude_code" || p === "cursor") setPlatform(p);
  }, []);

  const goAuth = React.useCallback(() => setStep(1), []);
  const goProfile = React.useCallback(() => setStep(2), []);
  const goReveal = React.useCallback(() => setStep(3), []);

  return (
    <motion.div
      className="absolute inset-0 z-50 flex items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="w-full px-6">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <StepShell key="choose-platform">
              <ChoosePlatformStep
                platform={platform}
                onChange={(p) => {
                  setPlatform(p);
                  if (typeof window !== "undefined") {
                    localStorage.setItem("preferredPlatform", p);
                  }
                }}
                onContinue={goAuth}
              />
            </StepShell>
          )}

          {step === 1 && (
            <StepShell key="auth">
              <AuthStep
                platform={platform}
                onBack={() => setStep(0)}
                onAuthed={({ userId, name, avatar }) => {
                  setUserId(userId);
                  setProfile({ name, avatar });
                  goProfile();
                }}
              />
            </StepShell>
          )}

          {step === 2 && userId && (
            <StepShell key="profile">
              <ProfileStep
                userId={userId}
                profile={profile}
                onChange={setProfile}
                onSubmit={goReveal}
              />
            </StepShell>
          )}

          {step === 3 && <CanvasReveal key="reveal" onDone={onComplete} />}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

/* -------------------- shared shell (transition: old disappears, new grows) -------------------- */

function StepShell({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="mx-auto flex w-full max-w-[760px] flex-col items-center justify-center"
      initial={{ opacity: 0, scale: 0.94, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.965, y: -8 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* -------------------- sizing tokens (keep all steps consistent + smaller) -------------------- */

const UI = {
  maxW: "max-w-[480px]",
  markMb: "mb-6",
  headlineMb: "mb-9",
  title: "text-[25px]",
  subtitle: "text-[17px]",
  subtitleMt: "mt-3",
  footnote: "text-[15px]",
  footnoteMt: "mt-5",
  buttonText: "text-[16px]",
  primaryBtnMt: "mt-7",
  cardTitle: "text-[17px]",
  cardSub: "text-[14px]",
};

/* -------------------- primitives (match the reference vibe) -------------------- */

function AppMark() {
  return (
    <div className={`${UI.markMb} grid place-items-center`}>
      <div className="grid h-13 w-13 place-items-center">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
          <rect x="18" y="18" width="20" height="20" rx="5" fill="#FFFFFF" />
          <circle cx="14" cy="28" r="8" fill="#1C1C1E" />
          <circle cx="42" cy="28" r="8" fill="#1C1C1E" />
          <circle cx="28" cy="14" r="8" fill="#1C1C1E" />
          <circle cx="28" cy="42" r="8" fill="#1C1C1E" />
          <circle cx="18" cy="18" r="8" fill="#1C1C1E" />
          <circle cx="38" cy="18" r="8" fill="#1C1C1E" />
          <circle cx="18" cy="38" r="8" fill="#1C1C1E" />
          <circle cx="38" cy="38" r="8" fill="#1C1C1E" />
          <rect x="20.5" y="20.5" width="15" height="15" rx="4" fill="#FFFFFF" />
        </svg>
      </div>
    </div>
  );
}

function Headline({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className={`${UI.headlineMb} text-center`}>
      <AppMark />
      <h1 className={`${UI.title} font-semibold leading-tight text-[#1C1C1E]`}>{title}</h1>
      <p className={`${UI.subtitleMt} ${UI.subtitle} leading-snug text-[#8E8E93]`}>{subtitle}</p>
    </div>
  );
}

function FieldCard({
  selected,
  title,
  subtitle,
  rightBadge,
  onClick,
}: {
  selected: boolean;
  title: string;
  subtitle: string;
  rightBadge?: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "group relative w-full rounded-2xl border bg-white px-5 py-4 text-left shadow-[0_1px_0_rgba(0,0,0,0.04)]",
        "transition-[border-color,box-shadow,transform] duration-150",
        selected
          ? "border-[#0A84FF] shadow-[0_0_0_3px_rgba(10,132,255,0.20)]"
          : "border-[#E5E5EA] hover:border-[#D1D1D6]",
        "focus:outline-none focus-visible:border-[#0A84FF] focus-visible:shadow-[0_0_0_3px_rgba(10,132,255,0.20)]",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <div className={`${UI.cardTitle} font-semibold text-[#1C1C1E]`}>{title}</div>
            {rightBadge ? (
              <span className="rounded-full bg-[#F2F2F7] px-2 py-0.5 text-[12px] font-medium text-[#636366]">
                {rightBadge}
              </span>
            ) : null}
          </div>
          <div className={`mt-1 ${UI.cardSub} leading-snug text-[#8E8E93]`}>{subtitle}</div>
        </div>

        <div
          className={[
            "mt-0.5 grid h-6 w-6 place-items-center rounded-full border transition-colors",
            selected ? "border-[#0A84FF] bg-[#0A84FF]" : "border-[#D1D1D6] bg-white",
          ].join(" ")}
          aria-hidden="true"
        >
          {selected ? <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} /> : null}
        </div>
      </div>
    </button>
  );
}

function PrimaryButton({
  children,
  disabled,
  onClick,
}: {
  children: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={[
        UI.primaryBtnMt,
        "w-full rounded-2xl px-6 py-3 font-semibold",
        UI.buttonText,
        "transition-[transform,opacity] duration-150",
        disabled
          ? "bg-[#0A84FF]/40 text-white"
          : "bg-[#0A84FF] text-white hover:opacity-95 active:scale-[0.99]",
        "focus:outline-none focus-visible:shadow-[0_0_0_4px_rgba(10,132,255,0.25)]",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

function SecondaryButton({
  children,
  onClick,
  icon,
}: {
  children: React.ReactNode;
  onClick: () => void;
  icon?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "w-full flex items-center justify-center rounded-2xl border border-[#E5E5EA] bg-white px-6 py-3 font-semibold",
        UI.buttonText,
        "text-[#1C1C1E]",
        "transition-[border-color,box-shadow,transform] duration-150",
        "hover:border-[#D1D1D6] active:scale-[0.99]",
        "focus:outline-none focus-visible:shadow-[0_0_0_4px_rgba(10,132,255,0.20)]",
      ].join(" ")}
    >
      {icon && <img src={icon} alt="" className="w-5 h-5 mr-1" />}
      {children}
    </button>
  );
}

function TextField({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
}) {
  return (
    <input
      className={[
        "w-full rounded-2xl border border-[#E5E5EA] bg-white px-5 py-3",
        UI.buttonText,
        "text-[#1C1C1E] placeholder:text-[#C7C7CC]",
        "focus:outline-none focus:border-[#0A84FF] focus:shadow-[0_0_0_3px_rgba(10,132,255,0.20)]",
      ].join(" ")}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

function MutedFootnote({ children }: { children: React.ReactNode }) {
  return <div className={`${UI.footnoteMt} text-center ${UI.footnote} leading-snug text-[#8E8E93]`}>{children}</div>;
}

/* -------------------- STEP 1 (ChoosePlatformStep) -------------------- */

function ChoosePlatformStep({
  platform,
  onChange,
  onContinue,
}: {
  platform: Platform | null;
  onChange: (p: Platform) => void;
  onContinue: () => void;
}) {
  return (
    <div className="flex w-full flex-col items-center">
      <Headline title="Choose your platform" subtitle="Select what you’re using to build." />

      <div className={`w-full ${UI.maxW}`}>
        <div className="grid gap-4 md:grid-cols-2">
          <FieldCard
            selected={platform === "claude_code"}
            title="Claude Code"
            subtitle="Terminal-first workflow. Fast edits and diffs."
            rightBadge="CLI"
            onClick={() => onChange("claude_code")}
          />
          <FieldCard
            selected={platform === "cursor"}
            title="Cursor"
            subtitle="IDE experience. Inline edits and autocomplete."
            rightBadge="IDE"
            onClick={() => onChange("cursor")}
          />
        </div>

        <PrimaryButton disabled={!platform} onClick={onContinue}>
          Continue
        </PrimaryButton>

        <MutedFootnote>You can change this later in settings.</MutedFootnote>
      </div>
    </div>
  );
}

/* -------------------- STEP 2 (AuthStep) -------------------- */

function AuthStep({
  platform,
  onBack,
  onAuthed,
}: {
  platform: Platform | null;
  onBack: () => void;
  onAuthed: (data: { userId: Id<"users">; name: string; avatar: string }) => void;
}) {
  const { data: session } = useSession();
  const upsertUser = useMutation(api.users.upsertFromAuth);
  const ranRef = React.useRef(false);

  React.useEffect(() => {
    if (!session?.user) return;
    if (ranRef.current) return;
    ranRef.current = true;

    (async () => {
      const userId = await upsertUser({
        provider: session.user.provider!,
        providerAccountId: session.user.providerAccountId!,
        email: session.user.email ?? undefined,
        name: session.user.name ?? "Anonymous",
        avatar: session.user.image ?? "",
        onboarded: false,
      });

      onAuthed({
        userId,
        name: session.user.name ?? "Anonymous",
        avatar: session.user.image ?? "",
      });
    })();
  }, [session, onAuthed, upsertUser]);

  const sub =
    platform === "claude_code"
      ? "Log in to continue with Claude Code."
      : platform === "cursor"
        ? "Log in to continue with Cursor."
        : "Log in or sign up to get started.";

  return (
    <div className="flex w-full flex-col items-center">
      <Headline title="Welcome" subtitle={sub} />

      <div className={`w-full ${UI.maxW}`}>
        <div className="grid gap-4">
          <SecondaryButton icon="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" onClick={() => signIn("github")}>Continue with GitHub</SecondaryButton>
          <SecondaryButton icon="https://www.citypng.com/public/uploads/preview/google-logo-icon-gsuite-hd-701751694791470gzbayltphh.png" onClick={() => signIn("google")}>Continue with Google</SecondaryButton>
        </div>

        <div className="mt-6 flex items-center justify-center">
          <button
            type="button"
            onClick={onBack}
            className={`${UI.buttonText} font-medium text-[#8E8E93] hover:text-[#636366]`}
          >
            Back
          </button>
        </div>

        <MutedFootnote>By continuing, you agree to our terms and privacy policy.</MutedFootnote>
      </div>
    </div>
  );
}

/* -------------------- STEP 3 (ProfileStep) -------------------- */

function ProfileStep({
  userId,
  profile,
  onChange,
  onSubmit,
}: {
  userId: Id<"users">;
  profile: { name: string; avatar: string };
  onChange: (p: { name: string; avatar: string }) => void;
  onSubmit: () => void;
}) {
  const updateProfile = useMutation(api.users.updateProfile);

  const handleSubmit = async () => {
    await updateProfile({
      userId,
      name: profile.name,
      avatar: profile.avatar,
    });

    if (typeof window !== "undefined") {
      localStorage.setItem("onboardingComplete", "1");
    }
    onSubmit();
  };

  return (
    <div className="flex w-full flex-col items-center">
      <Headline title="Set up your profile" subtitle="You can change this later." />

      <div className={`w-full ${UI.maxW}`}>
        <div className="grid gap-4">
          {profile.avatar ? (
            <div className="mx-auto mb-2.5 ">
              <img src={profile.avatar} className="h-25 w-25 rounded-full" alt="" />
            </div>
          ) : null}

          <TextField
            placeholder="Your name"
            value={profile.name}
            onChange={(v) => onChange({ ...profile, name: v })}
          />

          <PrimaryButton disabled={!profile.name.trim()} onClick={handleSubmit}>
            Continue
          </PrimaryButton>
        </div>

        <MutedFootnote>You can change this later.</MutedFootnote>
      </div>
    </div>
  );
}

/* -------------------- STEP 4 Reveal -------------------- */

function CanvasReveal({ onDone }: { onDone: () => void }) {
  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-50 bg-white"
      initial={{ clipPath: "circle(0% at 50% 50%)" }}
      animate={{ clipPath: "circle(150% at 50% 50%)" }}
      transition={{ duration: 1.05, ease: [0.4, 0, 0.2, 1] }}
      onAnimationComplete={onDone}
    />
  );
}