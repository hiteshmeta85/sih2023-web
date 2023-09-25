import React from "react";
import { PromptFormSchema, PromptInput } from "@/components/prompt-input";
import * as z from "zod";
import { useRouter } from "next/router";

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
    <div className="container flex min-h-screen flex-col justify-center p-4">
      <div className="space-y-12">
        <div className="space-y-4">
          <h1 className="text-9xl font-semibold leading-[9rem]">
            Press Release to Video
          </h1>
          <h2 className="text-4xl tracking-wider text-yellow-400">
            Transforming Text into Engaging Visuals
          </h2>
        </div>
        <PromptInput
          placeholder="Paste your press release here."
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
};

export default VideoGeneration;
