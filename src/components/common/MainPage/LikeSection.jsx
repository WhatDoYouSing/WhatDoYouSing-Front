import React, { useState, useEffect } from "react";
import { styled } from "styled-components";

import { ReactComponent as More } from "../../../images/more.svg";
import { ReactComponent as SampleHeart } from "../../../images/sample-heart.svg";

//components
import LyricsItem from "../LyricsItem";
import EmotionChip from "../EmotionChip";

const LikeSection = () => {
  return (
    <Wrapper>
      <NavLike>
        LIKE <More />
      </NavLike>
      <LikeDiv>
        <EmotionChip size="small" text="쾌감" />
        <Like>
          <SampleHeart /> 234,345
        </Like>
      </LikeDiv>
      <LyricsItem />
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
