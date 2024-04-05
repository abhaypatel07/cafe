import React from "react";
import Image from "next/image";

interface FilePreviewProps {
  url: string;
}

const PreviewUrl: React.FC<FilePreviewProps> = ({ url }) => {
  const isVideo = (url: string): boolean =>
    url.match(
      /(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be))\/(video\/|embed\/|watch\?v=)?([A-Za-z0-9._%-]*)(\&\S+)?/,
    ) !== null;
  const isGoogleDrive = (url: string): boolean =>
    url.match(/drive.google.com/) !== null;
  const isImage = (url: string): boolean =>
    url.match(/\.(jpeg|jpg|gif|png)$/) !== null;

  if (isVideo(url)) {
    return <div>video</div>;
  } else if (isGoogleDrive(url)) {
    const embedUrl = url.replace(/\/view\?usp=sharing$/, "/preview");
    return (
      <iframe
        src={embedUrl}
        style={{
          maxWidth: "100%",
          width: "500px",
          height: "300px",
          border: "none",
          overflow: "hidden",
        }}
        scrolling="no"
        allow="autoplay"
      ></iframe>
    );
  } else if (isImage(url)) {
    return (
      <Image
        src={url}
        alt="Preview"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    );
  } else {
    return (
      <iframe
        src={url}
        style={{
          maxWidth: "100%",
          width: "500px",
          height: "300px",
          border: "none",
          overflow: "hidden",
        }}
        scrolling="no"
        allow="autoplay"
      ></iframe>
    );
  }
};

export default PreviewUrl;
