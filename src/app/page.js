import Banner from "@/components/Banner";
import { dummyData } from "@/utils/data";
import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <h1>Gret</h1>

      <div className="space-x-4 custom-container flex">
        <div className="w-64 border border-red-400">fd</div>
        <div className="flex-1 border border-rose-800">great</div>
      </div>
    </div>
  );
};

export default HomePage;
