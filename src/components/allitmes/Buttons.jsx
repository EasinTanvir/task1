"use client";
import React, { useState } from "react";
import { LuCloudLightning } from "react-icons/lu";

const Buttons = () => {
  const [mostOrder, setMostOrder] = useState(false);
  const [discover, setDiscover] = useState(false);

  return (
    <div className={`relative ${discover ? "mb-10" : ""}`}>
      {/* Discover Button */}
      <div
        onClick={() => setDiscover(!discover)}
        className="bg-skyBlue flex items-center gap-2 cursor-pointer text-textColor rounded-md px-2 py-2 w-full mt-4"
      >
        <div className="bg-blue w-8 h-8 rounded-full flex-center">
          <LuCloudLightning size={16} className="text-white" />
        </div>
        <button className="text-sm">Discover</button>
      </div>

      {/* Transition Container */}
      <div
        className={`absolute left-0 w-full transition-all duration-300 ${
          discover
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        style={{ top: "calc(100% + 8px)" }} // Adds spacing between buttons
      >
        {/* Most Ordered Button */}
        <button
          onClick={() => setMostOrder(!mostOrder)}
          className={`${
            mostOrder
              ? "bg-skyBlue text-textColor font-medium"
              : "bg-white text-gray-500 hover:bg-gray-100"
          } flex-center gap-2 cursor-pointer text-xs rounded-md px-2 py-1.5 w-full`}
        >
          <span>Most Ordered</span>
        </button>
      </div>
    </div>
  );
};

export default Buttons;
