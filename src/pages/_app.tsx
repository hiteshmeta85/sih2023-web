import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Sora } from "next/font/google";
import { cn } from "@/lib/utils";
import Layout from "@/pages/_layout";

const sora = Sora({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={cn(sora.className)}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
