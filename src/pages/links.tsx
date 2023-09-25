import { Button } from "@/components/ui/button";
import React from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <div className="float-left m-8 flex flex-col justify-between gap-4">
        <Button
          variant="outline"
          type="button"
          onClick={() => router.push("/")}
        >
          Home
        </Button>
        <Button
          variant="outline"
          type="button"
          onClick={() => router.push("/avatars")}
        >
          Avatar Showcase
        </Button>
        <Button
          variant="outline"
          type="button"
          onClick={() => router.push("/video-generation")}
        >
          Video Generation
        </Button>
        <Button
          variant="outline"
          type="button"
          onClick={() => router.push("/video-generation/edit-scripts")}
        >
          Edit Scripts
        </Button>
        <Button
          variant="outline"
          type="button"
          onClick={() => router.push("/video-generation/generate-avatar")}
        >
          Generate Avatar
        </Button>
        <Button
          variant="outline"
          type="button"
          onClick={() => router.push("/video-generation/generate-message")}
        >
          Generate Message
        </Button>
        <Button
          variant="outline"
          type="button"
          onClick={() => router.push("/video-generation/select-avatar")}
        >
          Select Avatar
        </Button>
        <Button
          variant="outline"
          type="button"
          onClick={() => router.push("/video-generation/select-duration")}
        >
          Select Duration
        </Button>
        <Button
          variant="outline"
          type="button"
          onClick={() => router.push("/video-generation/select-language")}
        >
          Select Language
        </Button>
        <Button
          variant="outline"
          type="button"
          onClick={() => router.push("/video-generation/update-avatar")}
        >
          Update Avatar
        </Button>
        <Button
          variant="outline"
          type="button"
          onClick={() => router.push("/videos")}
        >
          Videos
        </Button>
      </div>
    </main>
  );
}
