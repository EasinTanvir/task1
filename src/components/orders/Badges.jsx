import React from "react";
import Image from "next/image";

import { percentage } from "@/utils/contant";

export const Badge = () => {
  return (
    <div className="relative bg-skyBlue p-7 flex items-center gap-5 md:w-96  w-full rounded-lg shadow-md">
      <div className="absolute -left-2 top-1/2 -translate-y-1/2 bg-[#fbfbfb] w-5 h-5 rounded-full"></div>
      <div className="absolute -right-2 top-1/2 -translate-y-1/2 bg-[#fbfbfb] w-5 h-5 rounded-full"></div>
      <Image
        src={percentage}
        width={50}
        height={50}
        className="object-cover"
        alt="badge"
      />
      <span className="text-black text-sm font-medium">
        New users enjoy €0 delivery fees for 14 days after signing up
      </span>
    </div>
  );
};

export const BadgeTwo = () => {
  return (
    <div className="relative bg-skyBlue p-4 flex flex-col  items-start gap-3 w-full rounded-lg shadow-md">
      <h3>
        This product offering is in Finnish. Would you like to view a machine
        translation in another language?
      </h3>
      <button className="text-blue font-semibold">Translate</button>
    </div>
  );
};
