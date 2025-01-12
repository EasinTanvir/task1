import React from "react";

import { BadgeTwo, Badge } from "./Badges";
import { ordersData } from "@/utils/data";
import Sliders from "../Sliders";

const Orders = () => {
  return (
    <React.Fragment>
      <div className="space-y-4 md:mt-0 mt-8">
        <Badge />
        <BadgeTwo />
      </div>
      <div className="mt-7">
        <Sliders lists={ordersData} isOrder title="Most ordered" />
      </div>
    </React.Fragment>
  );
};

export default Orders;
