"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { signIn, useSession } from "next-auth/react";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import type { Id } from "../../../convex/_generated/dataModel";

type Step = 0 | 1 | 2 | 3;

export function IntroOverlay({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = React.useState<Step>(0);
  const [userId, setUserId] = React.useState<Id<"users"> | null>(null);


  React.useEffect(() => {
    if (step !== 0) return;
    if (localStorage.getItem("onboardingComplete") === "1") {
      onComplete();
    }
  }, [step, onComplete]);

  const [profile, setProfile] = React.useState({
    name: "",
    avatar: "",
  });

  return (
    <motion.div
      className="absolute inset-0 z-50 flex items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <AnimatePresence mode="wait">
        {step === 0 && (
          <WelcomeStep key="welcome" onNext={() => setStep(1)} />
        )}

        {step === 1 && (
          <AuthStep
            key="auth"
            onAuthed={({ userId, name, avatar }) => {
              setUserId(userId);
              setProfile({ name, avatar });
              setStep(2);
            }}
          />
        )}

        {step === 2 && userId && (
          <ProfileStep
            key="profile"
            userId={userId}
            profile={profile}
            onChange={setProfile}
            onSubmit={() => setStep(3)}
          />
        )}
      </AnimatePresence>

      {step === 3 && <CanvasReveal onDone={onComplete} />}
    </motion.div>
  );
}

/* -------------------- STEP 0 -------------------- */

function WelcomeStep({ onNext }: { onNext: () => void }) {
  return (
    <motion.div
      className="flex flex-col items-center gap-6 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <h1 className="text-4xl font-semibold">Welcome</h1>
      <p className="text-neutral-500 max-w-sm">
        Build your skill tree. Visualize growth. Track progress.
      </p>

      <button
        onClick={onNext}
        className="rounded-full bg-black px-6 py-3 text-white"
      >
        Get started
      </button>
    </motion.div>
  );
}

/* -------------------- STEP 1 -------------------- */

function AuthStep({
  onAuthed,
}: {
  onAuthed: (data: {
    userId: Id<"users">;
    name: string;
    avatar: string;
  }) => void;
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

    return (
    <motion.div
      className="flex flex-col gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button
        onClick={() => signIn("github")}
        className="rounded-full border px-6 py-3"
      >
        Continue with GitHub
      </button>

      <button
        onClick={() => signIn("google")}
        className="rounded-full border px-6 py-3"
      >
        Continue with Google
      </button>
    </motion.div>
  );
}

/* -------------------- STEP 2 -------------------- */

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

    localStorage.setItem("onboardingComplete", "1");
    onSubmit();
  };

  return (
    <motion.div
      className="flex flex-col items-center gap-4"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
    >
      {profile.avatar && (
        <img
          src={profile.avatar}
          className="h-20 w-20 rounded-full"
          alt=""
        />
      )}

      <input
        className="rounded-lg border px-4 py-2"
        value={profile.name}
        onChange={(e) =>
          onChange({ ...profile, name: e.target.value })
        }
      />

      <button
        onClick={handleSubmit}
        className="mt-4 rounded-full bg-black px-6 py-3 text-white"
      >
        Enter
      </button>
    </motion.div>
  );
}

/* -------------------- STEP 3 -------------------- */

function CanvasReveal({ onDone }: { onDone: () => void }) {
  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-50 bg-white"
      initial={{ clipPath: "circle(0% at 50% 50%)" }}
      animate={{ clipPath: "circle(150% at 50% 50%)" }}
      transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1] }}
      onAnimationComplete={onDone}
    />
  );
}