import React from "react";

import Sliders from "@/components/Sliders";
import { dinnerCards } from "@/utils/data";

const Dinners = () => {
  return (
    <div className="lg:mt-32 mt-12">
      <div className="mt-5">
        <Sliders title="Dinner near you" lists={dinnerCards} isDinner />
      </div>
    </div>
  );
};

export default Dinners;
