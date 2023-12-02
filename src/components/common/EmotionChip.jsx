import React from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as BasicSmile } from "../../images/basic-smile.svg";

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
  display: inline-flex;
  justify-content: center;
  align-items: center;

  border-radius: 4rem;
  border: 0.15rem solid var(--Gray, #d9d9d9);
  background: var(--White, #fff);

  ${sizeStyles}
`;

const ImgDiv = styled.div`
  ${imgSizeStyles};
`;

const EmotionText = styled.div`
  ${fontSizeStyles}
`;

EmotionChip.defaultProps = {
  size: "small",
};

export default function EmotionChip({ size }) {
  const text = "감정";
  console.log(size);
  return (
    <Wrapper size={size}>
      <ImgDiv imgSize={size}>
        <BasicSmile />
      </ImgDiv>
      <EmotionText fontSize={size}>{text}</EmotionText>
    </Wrapper>
  );
}
