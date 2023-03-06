import React from "react";
import NewsCard from "../ui/NewsCard";
import blue from "/public/images/blue.png";
import rich from "/public/images/rich-man.jpeg";
import forest from "/public/images/honeyforaging_bryndanvanpinxteren.jpeg";
import monique from "/public/images/_monique-kooijmans-athenaeum-illustre.jpeg";
import { AiOutlineRight } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import Wrapper from "../layout/Wrapper";
const News = () => {
  return (
    <div className="pl-[60px] bg-[#E6E6E6] sm:pl-2">
      <Wrapper>
        <div className=" py-[64px] gap-y-[24px] sm:pl-3">
          <div className="flex items-center justify-between pr-[24px] ">
            <h2 className="text-[30px] leading-[48px] text-primary font-semibold">
              News
            </h2>
            <AiOutlineRight className="text-[#B0B0B0] w-6 h-8 " />
          </div>

          <div className="flex gap-x-[16px] pt-[36px] overflow-x-scroll scrollHidden">
            <NewsCard
              img={blue}
              title="Teflon is so slippery because it slides on itself"
              description="The surface of Teflon – the non-stick coating in your pan – is incredibly slippery. Thanks to research carried out at the Institute of Physics (UvA) and research centre ARCNL, we finally know where this slipperiness ..."
            />
            <NewsCard
              img={rich}
              title="The richest people don't turn out to be the smartest"
              description="
          Are the highest-paid jobs with the highest prestige performed by the smartest people? No, say sociologists who used unique information about 59,000 men to uncover the connection between intelligence and wealth.              "
            />
            <NewsCard
              img={forest}
              title="Why are our brains so huge?"
              description="
                  Why are human brains three times larger than those of our closest living relatives? A diverse, high-quality diet and a long childhood in which we learn complex ways to acquire and gather food could be a major ...              "
            />
            <NewsCard
              img={monique}
              title="Moratorium on research with Shell"
              description="The UvA will not enter into research collaborations with Shell or similar companies for the time being. A discussion with students and staff needs to be concluded first, according to the Executive Board. In recent ...              "
            />
            <NewsCard
              img={forest}
              title="Why are our brains so huge?"
              description="
                  Why are human brains three times larger than those of our closest living relatives? A diverse, high-quality diet and a long childhood in which we learn complex ways to acquire and gather food could be a major ...              "
            />
            <NewsCard
              img={monique}
              title="Moratorium on research with Shell"
              description="The UvA will not enter into research collaborations with Shell or similar companies for the time being. A discussion with students and staff needs to be concluded first, according to the Executive Board. In recent ...              "
            />
          </div>

          <div className="flex items-center gap-x-[4px] border-b border-secondary w-fit pb-[2px]  absolute right-[70px] pt-[16px]">
            <p className="text-secondary leading-[19px]">More News</p>
            <BsArrowRight className="text-secondary" />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default News;
