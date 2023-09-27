import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { MagicWandIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/router";
import VideoCard from "@/components/video-card";
import axios from "axios";
import { VideoIP } from "@/types";

interface PageIP {
  videos: VideoIP[];
  message: string;
}

export default function Videos({ videos, message }: PageIP) {
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
          {videos && videos.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
              {videos.map((video) => {
                return <VideoCard key={video.id} {...video} />;
              })}
            </div>
          ) : (
            <p className="text-muted-foreground">{message}</p>
          )}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/videos`,
    );
    const data = res.data;
    if (!data) {
      return {
        props: {
          videos: [],
          message: "No videos found",
        },
      };
    }
    return {
      props: {
        videos: data,
        message: "",
      },
    };
  } catch (err) {
    return {
      props: {
        videos: [],
        message: "Internal Server Error",
      },
    };
  }
}
