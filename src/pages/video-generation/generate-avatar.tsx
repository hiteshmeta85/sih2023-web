import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, RocketIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/router";
import { PromptFormSchema, PromptInput } from "@/components/prompt-input";
import * as z from "zod";
import axios from "axios";
import { toast } from "@/components/ui/use-toast";
import DisclaimerCard from "@/components/disclaimer-card";
import VideoGenerationPageLayout from "@/pages/video-generation/_layout";

export default function GenerateAvatar() {
  const router = useRouter();

  async function onSubmit(data: z.infer<typeof PromptFormSchema>) {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_ML_URL}/generate-image`,
        {
          prompt: data.prompt,
        },
      );
      if (res) {
        // res: data: {
        //   img_link
        // }
        localStorage.setItem(
          "avatar-creation-data",
          JSON.stringify(res.data.data),
        );
        await router.push(`/video-generation/update-avatar`);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh!, Something went wrong.",
        description: "There was a problem with your request.",
      });
    }
  }

  return (
    <VideoGenerationPageLayout>
      <div className="container flex min-h-screen max-w-screen-md flex-col items-center justify-center p-4">
        <div>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <p className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-foreground text-4xl">
                <RocketIcon className="h-6 w-6" />
              </p>
              <h2 className="text-2xl tracking-wider text-violet-500 md:text-4xl">
                Generate Avatar
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
              onClick={() => router.back()}
            >
              <>
                <ArrowLeftIcon className="mr-2" />
                Back
              </>
            </Button>
          </div>

          <div className="mt-10 space-y-2">
            <PromptInput
              placeholder={"Generate an avatar that looks like ..."}
              onSubmit={onSubmit}
            />
            <DisclaimerCard />
          </div>
        </div>
      </div>
    </VideoGenerationPageLayout>
  );
}
