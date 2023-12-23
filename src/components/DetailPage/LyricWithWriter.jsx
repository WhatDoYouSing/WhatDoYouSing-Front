import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { ReactComponent as ProfileImg } from "../../images/profile.svg";
import EmotionChip from "../common/EmotionChip";

const LyricWithWriter = () => {
  return (
    <Wrapper>
      <ProfileWrapper>
        <ProfileImg />
        <EmotionChip size="small" text={`쾌감`} />
      </ProfileWrapper>
      <TitleLyrics>
        이 시간도 결국엔 끝나버린다고 모두 말을 하지만 난 신경쓰지 않아 우린
        여기 서있고 지울 수 없을거야
      </TitleLyrics>

      <LyricsComment>
        이 순간을 기억하고, 우리가 함께했음을 기억하고, 또 우리는 가리려해도
        절대 가려지지 않는 존재들임을 기억하자!
      </LyricsComment>
      <Writer>by.Zimni</Writer>
    </Wrapper>
  );
};

export default LyricWithWriter;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  // 기디 코멘트 따라 미디어 쿼리별 grid 설정할 예정
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
