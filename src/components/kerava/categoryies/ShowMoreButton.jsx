import React from "react";
import { RiArrowDropDownLine, RiArrowUpSLine } from "react-icons/ri";

const ShowMoreButton = ({ onClick, showMore }) => {
  return (
    <button
      onClick={onClick}
      className="bg-primaryBg w-36 h-28 rounded-lg flex items-center justify-center"
    >
      {showMore ? (
        <RiArrowUpSLine size={30} />
      ) : (
        <RiArrowDropDownLine size={40} />
      )}
    </button>
  );
};

export default ShowMoreButton;
