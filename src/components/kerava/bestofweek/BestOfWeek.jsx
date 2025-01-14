import React from "react";

import SpecialCard from "./SpecialCard";
import RegularCard from "./RegularCard";
import { bestOfWeeks, bestOfWeeksSpecial } from "@/utils/data";

const BestOfWeek = () => {
  return (
    <div className="lg:mt-16  mt-6">
      <h1 className="text-2xl font-semibold mb-2.5 text-baseTextColor">
        Best of Wolt+ Weeks 💙
      </h1>
      <div className="grid lg:grid-cols-5 grid-cols-2 gap-4">
        {bestOfWeeksSpecial.map((item, i) => (
          <SpecialCard key={i} {...item} />
        ))}
        {bestOfWeeks.map((item, i) => (
          <RegularCard key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default BestOfWeek;
