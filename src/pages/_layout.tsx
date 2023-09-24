import Head from "next/head";
import React from "react";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Toaster } from "@/components/ui/toaster";

export default function Layout({ children }: { children: React.ReactNode }) {
  const meta = {
    title: "SIH 2023 Web",
    description: "SIH 2023 Web",
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
      </Head>
      <main>{children}</main>
      <Toaster />
      <TailwindIndicator />
    </>
  );
}