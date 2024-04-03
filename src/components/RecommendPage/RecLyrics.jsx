import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const RecLyrics = ({ showComment = true, item }) => {
  const navigate = useNavigate();

  return (
    <Wrapper onClick={() => navigate(`/detail/${item.id}`)}>
      <TitleLyrics showComment={showComment}>{item.lyrics}</TitleLyrics>
      {showComment && <LyricsComment>{item.content}</LyricsComment>}
      <SongDiv>
        <SongTitle>{item.title}</SongTitle>
        <SongSinger>{item.singer}</SongSinger>
      </SongDiv>
    </Wrapper>
  );
};

export default RecLyrics;

const Wrapper = styled.div`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: 100%;
  scroll-snap-align: center;
  cursor: pointer;
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
