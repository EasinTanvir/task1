import React from "react";

import MapContainer from "@/components/landingPage/map/MapContainer";
import ListSideBar from "@/components/landingPage/listSidebar/ListSideBar";
import Banner from "@/components/Banner";
import Categories from "@/components/landingPage/categories/Categories";
import Orders from "@/components/landingPage/orders/Orders";

const HomePage = () => {
  return (
    <div className="max-w-full min-w-full ">
      <Banner />

      <div className="md:space-x-4 custom-container flex md:flex-row flex-col md:mt-16 mt-8 ">
        <div className="md:min-w-72 md:max-w-72  ">
          <ListSideBar />
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
