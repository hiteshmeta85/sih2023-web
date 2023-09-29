import { Button } from "@/components/ui/button";
import AvatarCard from "@/components/avatar-card";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import { MagicWandIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { AvatarIP } from "@/types";

interface PageIP {
  avatars: AvatarIP[];
  message: string;
}

export default function Avatars({ avatars, message }: PageIP) {
  const router = useRouter();

  return (
    <>
      <Navbar>
        <div className="flex items-center gap-4">
          <Button variant="outline" onClick={() => router.push("/")}>
            Home
          </Button>
          <Button variant="outline" onClick={() => router.push("/videos")}>
            Videos
          </Button>
          <Button
            variant="outline"
            onClick={() => router.push("/video-generation/generate-avatar")}
          >
            <>
              Generate
              <MagicWandIcon className="ml-2" />
            </>
          </Button>
        </div>
      </Navbar>
      <div className="container px-4 py-10">
        <div className="space-y-4">
          <h2 className="text-2xl tracking-wider text-yellow-400 md:text-4xl">
            AI-Generated Avatars Showcase
          </h2>
          <p className="text-sm tracking-wide text-muted-foreground">
            Welcome to our AI-Generated Avatars Showcase, where the creative
            potential of artificial intelligence takes center stage. Explore a
            gallery of unique digital personas, each meticulously crafted by our
            AI algorithms. These avatars exemplify the fusion of technology and
            artistic expression, offering a glimpse into the future of digital
            identity.
          </p>
        </div>
        <div className="mt-10">
          {avatars && avatars.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
              {avatars.map((avatar) => {
                return <AvatarCard key={avatar.id} {...avatar} />;
              })}
            </div>
          ) : (
            <p className="text-muted-foreground">{message}</p>
          )}
        </div>
      </div>
    </>
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
          message: "No avatars found",
        },
      };
    }
    return {
      props: {
        avatars: data,
        message: "",
      },
    };
  } catch (err) {
    return {
      props: {
        avatars: [],
        message: "Internal Server Error",
      },
    };
  }
}
