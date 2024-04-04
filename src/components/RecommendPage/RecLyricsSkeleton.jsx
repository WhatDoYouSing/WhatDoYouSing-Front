import styled, { keyframes } from "styled-components";
import React from "react";

const RecLyricsSkeleton = () => {
  return (
    <Wrapper>
      <TitleLyrics />
      <LyricsComment />
      <SongDiv />
    </Wrapper>
  );
};

export default RecLyricsSkeleton;

// 애니메이션 정의
const loadingAnimation = keyframes`
  0% {
    background-color: #e0e0e0;
  }
  50% {
    background-color: #f5f5f5;
  }
  100% {
    background-color: #e0e0e0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  justify-content: center;

  width: 90vw;
  height: 41.8rem;
  scroll-snap-align: center;

  gap: 1.6rem;
`;

const TitleLyrics = styled.div`
  height: 25.2rem;
  width: 100%;
  min-width: 20rem;
  border-radius: 1rem;
  background: #e7e7e7;
  animation: ${loadingAnimation} 1.5s infinite ease-in-out;
`;

const LyricsComment = styled.div`
  height: 8.4rem;
  width: 100%;
  min-width: 20rem;
  border-radius: 1rem;
  background: #e7e7e7;
  animation: ${loadingAnimation} 1.5s infinite ease-in-out;
`;

const SongDiv = styled.div`
  width: 17.1rem;
  height: 5rem;
  border-radius: 1rem;
  background: #e7e7e7;
  animation: ${loadingAnimation} 1.5s infinite ease-in-out;
`;
