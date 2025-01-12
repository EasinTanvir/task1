import Image from "next/image";
import React from "react";

const ItemList = ({ title, image }) => {
  return (
    <div className="flex items-center gap-1 relative min-w-fit">
      <ImageCirlce image={image} />

      <h3 className="text-slate-700 text-xs font-semibold">{title}</h3>
    </div>
  );
};

export default ItemList;

const ImageCirlce = ({ image }) => {
  return (
    <div className="relative w-12 h-12 bg-white shadow-sm rounded-full  md:flex-center hidden ">
      <Image width={70} height={70} objectFit="cover" src={image} />
    </div>
  );
};
