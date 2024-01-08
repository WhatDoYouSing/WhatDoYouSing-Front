import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

//components
import LikeCarousel from "./LikeCarousel";
import EmotionChip from "../EmotionChip";

const LikeSection = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <LikeCarousel />
    </Wrapper>
  );
};

export default LikeSection;

const Wrapper = styled.section`
  margin-bottom: 5rem;
`;
