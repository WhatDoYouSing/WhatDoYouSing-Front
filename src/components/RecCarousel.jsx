import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";

//components
import RecLyrics from "./common/RecLyrics";

const RecCarousel = ({ savedList }) => {
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
    centeredSlides: true,
  };
  return (
    <Wrapper>
      <Slider {...settings} dotsClass="slick-dots-custom">
        {savedList !== null &&
          savedList.map((item) => (
            <RecLyrics
              isRec={true}
              key={item.id}
              id={item.id}
              emotion={item.sings_emotion}
              likes={item.likes_count}
              lyrics={item.lyrics}
              content={item.content}
              title={item.title}
              singer={item.singer}
            />
          ))}
      </Slider>
    </Wrapper>
  );
};

export default RecCarousel;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 41.8rem; */
`;
