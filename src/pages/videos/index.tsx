import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { MagicWandIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/router";
import { AVATAR_OPTIONS, VIDEOS_DATA } from "@/constants";
import AvatarCard from "@/components/avatar-card";
import VideoCard from "@/components/video-card";

export default function Videos() {
  const router = useRouter();

  return (
    <>
      <Navbar>
        <div className="flex items-center gap-4">
          <Button variant="outline" onClick={() => router.push("/")}>
            Home
          </Button>
          <Button
            variant="outline"
            onClick={() => router.push("/video-generation")}
          >
            <>
              Generate
              <MagicWandIcon className="ml-2" />
            </>
          </Button>
        </div>
      </Navbar>
      <div className="container px-4 py-10">
        <div className="space-y-4">
          <h2 className="text-4xl tracking-wider text-yellow-400">
            AI-Generated Video Showcase
          </h2>
          <p className="text-sm tracking-wide text-muted-foreground">
            Welcome to our Video Showcase, where we unveil the transformative
            impact of AI in communication. Dive into a world where Press
            Releases come to life as engaging videos, crafted by AI avatars.
            Experience the fusion of technology and storytelling, as we redefine
            the future of conveying information. Join us in exploring the
            captivating possibilities of AI-driven video communication.
          </p>
        </div>
        <div className="mt-10">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {VIDEOS_DATA.map((video) => {
              return <VideoCard key={video.id} {...video} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
