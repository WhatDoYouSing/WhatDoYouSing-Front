import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import basicSmile from "../../images/basic-smile.svg";
import clickedSmile from "../../images/basic-smile-red.svg";

export default function EmotionChipWithNum({
  text,
  src,
  num,
  isSelected = false,
  onClick = () => {},
  hideTextAndCount = false,
  disabled = false,
}) {
  const srcList =
    Array.isArray(src) && src.length >= 2 ? src : [basicSmile, basicSmile];
  const handleClick = () => {
    if (!disabled) {
      onClick();
    }
  };

  return (
    <Container
      onClick={handleClick}
      isSelected={isSelected}
      hideTextAndCount={hideTextAndCount}
      disabled={disabled}
    >
      <Wrapper
        onClick={handleClick}
        isSelected={isSelected}
        disabled={disabled}
      >
        <ImgDiv>
          <Img src={isSelected ? srcList[1] : srcList[0]}></Img>
        </ImgDiv>
        {!hideTextAndCount && <EmotionText>{text}</EmotionText>}
      </Wrapper>
      {!hideTextAndCount && <Count>{num}</Count>}
    </Container>
  );
}
const Container = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  ${({ isSelected, disabled }) =>
    isSelected &&
    !disabled &&
    css`
      border-color: var(--pointPink);
      color: var(--pointPink);
    `};
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: auto;
  border-radius: 4rem;
  border: 0.15rem solid var(--gray);
  background: var(--white);

  padding: 0.8rem 1.6rem;
  gap: 0.5rem;

  ${({ isSelected, disabled }) =>
    isSelected &&
    !disabled &&
    css`
      border-color: var(--pointPink);
      color: var(--pointPink);
    `};
`;

const ImgDiv = styled.div`
  width: 1.6rem;
  height: 1.6rem;
`;

const Img = styled.img``;

const EmotionText = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  white-space: nowrap;
`;
const Count = styled.div`
  color: var(--black);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
