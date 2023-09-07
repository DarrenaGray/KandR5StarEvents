import React, { useState } from "react";
// import { animateScroll as scroll } from "react-scroll";

import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import InfoSection from "../components/InfoSection";
import Sidebar from "../components/Sidebar";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/InfoSection/Data";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";

const Home = () => {
  // States whether mobile icon is open or closed
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // // ---
  // const [scrollNav, setScrollNav] = useState(false);

  // const changeNav = () => {
  //   // On scroll if the navbar is >= 80px then the navbar is black else its transparent
  //   if (window.scrollY >= 80) {
  //     setScrollNav(true);
  //   } else {
  //     setScrollNav(false);
  //   }
  // };

  // // To prevent erratic behvior when scrolling
  // useEffect(() => {
  //   window.addEventListener("scroll", changeNav);
  // }, []);

  // const toggleHome = () => {
  //   scroll.scrollToTop();
  // };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      {/* <InfoSection {...homeObjTwo} /> */}

      <Services toggle={toggle} />
      <Gallery />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
