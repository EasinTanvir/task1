import React from "react";
import TabList from "@/components/kerava/tabs/TabList";
import Categories from "@/components/kerava/categoryies/Categories";

const Kerava = () => {
  return (
    <div className="custom-container pt-28 ">
      <TabList />
      <Categories />
    </div>
  );
};

export default Kerava;
