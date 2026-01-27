// pages/_app.tsx
import type { AppProps } from "next/app";
import Head from "next/head";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Toaster } from "sonner";
import { SessionProvider } from "next-auth/react";
import { SkillSettingsProvider } from "@/lib/skillSettings";
import { SidebarProvider } from "@/components/ui/sidebar";
import "@/styles/globals.css";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

const SITE_NAME = "[Skills]";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"; // set in env
const DEFAULT_TITLE = "[Skill]s";
const DEFAULT_DESC = "Create your own skill tree for claude, cursor, ... and share it with the world.";
const OG_IMAGE = `${SITE_URL}/og.png`; // put og.png in /public

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={(pageProps as any).session}>
      <ConvexProvider client={convex}>
        <SidebarProvider>
          <SkillSettingsProvider>
            <Head>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <meta name="application-name" content={SITE_NAME} />
              <meta name="theme-color" content="#f4f4f3" />

              <title>{DEFAULT_TITLE}</title>
              <meta name="description" content={DEFAULT_DESC} />

              {/* Open Graph */}
              <meta property="og:type" content="website" />
              <meta property="og:site_name" content={SITE_NAME} />
              <meta property="og:title" content={DEFAULT_TITLE} />
              <meta property="og:description" content={DEFAULT_DESC} />
              <meta property="og:url" content={SITE_URL} />
              <meta property="og:image" content={OG_IMAGE} />
              <meta property="og:image:width" content="1200" />
              <meta property="og:image:height" content="630" />

              {/* Twitter */}
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content={DEFAULT_TITLE} />
              <meta name="twitter:description" content={DEFAULT_DESC} />
              <meta name="twitter:image" content={OG_IMAGE} />
            </Head>

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