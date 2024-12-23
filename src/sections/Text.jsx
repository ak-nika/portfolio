import React from "react";
import PopUpWrapper from "../components/PopUpWrapper";

const Text = () => {
  return (
    <section className="py-20 px-5 md:py-[100px] md:px-8 lg:px-10">
      <PopUpWrapper>
        <h1 className="text-center text-xl md:text-2xl lg:text-[28px] lg:leading-10 w-full md:w-[80%] mx-auto">
          Building applications that are both visually stunning and highly
          functional.{" "}
          <span className="text-grey">
            With my expertise in development, I ensure solutions that deliver
            value to all stakeholders. Let’s create products that
          </span>{" "}
          perform seamlessly and exceed expectations.
        </h1>
      </PopUpWrapper>
    </section>
  );
};

export default Text;
