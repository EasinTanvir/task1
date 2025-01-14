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
      slidesPerView={2} // Default value
      spaceBetween={20}
      className="relative mt-14"
      loop
      breakpoints={{
        1024: {
          slidesPerView: 2, // For screens >= 1024px
        },
        0: {
          slidesPerView: 1, // For screens < 1024px
        },
      }}
    >
      {carouselItems.map((item, i) => (
        <SwiperSlide key={i}>
          <CarouselCard {...item} />
        </SwiperSlide>
      ))}
      <CarouselButton />
    </Swiper>
  );
};

export default Carousel;
