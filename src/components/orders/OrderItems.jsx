"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import OrderCard from "./OrderCard";
import SwipperButton from "../SwipperButton";

const OrderItems = ({ ordersData }) => {
  return (
    <Swiper
      style={{ display: "flex", flexDirection: "column-reverse" }}
      spaceBetween={20}
      speed={1000}
    >
      <div className="flex justify-between items-center mb-4">
        <h1 className="lg:text-3xl text-xl font-bold text-slate-600">
          Most ordered
        </h1>
        <div className="flex items-center gap-4">
          <span className="text-blue"> See All</span>
          <SwipperButton />
        </div>
      </div>

      {ordersData.map((item, i) => (
        <SwiperSlide key={i} className="min-w-72 max-w-72">
          <OrderCard {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default OrderItems;
