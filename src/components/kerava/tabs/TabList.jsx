import React from "react";

import TabItems from "./TabItems";
import { tabItems } from "@/utils/data";

const TabList = () => {
  return (
    <div className="md:flex-center hidden gap-6">
      {tabItems.map((item, i) => (
        <TabItems key={i} {...item} />
      ))}
    </div>
  );
};

export default TabList;
