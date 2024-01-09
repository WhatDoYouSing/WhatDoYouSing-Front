import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";

//components
import LyricsItem from "../LyricsItem";

//recoil
import { useRecoilValue } from "recoil";
import { LikeListState } from "../../../assets/recoil/apiRecoil";

const LikeCarousel = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    swipeToSlide: true,
  };

  const likedList = useRecoilValue(LikeListState);

  return (
    <Wrapper>
      <Slider {...settings} dotsClass="slick-dots-custom">
        {likedList !== null &&
          likedList.map((item) => (
            <LyricsItem
              showHeart={true}
              key={item.id}
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
