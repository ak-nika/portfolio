import React from "react";
import { background } from "../assets";
import PopUpWrapper from "../components/PopUpWrapper";
import Chip from "../components/Chip";
import Button from "../components/Button";

const Contact = () => {
  return (
    <section
      id="contact"
      className="px-5 py-[100px] md:px-8 md:py-[140px] lg:px-10 lg:py-40 relative"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 black-gradient w-full h-full" />

      <div className="relative z-10">
        <PopUpWrapper className="flex justify-center">
          <Chip>Contact</Chip>
        </PopUpWrapper>

        <PopUpWrapper>
          <h2 className="h2 mt-6 text-center">
            <span className="text-grey">Let's Get in</span> Touch
          </h2>
        </PopUpWrapper>

        <PopUpWrapper>
          <p className="paragraph text-center">
            Let's connect and start your project ASAP
          </p>
        </PopUpWrapper>

        <PopUpWrapper className="flex justify-center mt-10">
          <a href="mailto:akingbayiojo1@gmail.com">
            <Button>Email me</Button>
          </a>
        </PopUpWrapper>

        <PopUpWrapper>
          <p className="paragraph text-center mt-6">
            Or message{" "}
            <a
              href="https://wa.me/message/EKJZM6V2ISI5C1"
              className="text-white link"
            >
              +2348122492709
            </a>{" "}
            on WhatsApp
          </p>
        </PopUpWrapper>
      </div>
    </section>
  );
};

export default Contact;
