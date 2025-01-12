import React from "react";
import { BadgeTwo, Badge } from "./Badges";
import MostOrders from "./MostOrder";

const Orders = () => {
  return (
    <div className="px-6">
      <div className="space-y-4">
        <Badge />
        <BadgeTwo />
      </div>
      <MostOrders />
    </div>
  );
};

export default Orders;
