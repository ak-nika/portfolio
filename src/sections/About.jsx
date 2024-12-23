import React from "react";
import { fullbody } from "../assets";
import Chip from "../components/Chip";
import { about } from "../constants";
import PopUpWrapper from "../components/PopUpWrapper";

const About = () => {
  return (
    <section className="mt-[10px] py-20 px-5 md:py-[100px] md:px-8 lg:px-10 flex flex-col md:flex-col-reverse lg:flex-row">
      <PopUpWrapper>
        <div className="flex justify-center items-center">
          <div className="w-[350px] h-[405.5px] md:w-[448px] md:h-[537px] lg:w-[480px] lg:h-[580px] bg-lighterBlack opacity-80 border border-lightBlack rounded-lg">
            <img
              src={fullbody}
              alt="fullbody"
              className="w-full h-full object-contain "
            />
          </div>
        </div>
      </PopUpWrapper>

      <div className="lg:pl-10">
        <PopUpWrapper className="flex justify-start md:justify-center lg:justify-start mt-8">
          <Chip>About</Chip>
        </PopUpWrapper>

        <PopUpWrapper>
          <h3 className="mt-6 h2 text-left md:text-center lg:text-left text-grey">
            I am a <span className="text-white">Passionate Developer</span>,
            Shaping Code into Functional Masterpieces
          </h3>
        </PopUpWrapper>

        <PopUpWrapper>
          <p className="paragraph text-left md:text-center lg:text-left mt-6 text-grey">
            With a foundation in problem-solving and creativity, I now channel
            my expertise into software development, merging aesthetics,
            functionality, and innovation. My mission is to craft modern,
            user-centric applications that bring your ideas to life.
          </p>
        </PopUpWrapper>

        <div className="mt-4 grid grid-cols-2 gap-4 justify-start md:justify-center lg:justify-start">
          {about.map((item) => (
            <PopUpWrapper key={item.id}>
              <p className="text-grey">{item.title}</p>
              <h4 className="h2">{item.text}</h4>
            </PopUpWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
