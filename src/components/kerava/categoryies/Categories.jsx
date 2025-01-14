import React from "react";

import { categoryLists } from "@/utils/data";
import CategoryItems from "./CategoryItems";

const Categories = () => {
  return (
    <div className="mt-16 flex justify-center gap-5">
      {categoryLists.map((item, i) => (
        <CategoryItems key={i} {...item} />
      ))}
    </div>
  );
};

export default Categories;
