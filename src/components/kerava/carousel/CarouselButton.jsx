import React from "react";
import { useSwiper } from "swiper/react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const CarouselButton = () => {
  const swiper = useSwiper();

  const onNextHandler = () => {
    swiper.slideNext();
  };

  const onPrevHandler = () => {
    swiper.slidePrev();
  };

  return (
    <>
      <button
        onClick={onPrevHandler}
        className="h-14 w-14 rounded-full bg-primaryBg flex-center absolute left-0 top-0 bottom-0 my-auto  z-40"
      >
        <FaArrowLeftLong size={25} className="text-primaryTextColor" />
      </button>
      <button
        onClick={onNextHandler}
        className="h-14 w-14 rounded-full bg-primaryBg flex-center absolute right-0 top-0 bottom-0 my-auto  z-40"
      >
        <FaArrowRightLong size={25} className="text-primaryTextColor" />
      </button>
    </>
  );
};

export default CarouselButton;
