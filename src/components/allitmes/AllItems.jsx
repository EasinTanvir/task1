"use client";
import React, { useState } from "react";

import SearcBox from "./SearcBox";
import Buttons from "./Buttons";
import ItemList from "./ItemList";
import { itemsData } from "@/utils/data";

const AllItems = () => {
  const [selectItems, setSelectedItems] = useState();

  return (
    <div className="max-h-[800px] overflow-y-auto relative custom-scrollbar ">
      <SearcBox />

      <div className="flex md:flex-col md:gap-2 md:border-none  border-b-[1px] flex-row max-w-full overflow-x-auto overflow-y-hidden gap-5   md:p-2 md:mt-0 mt-4">
        <Buttons />
        {itemsData.map((item, index) => (
          <ItemList
            id={index + 1}
            selectItems={selectItems}
            setSelectedItems={setSelectedItems}
            key={index}
            {...item}
          />
        ))}
      </div>
      <div className="sticky md:block hidden  bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-100 via-white/60 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default AllItems;
