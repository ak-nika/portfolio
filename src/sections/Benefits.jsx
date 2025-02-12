import React from "react";
import PopUpWrapper from "../components/PopUpWrapper";
import Chip from "../components/Chip";
import { benefits } from "../constants";

const Benefits = () => {
  return (
    <section className="mt-[10px] py-10 px-5 md:py-[100px] md:px-8 lg:px-10">
      <PopUpWrapper className="flex justify-center">
        <Chip>Why me?</Chip>
      </PopUpWrapper>

      <PopUpWrapper>
        <h1 className="h2 text-center mt-[24px]">
          I'll help <span className="text-grey">your project</span> shine
        </h1>
      </PopUpWrapper>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {benefits.map((item) => (
          <PopUpWrapper
            key={item.id}
            className="bg-almostBlack rounded-2xl border border-lightBlack p-10 shine"
          >
            <div className="p-4 bg-[#1e1e1e] rounded-xl w-[50px] h-[50px] flex justify-center items-center border border-[#202020] mb-6">
              <img src={item.icon} alt="icon" className="w-full" />
            </div>

            <h1 className="text-[20px]">{item.title}</h1>

            <p className="paragraph mt-4">{item.text}</p>
          </PopUpWrapper>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
