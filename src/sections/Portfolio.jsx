import React, { useState } from "react";
import PopUpWrapper from "../components/PopUpWrapper";
import Chip from "../components/Chip";
import LoaderCard from "../components/LoaderCard";

const Portfolio = () => {
  const [loading, setLoading] = useState(true);
  const array = [1, 2, 3, 4];

  return (
    <div
      id="portfolio"
      className="mt-[10px] py-20 px-5 md:py-[100px] md:px-8 lg:pt-[120px] lg:px-10 lg:pb-[100px]"
    >
      <div className="flex flex-col gap-6 items-center justify-center">
        <PopUpWrapper>
          <Chip>Portfolio</Chip>
        </PopUpWrapper>

        <PopUpWrapper>
          <h2 className="h2">
            <span className="text-grey">My Latest</span> Projects
          </h2>
        </PopUpWrapper>
      </div>

      <div className="mt-8 md:mt-6 lg:mt-8 flex justify-center items-center gap-6 flex-wrap w-full">
        {loading
          ? array.map((item) => <LoaderCard key={item} />)
          : "Your Projects Here"}
      </div>
    </div>
  );
};

export default Portfolio;
