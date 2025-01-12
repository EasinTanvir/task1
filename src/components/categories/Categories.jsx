import React from "react";

import { categoryData } from "@/utils/data";
import Sliders from "../Sliders";

const Categories = () => {
  return <Sliders lists={categoryData} title="Shop by category" />;
};

export default Categories;
