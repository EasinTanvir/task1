"use client";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

import { breadcrumbs } from "@/utils/data";
import Maps from "./Maps";

const MapContainer = () => {
  return (
    <div>
      <div className="bg-gray-100 rounded-lg w-full">
        <div className="p-5">
          <div className="mb-4">
            <p className="text-gray-700 xl:w-[50%] md:w-[70%]">
              Get your groceries home delivered from our wide selection! Collect
              Plussa points from your orders. Please always check the product
              information on the sales packaging. Brick-and-mortar store offers
              are not valid in Wolt.
            </p>
          </div>
          <h2 className="text-baseTextColor font-semibold text-sm">
            See similar stories
          </h2>
          <h2 className="text-primaryTextColor font-semibold text-sm">
            Grocery, K-Market
          </h2>

          <div className="flex md:flex-row flex-col gap-5 justify-between items-start lg:w-[90%] w-full">
            <div className="md:border-l-2 md:ps-4 flex-1">
              <p className="mt-1 text-baseTextColor text-xl font-bold mb-4">
                Address
              </p>
              <p className="text-gray-700 text-sm">Paasikivenkatu 13</p>
              <p className="text-gray-700 text-sm">04200 Kerava</p>
              <span className="mt-3 text-primaryTextColor">See map</span>
            </div>

            <div className="md:border-l-2  md:border-r-2 md:ps-4 flex-1 pe-4">
              <h3 className="mt-1 text-baseTextColor text-xl font-bold mb-4">
                Delivery times
              </h3>
              <ul className="mt-1 space-y-1 text-gray-700 text-sm">
                <div className="flex justify-between items-center">
                  <span>Monday:</span>
                  <span>09:00–20:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Monday:</span>
                  <span>09:00–20:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Monday:</span>
                  <span>09:00–20:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Monday:</span>
                  <span>09:00–20:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Monday:</span>
                  <span>09:00–20:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Monday:</span>
                  <span>09:00–20:00</span>
                </div>
              </ul>
            </div>

            <div className=" md:ps-4 flex-1">
              <h3 className="text-gray-600 text-xl font-bold">
                More information
              </h3>
              <p className="text-primaryTextColor mt-3">+358504138756</p>
              <span className="text-primaryTextColor mt-3">Visit website</span>
            </div>
          </div>
        </div>

        <div className="relative mt-14 w-full h-64 rounded-lg overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-24 bg-map-gradient pointer-events-none z-10"></div>

          <Maps />
        </div>
      </div>
      <Breadcrumb />
    </div>
  );
};

export default MapContainer;

const Breadcrumb = () => {
  return (
    <nav className="p-4 border-t-2 mt-4">
      <ul className="flex flex-wrap gap-4  items-center  text-gray-600 text-sm">
        {breadcrumbs.map((crumb, index) => (
          <li key={index} className="flex items-center">
            <span
              className={`${
                index !== breadcrumbs.length - 1
                  ? "text-baseTextColor"
                  : "text-baseTextColor font-semibold"
              } font-medium`}
            >
              {crumb.label}
            </span>

            {index < breadcrumbs.length - 1 && (
              <FaChevronRight className="mx-2 text-gray-400" />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
