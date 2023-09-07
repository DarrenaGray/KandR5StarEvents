import styled from "styled-components";

export const GalleryContainer = styled.div`
  height: 800px;
  margin: 0 auto;
  display: inline-block;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: #010606; */
`;

export const GalleryWrapper = styled.div`
  /* max-width: 1000px; */
  margin: 0 auto;
  width: 100%;
  /* fr is fractional unit and 1fr is for 1 part of the available space */
  /* grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px; */
  /* padding: 0 50px; */
`;

export const Carousel = styled.div`
  min-width: 75%;
  /* display: flex; */
  /* flex-direction: row; */
`;

export const GalleryCard = styled.div`
  margin: 100px;
  &:main-slide {
    padding-top: 300%;
  }
  /* display: flex;
  flex-direction: column;
  justify-content: flex-start; */
  /* align-items: center; */
  /* border-radius: 10px;
  max-height: 340px; */
  /* padding: 30px; */
`;

export const GalleryImg = styled.img`
  /* height: 200px;
  width: 200px; */
  /* height: 160px;
  width: 160px;
  margin-bottom: 10px; */
`;

export const GalleryH1 = styled.h1`
  /* font-size: 2.5rem;
  color: #000; */
  /* margin-bottom: 64px; */
`;
