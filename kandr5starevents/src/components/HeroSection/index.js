import React from "react";
import Video from "../../videos/video2.mp4";

import { HeroContainer, HeroBg, VideoBg, HeroContent } from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent></HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
