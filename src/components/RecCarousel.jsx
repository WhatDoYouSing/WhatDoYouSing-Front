import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroller";
import Slider from "react-slick";

//components
import RecLyrics from "./common/RecLyrics";

//api
import { GetRecommendUser, GetRecommend } from "../apis/main";

const RecCarousel = () => {
  const navigate = useNavigate();

  const [dragging, setDragging] = useState(false);
  const [mouseDownTime, setMouseDownTime] = useState(0);
  const [savedList, setSavedList] = useState([]);

  useEffect(() => {
    const handleClick = async (page) => {
      const savedList = await GetRecommendUser(page);
      setSavedList(savedList.data);
      console.log(savedList.page, savedList.totalPage);
    };

    handleClick();
  }, []);

  //무한스크롤 관련 코드
  // const { hasNextPage, fetchNextPage } = useInfiniteQuery(
  //   ["getNewRecommend"],
  //   async ({ pageParam = 1 }) => await GetRecommendUser(pageParam)
  //   {
  //     getNextPageParam: (lastPage) =>
  //       lastPage.page !== lastPage.total_pages
  //         ? lastPage.page + 1
  //         : undefined,
  //     suspense: true,
  //     staleTime: 60 * 1000,
  //   }
  // );

  // const rawMovieData = data?.pages.map((page) => page.results).flat() || [];
  // const getByFarMovieData = rawMovieData;

  //클릭과 드래그 구분 위한 코드
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

  //캐러셀 라이브러리 세팅
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
        {/* <InfiniteScroll hasMore={hasNextPage} loadMore={() => fetchNextPage()}> */}
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
        {/* </InfiniteScroll> */}
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
