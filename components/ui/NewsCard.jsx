import Image from "next/image";
import React from "react";

const NewsCard = ({ img, title, description }) => {
  return (
    <div>
      <div className=" group">
        <div className="flex flex-col gap-y-[12px]  group-hover:shadow-medium border w-[334px] h-[460px] bg-white sm:w-[253px] sm:h-[468px]">
          <Image
            src={img}
            alt="image"
            className="w-full h-[136px] object-cover"
          />
          <div className="flex flex-col px-3 gap-y-[12px]">
            <h2 className="text-2xl sm:text-lg leading-[29px] text-primary font-semibold group-hover:text-secondary group-hover:underline group-hover:border-secondary group-hover:w-fit decoration-1 underline-offset-[6px]">
              {title}
            </h2>
            <p className="text-base leading-[29px]" href="#">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
