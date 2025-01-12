"use client";
import React from "react";

import SearcBox from "./SearcBox";
import Buttons from "./Buttons";
import ItemList from "./ItemList";
import { itemsData } from "@/utils/data";
import { useState } from "react";

const AllItems = () => {
  const [selectItems, setSelectedItems] = useState();

  return (
    <div className=" max-h-[800px] overflow-y-auto relative custom-scrollbar ">
      <SearcBox />

      <div className="flex md:flex-col md:gap-2  flex-row max-w-full overflow-x-scroll gap-5   md:p-2 md:mt-0 mt-4">
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
      <div className="sticky bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-gray-100 via-white/60 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default AllItems;
