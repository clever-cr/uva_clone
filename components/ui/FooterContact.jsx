import React from "react";
import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";
const FooterContact = ({ titles = [], links = [] }) => {
  return (
    <div className="text-white space-y-[20px] flex flex-col sm:border-t sm:py-5">
      <div>
        {titles.map((title, index) => {
          return (
            <div key={index} className="flex items-center justify-between">
              <p className="text-base leading-[16px] font-semibold ">{title}</p>
              <AiOutlineDown className="hidden sm:block" />
            </div>
          );
        })}
      </div>

      <div>
        {links.map((link, index) => {
          return (
            <div
              key={index}
              className="flex items-center gap-y-[8px] gap-x-[4px] sm:hidden"
            >
              <AiOutlineRight className="w-4 h-5" />
              <p className="text-[14px] leading-[22px]">{link}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FooterContact;
