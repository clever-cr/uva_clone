import React from "react";
import CurrentCard from "../ui/CurrentCard";
import stairs from "/public/images/stairs.jpeg";
import people from "/public/images/bachelorweek-vj-2023.webp";
import red from "/public/images/de-slimme-stad-donker-2.webp";
const Current = () => {
  return (
    <div className="space-y-[24px] px-[60px]  py-[64px] sm:px-3 sm:pt-[220px]">
      <h2 className="text-[30px] leading-[48px] text-primary font-semibold">
        Current
      </h2>
      <div className="flex gap-[24px] sm:flex-col">
        <CurrentCard
          img={stairs}
          title="Study in Amsterdam Week 20 - 24 February"
          description="Discover everything an international student needs to know about studying at the UvA."
        />
        <CurrentCard
          img={red}
          title="The UvA and the smart city"
          description="ind out how our cities are becoming smarter every day. UvA researchers are examining the pitfalls and the potential.  "
        />
        <CurrentCard
          img={people}
          title="Bachelor's Week 17 - 25 March"
          description="
          Discover your Bachelor's at the UvA.              "
        />
      </div>
    </div>
  );
};

export default Current;
