import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import { ReactComponent as Music } from "../../../images/music.svg";

const FloatingBtn = () => {
  const navigate = useNavigate();
  return (
    <Wrapper onClick={() => navigate("/post")}>
      <ImgDiv>
        <Music />
      </ImgDiv>
    </Wrapper>
  );
};

export default FloatingBtn;

const Wrapper = styled.section`
  position: fixed;
  top: 61rem;
  right: 1.6rem;

  z-index: 100;

  cursor: pointer;
`;

const ImgDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 6rem;
  height: 6rem;
  flex-shrink: 0;
  border-radius: 50%;

  background-color: var(--pointPink);
  filter: drop-shadow(0px 5px 25px rgba(0, 0, 0, 0.1));
`;
