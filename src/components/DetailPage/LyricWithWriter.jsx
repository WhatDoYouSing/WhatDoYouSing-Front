import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { ReactComponent as ProfileImg } from "../../images/profile.svg";
import EmotionChip from "../common/EmotionChip";

import { useRecoilValue } from "recoil";
import { emotionListAtom } from "../../assets/recoil/recoil";

const LyricWithWriter = ({ lyricContent }) => {
  const emotions = useRecoilValue(emotionListAtom);
  return (
    <Wrapper>
      <ProfileWrapper>
        <ProfileImg />
        <EmotionChip
          size="small"
          text={emotions[0].text}
          src={emotions[0].src}
        />
      </ProfileWrapper>
      <TitleLyrics>{lyricContent.lyrics}</TitleLyrics>

      <LyricsComment>{lyricContent.content}</LyricsComment>
      <Writer>{lyricContent.author_nickname}</Writer>
    </Wrapper>
  );
};

export default LyricWithWriter;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  padding-top: 1.6rem;
  padding-bottom: 2rem;
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
  margin-bottom: 2rem;

  overflow: hidden;
  color: var(--Black, #262121);
  text-overflow: ellipsis;

  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.98px;
`;
const Writer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
`;
const SongDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  color: var(--Gray, #d9d9d9);

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
