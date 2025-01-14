"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import CarouselCard from "./CarouselCard";
import CarouselButton from "./CarouselButton";
import { carouselItems } from "@/utils/data";

const Carousel = ({}) => {
  return (
    <Swiper
      grabCursor={true}
      autoplay={{
        delay: 3000,
      }}
      modules={[Autoplay]}
      scrollbar={{ draggable: true }}
      slidesPerView={2}
      spaceBetween={20}
      className="relative mt-14"
      loop
      speed={1000}
      breakpoints={{
        1024: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 1,
        },
      }}
    >
      {carouselItems.map((item, i) => (
        <SwiperSlide key={i}>
          <CarouselCard {...item} />
        </SwiperSlide>
      ))}
      <div className="lg:block hidden">
        <CarouselButton />
      </div>
    </Swiper>
  );
};

export default Carousel;
