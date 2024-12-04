import React from "react";

export default function VideoComponent({ fileName }: { fileName: string }) {
  return (
    <video loop autoPlay playsInline className="object-cover rounded-lg">
      <source src={fileName} type="video/mp4" />
      Sorry, your browser does not support this video tag
    </video>
  );
}
