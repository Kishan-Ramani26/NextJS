"use client";
import React from "react";
import { gsap } from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { useGSAP  } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import Header from "../../Components/Header";
import Navbar from "../../Components/Navbar";


gsap.registerPlugin(SplitText,ScrollTrigger);
const page = () => {
  useGSAP(() => {
    // const tl = gsap.timeline();

    let split = SplitText.create(".pg1text", { type: "words" });

    gsap.from(split.words, {
      y: 100,
      transform: "translateY(100px)",
      color: "green",
      duration: 1,
      autoAlpha: 0,
      stagger: {
        amount: 0.5,
        from: "random",
      },
    });

    let page1 = SplitText.create(".pg1tx", { type: "words" });

    gsap.from(page1.words, {
      x: 100,
      duration: 1,
      autoAlpha: 0,
      stagger: {
        amount: 0.5,
        from: "end",
      },
    });

    gsap.from(".page3 .video", {
      transform: "translateY(-120vh)",
      height:"100vh",
      width:"95%",
      duration: 1,
      marginLeft:0,
      scrollTrigger:{
        trigger:".page2",
        start:"top top",
        end:"bottom top",
        scrub: 3,
        // markers: true,
      }
    })


    let page3 = SplitText.create(".pg3text", { type: "chars" });

    gsap.from(page3.chars, {
      x: 50,
      duration: 1,
      autoAlpha: 0,
      stagger: {
        amount: 0.5,
        from: "start",
        ease: "power2.in",
      },
      scrollTrigger: {
        trigger: ".page3",
        start: "top 50%",
        toggleAttribute: "restart pause reverse pause",
      }
    });
  });

  return (
    <>
      {/* <Navbar /> */}
      <Header />
      <main className="w-full relative overflow-hidden text-black">
        <div className="page1 h-screen w-full flex items-start flex-col justify-end relative px-6 py-7">
          <div className="w-full h-full flex items-end justify-between mb-[8vw]">
            <div>
              <h1 className="pg1text text-black text-8xl  overflow-hidden">
                <span>A collection</span>
              </h1>
              <h1 className="pg1text text-black text-8xl overflow-hidden">
                <span>of JS effects</span>
              </h1>
              <h1 className="pg1text text-black text-8xl  overflow-hidden">
                <span>Made with Gsap</span>
              </h1>
            </div>

            <div>
              <h1>
                <span className="pg1tx text-black text-xl  overflow-hidden">
                  Enhance your GSAP skills with a range
                </span>
              </h1>
              <h1>
                <span className="pg1tx text-black text-xl  overflow-hidden">
                  of 50 unique and well-crafted effects.
                </span>
              </h1>
              <button className="px-4 py-2 rounded-md border border-black bg-white text-black mt-4 hover:bg-gray-200 transition-colors duration-300">
                <span className="text-black text-xl overflow-hidden">
                  explore Collection
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="page2 h-screen w-full flex items-center justify-center relative px-6 py-7">
          
        </div>

        <div className="page3 h-screen w-full flex items-start justify-center flex-col relative px-6 py-7">
          <div className="video absolute w-[30vw] h-[5vw] ml-[5vw] flex items-center justify-center top-10">
            <video
              src="hero_optim.mp4"
              className="object-center object-cover absolute"
              autoPlay
              loop
              muted
            ></video>
          </div>
         <div className=" mt-[10vw]">
           <h1 className="absolute top-0 left-[40%] overflow-hidden">
            <span>Improve your animation skills</span>
          </h1>
          <h1 className="absolute top-[20%] left-[40%] overflow-hidden text-6xl">
            <span className="pg3text">Motion on websites is a must-</span>
          </h1>
          <h1 className="text-6xl overflow-hidden">
            <span className="pg3text">have these days. Developers are constantly</span>
          </h1>
          <h1 className="text-6xl overflow-hidden">
            <span className="pg3text">crafting new animations that push the</span>
          </h1>
          <h1 className="text-6xl overflow-hidden">
            <span className="pg3text">boundaries of creativity.If you're ready to explore</span>
          </h1>
          <h1 className="text-6xl overflow-hidden">
            <span className="pg3text">the power of GSAP, we’ve got you covered with</span>
          </h1>
          <h1 className="text-6xl overflow-hidden">
            <span className="pg3text">50 unique effects designed to help you master it</span>
          </h1>
          <h1 className="text-6xl overflow-hidden">
            <span className="pg3text">like a pro.</span>
          </h1>
         </div>
        </div>
      </main>
    </>
  );
};

export default page;
