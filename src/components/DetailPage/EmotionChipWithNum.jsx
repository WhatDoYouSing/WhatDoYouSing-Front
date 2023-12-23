import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as BasicSmile } from "../../images/basic-smile.svg";
import { ReactComponent as ClickedSmile } from "../../images/basic-smile-red.svg";

export default function EmotionChipWithNum({
  text,
  num,
  isSelected = false,
  onClick = () => {},
  hideTextAndCount = false,
  disabled = false,
}) {
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
        <ImgDiv>{isSelected ? <ClickedSmile /> : <BasicSmile />}</ImgDiv>
        {!hideTextAndCount && <EmotionText>{text}</EmotionText>}
      </Wrapper>
      {!hideTextAndCount && <Count>{num}</Count>}
    </Container>
  );
}
const Container = styled.div`
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;

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
const EmotionText = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  white-space: nowrap;
`;
const Count = styled.div`
  width: 1.3rem;
  height: 1.6rem;
  color: var(--black);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 0.5rem;
`;
