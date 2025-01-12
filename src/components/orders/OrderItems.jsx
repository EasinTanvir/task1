"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import OrderCard from "./OrderCard";
import SwipperButton from "./SwipperButton";

import React from "react";

const OrderItems = ({ ordersData }) => {
  return (
    <Swiper
      style={{ display: "flex", flexDirection: "column-reverse" }}
      spaceBetween={20}
    >
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-slate-600">Most ordered</h1>
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
