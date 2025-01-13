import React from "react";
import { CiSearch } from "react-icons/ci";

const SearcBox = () => {
  return (
    <div className=" sticky  left-0 top-0  bg-bodyColor z-30">
      <div
        className={`relative border w-full rounded-2xl  py-1 bg-gray-200 hover:bg-gray-300 backdrop-blur-[8px] transition-all duration-300 ease-in-out`}
      >
        <input
          className="bg-transparent cursor-text text-xs ps-8 text-black outline-none border-none w-full"
          placeholder="Search in K-Market"
        />
        <CiSearch
          size={17}
          className={`absolute text-black left-2 top-0 bottom-0 m-auto `}
        />
      </div>
    </div>
  );
};

export default SearcBox;
