import React from "react";
import Image from "next/image";

const ItemList = ({ title, image, id, selectItems, setSelectedItems }) => {
  const isActive = id === selectItems ? true : false;
  return (
    <div
      onClick={() => setSelectedItems(id)}
      className={`flex items-center gap-1 relative min-w-fit px-2 py-2 cursor-pointer md:rounded-md ${
        isActive
          ? "md:bg-primaryBg  md:border-none  border-b-[1px] border-primaryTextColor "
          : ""
      }`}
    >
      <ImageCirlce image={image} alt={title} />

      <h3
        className={` text-xs font-semibold ${
          isActive ? "text-primaryTextColor" : "text-slate-700"
        } `}
      >
        {title}
      </h3>
    </div>
  );
};

export default ItemList;

const ImageCirlce = ({ image, alt }) => {
  return (
    <div className="relative w-9 h-9 bg-white shadow-sm rounded-full  md:flex-center hidden ">
      <Image width={60} src={image} className="object-cover" alt={alt} />
    </div>
  );
};
