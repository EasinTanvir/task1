import React from "react";

import TabItems from "./TabItems";
import { tabItems } from "@/utils/data";

const TabList = () => {
  return (
    <div className="flex-center gap-6">
      {tabItems.map((item, i) => (
        <TabItems key={i} {...item} />
      ))}
    </div>
  );
};

export default TabList;
