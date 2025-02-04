import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CarouselCard = ({ title, subtitle, image }) => {
  return (
    <div className="w-full aspect-[1.70] rounded-lg relative overflow-hidden group">
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full relative"
      >
        <Image className=" rounded-lg z-10" fill alt={title} src={image} />
      </motion.div>

      <motion.div
        className="absolute bottom-5 left-0 w-full lg:px-6 px-3 z-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="lg:text-4xl md:text-2xl text-xl font-bold text-white">
          {title}
        </h1>
        <h3 className="lg:text-xl text-md font-normal text-white">
          {subtitle}
        </h3>
      </motion.div>
    </div>
  );
};

export default CarouselCard;
