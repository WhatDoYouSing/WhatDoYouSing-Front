import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

//components
import LikeCarousel from "./LikeCarousel";
import EmotionChip from "../EmotionChip";

import { ReactComponent as More } from "../../../images/more.svg";

//recoil
import { useSetRecoilState, useRecoilValue } from "recoil";
import {
  SelectEmotionState,
  SearchDropdownState,
  KeywordState,
} from "../../../assets/recoil/apiRecoil";

const LikeSection = () => {
  const navigate = useNavigate();
  const setSearchKeyword = useSetRecoilState(KeywordState);
  const setSelectOption = useSetRecoilState(SearchDropdownState);
  const setSearchEmotion = useSetRecoilState(SelectEmotionState);

  useEffect(() => {
    setSearchKeyword("");
    setSearchEmotion("");
    setSelectOption("최신순");
  }, []);

  const moveSearchLatest = () => {
    setSelectOption("좋아요순");
    navigate("/result");
  };

  return (
    <Wrapper>
      <NavLike onClick={moveSearchLatest}>
        LIKE <More />
      </NavLike>
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
