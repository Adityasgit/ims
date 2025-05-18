/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

import defaultImage from "@/public/default.jpg";
import { auth } from "@/utils/authOptions";
import Image from "next/image";
import LogoutButton from "../../common/Header/LogoutButton";
import OpenSidebarButton from "./OpenSidebarButton";

const Header = async () => {
  const session = await auth();
  const userInfo = session?.user || null;

  return (
    <div className="fixed top-0 z-50 flex h-[45px] w-full items-center bg-white/70 px-2 shadow-sm shadow-gray-300 backdrop-blur sm:px-4">
      <div className="flex h-full w-full items-center justify-between gap-2">
        {/* show info */}
        <div className="">
          <h1 className="text-nowrap text-lg font-semibold capitalize">
            Whole Stock
          </h1>
        </div>
        {/* searchbar */}
        <form action="" className="hidden md:block">
          <div className="group flex w-full items-center rounded-lg border-2 focus-within:border-primary">
            <input
              type="search"
              placeholder="Search by categories..."
              className="w-full max-w-[500px] rounded-lg px-2 py-1 focus:outline-none"
            />
            <button className="pe-2 hover:text-green-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </div>
        </form>
        {/* left info */}
        <div className="flex items-center gap-x-2 md:gap-x-4">

          {userInfo?._id && (
            <div className="group relative flex cursor-pointer select-none items-center gap-x-2">
              <div className="h-8 w-8">
                <Image
                  src={userInfo?.picture || defaultImage}
                  alt="default profile picture"
                  width={100}
                  height={100}
                  className="rounded-full ring-2 ring-gray-300 group-hover:ring-green-600"
                />
              </div>
              <p className="hidden flex-col leading-4 md:flex">
                <span className="text-nowrap text-[14px] font-semibold uppercase">
                  {userInfo?.name}
                </span>
                <span className="text-[14px] font-normal capitalize">
                  {userInfo?.role}
                </span>
              </p>

              {/* logout button */}
              <div className="absolute right-0 top-9 hidden group-hover:block">
                <LogoutButton link={"/superadmin/profile"} />
              </div>
            </div>
          )}
          {/* mobile open menu */}
          <OpenSidebarButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
