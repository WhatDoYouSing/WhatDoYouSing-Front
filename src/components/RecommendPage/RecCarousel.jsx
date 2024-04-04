import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  startTransition,
} from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { useInView } from "react-intersection-observer";

//components
import RecLyrics from "./RecLyrics";
import RecLyricsSkeleton from "./RecLyricsSkeleton";
import useRecInfiniteQuery from "../../hooks/useRecInfiniteQuery";
import useThrottle from "../../hooks/useThrottle";

const RecCarousel = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    threshold: 0.1,
    rootMargin: "100px",
  });

  //드래그 가능
  const testBoxRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [scrollPos, setScrollPos] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartPos(e.clientY);
    setScrollPos(testBoxRef.current.scrollTop);
    testBoxRef.current.style.userSelect = "none";
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    requestAnimationFrame(() => {
      const diff = e.clientY - startPos;
      testBoxRef.current.scrollTop = scrollPos - diff;
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    testBoxRef.current.style.userSelect = "auto";
  };

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
    console.log("ref 보이나? :", inView);
    if (inView) {
      startTransition(() => {
        fetchNextPage();
      });
    }
  }, [inView]);

  // 무한 스크롤로 데이터가 로드될 때 이전 스크롤 위치 유지
  useEffect(() => {
    if (!isFetchingNextPage) {
      const scrollY = sessionStorage.getItem("scrollPosition") || 0;
      testBoxRef.current.scrollTop = scrollY;
      sessionStorage.removeItem("scrollPosition");
    }
  }, [isFetchingNextPage]);

  // 스크롤 위치 저장
  const handleScroll = () => {
    const scrollY = testBoxRef.current.scrollTop;
    sessionStorage.setItem("scrollPosition", scrollY);
  };

  const throttledHandleScroll = useThrottle(handleScroll, 300);

  return (
    <Wrapper>
      <TestBox
        ref={testBoxRef}
        onScroll={throttledHandleScroll}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {lyrics.length > 0 &&
          lyrics.map((item) => <RecLyrics key={item.id} item={item} />)}
        {hasNextPage &&
          (isFetchingNextPage ? <RecLyricsSkeleton /> : <Observer ref={ref} />)}
      </TestBox>
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

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Observer = styled.div`
  width: 80vw;
  height: 40px;
  background-color: var(--darkGray);
`;
