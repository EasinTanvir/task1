"use client";

import Image from "next/image";
import React, { useState } from "react";

const CategoryItems = ({ title, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className=" cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`bg-categoryBg w-36 h-28 rounded-lg relative flex-center transition-transform duration-300 ${
          isHovered ? "translate-y-[-6px]" : "animate-bounceBack"
        }`}
      >
        <Image
          alt={title}
          src={image}
          width={60}
          height={60}
          className="object-cover"
        />
      </div>
      <h1 className="text-baseTextColor text-center text-sm font-medium mt-3">
        {title}
      </h1>
    </div>
  );
};

export default CategoryItems;
