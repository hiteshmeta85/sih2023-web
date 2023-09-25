import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import {
  FileTextIcon,
  KeyboardIcon,
  LetterCaseCapitalizeIcon,
  PersonIcon,
  SpeakerLoudIcon,
  VideoIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";
import { PromptInput } from "@/components/prompt-input";
import AvatarsShowcase from "@/components/avatars-showcase";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <Navbar>
        <div className="flex items-center justify-between gap-4">
          <Button
            variant="outline"
            type="button"
            onClick={() => router.push("videos/")}
          >
            Video Showcase
          </Button>
          <Button
            variant="outline"
            type="button"
            onClick={() => router.push("avatars/")}
          >
            Avatar Showcase
          </Button>
        </div>
      </Navbar>

      <div className="container mx-auto text-center">
        <div className="grid space-y-16 py-24">
          <div>
            <div className="text-3xl font-bold md:text-5xl md:leading-[4rem]">
              <p>
                Transforming Text into Video <br />
                Unleashing <span className="text-yellow-400">AI Magic</span> on
                PIB Press Releases!
              </p>
            </div>
            <p className="md:text-md mx-auto text-sm text-muted-foreground">
              Unlocking Communication Horizons: From Text to Video, PIB Press
              Releases Speak 14 Languages, Uniting a Nation of Diverse Voices!
            </p>
          </div>

          <div className="mx-auto grid grid-cols-3 gap-4 md:grid-cols-6">
            <div className="flex cursor-pointer flex-col items-center gap-3">
              <VideoIcon className="h-[50px] w-[50px] rounded-full bg-yellow-400 p-2 hover:bg-yellow-500" />
              <p className="text-sm">Video</p>
            </div>
            <div className="flex cursor-pointer flex-col items-center gap-3">
              <PersonIcon className="h-[50px] w-[50px] rounded-full bg-blue-400 p-2 hover:bg-blue-500" />
              <p className="text-sm">AI avatar</p>
            </div>
            <div className="flex cursor-pointer flex-col items-center gap-3">
              <SpeakerLoudIcon className="h-[50px] w-[50px] rounded-full bg-fuchsia-400 p-2 hover:bg-fuchsia-500" />
              <p className="text-sm">AI voice</p>
            </div>
            <div className="flex cursor-pointer flex-col items-center gap-3">
              <KeyboardIcon className="h-[50px] w-[50px] rounded-full bg-indigo-600 p-2 hover:bg-indigo-700" />
              <p className="text-sm">Text to Video</p>
            </div>
            <div className="flex cursor-pointer flex-col items-center gap-3">
              <FileTextIcon className="h-[50px] w-[50px] rounded-full bg-purple-500 p-2 hover:bg-purple-600" />
              <p className="text-sm">AI Templates</p>
            </div>
            <div className="flex cursor-pointer flex-col items-center gap-3">
              <LetterCaseCapitalizeIcon className="h-[50px] w-[50px] rounded-full bg-orange-400 p-2 hover:bg-orange-500" />
              <p className="text-sm">Multilingual</p>
            </div>
          </div>

          <div>
            <Button
              className="w-fit rounded-full bg-violet-500 py-2 hover:bg-violet-600"
              variant="secondary"
              onClick={() => router.push("video-generation/")}
            >
              Generate AI Video
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
              Our <span className="text-rose-500">Text-to-Video</span> platform
              automate the process of creating videos, eliminating the need for
              manual editing and production.
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
              Our platform support multiple{" "}
              <span className="text-blue-500">Indian languages</span> and
              accents, allowing for a global reach and audience targeting.
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
        <p className="text-2xl font-bold md:text-3xl md:leading-[3rem]">
          Reporting Live from the Wacky World of{" "}
          <span className="text-green-500">AI-Generated Avatars!</span>
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
