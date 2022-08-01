import React from "react";

import {
  ServicesContainer,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH1,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <>
      <ServicesContainer>
        <ServicesH1></ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon />
            <ServicesH2></ServicesH2>
            <ServicesP></ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon />
            <ServicesH2></ServicesH2>
            <ServicesP></ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon />
            <ServicesH2></ServicesH2>
            <ServicesP></ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
