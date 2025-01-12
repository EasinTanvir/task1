import Image from "next/image";
import React from "react";

const ItemList = ({ title, image, id, selectItems, setSelectedItems }) => {
  const isActive = id === selectItems ? true : false;
  return (
    <div
      onClick={() => setSelectedItems(id)}
      className={`flex items-center gap-1 relative min-w-fit px-2 py-2 cursor-pointer md:rounded-md ${
        isActive
          ? "md:bg-skyBlue  md:border-none  border-b-[1px] border-blue "
          : ""
      }`}
    >
      <ImageCirlce image={image} />

      <h3
        className={` text-xs font-semibold ${
          isActive ? "text-blue" : "text-slate-700"
        } `}
      >
        {title}
      </h3>
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
