import React from "react";

const TabItems = ({ title, href, icon: Icon }) => {
  return (
    <button
      className={`flex items-center gap-3 ${
        href === "/kerava"
          ? "bg-primaryTextColor text-white"
          : "text-baseTextColor hover:bg-slate-200"
      }  rounded-2xl py-2.5 px-5`}
    >
      <span>
        <Icon size={16} />
      </span>
      <span className="text-sm">{title}</span>
    </button>
  );
};

export default TabItems;
