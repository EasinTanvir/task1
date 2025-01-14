import React from "react";
import Image from "next/image";
import { deliveryBoy } from "@/utils/constant";

const DeliverBadge = () => {
  return (
    <div className="bg-badgeColor  text-white rounded-2xl lg:h-24 sm:min-h-40  h-72  flex justify-between items-center lg:px-12 px-6 lg:mt-32 mt-12 relative">
      <div className="lg:flex  items-center">
        <h3 className="italic lg:static absolute right-20 top-5  text-4xl font-bold">
          Wolk+
        </h3>
        <Image
          className="object-cover sm:w-96 w-80   lg:static absolute -left-24 top-0 bottom-0 m-auto "
          src={deliveryBoy}
          alt="deliveryBoy"
        />
      </div>

      <div className="flex lg:flex-row flex-col lg:items-center  md:w-fit w-1/2  gap-3    ">
        <h3 className="md:text-2xl text-md font-semibold">
          Skip the delivery fees with Wolt+
        </h3>
        <button className=" bg-white px-4 py-2.5 rounded-lg  text-primaryTextColor min-w-fit max-w-fit">
          Join now
        </button>
      </div>
    </div>
  );
};

export default DeliverBadge;
