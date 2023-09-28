import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
import { ROUTES } from "@/constants";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col space-y-4 p-8">
        <p className="text-2xl font-medium">Routes:</p>
        {ROUTES.map((route) => {
          return (
            <Link href={route.path} key={route.label} target={"_blank"}>
              <Button variant="outline">{route.label}</Button>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
