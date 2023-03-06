import { React, useEffect, useState } from "react";
import logo from "/public/images/logo.png";
import Image from "next/image";
import small from "/public/images/small.png";
import { BsSearch, BsSuitHeart, BsArrowRight } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineRight, AiOutlineClose } from "react-icons/ai";

import Link from "next/link";
import Wrapper from "./Wrapper";
const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "scroll");
  });
  const MenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const whenIsScrolled = () => {
    if (window.scrollY >= 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", whenIsScrolled);
  });

  return (
    <div className=" ">
      <div className="fixed- w-full- z-20-">
        <div
          className={`flex items-center sm:px-2 px-[60px] justify-between  sm:py-[6px] shadow-mini fixed w-full z-20 bg-white duration-500 ${
            isScrolled ? "py-0" : "py-[21px]"
          }`}
        >
          {isScrolled ? (
            <Image src={small} alt="" className=" sm:hidden object-cover-" />
          ) : (
            <Image
              className="object-cover w-[425px] h-[42px] sm:hidden"
              src={logo}
              alt="logo"
            />
          )}

          <Image src={small} alt="" className="hidden sm:block object-cover" />
          <div className="flex items-center gap-x-[24px] sm:gap-x-[12px]">
            <div className="  flex    items-center">
              <BsSuitHeart className="text-[#bd0032]- group-hover:shadow-medium w-8 h-8 hidden sm:block" />
              <div className="flex items-center justify-between w-[400px] h-[42px] px-5 sm:w-0 sm:h-0 border sm:border-0">
                <input
                  placeholder="Search..."
                  className=" outline-none  sm:hidden 
                  "
                />
                <div className="border-l pl-2 rounded-[2px]  sm:border  sm:p-2  sm:border-black">
                  <BsSearch className="text-lg text-center " />
                </div>
              </div>
            </div>
            <div className="flex items-center group gap-[8px]">
              <Link
                className="text-base leading-4 font-bold text-primary group-hover:border-b group-hover:border-primary sm:hidden"
                href="#"
              >
                Compare programmes
              </Link>
              <BsSuitHeart className="text-[#bd0032]- group-hover:shadow-medium w-8 h-8 sm:hidden" />
            </div>
            <div>
              <Link
                className="text-base font-bold leading-4 text-primary p-2 border border-black rounded-[2px]  hover:shadow-medium "
                href="#"
              >
                NL
              </Link>
            </div>

            <div>
              {isMenuOpen ? (
                <div className="rounded-[2px]  border hidden sm:block  p-2  bg-black">
                  <AiOutlineClose
                    onClick={MenuOpen}
                    className="hidden sm:block text-white"
                  />
                </div>
              ) : (
                <div className="rounded-[2px]  border hidden sm:block  p-2  bg-black">
                  <AiOutlineMenu
                    onClick={MenuOpen}
                    className="hidden sm:block text-white"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          className={`bg-[#F7F7F7] px-[60px] sm:px-5 py-[8px]- shadow-small flex items-center space-x-[48px] transform- pt-[100px] duration-500- ease-in-out- sm:hidden `}
        >
          {[
            "Education",
            "Research",
            "News&Events",
            "About  the UVA",
            "Library",
          ].map((link, index) => {
            return (
              <div key={index} className="group pb-2">
                <Link
                  href="#"
                  className={`text-[20px] leading-[32px] hover:text-secondary group border-b-2  border-transparent hover:border-b-2 hover:pb-2 group-hover:border-secondary  `}
                >
                  {" "}
                  {link}
                </Link>
                <div
                  className={`absolute top-[140px] z-50 bg-[#F7F7F7]   h-56 w-[300px]  ${
                    index == 0 ? "hidden group-hover:block" : "hidden"
                  }`}
                >
                  <div className="flex flex-col px-5 gap-[12px] pt-[12px]">
                    {[
                      "Bachelor's",
                      "Master's",
                      "Professional development",
                      "Summer School",
                      "Open programmes",
                      "Exchange",
                    ].map((item, index) => {
                      return (
                        <Link
                          className="hover:text-secondary hover:border-b-secondary w-fit border-b border-transparent"
                          href="page1"
                          key={index}
                        >
                          {item}
                        </Link>
                      );
                    })}
                  </div>
                </div>
                <div
                  className={`absolute top-[140px] z-50 bg-[#F7F7F7]   h-56- w-[300px]  ${
                    index == 1 ? "hidden group-hover:block" : "hidden"
                  }`}
                >
                  <div className="flex flex-col px-5 gap-[12px] pt-[12px]">
                    {["Research at the UvA", "PhD"].map((item, index) => {
                      return (
                        <Link
                          className="hover:text-secondary hover:border-b-secondary w-fit border-b border-transparent"
                          href="page1"
                          key={index}
                        >
                          {item}
                        </Link>
                      );
                    })}
                  </div>
                </div>
                <div
                  className={`absolute top-[140px] z-50 bg-[#F7F7F7]   h-56 w-[300px]  ${
                    index == 2 ? "hidden group-hover:block" : "hidden"
                  }`}
                >
                  <div className="flex flex-col px-5 gap-[12px] pt-[12px]">
                    {[
                      "News",
                      "  Events",
                      "Press Office",
                      " Coronavirus information",
                      "Ukraine information and support",
                    ].map((item, index) => {
                      return (
                        <Link
                          className="hover:text-secondary hover:border-b-secondary w-fit border-b border-transparent"
                          href="page1"
                          key={index}
                        >
                          {item}
                        </Link>
                      );
                    })}
                  </div>
                </div>
                <div
                  className={`absolute top-[140px] z-50 bg-[#F7F7F7]   h-56 w-[300px]  ${
                    index == 3 ? "hidden group-hover:block" : "hidden"
                  }`}
                >
                  <div className="flex flex-col px-5 gap-[12px] pt-[12px]">
                    {[
                      " About the University",
                      "Alumni",
                      " Contact and locations",
                      "Organisation",
                      " Policy and regulations",
                      " Working at the UvA",
                    ].map((item, index) => {
                      return (
                        <Link
                          className="hover:text-secondary hover:border-b-secondary w-fit border-b border-transparent"
                          href="page1"
                          key={index}
                        >
                          {item}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {isMenuOpen && (
        <div className="bg-[#D6D6D6] h-[300px] hidden sm:block a fixed z-50 w-full top-[80px] ">
          <div>
            <div className="flex items-center px-[30px] text-secondary">
              <BsArrowRight />
              <Link className=" " href="page1">
                Home
              </Link>
            </div>
            <div>
              {["Education", "Research", "News&Events", "About the UvA"].map(
                (link, index) => {
                  return (
                    <div
                      key={index}
                      className="flex items-center border-t p-2 gap-x-[20px]"
                    >
                      <div className="bg-white h-full">
                        <AiOutlineRight className=" " />
                      </div>

                      <Link href="page1" className="">
                        {link}
                      </Link>
                    </div>
                  );
                }
              )}
            </div>
            <Link className="px-[42px]" href="page1">
              library
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
