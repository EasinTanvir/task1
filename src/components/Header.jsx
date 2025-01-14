"use client";
import React from "react";
import { IoLocation } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

import Avatar from "./Avatar";
import useHeaderLogic from "@/hooks/useHeaderLogic";
import Link from "next/link";

const Header = () => {
  const { scroll, selectSearch, setSelectSearch, headerRef } = useHeaderLogic();

  return (
    <div
      ref={headerRef}
      className={`flex fixed left-0 top-0 w-full justify-between items-center md:h-20 h-28 custom-container z-40 ${
        scroll || selectSearch ? "bg-cardHeaderBg" : ""
      }`}
    >
      <div
        className={`flex md:w-fit w-10  md:items-center md:flex-row flex-col md:gap-6 ${
          !selectSearch ? "md:mt-0 mt-9" : "mt-0"
        }   `}
      >
        <h1
          className={`md:text-3xl text-xl font-bold italic ${
            scroll || selectSearch ? "text-baseTextColor" : "text-white"
          }`}
        >
          Wolt
        </h1>
        {!selectSearch && (
          <div className="flex items-center gap-2 md:mt-0 mt-2">
            <button
              className={`${
                scroll ? "bg-primaryBg" : "bg-white"
              } bg-opacity-30 backdrop-blur-md rounded-full min-w-8 min-h-8 flex items-center justify-center`}
            >
              <IoLocation
                size={16}
                className={`${
                  scroll ? "text-primaryTextColor" : "text-white"
                } z-20`}
              />
            </button>
            <div className="flex items-center gap-2">
              <Link
                href="/kerava"
                className={`${
                  scroll || selectSearch
                    ? "text-primaryTextColor"
                    : "text-white"
                }`}
              >
                Kerava
              </Link>
              <button>
                <RiArrowDropDownLine
                  size={20}
                  className={`${
                    scroll || selectSearch
                      ? "text-primaryTextColor"
                      : "text-white"
                  }`}
                />
              </button>
            </div>
          </div>
        )}
      </div>

      <div
        className={`relative border ${
          selectSearch
            ? "w-[65%] border-2 border-primaryTextColor"
            : "xl:w-96 border-none"
        } rounded-xl  py-1.5 ${
          scroll
            ? "bg-gray-200 hover:bg-gray-300"
            : "bg-inputBg hover:bg-inputBgHover"
        } backdrop-blur-[8px] transition-all duration-300 ease-in-out`}
      >
        <input
          onFocus={() => setSelectSearch(true)}
          className="bg-transparent cursor-text text-xs ps-8 text-baseTextColor outline-none border-none w-full"
          placeholder="Search in Wolt"
        />
        <CiSearch
          size={17}
          className={`absolute left-2 top-0 bottom-0 m-auto ${
            scroll || selectSearch ? "text-baseTextColor" : "text-white"
          }`}
        />
      </div>

      {!selectSearch ? (
        <>
          <div className="space-x-4 md:block hidden">
            <button
              className={`px-3 py-1.5 rounded-md font-semibold ${
                scroll || selectSearch ? "text-baseTextColor" : "text-white"
              }`}
            >
              Log in
            </button>
            <button className="bg-buttonBg text-white px-3 py-1.5 rounded-md font-semibold">
              Sign up
            </button>
          </div>
          <div className="md:hidden block">
            <Avatar />
          </div>
        </>
      ) : (
        <button
          onClick={() => setSelectSearch(false)}
          className="bg-gray-200 backdrop-blur-[8px] rounded-full w-8 h-8 flex-center cursor-pointer"
        >
          <RxCross2 size={20} className="text-baseTextColor" />
        </button>
      )}
    </div>
  );
};

export default Header;
