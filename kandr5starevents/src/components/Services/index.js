import React from "react";

import Icon1 from "../../images/bride.jpg";
import Icon2 from "../../images/Birthday.jpg";
import Icon3 from "../../images/Gradimages.jpg";

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Weddings</ServicesH2>
            <ServicesP>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis reiciendis eos blanditiis vero cumque reprehenderit
              mollitia delectus necessitatibus, commodi voluptas minus nisi,
              cum, maiores quis excepturi impedit fuga laborum harum.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Parties</ServicesH2>
            <ServicesP>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              debitis id autem nobis accusantium repellendus magni sed modi
              dolor placeat, ab consequuntur magnam tenetur veniam? Obcaecati
              neque error doloremque quis.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Graduations</ServicesH2>
            <ServicesP>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
              quidem laboriosam consectetur autem aut repellendus beatae dolor
              molestias, officiis quas iste, assumenda quaerat?
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
