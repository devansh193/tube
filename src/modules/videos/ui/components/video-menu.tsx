"use client";
import { ListPlus, MoreVerticalIcon, ShareIcon, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import { APP_URL } from "@/constants";
import { useState } from "react";
import { PlaylistAddModal } from "@/modules/playlist/ui/components/playlist-add-modal";

interface VideoMenuProps {
  videoId: string;
  variant?: "ghost" | "secondary";
  onRemove?: () => void;
}

export const VideoMenu = ({
  videoId,
  variant = "ghost",
  onRemove,
}: VideoMenuProps) => {
  const [openPlaylistAddModal, setOpenPlaylistAddModal] = useState(false);

  const onShare = () => {
    const fullUrl = `${APP_URL}/videos/${videoId}`;
    navigator.clipboard.writeText(fullUrl);
    toast.success("Link copied to the clipboard");
  };

  return (
    <>
      <PlaylistAddModal
        open={openPlaylistAddModal}
        onOpenChange={setOpenPlaylistAddModal}
        videoId={videoId}
      />
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant={variant} size={"icon"} className="rounded-full">
            <MoreVerticalIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" onClick={(e) => e.stopPropagation()}>
          <DropdownMenuItem onClick={onShare}>
            <ShareIcon className="mr-2 size-4" />
            Share
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpenPlaylistAddModal(true)}>
            <ListPlus className="mr-2 size-4" />
            Add to playlist
          </DropdownMenuItem>
          {onRemove && (
            <DropdownMenuItem onClick={() => {}}>
              <Trash2 className="mr-2 size-4" />
              Remove
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
