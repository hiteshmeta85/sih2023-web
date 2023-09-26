import { AVATAR_OPTIONS } from "@/constants";
import AvatarCard from "@/components/avatar-card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import axios from "axios";
import { VideoIP } from "@/types";
import { GetServerSidePropsContext } from "next";
import { Fragment } from "react";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

interface PageIP {
  videoData: VideoIP;
}

export default function IndividualVideo({ videoData }: PageIP) {
  const router = useRouter();

  return (
    <>
      <Navbar>
        <div className="flex items-center gap-4">
          <Button variant="outline" onClick={() => router.push("/")}>
            Home
          </Button>
        </div>
      </Navbar>
      <div className="container px-4 py-10">
        <div className="space-y-4">
          <h2 className="text-4xl tracking-wider text-yellow-400 first-letter:uppercase">
            {videoData.title}
          </h2>
          <p className="text-sm tracking-wide text-muted-foreground first-letter:uppercase">
            {videoData.description}
          </p>
          <div className="flex items-center gap-2">
            <p className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-transparent px-4 py-2 text-sm font-medium capitalize shadow-sm">
              {videoData.language}
            </p>
            <p className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-transparent px-4 py-2 text-sm font-medium shadow-sm">
              {new Date(videoData.created_at).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
        <div className="mt-10 space-y-6">
          <div className="flex gap-4">
            <div className="h-[450px] w-[800px] min-w-[800px] border-2 border-primary">
              <ReactPlayer
                width="100%"
                height="100%"
                url={videoData.link}
                controls
              />
            </div>
            <div className="space-y-4">
              <p className="text-2xl font-medium">Script</p>
              {videoData.script.script_sections.map((section) => (
                <div key={section.id} className="grid grid-cols-12 gap-4">
                  <p className="col-span-2 text-yellow-400">
                    {section.start_time}
                  </p>
                  <p className="col-span-10">{section.content}</p>
                </div>
              ))}
            </div>
          </div>
          <hr />
          <div className="space-y-4">
            <p className="text-2xl font-medium">Video Playback Timeline</p>
            <div className="grid grid-cols-4 gap-4">
              {videoData.script.script_sections.map((section) => {
                return (
                  <Fragment key={section.id}>
                    {section.images.map((image) => {
                      return (
                        <div
                          key={image.id}
                          className="space-y-4 rounded-2xl border p-4"
                        >
                          <img
                            src={image.link}
                            alt={"image"}
                            className="aspect-video rounded-xl object-cover"
                          />
                          <div className="space-y-1">
                            <p className="col-span-2 text-yellow-400">
                              {section.start_time}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {section.content}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </Fragment>
                );
              })}
            </div>
          </div>
          <hr />
          <div className="space-y-4">
            <p className="text-2xl font-medium">Explore the Avatar in Detail</p>
            <div className="grid grid-cols-4">
              <AvatarCard {...AVATAR_OPTIONS[0]} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.query;

  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/videos/${id}`,
    );
    const data = res.data;
    if (!data) {
      return {
        notFound: true,
      };
    }
    console.log(data.script.script_sections);
    return {
      props: {
        videoData: data,
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
}
