import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";

//components
import LyricsItem from "../LyricsItem";

const LikeCarousel = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
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

export default LikeCarousel;

const Wrapper = styled.div`
  .slick-dots {
    .slick-active {
      button::before {
        width: 2rem;
      }
    }

    li {
      color: var(--gray);
    }
  }
`;
