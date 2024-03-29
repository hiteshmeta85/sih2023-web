import { DURATION_OPTIONS } from "@/constants";
import { useRouter } from "next/router";
import VideoGenerationPageLayout from "@/pages/video-generation/_layout";

export default function SelectDuration() {
  const router = useRouter();

  const selectDuration = async (duration: number) => {
    if (localStorage.getItem("video-creation-data") !== null) {
      const data = JSON.parse(localStorage.getItem("video-creation-data")!);
      data.duration = duration;
      localStorage.setItem("video-creation-data", JSON.stringify(data));
      await router.push("/video-generation/select-avatar");
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
                3.
              </p>
              <h2 className="text-2xl tracking-wider text-yellow-400 md:text-4xl">
                Select Duration
              </h2>
            </div>
            <p className="text-sm tracking-wide text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              quis elit vel urna cursus suscipit et ac risus. Phasellus viverra
              lorem non sem consectetur rhoncus. Sed nec semper nibh.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {DURATION_OPTIONS.map((duration) => (
              <div
                key={duration.value}
                onClick={() => selectDuration(duration.value)}
                className="relative flex transform cursor-pointer flex-col items-center justify-center space-y-2 rounded-xl border-2 p-10 transition-all duration-300 hover:bg-primary-foreground"
              >
                {duration.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </VideoGenerationPageLayout>
  );
}
