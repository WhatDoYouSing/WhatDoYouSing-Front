import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import Slider from "react-slick";

//components
import RecLyrics from "./common/RecLyrics";

const RecCarousel = ({ savedList }) => {
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
    touchThreshold: 100,
    beforeChange: handleBeforeChange,
    afterChange: handleAfterChange,
  };
  return (
    <Wrapper>
      <Slider {...settings} dotsClass="slick-dots-custom">
        {savedList !== null &&
          savedList.map((item) => (
            <RecLyrics
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

export default RecCarousel;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 41.8rem; */
`;
