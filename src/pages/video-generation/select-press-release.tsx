import { PRESS_RELEASE_DATA } from "@/constants";
import { useRouter } from "next/router";
import { Link2Icon } from "@radix-ui/react-icons";

export default function SelectPressRelease() {
  const router = useRouter();

  const handleLanguageSelect = async (link: string) => {
    if (localStorage.getItem("video-creation-data") !== null) {
      const data = JSON.parse(localStorage.getItem("video-creation-data")!);
      data.prompt = link;
      localStorage.setItem("video-creation-data", JSON.stringify(data));
      await router.push("/video-generation/select-language");
    } else {
      await router.push("/video-generation");
    }
  };

  return (
    <div className="container flex min-h-screen max-w-screen-md flex-col items-center justify-center p-4">
      <div>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <p className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-foreground text-4xl">
              1.
            </p>
            <h2 className="text-4xl tracking-wider text-yellow-400">
              Select Press Release
            </h2>
          </div>
          <p className="text-sm tracking-wide text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            quis elit vel urna cursus suscipit et ac risus. Phasellus viverra
            lorem non sem consectetur rhoncus. Sed nec semper nibh.
          </p>
        </div>

        <div className="mt-10 grid gap-2">
          {PRESS_RELEASE_DATA.map((release) => (
            <div key={release.id} className="flex items-center gap-2">
              <div
                onClick={() => handleLanguageSelect(release.link)}
                className="relative flex flex-1 transform cursor-pointer flex-col items-center justify-center space-y-2 rounded-xl border-2 px-8 py-4 transition-all duration-300 hover:bg-primary-foreground"
              >
                {release.title}
              </div>
              <a
                href={release.link}
                target="_blank"
                rel="noopener noreferrer"
                className="transform rounded-lg border-2 p-2 transition-all duration-300 hover:bg-primary-foreground"
              >
                <Link2Icon className="h-6 w-6" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
