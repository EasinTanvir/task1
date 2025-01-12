"use client";
import React, { useState } from "react";
import { LuCloudLightning } from "react-icons/lu";

const Buttons = () => {
  const [mostOrder, setMostOrder] = useState(false);
  return (
    <div>
      <React.Fragment>
        <div className="bg-skyBlue flex items-center gap-2 cursor-pointer text-textColor rounded-md px-2 py-2 w-full mt-4">
          <div className="bg-blue w-8 h-8 rounded-full flex-center">
            <LuCloudLightning size={16} className="text-white" />
          </div>
          <span className="text-sm"> Discover</span>
        </div>
      </React.Fragment>
      <React.Fragment>
        <button
          onClick={() => setMostOrder(!mostOrder)}
          className={` ${
            mostOrder
              ? "bg-skyBlue text-textColor font-medium "
              : "bg-white text-gray-500 hover:bg-gray-100"
          } flex-center gap-2 cursor-pointer  text-xs rounded-md px-2 py-1.5 w-full mt-2`}
        >
          <span className=""> Most Ordered</span>
        </button>
      </React.Fragment>
    </div>
  );
};

export default Buttons;
