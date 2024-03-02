import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Slider from "react-slick";

//components
import LikeLyrics from "../LikeLyrics";

//recoil
import { useRecoilValue } from "recoil";
import { LikeListState } from "../../../assets/recoil/apiRecoil";

const LikeCarousel = () => {
  const navigate = useNavigate();

  const [dragging, setDragging] = useState(false);
  const [mouseDownTime, setMouseDownTime] = useState(0);

  const handleBeforeChange = useCallback(() => {
    setDragging(true);
  }, []);

  const handleAfterChange = useCallback((i) => {
    setDragging(false);
  }, []);

  const handleMouseDown = () => {
    setMouseDownTime(Date.now());
  };

  const handleMouseUp = (id) => {
    const mouseUpTime = Date.now();
    const clickDuration = mouseUpTime - mouseDownTime;

    if (!dragging && clickDuration < 100) {
      navigate(`/detail/${id}`);
    }
  };

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
    touchThreshold: 100,
    beforeChange: handleBeforeChange,
    afterChange: handleAfterChange,
  };

  const likedList = useRecoilValue(LikeListState);

  return (
    <Wrapper>
      <Slider {...settings} dotsClass="slick-dots-custom">
        {likedList !== null &&
          likedList.map((item) => (
            <LikeLyrics
              showHeart={true}
              key={item.id}
              id={item.id}
              emotion={item.sings_emotion}
              likes={item.likes_count}
              lyrics={item.lyrics}
              content={item.content}
              title={item.title}
              singer={item.singer}
              onMouseDown={handleMouseDown}
              onMouseUp={() => handleMouseUp(item.id)}
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
