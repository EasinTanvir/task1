"use client";
import React from "react";

import CategoryItems from "./CategoryItems";
import ShowMoreButton from "./ShowMoreButton";
import { categoryLists } from "@/utils/data";
import { useCategories } from "@/hooks/useCategories";

const Categories = () => {
  const {
    isMobile,
    showMore,
    toggleShowMore,
    firstCategories,
    lastCategories,
  } = useCategories(categoryLists);

  return (
    <div className="mt-16 lg:flex flex-wrap xl:justify-center gap-5 hidden">
      <div className="flex gap-5 ">
        {firstCategories.map((item, i) => (
          <CategoryItems key={i} {...item} />
        ))}
        {isMobile && (
          <ShowMoreButton onClick={toggleShowMore} showMore={showMore} />
        )}
      </div>

      {isMobile && showMore && (
        <div className="flex gap-5  w-full mt-4">
          {lastCategories.map((item, i) => (
            <CategoryItems key={`last-${i}`} {...item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Categories;
