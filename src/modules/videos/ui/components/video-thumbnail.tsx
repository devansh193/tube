import Image from "next/image";

export const VideoThumbnail = () => {
  return (
    <div className="relative">
      {/* Thumbnail wrapper */}
      <div className="relative w-full overflow-hidden rounded-xl aspect-video">
        <Image
          src={"/placeholder.svg"}
          alt="thumbnail"
          fill
          className="size-full object-cover"
        />
      </div>
    </div>
  );
};
