import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const RecLyrics = ({
  isRec = false,
  showComment = true,
  showChip = false,
  showHeart = false,
  id = 1,
  emotion = 1,
  likes = 0,
  lyrics = "이 시간도 결국엔 끝나버린다고 모두 말을 하지만 난 신경쓰지 않아",
  content = "이 순간을 기억하고, 우리가 함께했음을 기억하고, 또 우리는 가리려해도 절대 가려지지 않는 존재들임을 기억하자!",
  title = "1 + 1",
  singer = "나상현씨밴드",
}) => {
  const navigate = useNavigate();

  return (
    <Wrapper onClick={() => navigate(`/detail/${id}`)}>
      <TitleLyrics showComment={showComment}>{lyrics}</TitleLyrics>
      {showComment && <LyricsComment>{content}</LyricsComment>}
      <SongDiv>
        <SongTitle>{title}</SongTitle>
        <SongSinger>{singer}</SongSinger>
      </SongDiv>
    </Wrapper>
  );
};

export default RecLyrics;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: 41.8rem;
`;

const TitleLyrics = styled.div`
  display: flex;
  margin-bottom: 1.6rem;

  color: var(--Black, #262121);

  font-size: 4rem;
  font-style: normal;
  font-weight: 900;
  line-height: 105%;
  letter-spacing: -0.12rem;
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
