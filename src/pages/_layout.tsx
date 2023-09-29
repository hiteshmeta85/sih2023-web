import Head from "next/head";
import React from "react";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

export default function Layout({ children }: { children: React.ReactNode }) {
  const meta = {
    title: "VisualX AI",
    description:
      "Transforming Text into Video Unleashing AI Magic on PIB Press Releases!",
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
      </Head>
      <main>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </main>
      <Toaster />
      <TailwindIndicator />
    </>
  );
}
