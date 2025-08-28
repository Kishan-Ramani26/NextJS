import React from "react";

const VideoColorSpace = () => {
  return (
    <>
      <div className="h-full w-full">
        <video
          autoPlay
          loop
          muted
          src="/video1.mp4"
          className="w-full h-full object-cover object-centerce z-1"
        />
      </div>
    </>
  );
};

export default VideoColorSpace;
