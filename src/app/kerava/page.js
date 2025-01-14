import React from "react";
import TabList from "@/components/kerava/tabs/TabList";
import Categories from "@/components/kerava/categoryies/Categories";
import Carousel from "@/components/kerava/carousel/Carousel";

const Kerava = () => {
  return (
    <div className="custom-container pt-28 ">
      <TabList />
      <Categories />
      <Carousel />
    </div>
  );
};

export default Kerava;
