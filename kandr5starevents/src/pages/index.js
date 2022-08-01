import React from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import InfoSection from "../InfoSection";
import { homeObjOne, homeObjTwo, homeObjThree } from "../InfoSection/Data";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
    </>
  );
};

export default Home;
