import React, { useState, useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroller";
import { useInView } from "react-intersection-observer";

//components
import RecLyrics from "./RecLyrics";
import RecLyricsSkeleton from "./RecLyricsSkeleton";
import useRecInfiniteQuery from "../../hooks/useRecInfiniteQuery";

//api
import { GetRecommendUser, GetRecommend } from "../../apis/main";

const RecCarousel = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView();
  const [renderSkeleton, setRenderSkeleton] = useState(false);

  //무한스크롤 관련 코드
  const {
    lyrics,
    isLoading,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useRecInfiniteQuery();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <Wrapper>
      {isLoading || isFetching ? (
        <RecLyricsSkeleton />
      ) : (
        <TestBox>
          {lyrics.length > 0 &&
            lyrics.map((item) => <RecLyrics key={item.id} item={item} />)}
          {/* {!inView && <div ref={ref} />} */}
          {isFetchingNextPage ? <RecLyricsSkeleton /> : <div ref={ref} />}
        </TestBox>
      )}
    </Wrapper>
  );
};

export default RecCarousel;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TestBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 41.8rem;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;

  /* &::-webkit-scrollbar {
    display: none;
  } */
`;
