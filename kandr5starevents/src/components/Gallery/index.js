import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import {
  GalleryContainer,
  GalleryCarousel,
  GalleryWrapper,
  GalleryCard,
  GalleryH1,
  GalleryImg,
} from "./GalleryElements";

const Gallery = () => {
  //   const onChangeEvent = () => {
  //     console.log("onChange Event Triggered");
  //   };

  //   const onClickItemEvent = () => {
  //     console.log("onChange Event Triggered");
  //   };

  //   const onClickThumbEvent = () => {
  //     console.log("onChange Event Triggered");
  //   };

  //   const onSwipeStartEvent = () => {
  //     console.log("onSwipeStart Event Triggered");
  //   };

  //   const onSwipeEndEvent = () => {
  //     console.log("onSwipeEnd Event Triggered");
  //   };

  //   const onSwipeMoveEvent = () => {
  //     console.log("onSwipeMove Event Triggered");
  //   };

  return (
    <GalleryContainer>
      <GalleryH1>Image Gallery</GalleryH1>
      {/* <GalleryWrapper> */}
      <Carousel showThumbs={true} showArrows={true} useKeyboardArrows={true}>
        <GalleryCard>
          <GalleryImg src="https://picsum.photos/700/400?img=1" />
          <p className="legend"></p>
        </GalleryCard>
        <GalleryCard>
          <GalleryImg src="https://picsum.photos/700/400?img=2" />
          <p className="legend">My Classic Still 2</p>
        </GalleryCard>
        <GalleryCard>
          <GalleryImg src="https://picsum.photos/700/400?img=3" />
          <p className="legend">My Classic Still 3</p>
        </GalleryCard>
      </Carousel>
      {/* </GalleryWrapper> */}
      {/* <Carousel
        autoPlay
        interval="5000"
        infiniteLoop
        transitionTime="1000"
        onChange={onChangeEvent}
        onClickItem={onClickItemEvent}
        onClickThumb={onClickThumbEvent}
        onSwipeStart={onSwipeStartEvent}
        onSwipeEnd={onSwipeEndEvent}
        onSwipeMove={onSwipeMoveEvent}
      >
        <GalleryCard>
          <GalleryImg src="https://picsum.photos/700/400?img=1" />
        </GalleryCard>
        <GalleryCard>
          <GalleryImg src="https://picsum.photos/700/400?img=2" />
        </GalleryCard>
        <GalleryCard>
          <GalleryImg src="https://picsum.photos/700/400?img=3" />
        </GalleryCard>
        <GalleryImg src="https://picsum.photos/700/400?img=2" />
        <GalleryImg src="https://picsum.photos/700/400?img=3" />
      </Carousel> */}
    </GalleryContainer>
  );
};

export default Gallery;

// GalleryContainer, GalleryH1, GalleryCarousel, GalleryCard
