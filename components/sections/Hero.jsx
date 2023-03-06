import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

import people from "/public/images/bachelorweek-vj-2023.webp";
import van from "/public/images/Universiteit+van+Amsterdam+shoot+17012023-0176-flip-cropped-hi.jpeg";
const Hero = () => {
  const datas = [
    {
      title: "Bachelor's",
      descr: "20+ English-taught Bachelor's programmes",
    },
    {
      title: "Master's",
      descr: "200+ English-taught Master's programmes",
    },
    {
      title: "Professional development",
      descr: "MBA's, executive programmes, and master classes",
    },
  ];
  return (
    <div className="pt-[72px] py-[64px] px-[189px] sm:px-3 sm:pt-[48px] sm:pb-[64px]">
      <div className="flex justify-between sm:flex-col sm:gap-y-[24px]">
        <div className="pt-[72px] sm:pt-2">
          <h1 className="text-4xl font-semibold leading-[59px] text-primary">
            University of Amsterdam
          </h1>
          <p className="text-[28px] sm:text-2xl leading-[45px] text-primary">
            Inspiring generations since 1632.
          </p>
        </div>

        <div>
          <Image
            src={van}
            alt=""
            className="w-[547px] h-[500px] object-cover relative z-10 sm:w-[462px] sm:h-[338px]"
          />
        </div>
        <div className="w-[547px] h-[500px] bg-[#F7F7F7] absolute right-[60px] -bottom-[72px] sm:hidden"></div>
      </div>

      <div className="flex gap-[12px] absolute bottom-[111px] sm:bottom-[55px]  z-10 sm:flex-col  sm:px-[23px]">
        {datas.map((data, index) => {
          return (
            <div
              key={index}
              className="border border-secondary rounded-sm w-[315px] h-[110px] p-5 bg-white  sm:w-full hover:shadow-xl"
            >
              <p className="text-base leading-[26px] font-bold text-secondary">
                {data.title}
              </p>
              <div className="flex items-center- gap-[12px]">
                <p className="text-base  leading-[26px] text-gray-500 ">
                  {data.descr}
                </p>
                <BsArrowRight className="text-secondary mt-[5px] w-[6] h-[8]" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
