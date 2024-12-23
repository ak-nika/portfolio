import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import Portfolio from "../sections/Portfolio";
import Text from "../sections/Text";
import About from "../sections/About";
import Career from "../sections/Career";
import Benefits from "../sections/Benefits";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Portfolio />
      <Text />
      <About />
      <Career />
      <Benefits />
    </>
  );
};

export default Home;
