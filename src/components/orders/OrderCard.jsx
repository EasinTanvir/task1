import React from "react";
import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";

const OrderCard = ({ title, image, price }) => {
  return (
    <div className="bg-cardHeaderBg border rounded-lg min-w-60 max-w-72 min-h-72 max-h-72  relative px-3 pb-16 hover:scale-105 transition-all cursor-pointer ">
      <button className="bg-primaryBg absolute right-0 top-0 w-10 h-10 flex-center rounded-bl-2xl">
        <AiOutlinePlus className="text-primaryTextColor" size={24} />
      </button>

      <Image src={image} className="object-cover" alt={title} />

      <div className="mt-6">
        <span className="text-primaryTextColor text-sm font-semibold">
          ${price}
        </span>
        <h3 className=" text-slate-700 font-semibold">{title}</h3>
      </div>
    </div>
  );
};

export default OrderCard;
