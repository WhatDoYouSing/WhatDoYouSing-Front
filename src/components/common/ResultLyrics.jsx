import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import EmotionChip from "./EmotionChip";

import { ReactComponent as SampleHeart } from "../../images/sample-heart.svg";

import { useRecoilValue } from "recoil";
import { emotionListAtom } from "../../assets/recoil/recoil";

const ResultLyrics = ({
  showComment = false,
  id = 1,
  lyrics = "이 시간도 결국엔 끝나버린다고 모두 말을 하지만 난 신경쓰지 않아",
  title = "1 + 1",
  singer = "나상현씨밴드",
}) => {
  const navigate = useNavigate();

  return (
    <Navigate onClick={() => navigate(`/detail/${id}`)}>
      <Wrapper showComment={showComment}>
        <TitleLyrics showComment={showComment}>{lyrics}</TitleLyrics>

        <SongDiv>
          <SongTitle>{title}</SongTitle>
          <SongSinger>{singer}</SongSinger>
        </SongDiv>
      </Wrapper>
    </Navigate>
  );
};

export default ResultLyrics;

const Navigate = styled.div`
  align-self: stretch;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const LikeDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1.9rem;

  margin: 2rem 0;
`;

const Like = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;

  color: #000;
  font-size: 1.4rem;
  font-weight: 500;
`;

const ChipDiv = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;
const TitleLyrics = styled.div`
  display: flex;
  margin-bottom: 1.6rem;

  color: var(--Black, #262121);

  font-size: ${(props) => (props.showComment ? "4rem" : "3rem")};
  font-style: normal;
  font-weight: ${(props) => (props.showComment ? "900" : "800")};
  line-height: 105%;
  letter-spacing: ${(props) => (props.showComment ? "-0.12rem" : "-0.09rem")};
`;

const LyricsComment = styled.div`
  display: flex;
  width: 74%;
  margin-bottom: 4rem;

  overflow: hidden;
  color: var(--black);
  text-overflow: ellipsis;

  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.98px;
`;

const SongDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  color: var(--gray);

  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.16px;
`;

const SongTitle = styled.div`
  display: flex;
`;

const SongSinger = styled.div`
  display: flex;
`;
