import React, { useState, useEffect, useRef } from "react";
import { styled, css } from "styled-components";

import { ReactComponent as Character } from "../../images/icons/henry3.svg";

const ImgCard = ({ captureRef }) => {
  return (
    <>
      <Wrapper ref={captureRef}>
        <Container>
          <Lyric>
            이 시간도 결국엔 끝나버린다고 모두 말을 하지만 난 신경쓰지 않아 우린
            여기 서있고 지울 수 없을거야
          </Lyric>
          <Detail>
            이 순간을 기억하고, 우리가 함께했음을 기억하고, 또 <br />
            우리는 가리려해도 절대 가려지지 않는 존재들임을 <br />
            기억하자!
          </Detail>
          <More>
            <Info>
              <Song>1+1</Song>
              <Singer>나상현씨밴드</Singer>
            </Info>
            <Character width={60} height={60} />
          </More>
        </Container>
      </Wrapper>
    </>
  );
};

export default ImgCard;

const Wrapper = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  width: 35.2556rem;
  height: 40.436rem;
  padding: 3.972rem 2.2653rem;
  align-items: flex-start;

  border-radius: 1.6516rem;
  background: var(--white);
`;

const Container = styled.div`
  display: flex;
  width: 30.7249rem;
  flex-direction: column;
  align-items: flex-start;
`;

const Lyric = styled.div`
  width: 100%;
  align-self: stretch;
  color: var(--Black, #262121);
  font-size: 3.433rem;
  font-style: normal;
  font-weight: 900;
  line-height: 105%;
  letter-spacing: -0.103rem;
`;

const Detail = styled.p`
  white-space: pre-line;
  display: flex;
  width: 22.743rem;
  /* height: 5.4rem; */
  overflow: hidden;
  color: var(--Black, #262121);
  text-overflow: ellipsis;
  font-size: 1.2015rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 18.023px */
  letter-spacing: -0.0841rem;
  margin-top: 1.373rem;
  margin-bottom: 3.433rem;
`;

const More = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 9rem;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.687rem;
`;

const Song = styled.div`
  width: 146.759px;
  color: var(--Gray, #d9d9d9);
  font-family: Apple SD Gothic Neo;
  font-size: 13.732px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 17.851px */
  letter-spacing: -0.137px;
`;

const Singer = styled.div`
  width: 146.759px;
  color: var(--Gray, #d9d9d9);
  font-family: Apple SD Gothic Neo;
  font-size: 13.732px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 17.851px */
  letter-spacing: -0.137px;
`;
