import React, { useState, useEffect } from "react";
import { styled, css } from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

import { ReactComponent as Delete } from "../images/delete.svg";

const IntroTopbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isSignUp = location.pathname === "/signup";

  return (
    <Wrapper>
      <Container>
        <ImgDiv>
          <Delete
            onClick={() => {
              navigate("/initial");
            }}
          />
        </ImgDiv>
        <Title>{isSignUp ? "회원가입" : "로그인"}</Title>
        {isSignUp ? <NextBtn>다음으로</NextBtn> : <></>}
      </Container>
    </Wrapper>
  );
};

export default IntroTopbar;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-end;

  width: 100%;
  height: 11.3rem;
  background: var(--white);

  color: var(--black);
  z-index: 9999;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 0 1.6rem 2.7rem;

  @media (min-width: 1100px) {
    padding: 0 16.8rem 2.7rem;
  }
`;

const ImgDiv = styled.div`
  position: absolute;
  left: 1.6rem;
`;

const Title = styled.div`
  color: var(--Black, #262121);
  text-align: center;
  font-size: 2rem;
  font-style: normal;
  font-weight: 800;
`;

const NextBtn = styled.button`
  position: absolute;
  display: flex;
  width: 8.1rem;
  height: 4.1rem;
  padding: 1.2rem 1.6rem;
  justify-content: center;
  align-items: center;
  right: 1.6rem;

  flex-shrink: 0;
  border-radius: 1.6rem;
  background: var(--lightGray);

  color: var(--darkGray);
  text-align: center;

  font-size: 1.4rem;
  font-weight: 500;
`;
