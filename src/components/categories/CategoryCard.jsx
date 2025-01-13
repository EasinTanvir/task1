import React from "react";
import Image from "next/image";

const CategoryCard = ({ title, image }) => {
  return (
    <div className="bg-cardHeaderBg border relative rounded-lg sm:w-60 h-52  w-48  hover:scale-105 transition-all cursor-pointer ">
      <div className="min-h-40 bg-bodyColor relative  p-4">
        <Image className="inset-0 m-auto" alt={title} src={image} width={240} />
      </div>
      <h1 className="text-center mt-2.5 font-medium">{title}</h1>
    </div>
  );
};

export default CategoryCard;
