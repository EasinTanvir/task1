"use client";
import React from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const StoreDetails = () => {
  return (
    <div className="flex flex-col  bg-gray-100 custom-container py-10 rounded-lg shadow-lg  w-full mx-auto">
      <div className=" mb-4">
        <p className="text-gray-700  xl:w-[50%] md:w-[70%] ">
          Get your groceries home delivered from our wide selection! Collect
          Plussa points from your orders. Please always check the product
          information on the sales packaging. Brick-and-mortar store offers are
          not valid in Wolt.
        </p>
      </div>
      <h2 className="text-slate-700 font-semibold text-sm">
        See similar stories
      </h2>
      <h2 className="text-blue font-semibold text-sm">Grocery, K-Market</h2>

      <div className="flex md:flex-row flex-col gap-5 justify-between items-start  lg:w-[80%] w-full">
        <div className="md:border-l-2 md:ps-4 flex-1 ">
          <p className="mt-1 text-slate-700 text-xl font-bold mb-4">Address</p>

          <p className="text-gray-700 text-sm">Paasikivenkatu 13</p>
          <p className="text-gray-700 text-sm">04200 Kerava</p>
          <a href="#" className="text-blue-500  mt-3 text-blue">
            See map
          </a>
        </div>

        <div className="md:border-l-2 md:ps-4 flex-1 pe-4">
          <h3 className="mt-1 text-slate-700 text-xl font-bold mb-4">
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
          </ul>
        </div>

        <div className="md:border-l-2 md:ps-4 flex-1">
          <h3 className="text-gray-600 font-semibold text-lg">
            More information
          </h3>
          <p className="text-blue-500  mt-3 text-blue">+358504138756</p>
          <a href="#" className="text-blue-500  mt-3 text-blue">
            Visit website
          </a>
        </div>
      </div>

      <div className="mt-6 w-full h-64 rounded-lg overflow-hidden">
        <Map
          mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          initialViewState={{
            latitude: 60.403,
            longitude: 25.105,
            zoom: 12,
          }}
          mapStyle="mapbox://styles/mapbox/streets-v11"
        >
          <Marker latitude={60.403} longitude={25.105} color="red" />
        </Map>
      </div>
    </div>
  );
};

export default StoreDetails;
