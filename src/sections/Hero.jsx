import React from "react";
import Chip from "../components/Chip";
import Button from "../components/Button";
import { flower } from "../assets";
import PopUpWrapper from "../components/PopUpWrapper";

const Hero = () => {
  return (
    <div className="pt-[64px] px-5 pb-10 md:pt-[120px] md:px-8 md:pb-0 lg:pt-[140px] lg:px-10">
      <div className="flex justify-center items-center">
        <PopUpWrapper>
          <Chip>Hello, I'm Akin 👋</Chip>
        </PopUpWrapper>
      </div>

      <PopUpWrapper className={"delay-100"}>
        <h1 className="h1 mt-6 text-center">
          Web developer{" "}
          <span className="text-grey">creating clean & modern websites</span>
        </h1>
      </PopUpWrapper>

      <PopUpWrapper className={"delay-200"}>
        <Button className="mx-auto mt-10">Email me</Button>
      </PopUpWrapper>

      <PopUpWrapper className={"delay-300"}>
        <div className="relative flex justify-center items-centers mt-[38px] md:mt-[64px] lg:mt-[105px] z-[1] ">
          <div className="w-[200px] h-[200px] bg-white rounded-full blur-[200px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[-1]" />

          <img
            src={flower}
            alt="flower"
            className="md:w-[500px] md:h-[500px] w-[390px] h-[400px]"
          />

          <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>
      </PopUpWrapper>
    </div>
  );
};

export default Hero;
