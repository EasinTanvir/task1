import React from "react";
import Image from "next/image";
import { GiSelfLove } from "react-icons/gi";
import { CiClock2 } from "react-icons/ci";
import { CiFaceSmile } from "react-icons/ci";
import { BiTask } from "react-icons/bi";
import { FaPersonCirclePlus } from "react-icons/fa6";

import { bannerImage } from "@/utils/contant";

const Banner = () => {
  return (
    <>
      <div className="w-full h-80 relative custom-container ">
        <Image
          fill
          className="inset-0 object-cover"
          src={bannerImage}
          alt="Banner"
          priority
        />

        <div className="absolute inset-0 bg-gradientOverlay z-10"></div>

        <div className="relative flex flex-col justify-end h-80 z-20">
          <div className="flex justify-between items-center mb-5">
            <div>
              <h2 className="md:text-4xl text-2xl text-white font-bold font-serif">
                K-Market Keravan Asema
              </h2>
              <p className="text-white mt-1.5">
                Collect Plussa points from your orders!
              </p>
            </div>
            <button className="bg-white bg-opacity-30 backdrop-blur-md rounded-full w-10 h-10 flex items-center justify-center">
              <GiSelfLove size={20} className="text-white z-20" />
            </button>
          </div>
        </div>
      </div>
      <Notify />
    </>
  );
};

export default Banner;

const Notify = () => {
  return (
    <div className="flex md:flex-row md:justify-between flex-col md:gap-0 gap-4 md:items-end  py-4  border-b-2 custom-container">
      <div className="flex-1">
        <p className="text-xs">
          The store is closed now, but you can still schedule an order for
          later.
        </p>
        <div className="flex items-center gap-4 mt-5">
          <div className="flex items-center gap-2">
            <span>
              <CiClock2 className="text-rose-600" size={15} />
            </span>
            <span className="text-[13px]">Opens tomorrow at 11:00</span>
          </div>
          <div className="flex items-center gap-2">
            <span>
              <CiFaceSmile size={15} />
            </span>
            <span className="text-sm">9.2</span>
          </div>
          <button className="text-[13px] text-textColor font-semibold">
            More
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4 flex-1 md:justify-end ">
        <button className="bg-skyBlue text-textColor px-4 py-1.5 rounded-md text-sm flex-center gap-2 md:w-fit w-full ">
          <span>
            <BiTask />
          </span>
          <span>Today at 11:45</span>
        </button>
        <button className="bg-skyBlue text-textColor px-4 py-1.5 rounded-md text-sm flex-center gap-2 md:w-fit w-full">
          <span>
            <FaPersonCirclePlus />
          </span>
          <span>Order Together</span>
        </button>
      </div>
    </div>
  );
};
