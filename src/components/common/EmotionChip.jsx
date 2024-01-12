import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";

const sizes = {
  small: {
    padding: "0.8rem 1.6rem",
    gap: "0.5rem",
  },
  medium: {
    padding: "1.4rem 2rem",
    gap: "0.5rem",
  },
  large: {
    padding: "1.6rem 2.4rem",
    gap: "0.8rem",
  },
};

const imgSizes = {
  small: {
    width: "1.6rem",
    height: "1.6rem",
  },
  medium: {
    width: "1.6rem",
    height: "1.6rem",
  },
  large: {
    width: "2.4rem",
    height: "2.4rem",
  },
};

const fontSizes = {
  small: {
    fontSize: "1.4rem",
    fontWeight: "500",
  },
  medium: {
    fontSize: "1.6rem",
    fontWeight: "500",
  },
  large: {
    fontSize: "2.4rem",
    fontWeight: "600",
  },
};

const sizeStyles = ({ size }) => css`
  padding: ${sizes[size].padding};
  gap: ${sizes[size].gap};
`;

const imgSizeStyles = ({ imgSize }) => css`
  width: ${imgSizes[imgSize].width};
  height: ${imgSizes[imgSize].height};
`;

const fontSizeStyles = ({ fontSize }) => css`
  font-size: ${fontSizes[fontSize].fontSize};
  font-weight: ${fontSizes[fontSize].fontWeight};
`;

const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 4rem;
  border: 0.15rem solid var(--gray);
  background: var(--white);

  ${sizeStyles}

  ${({ isSelected }) =>
    isSelected &&
    css`
      border-color: var(--pointPink);
      color: var(--pointPink);
    `};
`;

const ImgDiv = styled.div``;

const EmotionText = styled.div`
  ${fontSizeStyles}
`;

const Img = styled.img`
  ${imgSizeStyles};
`;

EmotionChip.defaultProps = {
  size: "medium",
};

export default function EmotionChip({
  size,
  text,
  isSelected = false,
  src,
  onClick = () => {},
}) {
  const srcList =
    Array.isArray(src) && src.length >= 2 ? src : [undefined, undefined];
  return (
    <Wrapper size={size} onClick={onClick} isSelected={isSelected}>
      <ImgDiv>
        <Img src={isSelected ? srcList[1] : srcList[0]} imgSize={size}></Img>
      </ImgDiv>
      <EmotionText fontSize={size}>{text}</EmotionText>
    </Wrapper>
  );
}
