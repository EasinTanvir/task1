import React from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

import OrderItems from "./OrderItems";
import { ordersData } from "@/utils/data";

const MostOrders = () => {
  return (
    <div className="mt-7 space-y-6  ">
      {/* <React.Fragment>
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-slate-600">Most ordered</h1>
          <div className="flex items-center gap-4">
            <span className="text-blue"> See All</span>
            <div className="flex items-center gap-2">
              <button className="h-10 w-10 rounded-full bg-skyBlue flex-center">
                <FaArrowLeftLong size={20} className="text-blue" />
              </button>

              <button className="h-10 w-10 rounded-full bg-skyBlue flex-center">
                <FaArrowRightLong size={20} className="text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </React.Fragment> */}

      <OrderItems ordersData={ordersData} />
    </div>
  );
};

export default MostOrders;
