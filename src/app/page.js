import React from "react";

import Banner from "@/components/Banner";
import Orders from "@/components/orders/Orders";
import AllItems from "@/components/allitmes/AllItems";

const HomePage = () => {
  return (
    <div className="max-w-full min-w-full ">
      <Banner />

      <div className="space-x-4 custom-container flex mt-10">
        <div className="min-w-[15%] max-w-[15%] ">
          <AllItems />
        </div>
        <div className="min-w-[85%] max-w-[85%]">
          <Orders />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
