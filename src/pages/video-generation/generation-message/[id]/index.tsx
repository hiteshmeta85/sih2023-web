import { ArrowRightIcon, ReloadIcon } from "@radix-ui/react-icons";
import * as React from "react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import AvatarsShowcase from "@/components/avatars-showcase";
import axios from "axios";
import { toast } from "@/components/ui/use-toast";

type StatusIP = "Pending" | "Completed" | null;

export default function GenerationMessage() {
  const router = useRouter();
  const { id } = router.query;

  const [videoStatus, setVideoStatus] = useState<StatusIP>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchVideo = async (videoId: any) => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/videos/${videoId}/`,
      );
      if (res) {
        setVideoStatus(res.data.status);
        if (res.data.status === "Completed") {
          await router.push(`/videos/${id}`);
        }
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await fetchVideo(id);
    setIsRefreshing(false);
  };

  useEffect(() => {
    if (id) {
      fetchVideo(id);
    }
  }, [id]);

  return (
    <div className="container flex min-h-screen max-w-screen-md flex-col items-center justify-center p-4">
      <div>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="inline-flex items-end gap-6 text-4xl tracking-wider text-green-500">
              Video Generation{" "}
              {videoStatus === "Completed" ? "Completed" : "in Progress"}
              <div className="dot-elastic mb-2" />
            </h2>
          </div>
          <p className="text-sm tracking-wide text-muted-foreground">
            Our advanced machine learning algorithms are hard at work, crafting
            your Press Release into an engaging video. Your video will be ready
            shortly. Thank you for your patience.
          </p>
          <div className="flex items-center gap-2">
            {videoStatus != null && (
              <Button type="button">{videoStatus}</Button>
            )}
            <Button
              type="button"
              onClick={() => handleRefresh()}
              disabled={isRefreshing}
              className="bg-primary-foreground text-xs text-primary ring-1 ring-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              <>
                {isRefreshing ? "Refreshing" : "Refresh"}
                {isRefreshing ? (
                  <ReloadIcon className="ml-2 animate-spin" />
                ) : (
                  <ReloadIcon className="ml-2" />
                )}
              </>
            </Button>
            {videoStatus === "Pending" && (
              <>
                {(isRefreshing || isLoading) && (
                  <Button
                    type="button"
                    className="bg-primary-foreground text-xs text-primary ring-1 ring-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                  >
                    Loading Status...
                  </Button>
                )}
              </>
            )}
          </div>
        </div>
        <div className="mt-10 space-y-4">
          <div className="flex justify-end space-y-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/avatars")}
            >
              <>
                Explore Avatars
                <ArrowRightIcon className="ml-2" />
              </>
            </Button>
          </div>
          <AvatarsShowcase
            images={[
              "/images/avatar_1.jpeg",
              "/images/avatar_3.jpeg",
              "/images/avatar_2.jpeg",
              "/images/avatar_4.jpeg",
              "/images/avatar_5.png",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
