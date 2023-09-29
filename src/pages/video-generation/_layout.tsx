import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/router";

interface PageIP {
  children: React.ReactNode;
}

export default function VideoGenerationPageLayout({ children }: PageIP) {
  const router = useRouter();

  return (
    <div className="relative">
      <div className="left-4 top-4 p-4 md:absolute md:p-0">
        <Button variant="outline" onClick={() => router.push("/")}>
          <>
            <ArrowLeftIcon className="mr-2" />
            Home
          </>
        </Button>
      </div>
      {children}
    </div>
  );
}
