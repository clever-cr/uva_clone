import React from "react";
import logo from "/public/images/logo.png";
import Image from "next/image";
import small from "/public/images/small.png";
import { BsSearch, BsSuitHeart } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import Wrapper from "./Wrapper";
const NavBar = () => {
  return (
    <div className=" ">
      <div className="">
        <div className="flex items-center sm:px-2 px-[60px] justify-between py-[21px] sm:py-[6px] shadow-lg fixed- w-full z-50 bg-white">
          <Image
            className="object-cover w-[425px] h-[42px] sm:hidden"
            src={logo}
            alt="logo"
          />
          <Image src={small} alt="" className="hidden sm:block" />
          <div className="flex items-center space-x-[24px]">
            <div className="  flex    ">
              <div className="flex items-center justify-between w-[400px] h-[42px] px-5 sm:w-0 sm:h-0 border sm:border-0">
                <input
                  placeholder="Search..."
                  className=" outline-none  sm:hidden 
                  "
                />
                <div className="border-l pl-2 sm:pl-0  sm:border  sm:px-[12px] sm:py-[8.4px]  sm:border-black">
                  <BsSearch className="w-5 h-6 sm:text-center" />
                </div>
              </div>
            </div>
            <div className="flex items-center group gap-[8px]">
              <Link
                className="text-base leading-4 font-bold text-primary group-hover:underline sm:hidden"
                href="#"
              >
                Compare programmes
              </Link>
              <BsSuitHeart className="text-[#bd0032] group-hover:shadow-xl w-8 h-8" />
            </div>

            <Link
              className="text-base font-bold leading-4 text-primary px-[8.4px] py-[8.4px] border border-black rounded-sm hover:ease-out hover:shadow-xl "
              href="#"
            >
              NL
            </Link>
            <AiOutlineMenu className="hidden sm:block" />
          </div>
        </div>
        <div className="bg-[#F7F7F7] px-[60px] sm:px-5 py-[8px] flex items-center space-x-[48px] shadow-md sm:hidden">
          {[
            "Education",
            "Research",
            "News&Events",
            "About  the UVA",
            "Library",
          ].map((link, index) => {
            return (
              <Link
                href="#"
                key={index}
                className="text-[20px] leading-[32px] hover:text-secondary hover:border-b-2  hover:border-secondary  "
              >
                {" "}
                {link}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
