"use client";
import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";

const Stair = ({ children }) => {
  const pathname = usePathname();
  const stairRef = useRef(null);
  const [showChildren, setShowChildren] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setShowChildren(true); 
      },
    });

    
    tl.set(stairRef.current, {
      display: "block",
    });

    tl.from(".stair", {
      yPercent: -100,
      stagger: {
        amount: 0.25,
      },
      duration: 0.5,
    });

    
    tl.to(".stair", {
      yPercent: 100,
      stagger: {
        amount: 0.25,
      },
      duration: 0.5,
    });

    
    tl.set(stairRef.current, {
      display: "none",
    });
  }, [pathname]);

  return (
    <>
      <div
        ref={stairRef}
        className="fixed top-0 left-0 w-full h-screen z-50 pointer-events-none"
      >
        <div className="h-full w-full flex items-center justify-center">
          <div className="stair h-screen w-1/5 bg-black"></div>
          <div className="stair h-screen w-1/5 bg-black"></div>
          <div className="stair h-screen w-1/5 bg-black"></div>
          <div className="stair h-screen w-1/5 bg-black"></div>
          <div className="stair h-screen w-1/5 bg-black"></div>
        </div>
      </div>

      {showChildren && (
        <div>
          {children}
        </div>
      )}
    </>
  );
};

export default Stair;
