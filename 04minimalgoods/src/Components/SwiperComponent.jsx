'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import React from "react";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const SwiperComponent = () => {
  return <>
   <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    //   loop={true}
      className="h-screen w-full"
    >
      <SwiperSlide className="h-screen w-full flex items-center justify-center">
        <div className="h-full w-full flex items-center justify-center">
            <h1 className="">We design places</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide className="h-screen w-full flex items-center justify-center">Slide 2</SwiperSlide>
      <SwiperSlide className="h-screen w-full flex items-center justify-center">Slide 3</SwiperSlide>
      <SwiperSlide className="h-screen w-full flex items-center justify-center">Slide 4</SwiperSlide>
    </Swiper>
  </>;
};

export default SwiperComponent;
