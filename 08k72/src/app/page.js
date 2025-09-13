"use client";
import gsap from "gsap";
import Video from "@/components/Video";
import { useGSAP } from "@gsap/react";
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
        <div>
          <a
            href="/projects"
            className="fixed bottom-5 left-15 border border-black px-4 py-2 text-[10vw] rounded hover:bg-black hover:text-white transition text-white"
          >
            Projects
          </a>
          <a
            href="/agence"
            className="fixed bottom-5 right-15 border border-black px-14 py-2 text-[10vw] rounded hover:bg-black hover:text-white transition text-white"
          >
            Agency
          </a>
        </div>
      </div>
    </>
  );
};

export default page;
