import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { ReactComponent as ProfileImg } from "../../images/profile.svg";
import EmotionChip from "../common/EmotionChip";

import { useRecoilValue } from "recoil";
import { emotionListAtom, profileListAtom } from "../../assets/recoil/recoil";

const LyricWithWriter = ({ lyricContent }) => {
  const emotions = useRecoilValue(emotionListAtom);
  const profiles = useRecoilValue(profileListAtom);

  return (
    <Wrapper>
      <ProfileWrapper>
        <ProfileContainer>
          <img
            src={profiles[lyricContent.author_profile - 1]?.none_filled}
            alt="profileimg"
          ></img>
        </ProfileContainer>
        <EmotionChip
          size="small"
          text={emotions[lyricContent.sings_emotion]?.text}
          src={emotions[lyricContent.sings_emotion]?.src}
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

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: var(--gray);

  img {
    width: 21px;
    height: 21px;
  }
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
