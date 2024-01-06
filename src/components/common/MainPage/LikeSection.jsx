import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import { useRecoilValue } from "recoil";
import { emotionListAtom } from "../../../assets/recoil/recoil";

import { ReactComponent as More } from "../../../images/more.svg";
import { ReactComponent as SampleHeart } from "../../../images/sample-heart.svg";

//components
import LikeCarousel from "./LikeCarousel";
import EmotionChip from "../EmotionChip";

const LikeSection = () => {
  const navigate = useNavigate();
  const emotions = useRecoilValue(emotionListAtom);

  return (
    <Wrapper>
      <NavLike onClick={() => navigate("/result")}>
        LIKE <More />
      </NavLike>
      <LikeDiv>
        <EmotionChip
          size="small"
          text={emotions[0].text}
          src={emotions[0].src}
        />
        <Like>
          <SampleHeart /> 234,345
        </Like>
      </LikeDiv>
      <LikeCarousel />
    </Wrapper>
  );
};

export default LikeSection;

const Wrapper = styled.section`
  margin-bottom: 5rem;
`;

const NavLike = styled.div`
  display: flex;
  align-items: center;
  height: 4.8rem;
  gap: 0.4rem;

  color: var(--Black, #262121);
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.04rem;

  border-bottom: 0.05rem solid rgba(38, 33, 33, 0.2);
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
