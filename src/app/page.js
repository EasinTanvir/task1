import React from "react";

import Banner from "@/components/Banner";
import Orders from "@/components/orders/Orders";
import AllItems from "@/components/allitmes/AllItems";
import Categories from "@/components/categories/Categories";
import MapContainer from "@/components/map/MapContainer";

const HomePage = () => {
  return (
    <div className="max-w-full min-w-full ">
      <Banner />

      <div className="md:space-x-4 custom-container flex md:flex-row flex-col mt-16 ">
        <div className="md:min-w-72 md:max-w-72  ">
          <AllItems />
        </div>

        <div className="md:min-w-[calc(100%-288px)] md:max-w-[calc(100%-288px)] w-full pb-10 space-y-8">
          <Orders />
          <Categories />
        </div>
      </div>
      <div className="mt-16 custom-container">
        <MapContainer />
      </div>
    </div>
  );
};

export default HomePage;
