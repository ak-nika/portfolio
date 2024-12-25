import React from "react";
import { profile } from "../assets";
import PopUpWrapper from "../components/PopUpWrapper";

const Footer = () => {
  return (
    <section className="px-5 py-10 md:px-8 md:py-12 lg:px-10 lg:py-16">
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="flex flex-col gap-5">
          <PopUpWrapper className="flex items-center gap-3">
            <img
              src={profile}
              alt="profile"
              width={20}
              className="rounded-full"
            />

            <p>Akingbayi Ojo</p>
          </PopUpWrapper>

          <PopUpWrapper>
            <p className="text-grey m-0">
              Web developer creating <br /> clean & modern websites
            </p>
          </PopUpWrapper>

          <PopUpWrapper>
            <a href="mailto:akingbayiojo1@gmail.com" className="text-grey">
              akingbayiojo1@gmail.com
            </a>
          </PopUpWrapper>
        </div>

        <div className="mt-6 md:mt-0 w-full md:w-fit flex gap-20">
          <PopUpWrapper>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#portfolio" className="text-grey">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#about" className="text-grey">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-grey">
                  Contact me
                </a>
              </li>
              <li>
                <a href="mailto:akingbayiojo1@gmail.com" className="text-grey">
                  akingbayiojo1@gmail.com
                </a>
              </li>
            </ul>
          </PopUpWrapper>

          <PopUpWrapper>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="https://www.linkedin.com/in/akingbayi-ojo-440990335/"
                  className="text-grey"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://x.com/ak_in07" className="text-grey">
                  X (formerly Twitter)
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/ak.in_kun/"
                  className="text-grey"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://github.com/ak-nika" className="text-grey">
                  Github
                </a>
              </li>
            </ul>
          </PopUpWrapper>
        </div>
      </div>

      <PopUpWrapper>
        <hr className="border border-lightBlack my-20" />
      </PopUpWrapper>

      <div className="flex flex-col md:flex-row md:justify-between gap-6">
        <PopUpWrapper>
          <p className="small">
            Created by{" "}
            <a href="https://github.com/ak-nika" className="text-white">
              Nika
            </a>
          </p>
        </PopUpWrapper>

        <PopUpWrapper>
          <p className="small">&copy; 2024</p>
        </PopUpWrapper>
      </div>

      <div className="flex items-center justify-center w-full bg-black">
        <PopUpWrapper>
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#383838] to-[#959595] text-[11vw] uppercase tracking-widest text-nowrap">
            Akingbayi Ojo
          </h1>
        </PopUpWrapper>
      </div>
    </section>
  );
};

export default Footer;
