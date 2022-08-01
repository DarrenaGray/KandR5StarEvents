import React from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import InfoSection from "../InfoSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Services />
      <InfoSection />
    </>
  );
};

export default Home;
