import { Button } from "@/components/ui/button";
import { MagicWandIcon, StarFilledIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/router";
import Image from "next/image";
import { UpdateAvatarForm } from "@/components/update-avatar-form";
import * as React from "react";

export default function UpdateAvatar() {
  const router = useRouter();

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
          <div className="flex gap-4">
            <div className="space-y-2">
              <Image
                src="/images/avatar_1.jpeg"
                alt="John Doe"
                width={400}
                height={400}
                layout={"fixed"}
                className="h-[400px] w-[400px] min-w-[400px] rounded-xl object-cover"
              />
              <p className="text-sm text-primary">AI-Generated Avatar</p>
            </div>
            <UpdateAvatarForm />
          </div>
        </div>
      </div>
    </div>
  );
}
