"use client";
import { toast } from "sonner";
import { Suspense } from "react";
import { trpc } from "@/trpc/client";
import { Trash2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ErrorBoundary } from "react-error-boundary";

interface PlaylistHeaderSectionProps {
  playlistId: string;
}

export const PlaylistHeaderSection = ({
  playlistId,
}: PlaylistHeaderSectionProps) => {
  return (
    <Suspense>
      <ErrorBoundary fallback={<PlaylistHeaderSectionSkeleton />}>
        <PlaylistHeaderSectionSuspense playlistId={playlistId} />
      </ErrorBoundary>
    </Suspense>
  );
};

const PlaylistHeaderSectionSkeleton = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <Skeleton className="h-6 w-24 " />
      <Skeleton className="h-6 w-32 " />
    </div>
  );
};

const PlaylistHeaderSectionSuspense = ({
  playlistId,
}: PlaylistHeaderSectionProps) => {
  const router = useRouter();
  const utils = trpc.useUtils();
  const [playlist] = trpc.playlist.getOne.useSuspenseQuery({ id: playlistId });

  const remove = trpc.playlist.remove.useMutation({
    onSuccess: () => {
      toast.success("Playlist deleted");
      utils.playlist.getMany.invalidate();
      router.push("/playlists");
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold">{playlist.name}</h1>
        <p className="text-xs text-muted-foreground">
          Videos form the playlist
        </p>
      </div>
      <Button
        variant={"outline"}
        size={"icon"}
        className="rounded-full"
        onClick={() => remove.mutate({ id: playlistId })}
        disabled={remove.isPending}
      >
        <Trash2Icon />
      </Button>
    </div>
  );
};
