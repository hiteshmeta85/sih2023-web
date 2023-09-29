import React from "react";
import { PromptFormSchema, PromptInput } from "@/components/prompt-input";
import * as z from "zod";
import { useRouter } from "next/router";
import DisclaimerCard from "@/components/disclaimer-card";
import { Button } from "@/components/ui/button";
import VideoGenerationPageLayout from "@/pages/video-generation/_layout";

const VideoGeneration = () => {
  const router = useRouter();

  async function onSubmit(data: z.infer<typeof PromptFormSchema>) {
    localStorage.removeItem("video-creation-data");
    localStorage.setItem(
      "video-creation-data",
      JSON.stringify({
        prompt: data.prompt,
        language: null,
        duration: null,
        avatar: null,
      }),
    );
    await router.push("/video-generation/select-language");
  }

  return (
    <VideoGenerationPageLayout>
      <div className="container flex min-h-screen flex-col justify-center p-4">
        <div className="space-y-12">
          <div className="text-center">
            <h1 className="text-8xl font-semibold leading-[9rem]">
              Press Release to Video
            </h1>
            <h2 className="text-4xl tracking-wider text-yellow-400">
              Transforming Text into Engaging Visuals
            </h2>
          </div>
          <div className="space-y-4">
            <PromptInput
              placeholder="Paste your press release here."
              onSubmit={onSubmit}
            />
            <p className="text-center">Or</p>
            <div className="flex justify-center">
              <Button
                type={"button"}
                variant="outline"
                size={"lg"}
                onClick={() =>
                  router.push("/video-generation/select-press-release")
                }
                className="border-2 border-white"
              >
                Select Press Release
              </Button>
            </div>
            <DisclaimerCard />
          </div>
        </div>
      </div>
    </VideoGenerationPageLayout>
  );
};

export default VideoGeneration;
