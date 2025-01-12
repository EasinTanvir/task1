import React from "react";

import SearcBox from "./SearcBox";
import Buttons from "./Buttons";
import ItemList from "./ItemList";
import { itemsData } from "@/utils/data";

const AllItems = () => {
  return (
    <div className="p-2">
      <SearcBox />

      <div className="space-y-2 max-h-[500px] overflow-y-auto relative">
        <Buttons />
        {itemsData.map((item, index) => (
          <ItemList key={index} {...item} />
        ))}

        {/* Overlay */}
        <div className="sticky bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-gray-100 via-white/60 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default AllItems;
