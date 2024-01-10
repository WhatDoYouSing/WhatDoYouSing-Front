import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import music from "../../../images/fab.svg";

const FloatingBtn = () => {
  const navigate = useNavigate();
  const isLogin = localStorage.getItem("token") !== null;
  return (
    <Wrapper onClick={() => navigate(isLogin ? "/post" : "/initial")}>
      <ImgDiv>
        <Img src={music} />
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

  @media (min-width: 1200px) {
    right: 18.4rem;
  }
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
  filter: drop-shadow(0px 5px 25px rgba(0, 0, 0, 0.2));
`;

const Img = styled.img`
  /* width: 2.4rem;
  height: 2.2rem; */
`;
