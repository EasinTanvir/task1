"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import CarouselCard from "./CarouselCard";
import CarouselButton from "./CarouselButton";
import { carouselItems } from "@/utils/data";

const CarouselSlider = ({}) => {
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
      className="relative"
      loop
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

export default CarouselSlider;
