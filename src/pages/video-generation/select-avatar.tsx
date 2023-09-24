import { AVATAR_OPTIONS } from "@/constants";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/router";

export default function SelectDuration() {
  const router = useRouter();
  const [currentAvatar, setCurrentAvatar] = useState(AVATAR_OPTIONS[0]);

  return (
    <div className="container flex min-h-screen max-w-screen-md flex-col items-center justify-center p-4">
      <div>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <p className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-foreground text-4xl">
              4.
            </p>
            <h2 className="text-4xl tracking-wider text-yellow-400">
              Select Avatar
            </h2>
          </div>
          <p className="max-w-screen-md text-sm tracking-wide text-muted-foreground">
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
          <div className="flex gap-2">
            {AVATAR_OPTIONS.map((avatar) => {
              return (
                <Button
                  key={avatar.id}
                  className={
                    avatar.id === currentAvatar.id
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
            {currentAvatar && (
              <div className="flex gap-4">
                <Image
                  src={currentAvatar.image}
                  alt={currentAvatar.nickname}
                  width={400}
                  height={400}
                  layout={"fixed"}
                  className="h-[400px] w-[400px] min-w-[400px] rounded-xl object-cover"
                />
                <div>
                  <p className="text-2xl font-bold">{currentAvatar.nickname}</p>
                  <p className="text-sm text-muted-foreground">
                    {currentAvatar.description}
                  </p>
                  <div className="mt-4 flex gap-2">
                    <div className="inline-flex items-center justify-center rounded-md bg-primary-foreground bg-violet-500 px-4 py-2 text-xs text-primary ring-1 ring-primary">
                      {currentAvatar.gender}
                    </div>
                    <Button
                      type="button"
                      onClick={() => {
                        console.log(currentAvatar);
                      }}
                      className="bg-primary-foreground text-xs text-primary ring-1 ring-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                    >
                      <>
                        Select
                        <ArrowRightIcon className="ml-2" />
                      </>
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
