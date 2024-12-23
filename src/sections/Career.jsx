import React from "react";
import Chip from "../components/Chip";
import PopUpWrapper from "../components/PopUpWrapper";
import { career } from "../constants";

const Career = () => {
  return (
    <section className="mt-20 py-20 px-5 md:py-[100px] md:px-8 lg:px-10">
      <PopUpWrapper>
        <Chip>Career</Chip>
      </PopUpWrapper>

      <PopUpWrapper>
        <h2 className="h2 text-grey mt-[24px]">
          And This Is <span className="text-white">My Career</span>
        </h2>
      </PopUpWrapper>

      <div>
        {career.map((item) => (
          <PopUpWrapper key={item.id}>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="flex justify-center flex-col gap-4 lg:flex-row lg:justify-start mb-4 lg:mb-0">
                <h3 className="text-[20px]">{item.title}</h3>
                <p className="text-grey">{item.duration}</p>
              </div>

              <div>
                <p className="paragraph">{item.description}</p>
              </div>
            </div>

            <hr className="border border-lightBlack my-8" />
          </PopUpWrapper>
        ))}
      </div>
    </section>
  );
};

export default Career;
