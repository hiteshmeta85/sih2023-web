import { VideoIP } from "@/types";

import dynamic from "next/dynamic";
import Link from "next/link";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function VideoCard({
  id,
  title,
  description,
  link,
  language,
  avatar,
  status,
  thumbnail,
}: VideoIP) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border-4">
      <div className="aspect-video">
        <ReactPlayer
          width="100%"
          height="100%"
          url={link}
          controls
          light={thumbnail}
        />
      </div>
      <div className="flex flex-1 flex-col justify-between space-y-8 p-4">
        <div className="space-y-2">
          <div>
            <Link
              href={`/videos/${id}`}
              className="font-medium hover:underline"
            >
              {title}
            </Link>
          </div>
          <p className="text-xs text-muted-foreground">{description}</p>
          <div>
            <Link
              href={`/videos/${id}`}
              className="transform text-xs text-muted-foreground underline transition-all duration-300 hover:text-primary hover:underline"
            >
              View
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center justify-center rounded-md bg-primary px-2 py-1 text-xs capitalize text-background ring-1 ring-primary">
            {status}
          </div>
          <div className="inline-flex items-center justify-center rounded-md bg-primary-foreground px-2 py-1 text-xs capitalize text-primary ring-1 ring-primary">
            {language}
          </div>
          <div className="inline-flex items-center justify-center rounded-md bg-primary-foreground px-2 py-1 text-xs capitalize text-primary ring-1 ring-primary">
            {avatar.nickname}
          </div>
        </div>
      </div>
    </div>
  );
}
