/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const MenuItems = ({
  item,
  index,
  activeDropdownIndex,
  setActiveDropdownIndex,
}) => {
  const pathName = usePathname();

  const isOpen = activeDropdownIndex === index;

  //dropdown menu open
  const toggleDropdown = () => {
    setActiveDropdownIndex(isOpen ? null : index);
  };

  return item?.menu?.length >= 0 ? (
    <li
      className={`cursor-pointer ${isOpen ? "border-l-4 border-black bg-primary text-white" : ""}`}
    >
      <div
        onClick={() => toggleDropdown()}
        className="flex items-center justify-between text-text"
      >
        <p className={`group flex items-center rounded-sm p-2 px-3`}>
          <span className={`h-5 w-5 ${isOpen ? "text-white" : "text-text/50"}  transition duration-75 `}>
            {item?.icon}
          </span>
          <span className={`${isOpen ? "text-white" : ""} ms-2`}>
            {item?.name}
          </span>
        </p>
        <span className={`${isOpen ? "text-white" : ""} pe-2`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
            />
          </svg>
        </span>
      </div>

      {/* dropdown menu's item */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        {item?.menu?.length >= 0 && (
          <ul className={`bg-white`}>
            {item.menu.map((item, i) => (
              <li key={i} className="border-t-[1px] border-white/30">
                <Link
                  href={item?.path}
                  className={`group flex items-center rounded-sm px-5 py-2 capitalize text-black before:absolute before:left-9 before:h-2 before:w-2 before:rounded-full ${pathName === item?.path ? "active-menu before:bg-white" : "before:bg-black"}`}
                >
                  <span className={`ms-7`}>{item?.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  ) : (
    <li>
      <div>
        <Link
          href={item?.path}
          className={`group flex items-center rounded-sm p-2 px-3 text-text  ${pathName === item?.path ? "active" : ""}`}
        >
          <span className="h-5 w-5 text-text/50 transition duration-75 ">
            {item?.icon}
          </span>
          <span className="ms-2">{item?.name}</span>
        </Link>
      </div>
    </li>
  );
};

export default MenuItems;
