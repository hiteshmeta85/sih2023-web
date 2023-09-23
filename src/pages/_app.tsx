import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Lora } from "next/font/google";
import { cn } from "@/lib/utils";
import Layout from "@/pages/_layout";

const lora = Lora({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={cn(lora.className)}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
