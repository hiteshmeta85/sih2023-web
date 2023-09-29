import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { AvatarIP } from "@/types";
import { ArrowRightIcon, ReloadIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { toast } from "@/components/ui/use-toast";
import VideoGenerationPageLayout from "@/pages/video-generation/_layout";

interface PageIP {
  avatars: AvatarIP[];
}

export default function SelectAvatar({ avatars }: PageIP) {
  const router = useRouter();
  const [currentAvatar, setCurrentAvatar] = useState(
    avatars ? avatars[0] : null,
  );

  const [isLoading, setIsLoading] = useState(false);

  const handleAvatarSelect = async (avatar: AvatarIP) => {
    setIsLoading(true);
    if (localStorage.getItem("video-creation-data") !== null) {
      const data = JSON.parse(localStorage.getItem("video-creation-data")!);
      data.avatar = avatar.id;
      localStorage.setItem("video-creation-data", JSON.stringify(data));
      try {
        const res = await axios.post(
          // todo: remove leading slash
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/create-script/`,
          {
            prompt: data.prompt,
            language: data.language,
            duration: data.duration,
            avatar: data.avatar,
          },
        );
        if (res.data) {
          await router.push(`/video-generation/edit-script/${res.data.id}`);
        }
      } catch (err) {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        });
      } finally {
        setIsLoading(false);
      }
    } else {
      await router.push("/video-generation");
    }
  };

  return (
    <VideoGenerationPageLayout>
      <div className="container flex min-h-screen max-w-screen-md flex-col items-center justify-center p-4">
        <div>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <p className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-foreground text-4xl">
                4.
              </p>
              <h2 className="text-2xl tracking-wider text-yellow-400 md:text-4xl">
                Select Avatar
              </h2>
            </div>
            <p className="text-sm tracking-wide text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              quis elit vel urna cursus suscipit et ac risus. Phasellus viverra
              lorem non sem consectetur rhoncus. Sed nec semper nibh.
            </p>
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/video-generation/generate-avatar")}
            >
              <>
                Generate Avatar
                <ArrowRightIcon className="ml-2" />
              </>
            </Button>
          </div>

          <div className="mt-10 space-y-4">
            <div className="flex flex-wrap gap-2">
              {avatars.map((avatar) => {
                return (
                  <Button
                    key={avatar.id}
                    className={
                      avatar.id === currentAvatar?.id
                        ? "bg-primary text-primary-foreground"
                        : "transform bg-primary-foreground text-primary ring-1 ring-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                    }
                    onClick={() => setCurrentAvatar(avatar)}
                  >
                    {avatar.nickname}
                  </Button>
                );
              })}
            </div>
            <div>
              {avatars && avatars.length > 0 ? (
                currentAvatar && (
                  <div className="flex flex-col gap-4 md:flex-row">
                    <Image
                      src={currentAvatar.image}
                      alt={currentAvatar.nickname}
                      width={400}
                      height={400}
                      className="h-[400px] w-[400px] rounded-xl bg-muted object-contain md:min-w-[400px]"
                    />
                    <div>
                      <p className="text-2xl font-bold">
                        {currentAvatar.nickname}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {currentAvatar.description}
                      </p>
                      <div className="mt-4 flex gap-2">
                        <div className="inline-flex items-center justify-center rounded-md bg-primary-foreground px-4 py-2 text-xs text-primary ring-1 ring-primary">
                          {currentAvatar.gender}
                        </div>
                        <Button
                          type="button"
                          onClick={() => handleAvatarSelect(currentAvatar)}
                          disabled={isLoading}
                          className="bg-primary-foreground text-xs text-primary ring-1 ring-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                        >
                          <>
                            {isLoading ? "Generating..." : "Start"}
                            {isLoading ? (
                              <ReloadIcon className="ml-2 animate-spin" />
                            ) : (
                              <ArrowRightIcon className="ml-2" />
                            )}
                          </>
                        </Button>
                      </div>
                    </div>
                  </div>
                )
              ) : (
                <p className="text-muted-foreground">No avatars found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </VideoGenerationPageLayout>
  );
}

export async function getServerSideProps() {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/avatars`,
    );
    const data = res.data;
    if (!data) {
      return {
        props: {
          avatars: [],
        },
      };
    }
    return {
      props: {
        avatars: data,
      },
    };
  } catch (err) {
    return {
      props: {
        avatars: [],
      },
    };
  }
}
