import { week1, week5 } from "@/utils/contant";
import Image from "next/image";
import React from "react";

const RegularCard = ({ image }) => {
  return (
    <div className=" max-w-60 max-h-72  lg:flex-center hidden bg-weekCardColor shadow-md rounded-xl relative ">
      <Image className="object-contain" fill src={image} alt="image" />
    </div>
  );
};

export default RegularCard;
