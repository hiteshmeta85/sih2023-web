import React from "react";
import { PromptInput } from "@/components/prompt-input";

const VideoGeneration = () => {
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
        <PromptInput placeholder="Paste your press release here." />
      </div>
    </div>
  );
};

export default VideoGeneration;
