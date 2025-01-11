import Banner from "@/components/Banner";
import { dummyData } from "@/utils/data";
import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Banner />

      {dummyData.map((item) => (
        <Image src={item.image} width={400} height={400} />
      ))}
    </div>
  );
};

export default HomePage;
