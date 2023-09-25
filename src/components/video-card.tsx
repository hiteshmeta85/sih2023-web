import { VideoIP } from "@/types";

import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function VideoCard({
  title,
  description,
  link,
  language,
  avatar,
  status,
}: VideoIP) {
  return (
    <div className="overflow-hidden rounded-xl border-4">
      <div className="aspect-video">
        <ReactPlayer width="100%" height="100%" url={link} controls />
      </div>
      <div className="space-y-8 p-4">
        <div className="space-y-2">
          <p className="font-sm font-medium">{title}</p>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center justify-center rounded-md bg-primary px-2 py-1 text-xs text-background ring-1 ring-primary">
            {status}
          </div>
          <div className="inline-flex items-center justify-center rounded-md bg-primary-foreground px-2 py-1 text-xs text-primary ring-1 ring-primary">
            {language}
          </div>
          <div className="inline-flex items-center justify-center rounded-md bg-primary-foreground px-2 py-1 text-xs text-primary ring-1 ring-primary">
            {avatar.nickname}
          </div>
        </div>
      </div>
    </div>
  );
}
