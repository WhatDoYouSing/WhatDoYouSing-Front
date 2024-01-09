import React, { useState, useEffect, useRef } from "react";
import { styled, css } from "styled-components";

import emotionData from "../../assets/data/EmotionData";
import { ReactComponent as Character } from "../../images/icons/henry3.svg";

const ImgCard = ({ captureRef, data }) => {
  const emotion = emotionData;
  // console.log("감정id: ", data.sings_emotion);

  return (
    <>
      <Wrapper ref={captureRef}>
        <Container>
          <Lyric>{data.lyrics}</Lyric>
          <Detail>{data.content}</Detail>
          <More>
            <Info>
              <Song>{data.title}</Song>
              <Singer>{data.singer}</Singer>
            </Info>
            <img
              src={emotion[data.sings_emotion].src[0]}
              width={79}
              height={79}
            />
          </More>
        </Container>
      </Wrapper>
    </>
  );
};

export default ImgCard;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  width: 35.2556rem;
  height: auto;
  padding: 3.972rem 2.2653rem;
  align-items: flex-start;
  border-radius: 16.516px;
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

const Detail = styled.div`
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
  /* margin-bottom: 3.433rem; */
`;

const More = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
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
