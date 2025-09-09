"use client";
import { CardSwipe } from "@/components/ui/card-swipe";
import ImageCursorTrail from "@/components/ui/image-cursortrail";
import { Skiper39,CrowdCanvas } from "@/components/ui/skiper-ui/skiper39";
import { SpringMouseFollow } from "@/components/ui/skiper-ui/skiper61";
import FlipLink from "@/components/ui/text-effect-flipper";
import ThemeToggleButton from "@/components/ui/theme-toggle-button";

export default function Home() {
  const images = [
    "https://images.pexels.com/photos/30082445/pexels-photo-30082445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.unsplash.com/photo-1692606743169-e1ae2f0a960f?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format",
    "https://images.unsplash.com/photo-1548192746-dd526f154ed9?q=80&w=1200&auto=format",
    "https://images.unsplash.com/photo-1644141655284-2961181d5a02?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.pexels.com/photos/30082445/pexels-photo-30082445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://assets.lummi.ai/assets/QmNfwUDpehZyLWzE8to7QzgbJ164S6fQy8JyUWemHtmShj?auto=format&w=1500",
    "https://images.unsplash.com/photo-1706049379414-437ec3a54e93?q=80&w=1200&auto=format",
    "https://assets.lummi.ai/assets/Qmb2P6tF2qUaFXnXpnnp2sk9HdVHNYXUv6MtoiSq7jjVhQ?auto=format&w=1500",
    "https://images.unsplash.com/photo-1508873881324-c92a3fc536ba?q=80&w=1200&auto=format",
  ];

  const Cardimages = [
    { src: "/card1.jpeg", alt: "Image 1" },
    { src: "/card2.avif", alt: "Image 2" },
    { src: "/card3.avif", alt: "Image 3" },
    { src: "/card4.avif", alt: "Image 4" },
  ];



  return (
    <>
  <ThemeToggleButton variant=''/>

      <div className="h-screen w-full ">
        <ImageCursorTrail
          items={images}
          maxNumberOfImages={5}
          distance={25}
          imgClass="sm:w-40 w-28 sm:h-48 h-36  "
          className=" max-w-full h-screen rounded-3xl "
        >
          <article className="relative z-50 flex flex-col items-center justify-center ">
            <h1 className="max-w-2xl text-center text-5xl text-white font-semibold tracking-tight ">
              Images
            </h1>
          </article>
        </ImageCursorTrail>
      </div>
      <div className="w-full h-screen flex flex-col justify-center text-center ">
        <FlipLink href="#" className="text-white">
          Behance
        </FlipLink>
        <FlipLink href="#" className="">
          Kishan
        </FlipLink>
      </div>
      <div className="h-fit w-full  text-white">
        <CardSwipe images={Cardimages} />
      </div>

      <div className="relative h-screen w-full">
       <Skiper39 />
      </div>
      <div className="relative h-screen w-full">
       <SpringMouseFollow />
      </div>
    </>
  );
}
