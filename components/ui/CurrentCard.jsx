import React from "react";
import Link from "next/link";
import Image from "next/image";
const CurrentCard = ({ img, title, description }) => {
  return (
    <div className=" group">
      <div className="flex flex-col gap-y-[12px]  group-hover:shadow-medium border w-[445px] h-[350px] sm:w-full">
        <Image
          src={img}
          alt="image"
          className="w-full h-[171.43px] object-cover"
        />
        <div className="flex flex-col px-5 gap-y-[12px]">
          <h2 className="text-2xl leading-[29px] text-primary font-semibold group-hover:text-secondary group-hover:underline decoration-1 group-hover:border-secondary group-hover:w-fit underline-offset-[6px]">
            {title}
          </h2>
          <p className="text-base leading-[29px]" href="#">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurrentCard;
