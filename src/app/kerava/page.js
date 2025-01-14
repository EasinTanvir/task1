import React from "react";

import TabList from "@/components/kerava/tabs/TabList";
import Categories from "@/components/kerava/categoryies/Categories";
import Carousel from "@/components/kerava/carousel/Carousel";
import DeliverBadge from "@/components/kerava/DeliverBadge";
import BestOfWeek from "@/components/kerava/bestofweek/BestOfWeek";
import Dinners from "@/components/kerava/dinners/Dinners";

const Kerava = () => {
  return (
    <div className="custom-container pt-28 pb-10 ">
      <TabList />
      <Categories />
      <Carousel />
      <BestOfWeek />
      <DeliverBadge />
      <Dinners />
    </div>
  );
};

export default Kerava;
