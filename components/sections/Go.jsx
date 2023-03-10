import React from "react";
import Wrapper from "../layout/Wrapper";

const Go = () => {
  return (
    <div className="px-[60px] pt-[64px] pb-[128px] sm:px-0">
      <Wrapper>
        <div className=" space-y-[24px] sm:px-5">
          <h2 className="text-[30px] leading-[48px] text-primary font-semibold">
            Go to:
          </h2>
          <div className="grid grid-cols-3 gap-[24px] sm:grid-cols-1">
            {[
              "Alumni",
              "PhD",
              "Working At the UvA",
              "UvA Experts",
              "Staff Website",
              "Student Website",
            ].map((item, index) => {
              return (
                <div key={index} className="group font-serif">
                  <div className="w-[445px] h-[81px] sm:w-full border  sm:text-lg group-hover:shadow-medium text-2xl leading-[29px] text-primary font-semibold p-5 rounded-[2px] group-hover:text-secondary group-hover:underline decoration-1 underline-offset-8">
                    {item}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Go;
