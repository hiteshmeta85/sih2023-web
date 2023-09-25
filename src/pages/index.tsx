import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import {
  FileTextIcon,
  Pencil1Icon,
  PersonIcon,
  VideoIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";
import { PromptInput } from "@/components/prompt-input";
import AvatarsShowcase from "@/components/avatars-showcase";

export default function Home() {
  return (
    <main>
      <Navbar>
        <div className="flex items-center justify-between gap-4">
          <Button
            variant="outline"
            type="button"
            onClick={() => console.log("clicked")}
          >
            Video Showcase
          </Button>
          <Button
            variant="outline"
            type="button"
            onClick={() => console.log("clicked")}
          >
            Avatar Showcase
          </Button>
        </div>
      </Navbar>
      <hr />

      <div className="container mx-auto text-center">
        <div className="grid space-y-16 py-24">
          <div>
            <div className="text-3xl font-bold md:text-5xl md:leading-[4rem]">
              <p>Make Great Videos</p>
              <p>Automate Your Brand</p>
            </div>
            <p className="md:text-md mx-auto text-sm text-muted-foreground">
              Automatically create short, highly-sharable branded videos from
              your long form content.
            </p>
          </div>

          <div className="mx-auto grid grid-cols-3 gap-4 md:grid-cols-6">
            <div className="flex cursor-pointer flex-col items-center gap-3">
              <VideoIcon className="h-[50px] w-[50px] rounded-full bg-amber-300 p-2" />
              <p className="text-sm">Video</p>
            </div>
            <div className="flex cursor-pointer flex-col items-center gap-3">
              <PersonIcon className="h-[50px] w-[50px] rounded-full bg-blue-400 p-2" />
              <p className="text-sm">AI avatar</p>
            </div>
            <div className="flex cursor-pointer flex-col items-center gap-3">
              <VideoIcon className="h-[50px] w-[50px] rounded-full bg-fuchsia-400 p-2" />
              <p className="text-sm">AI voice</p>
            </div>
            <div className="flex cursor-pointer flex-col items-center gap-3">
              <Pencil1Icon className="h-[50px] w-[50px] rounded-full bg-indigo-600 p-2" />
              <p className="text-sm">Text to Video</p>
            </div>
            <div className="flex cursor-pointer flex-col items-center gap-3">
              <FileTextIcon className="h-[50px] w-[50px] rounded-full bg-purple-500 p-2" />
              <p className="text-sm">AI Templates</p>
            </div>
            <div className="flex cursor-pointer flex-col items-center gap-3">
              <VideoIcon className="h-[50px] w-[50px] rounded-full bg-orange-400 p-2" />
              <p className="text-sm">More Videos</p>
            </div>
          </div>

          <div>
            <Button
              className="w-fit rounded-full bg-violet-500 py-2 hover:bg-violet-600"
              variant="secondary"
            >
              Create a free AI Video
            </Button>
          </div>
        </div>

        <div className="mx-auto max-w-screen-md space-y-12 rounded-3xl bg-muted p-16">
          <p className="text-2xl font-bold  md:text-3xl md:leading-[3rem]">
            Start your journey Ask the AI to Design
          </p>
          <PromptInput />
        </div>

        <div className="mx-auto grid max-w-screen-md gap-6 py-24 md:grid-cols-2">
          <div>
            <p className="text-left text-3xl font-bold">
              Stark.inc is revolutionizing the field of AI image generation with
              its innovation solutions.
            </p>
          </div>
          <div className="md:col-start-1 md:row-span-2">
            <Image
              src="/images/avatar_7.jpg"
              width={500}
              height={500}
              alt="Picture of the author"
              className="rounded-md"
            />
          </div>
          <div>
            <p className="text-left text-3xl font-bold">
              Stark.inc is revolutionizing the field of AI image generation with
              its innovation solutions.
            </p>
          </div>
          <div>
            <Image
              src="/images/avatar_6.jpg"
              width={500}
              height={500}
              alt="Picture of the author"
              className="rounded-md"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto grid space-y-8 pb-24 text-center">
        <p className="text-2xl font-bold text-yellow-400 md:text-3xl md:leading-[3rem]">
          Start your journey Ask the AI to Design
        </p>
        <div className="mx-auto max-w-screen-md">
          <AvatarsShowcase
            images={[
              "/images/avatar_1.jpeg",
              "/images/avatar_3.jpeg",
              "/images/avatar_2.jpeg",
              "/images/avatar_6.jpg",
              "/images/avatar_7.jpg",
            ]}
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}
