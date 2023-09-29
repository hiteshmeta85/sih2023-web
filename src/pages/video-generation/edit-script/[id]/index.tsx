import {
  EditScriptForm,
  EditScriptFormSchema,
} from "@/components/edit-script-form";
import { GetServerSideProps } from "next";
import axios from "axios";
import { VideoIP } from "@/types";
import { useRouter } from "next/router";
import * as z from "zod";
import { toast } from "@/components/ui/use-toast";
import VideoGenerationPageLayout from "@/pages/video-generation/_layout";

interface PageIP {
  id: any;
  videoData: VideoIP;
}

export default function EditScript({ videoData, id }: PageIP) {
  const router = useRouter();

  async function onSubmit(data: z.infer<typeof EditScriptFormSchema>) {
    const updatedScriptSections = videoData.script.script_sections.map(
      (section, index) => {
        if (data.script_sections[index]) {
          return {
            ...section,
            content: data.script_sections[index].content, // Update the content field
          };
        }
        return section;
      },
    );

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/update-script/${id}`,
        {
          script: { script_sections: updatedScriptSections },
        },
      );
      if (res) {
        await router.push(`/video-generation/generation-message/${id}`);
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
    <VideoGenerationPageLayout>
      <div className="container flex min-h-screen max-w-screen-md flex-col items-center justify-center p-4">
        <div>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <p className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-foreground text-4xl">
                5.
              </p>
              <h2 className="text-2xl tracking-wider text-yellow-400 md:text-4xl">
                Edit Script
              </h2>
            </div>
            <p className="text-sm tracking-wide text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              quis elit vel urna cursus suscipit et ac risus. Phasellus viverra
              lorem non sem consectetur rhoncus. Sed nec semper nibh.
            </p>
          </div>

          <div className="mt-10">
            <EditScriptForm
              onSubmit={onSubmit}
              defaultValues={videoData.script}
            />
          </div>
        </div>
      </div>
    </VideoGenerationPageLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;

  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/videos/${id}`,
    );
    const data = res.data;
    if (!data) {
      return {
        redirect: {
          destination: "/video-generation",
          permanent: false,
        },
      };
    }
    return {
      props: {
        id: id,
        videoData: res.data,
      },
    };
  } catch (err) {
    return {
      redirect: {
        destination: "/video-generation",
        permanent: false,
      },
    };
  }
};
