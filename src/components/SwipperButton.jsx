import React, { useState } from "react";
import { useSwiper } from "swiper/react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const SwipperButton = () => {
  const swiper = useSwiper();
  const [data, setData] = useState(false);

  const onNextHandler = () => {
    swiper.slideNext();
    setData(!data);
  };

  const onPrevHandler = () => {
    swiper.slidePrev();
    setData(!data);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        disabled={swiper.isBeginning}
        onClick={onPrevHandler}
        className={`h-10 w-10 rounded-full bg-primaryBg flex-center ${
          swiper.isBeginning ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <FaArrowLeftLong
          size={20}
          className={
            swiper.isBeginning ? "text-gray-400" : "text-primaryTextColor"
          }
        />
      </button>
      <button
        disabled={swiper.isEnd}
        onClick={onNextHandler}
        className={`h-10 w-10 rounded-full bg-primaryBg flex-center ${
          swiper.isEnd ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <FaArrowRightLong
          size={20}
          className={swiper.isEnd ? "text-gray-400" : "text-primaryTextColor"}
        />
      </button>
    </div>
  );
};

export default SwipperButton;
