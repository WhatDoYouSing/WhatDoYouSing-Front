import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";

//components
import LyricsItem from "./common/LyricsItem";

const RecCarousel = () => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    speed: 600,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
  };
  return (
    <Wrapper>
      <Slider {...settings} dotsClass="slick-dots-custom">
        <LyricsItem />
        <LyricsItem />
        <LyricsItem />
        <LyricsItem />
        <LyricsItem />
      </Slider>
    </Wrapper>
  );
};

export default RecCarousel;

const Wrapper = styled.div``;
