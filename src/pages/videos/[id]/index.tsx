import { useState } from "react";
import { VIDEO_DATA } from "@/constants";

// React Player
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function IndividualVideo() {
  const [videoData, setVideoData] = useState(VIDEO_DATA);

  return (
    <div className="container px-4 py-10">
      <div className="space-y-4">
        <h2 className="text-4xl tracking-wider text-yellow-400">
          {videoData.title}
        </h2>
        <p className="text-sm tracking-wide text-muted-foreground">
          {videoData.description}
        </p>
        <p className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-transparent px-4 py-2 text-sm font-medium shadow-sm">
          {videoData.language}
        </p>
      </div>
      <div className="mt-10 flex gap-4">
        <div className="col-span-2 h-[450px] w-[800px] border-2 border-primary">
          <ReactPlayer
            width="100%"
            height="100%"
            url="https://youtu.be/Uzuk4vraXpA?feature=shared"
            controls
          />
        </div>
      </div>
    </div>
  );
}
