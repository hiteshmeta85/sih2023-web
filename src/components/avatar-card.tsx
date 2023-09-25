import Image from "next/legacy/image";
import { Button } from "@/components/ui/button";
import { AvatarIP } from "@/types";

export default function AvatarCard({ nickname, description, image }: AvatarIP) {
  return (
    <div className="space-y-4 rounded-2xl border p-4">
      <Image
        src={image}
        alt={nickname}
        width={400}
        height={400}
        className="rounded-xl object-cover"
      />
      <div className="space-y-4">
        <div>
          <p className="text-2xl font-bold">{nickname}</p>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <Button type="button" variant="outline">
          <>View Intro Video</>
        </Button>
      </div>
    </div>
  );
}
