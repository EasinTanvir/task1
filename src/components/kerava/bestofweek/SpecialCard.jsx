import Image from "next/image";
import React from "react";

import truncateText from "@/utils/truncate";

const SpecialCard = ({ title, image }) => {
  return (
    <div className=" max-w-60 max-h-72  bg-white shadow-md rounded-xl hover:scale-105 transition-all cursor-pointer duration-300 ">
      <div className="relative ">
        <Image className=" w-full   rounded-t-xl" src={image} alt={title} />
      </div>
      <h1 className="text-baseTextColor sm:text-md text-sm text-center py-3 px-2 ">
        {truncateText(title, 20)}
      </h1>
    </div>
  );
};

export default SpecialCard;
