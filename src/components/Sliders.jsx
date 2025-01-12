"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import SwipperButton from "./SwipperButton";
import React from "react";
import CategoryCard from "./categories/CategoryCard";
import OrderCard from "./orders/OrderCard";

const Sliders = ({ lists, title, isOrder = false }) => {
  return (
    <Swiper
      style={{ display: "flex", flexDirection: "column-reverse" }}
      spaceBetween={20}
      speed={1000}
    >
      <div className="flex justify-between items-center mb-4">
        <h1 className="lg:text-3xl text-xl font-bold text-slate-600">
          {title}
        </h1>
        <div className="flex items-center gap-4">
          {isOrder && <span className="text-blue"> See All</span>}
          <SwipperButton />
        </div>
      </div>

      {lists.map((item, i) => (
        <SwiperSlide key={i} className="min-w-72 max-w-72">
          {isOrder ? <OrderCard {...item} /> : <CategoryCard {...item} />}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Sliders;
