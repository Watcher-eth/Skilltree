// pages/_app.tsx
import type { AppProps } from "next/app";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Toaster } from "sonner";
import { SessionProvider } from "next-auth/react";
import { SkillSettingsProvider } from "@/lib/skillSettings";
import { SidebarProvider } from "@/components/ui/sidebar";
import "@/styles/globals.css";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={(pageProps as any).session}>
      <ConvexProvider client={convex}>
        <SidebarProvider>
          <SkillSettingsProvider>
            <div className="font-sans antialiased">
              <Component {...pageProps} />
              <Toaster position="top-center" duration={2200} />
            </div>
          </SkillSettingsProvider>
        </SidebarProvider>
      </ConvexProvider>
    </SessionProvider>
  );
}