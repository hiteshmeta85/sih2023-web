import Image from "next/legacy/image";
import { Button } from "@/components/ui/button";
import { AVATAR_OPTIONS } from "@/constants";

export default function Avatars() {
  return (
    <div className="container px-4 py-10">
      <div className="space-y-4">
        <h2 className="text-4xl tracking-wider text-yellow-400">
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
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {AVATAR_OPTIONS.map((avatar) => {
            return (
              <div key={avatar.id} className="space-y-4 rounded-2xl border p-4">
                <Image
                  src={avatar.image}
                  alt={avatar.nickname}
                  width={400}
                  height={400}
                  className="rounded-xl object-cover"
                />
                <div className="space-y-4">
                  <div>
                    <p className="text-2xl font-bold">{avatar.nickname}</p>
                    <p className="text-sm text-muted-foreground">
                      {avatar.description}
                    </p>
                  </div>
                  <Button type="button" variant="outline">
                    <>View Intro Video</>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
