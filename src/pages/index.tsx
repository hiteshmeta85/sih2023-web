import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import {
  ArrowDownIcon,
  FileTextIcon,
  GitHubLogoIcon,
  KeyboardIcon,
  LetterCaseCapitalizeIcon,
  PersonIcon,
  SpeakerLoudIcon,
  VideoIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";
import { PromptFormSchema, PromptInput } from "@/components/prompt-input";
import AvatarsShowcase from "@/components/avatars-showcase";
import { useRouter } from "next/router";
import * as z from "zod";
import DisclaimerCard from "@/components/disclaimer-card";
import { DEVELOPER_SECTION_DATA, IMAGE_GALLERY_DATA } from "@/constants";
import { scrollToId } from "@/lib/utils";

export default function Home() {
  const router = useRouter();

  async function onSubmit(data: z.infer<typeof PromptFormSchema>) {
    localStorage.removeItem("video-creation-data");
    localStorage.setItem(
      "video-creation-data",
      JSON.stringify({
        prompt: data.prompt,
        language: null,
        duration: null,
      }),
    );
    await router.push("/video-generation/select-language");
  }

  return (
    <main>
      <Navbar>
        <div className="flex flex-wrap items-center gap-4">
          <Button
            variant="outline"
            type="button"
            onClick={() => router.push("/videos")}
          >
            Video Showcase
          </Button>
          <Button
            variant="outline"
            type="button"
            onClick={() => router.push("/avatars")}
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
              Releases Speak 15 Languages, Uniting a Nation of Diverse Voices!
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
              size="lg"
              className="w-fit rounded-full bg-violet-500 py-4 text-lg hover:bg-violet-600"
              variant="secondary"
              onClick={() => router.push("/video-generation")}
            >
              Generate AI Video
            </Button>
          </div>
        </div>

        <div className="mx-auto max-w-screen-md space-y-12 rounded-3xl bg-muted p-4 md:p-16">
          <p className="text-2xl font-bold md:text-3xl md:leading-[3rem]">
            <span className="text-cyan-500">Start your journey!</span> Ask the
            AI to Design
          </p>
          <div className="space-y-2">
            <PromptInput
              placeholder="Paste your press release here."
              onSubmit={onSubmit}
            />
            <DisclaimerCard />
            <Button
              size="sm"
              variant="default"
              onClick={() => scrollToId("video-generation-flow-gallery")}
            >
              <>
                View Video Generation Flow{" "}
                <ArrowDownIcon className="ml-2 animate-bounce" />
              </>
            </Button>
          </div>
        </div>

        <div className="mx-auto grid max-w-screen-md gap-6 py-24 md:grid-cols-2">
          <div>
            <p className="text-left text-2xl font-bold md:text-3xl">
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
            <p className="text-left text-2xl font-bold md:text-3xl">
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
              "/images/avatar_4.jpeg",
              "/images/avatar_5.png",
            ]}
          />
        </div>
      </div>

      <div
        id="video-generation-flow-gallery"
        className="container mx-auto grid space-y-8 pb-24 text-justify"
      >
        <p className="text-center text-2xl font-bold md:text-3xl md:leading-[3rem]">
          <span className="text-orange-500">Video</span> Generation Flow
        </p>
        <div className="mx-auto grid max-w-screen-md gap-6">
          {IMAGE_GALLERY_DATA.map((image) => {
            return (
              <div
                className="flex flex-col items-center gap-2 md:flex-row md:items-start"
                key={image.id}
              >
                <Image
                  src={image.image}
                  alt=""
                  width={400}
                  height={400}
                  className="rounded-xl border p-2"
                />
                <div className="flex flex-col gap-2 text-justify">
                  <p className="text-left text-base tracking-wide">
                    {image.title}
                  </p>
                  <p className="text-left text-sm text-muted-foreground">
                    {image.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container mx-auto grid space-y-8 pb-24 text-center">
        <p className="text-2xl font-bold md:text-3xl md:leading-[3rem]">
          Our <span className="text-indigo-500">Team</span> of Developers
        </p>
        <div className="mx-auto grid w-full max-w-screen-md gap-4 md:grid-cols-2">
          {DEVELOPER_SECTION_DATA.map((data) => {
            return (
              <div
                className="flex flex-col gap-1 rounded-xl border p-4 text-left"
                key={data.id}
              >
                <p className="font-semibold">{data.name}</p>
                <p className="text-sm text-muted-foreground">
                  {data.designation}
                </p>
                <a
                  href={data.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit"
                >
                  <GitHubLogoIcon className="h-6 w-6" />
                </a>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </main>
  );
}
