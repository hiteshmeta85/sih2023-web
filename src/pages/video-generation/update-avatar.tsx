import { Button } from "@/components/ui/button";
import { MagicWandIcon, StarFilledIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  UpdateAvatarForm,
  UpdateAvatarFormSchema,
} from "@/components/update-avatar-form";
import * as React from "react";
import { useEffect } from "react";
import * as z from "zod";
import { toast } from "@/components/ui/use-toast";
import axios from "axios";

export default function UpdateAvatar() {
  const router = useRouter();

  const [avatarInfo, setAvatarInfo] = React.useState<{
    img_link: string;
  } | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  const getAvatarInfoFromLocalStorage = () => {
    if (localStorage.getItem("avatar-creation-data") !== null) {
      return JSON.parse(localStorage.getItem("avatar-creation-data")!);
    } else {
      return null;
    }
  };

  useEffect(() => {
    const data = getAvatarInfoFromLocalStorage();
    if (data === null) {
      router.push("/video-generation/generate-avatar");
    } else {
      setAvatarInfo(data);
      setIsLoading(false);
    }
  }, [router]);

  async function onSubmit(data: z.infer<typeof UpdateAvatarFormSchema>) {
    try {
      const res = await axios.post(
        // todo: remove leading slash
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/avatars/`,
        {
          nickname: data.nickname,
          description: data.description,
          image: avatarInfo?.img_link,
          gender: data.gender,
          // todo: remove this later
          intro_video: "https://www.youtube.com/watch?v=9bZkp7q19f0",
        },
      );
      if (res.data) {
        await router.push(`/video-generation/select-avatar`);
      }
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    }
  }

  return (
    <div className="container flex min-h-screen max-w-screen-md flex-col items-center justify-center p-4">
      <div>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <p className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-foreground text-4xl">
              <StarFilledIcon className="h-6 w-6" />
            </p>
            <h2 className="text-4xl tracking-wider text-violet-500">
              Update Avatar
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
              Regenerate
              <MagicWandIcon className="ml-2" />
            </>
          </Button>
        </div>

        <div className="mt-10">
          {isLoading ? (
            <p className="text-muted-foreground">Loading...</p>
          ) : avatarInfo !== null ? (
            <div className="flex gap-4">
              <div className="space-y-2">
                <Image
                  src={avatarInfo.img_link}
                  alt="John Doe"
                  width={400}
                  height={400}
                  layout={"fixed"}
                  className="h-[400px] w-[400px] min-w-[400px] rounded-xl object-cover"
                />
                <p className="text-sm text-primary">AI-Generated Avatar</p>
              </div>
              <UpdateAvatarForm onSubmit={onSubmit} />
            </div>
          ) : (
            <p className="text-muted-foreground">No avatar found</p>
          )}
        </div>
      </div>
    </div>
  );
}
