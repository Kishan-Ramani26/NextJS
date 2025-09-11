"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from "react";

const page = () => {
  gsap.registerPlugin(ScrollTrigger);

  const imgageRaf = useRef(null);
  const imageDivRaf = useRef(null);

  const imageArray = [
    "/images/Carl_480x640-480x640.jpg",
    "/images/MAXIME_480X640_2-480x640.jpg",
    "/images/CAMILLE_480X640_2-480x640.jpg",    
    "/images/ChantalG_480x640-480x640.jpg",
    "/images/MEGGIE_480X640_2-480x640.jpg",
    "/images/Claire_480x640-480x640.jpg",
    "/images/SebR_640X960-640x960.jpg",
    "/images/MEL_480X640-480x640.jpg",
    "/images/Olivier_480x640-480x640.jpg",
    "/images/HugoJoseph_480x640-480x640.jpg",
  ];

  useGSAP(() => {
    gsap.to(imageDivRaf.current, {
      scrollTrigger: {
        trigger: imageDivRaf.current,    
        start: "17% 17%",
        end: "200% -70%",
        pin: true,
        pinSpacing: true,
        pinReparent: true,    
        scrub: 2, // smooth scrubbing with 1s easing
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length);
          } else {
            imageIndex = imageArray.length - 1;
          }
          imgageRaf.current.src = imageArray[imageIndex];
        },
      },
    });
  });

  return (
    <>
      <div className="page1">
        <a href="/" className="absolute top-3 right-10 cursor-pointer border-1 text-xl px-4 py-1 rounded-4xl hover:bg-[#796556] hover:text-black transition-all duration-300">Home</a>
        <div
          ref={imageDivRaf}
          className="h-[25vw] w-[20vw] bg-red-50 absolute top-30 left-96 rounded-4xl overflow-hidden "
        >
          <img
            ref={imgageRaf}
            className="h-full w-full object-cover object-center "
            src="/images/Carl_480x640-480x640.jpg"
          />
        </div>
        <div className="relative">
          <div className=" mt-[50vh]">
            <h1 className="text-[20vw] mix-blend-screen text-center  uppercase leading-[16vw] font-medium">
              Soixan7e
              <br />
              Douze
            </h1>
          </div>
          <div className="mt-15 pl-[50%] w-full">
            <p className=" text-4xl leading-tight">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Notre curiosité nourrit notre créativité. On reste humbles et on
              dit non aux gros egos, même le vôtre. Une marque est vivante. Elle
              a des valeurs, une personnalité, une histoire. Si on oublie ça, on
              peut faire de bons chiffres à court terme, mais on la tue à long
              terme. C’est pour ça qu’on s’engage à donner de la perspective,
              pour bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
