import Image from "next/image";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const OrderCard = ({ title, image, price }) => {
  return (
    <div className="bg-white border rounded-md min-w-72 max-w-72 min-h-72 max-h-72   relative px-3 pb-16 hover:scale-105 transition-all cursor-pointer ">
      <button className="bg-skyBlue absolute right-0 top-0 w-10 h-10 flex-center rounded-bl-2xl">
        <AiOutlinePlus className="text-blue" size={24} />
      </button>

      <Image src={image} objectFit="cover" />

      <div className="mt-6">
        <span className="text-blue text-sm font-semibold">${price}</span>
        <h3 className=" text-slate-700 font-semibold">{title}</h3>
      </div>
    </div>
  );
};

export default OrderCard;
