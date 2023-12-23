import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { ReactComponent as Heart } from "../../images/heart.svg";

const GotoSong = () => {
  return (
    <Wrapper>
      <SongDiv>
        <SongTitle>1 + 1</SongTitle>
        <SongSinger>나상현씨밴드</SongSinger>
      </SongDiv>
      <Buttons>
        <LikeBtn>
          <Heart />
          234,345
        </LikeBtn>
        <GoListen>이 노래 들으러 가기</GoListen>
      </Buttons>
    </Wrapper>
  );
};

export default GotoSong;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
  align-self: stretch;
  padding: 4rem 0;
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

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const LikeBtn = styled.div`
  display: flex;
  padding: 1.2rem 2rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  align-self: stretch;
  border-radius: 8rem;
  background: var(--black);

  color: var(--white);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const GoListen = styled.div`
  display: flex;
  padding: 1.2rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 8rem;
  border: 0.15rem solid var(--gray);
  background: var(--white);

  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
