import Image from "next/image";
import React from "react";

const CategoryCard = ({ title, image, price }) => {
  return (
    <div className="bg-white border relative rounded-md min-w-60 max-w-60 min-h-52 max-h-52  hover:scale-105 transition-all cursor-pointer ">
      <div className="min-h-40 bg-bodyColor relative  p-4">
        <Image className="inset-0 m-auto" src={image} width={240} />
      </div>
      <h1 className="text-center mt-2.5 font-medium">{title}</h1>
    </div>
  );
};

export default CategoryCard;
