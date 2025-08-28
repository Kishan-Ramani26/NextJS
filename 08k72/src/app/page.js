import Video from "@/components/Video";
import React from "react";

const page = () => {
  return (
    <>
      <div className="h-screen w-full flex items-center justify-center ">
        <div className="fixed  h-screen w-full ">
          <Video />
        </div>
        <div className="h-screen w-full flex items-center justify-center relative">
          <h1 className="text-[10vw]">K72</h1>
        </div>
      </div>
    </>
  );
};

export default page;
