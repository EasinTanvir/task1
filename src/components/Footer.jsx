"use client";
import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { Collapse } from "@mui/material";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import { BiWorld } from "react-icons/bi";
import { MdDarkMode } from "react-icons/md";

import { playstore } from "@/utils/constant";
import { footerData } from "@/utils/data";

const Footer = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <footer className="bg-black text-gray-400 custom-container md:pt-28 pt-16 pb-10 min-h-[450px]">
      <div className="hidden md:flex flex-wrap lg:justify-between  gap-16">
        <div>
          <h3 className=" font-bold  text-4xl mb-2 text-white italic">Wolt</h3>
          <div className=" relative mt-6">
            <Image width={120} src={playstore} alt="footer" />
          </div>
        </div>
        {footerData.map((section, idx) => (
          <div key={idx}>
            <h3 className="text-white font-semibold mb-2">{section.title}</h3>
            <ul className="space-y-1">
              {section.items.map((item, i) => (
                <li key={i} className="hover:text-white cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="md:hidden">
        <div className="mb-8">
          <h3 className=" font-bold  text-4xl mb-2 text-white italic">Wolt</h3>
          <div className=" relative mt-6">
            <Image width={120} src={playstore} alt="footer" />
          </div>
        </div>
        {footerData.map((section, idx) => (
          <div key={idx} className="mb-4">
            <button
              className="flex justify-between w-full text-white font-semibold py-2"
              onClick={() => toggleSection(idx)}
            >
              {section.title}
              <span>
                {openSections[idx] ? (
                  <IoIosArrowUp size={20} />
                ) : (
                  <IoIosArrowDown size={20} />
                )}
              </span>
            </button>
            <Collapse in={openSections[idx]} timeout={300}>
              <ul className="mt-2 space-y-1 ">
                {section.items.map((item, i) => (
                  <li key={i} className="hover:text-white cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </Collapse>
          </div>
        ))}
      </div>

      <div className=" border-gray-700 mt-6 pt-4 text-sm flex lg:flex-row  lg:justify-between flex-col gap-3 lg:items-center ">
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-1">
            <span>Finland</span>
            <span>
              <IoLocationSharp size={18} className="text-white" />
            </span>
          </button>
          <button className="flex items-center gap-1">
            <span>English</span>
            <span>
              <BiWorld size={18} className="text-white" />
            </span>
          </button>
          <button className="flex items-center gap-1">
            <span>Theme</span>
            <span>
              <MdDarkMode size={18} className="text-white" />
            </span>
          </button>
        </div>
        <div className="flex md:flex-row flex-col md:gap-12 gap-6 md:items-center md:mt-0 mt-3">
          <div className="flex flex-row flex-wrap  gap-4">
            <span className="hover:text-white">Accessibility Statement</span>
            <span className="hover:text-white">User Terms of Service</span>
            <span className="hover:text-white">Privacy Statement</span>
          </div>
          <span>© Wolt 2014–2025</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
