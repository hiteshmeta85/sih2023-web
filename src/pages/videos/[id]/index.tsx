import { useState } from "react";
import { VIDEO_DATA } from "@/constants";

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
      </div>
      <div className="mt-10 grid grid-cols-3"></div>
    </div>
  );
}
