import Image from "next/legacy/image";
import { AvatarIP } from "@/types";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function AvatarCard({
  nickname,
  description,
  image,
  intro_video,
}: AvatarIP) {
  return (
    <div className="flex flex-col items-start space-y-4 rounded-2xl border p-4">
      <Image
        src={image}
        alt={nickname}
        width={400}
        height={400}
        className="rounded-xl object-cover"
      />
      <div className="flex flex-1 flex-col items-start justify-between space-y-4">
        <div>
          <p className="text-2xl font-bold">{nickname}</p>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <Dialog>
          <DialogTrigger className="hover:text-accent-foregroun inline-flex h-9 items-center justify-center rounded-md border border-input bg-transparent px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent">
            View Intro Video
          </DialogTrigger>
          <DialogContent>
            <div className="aspect-video">
              <ReactPlayer
                width="100%"
                height="100%"
                url={intro_video}
                controls
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
