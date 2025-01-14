import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const CarouselCard = ({ title, subtitle, image }) => {
  return (
    <div className="w-full h-[470px] rounded-lg relative overflow-hidden group">
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full relative"
      >
        <Image
          className="object-cover rounded-lg z-10"
          fill
          alt={title}
          src={image}
        />
      </motion.div>

      <motion.div
        className="absolute bottom-5 left-0 w-full px-6 z-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-white">{title}</h1>
        <h3 className="text-xl font-normal text-white">{subtitle}</h3>
      </motion.div>
    </div>
  );
};

export default CarouselCard;
