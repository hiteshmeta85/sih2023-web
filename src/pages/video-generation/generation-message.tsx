import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

export default function GenerationMessage() {
  const router = useRouter();

  return (
    <div className="container flex min-h-screen max-w-screen-md flex-col items-center justify-center p-4">
      <div>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="inline-flex items-end gap-6 text-4xl tracking-wider text-green-500">
              Video Generation in Progress
              <div className="dot-elastic mb-2" />
            </h2>
          </div>
          <p className="text-sm tracking-wide text-muted-foreground">
            Our advanced machine learning algorithms are hard at work, crafting
            your Press Release into an engaging video. Your video will be ready
            shortly. Thank you for your patience.
          </p>
        </div>
        <div className="mt-10 space-y-4">
          <div className="flex justify-end space-y-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/avatars")}
            >
              <>
                Explore Avatars
                <ArrowRightIcon className="ml-2" />
              </>
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <Image
                src="/images/avatar_1.jpeg"
                alt="John Doe"
                width={400}
                height={400}
                layout={"fixed"}
                className="w-full rounded-xl object-cover"
              />
            </div>
            <div>
              <Image
                src="/images/avatar_3.jpeg"
                alt="John Doe"
                width={400}
                height={400}
                layout={"fixed"}
                className="w-full rounded-xl object-cover"
              />
            </div>
            <div>
              <Image
                src="/images/avatar_2.jpeg"
                alt="John Doe"
                width={400}
                height={400}
                layout={"fixed"}
                className="w-full rounded-xl object-cover"
              />
            </div>
            <div>
              <Image
                src="/images/avatar_4.jpeg"
                alt="John Doe"
                width={400}
                height={400}
                layout={"fixed"}
                className="w-full rounded-xl object-cover"
              />
            </div>
            <div>
              <Image
                src="/images/avatar_5.png"
                alt="John Doe"
                width={400}
                height={400}
                layout={"fixed"}
                className="w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
