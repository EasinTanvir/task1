import React from "react";
import Image from "next/image";

const RegularCard = ({ image }) => {
  return (
    <div className=" max-w-60 max-h-72  lg:flex-center hidden bg-weekCardColor shadow-md rounded-xl relative ">
      <Image className="object-contain" fill src={image} alt="image" />
    </div>
  );
};

export default RegularCard;
