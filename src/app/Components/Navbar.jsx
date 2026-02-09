"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { TbMenu } from "react-icons/tb";

const Navbar = () => {
  const [onMenu, setOnMenu] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between px-[2.5vw] text-primary py-6 md:py-5 relative z-50 ">
        {/* Left */}
        <div className="flex items-center h-8 ">
          <button
            onClick={() => setOnMenu(!onMenu)}
            className="relative w-8 h-8 md:hidden  pb-7"
          >
            <TbMenu
              className={`absolute text-[32px] transition-all duration-300
          ${onMenu ? "opacity-0 rotate-90 scale-75" : "opacity-100"}
        `}
            />
            <IoCloseOutline
              className={`absolute text-[32px] transition-all duration-300
          ${onMenu ? "opacity-100" : "opacity-0"}
        `}
            />
          </button>

          <h1 className="font-semibold hidden md:block text-[32px] ml-4">
            <Link href="/">Dr. Maya Reynolds</Link>
          </h1>
        </div>

        {/* Right */}
        <div className="flex items-center h-8">
          <h3 className="md:hidden font-semibold text-[20px] leading-none">
            <Link href="/">Dr. Maya Reynolds</Link>
          </h3>

          <div className="hidden md:flex text-[20px]">
            <Link href="/" className="mr-10">
              Blog
            </Link>
            <Link href="/">Contact</Link>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white text-primary
        flex flex-col items-center justify-center gap-10 text-2xl
        transition-all duration-500 ease-in-out
        ${onMenu ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
        md:hidden`}
      >
        <Link href="/" onClick={() => setOnMenu(false)}>
          Blog
        </Link>
        <Link href="/" onClick={() => setOnMenu(false)}>
          Contact
        </Link>
      </div>
    </>
  );
};

export default Navbar;
