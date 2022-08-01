import React from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Services from "../components/Services";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Services />
    </>
  );
};

export default Home;
