import { banner1, delivery1 } from "@/utils/constant";
import Image from "next/image";
import React from "react";
import { CiFaceSmile } from "react-icons/ci";

const DinnerCard = ({
  title,
  subtitle,
  price,
  priceCategory,
  rating,
  deliveryTime,
  badgeText,
  image,
}) => {
  return (
    <div className=" lg:w-[420px] max-h-80  w-80  shadow-lg relative rounded-lg cursor-pointer hover:scale-105 transition-all duration-200">
      <div className="bg-primaryTextColor text-white px-3 py-1 rounded-md absolute left-5 top-5 w-fit z-40 text-sm">
        {badgeText}
      </div>

      <div>
        <Image
          alt="title"
          src={image}
          className=" w-full aspect-[2.15]  rounded-t-lg"
        />
      </div>
      <div className="p-3 flex justify-between items-center">
        <div className="">
          <h1 className="text-baseTextColor text-lg">{title}</h1>
          <h4 className="text-slate-500 text-md">{subtitle}</h4>
        </div>
        <div className="bg-primaryBg flex-center flex-col text-sm text-primaryTextColor px-4  py-2 rounded-lg">
          <span>{deliveryTime}</span>
          <span>min</span>
        </div>
      </div>

      <div className="border-t-[1px] px-2 text-xs flex  items-center py-2 gap-3">
        <span className="bg-primaryTextColor  rounded-md  p-0.5 text-white">
          w+
        </span>
        <span className="text-primaryTextColor">€ {price}</span>
        <span className="text-slate-500">{priceCategory}</span>
        <span>
          <CiFaceSmile className="text-baseTextColor" />
        </span>
        <span className="text-baseTextColor">{rating}</span>
      </div>
    </div>
  );
};

export default DinnerCard;
