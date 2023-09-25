import Image from "next/image";
import * as React from "react";

export default function AvatarsShowcase({ images }: { images: string[] }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((image) => {
        return (
          <div key={image} className="first:col-span-2">
            <Image
              src={image}
              alt="Avatar Image"
              width={400}
              height={400}
              layout={"fixed"}
              className="w-full rounded-xl object-cover"
            />
          </div>
        );
      })}
    </div>
  );
}
