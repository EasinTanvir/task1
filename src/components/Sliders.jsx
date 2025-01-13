"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import SwipperButton from "./SwipperButton";
import CategoryCard from "./categories/CategoryCard";
import OrderCard from "./orders/OrderCard";

const Sliders = ({ lists, title, isOrder = false }) => {
  return (
    <Swiper
      style={{ display: "flex", flexDirection: "column-reverse" }}
      spaceBetween={16}
      speed={500}
      breakpoints={{
        300: {
          width: 200,
          slidesPerView: "auto",
        },
        640: {
          width: 250,
          slidesPerView: "auto",
        },
        768: {
          width: 650,
          slidesPerView: "auto",
        },
        992: {
          width: 900,
          slidesPerView: "auto",
        },
        1190: {
          width: 1130,
          slidesPerView: "auto",
        },
      }}
    >
      <div className="flex justify-between items-center mb-4">
        <h1 className="lg:text-3xl text-xl font-bold text-baseTextColor">
          {title}
        </h1>
        <div className="flex items-center gap-4">
          {isOrder && <span className="text-primaryTextColor"> See All</span>}
          <SwipperButton />
        </div>
      </div>

      {lists.map((item, i) => (
        <SwiperSlide
          key={i}
          className={`${isOrder ? "min-w-72 max-w-72" : "min-w-60 max-w-60"}`}
        >
          {isOrder ? <OrderCard {...item} /> : <CategoryCard {...item} />}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Sliders;
