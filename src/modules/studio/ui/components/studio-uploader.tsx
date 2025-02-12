import MuxUploader, {
  MuxUploaderDrop,
  MuxUploaderFileSelect,
  MuxUploaderProgress,
  MuxUploaderStatus,
} from "@mux/mux-uploader-react";
import { Upload } from "lucide-react";

const UPLOADER_ID = "video-uploader";

interface StudioUploaderProps {
  endpoint?: string | null;
  onSuccess: () => void;
}

export const StudioUploader = ({
  endpoint,
  onSuccess,
}: StudioUploaderProps) => {
  return (
    <div className="">
      <MuxUploader
        id="video-uploader"
        endpoint={endpoint}
        className="hidden group/uploader"
      />
      <MuxUploaderDrop muxUploader={UPLOADER_ID} className="group/drop">
        <div slot="holding" className="flex flex-col items-center gap-6">
          <div>
            <Upload />
          </div>
        </div>
      </MuxUploaderDrop>
    </div>
  );
};
