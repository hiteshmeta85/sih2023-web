import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, RocketIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/router";
import { PromptInput } from "@/components/prompt-input";

export default function GenerateAvatar() {
  const router = useRouter();

  return (
    <div className="container flex min-h-screen max-w-screen-md flex-col items-center justify-center p-4">
      <div>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <p className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-foreground text-4xl">
              <RocketIcon className="h-6 w-6" />
            </p>
            <h2 className="text-4xl tracking-wider text-yellow-400">
              Generate Avatar
            </h2>
          </div>
          <p className="max-w-screen-md text-sm tracking-wide text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            quis elit vel urna cursus suscipit et ac risus. Phasellus viverra
            lorem non sem consectetur rhoncus. Sed nec semper nibh.
          </p>
          <Button type="button" variant="outline" onClick={() => router.back()}>
            <>
              <ArrowLeftIcon className="mr-2" />
              Back
            </>
          </Button>
        </div>

        <div className="mt-10">
          <PromptInput placeholder={"Generate an avatar that looks like ..."} />
        </div>
      </div>
    </div>
  );
}
