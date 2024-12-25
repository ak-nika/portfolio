import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import Portfolio from "../sections/Portfolio";
import Text from "../sections/Text";
import About from "../sections/About";
import Career from "../sections/Career";
import Benefits from "../sections/Benefits";
import Languages from "../sections/Languages";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Portfolio />
      <Text />
      <About />
      <Languages />
      <Career />
      <Benefits />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
