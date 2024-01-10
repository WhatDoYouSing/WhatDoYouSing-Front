import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import IntroTopbar from "../../components/IntroTopbar";

import { ReactComponent as Symbol } from "../../images/symbol.svg";
import wordmark from "../../images/icons/wordmark-kor.svg";
import wordmarkE from "../../images/icons/wordmark-eng.svg";
import { ReactComponent as Kakao } from "../../images/kakao.svg";

//api
import { KaKaoLogin } from "../../apis/user";

const InitialPage = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <IntroTopbar delPath="/" />
      <Box>
        <ImgBoxS>
          <Symbol />
        </ImgBoxS>
        <ImgBoxW>
          <Wordmark src={wordmark} />
        </ImgBoxW>
        <ImgBoxE>
          <Wordmark src={wordmarkE} />
        </ImgBoxE>
      </Box>
      <SideBox>
        <Login>로그인</Login>
        <BtnBox>
          <SignupBtn
            onMouseUp={() => {
              navigate("/signup");
            }}
          >
            회원가입
          </SignupBtn>
          <LoginBtn
            onMouseUp={() => {
              navigate("/login");
            }}
          >
            로그인
          </LoginBtn>
          <KakaoBtn onClick={KaKaoLogin}>
            <Kakao />
            카카오 로그인
          </KakaoBtn>
        </BtnBox>
      </SideBox>
    </Wrapper>
  );
};

export default InitialPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    height: 100%;
  }
`;

const ColumnStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Box = styled(ColumnStyle)`
  margin: 23.7rem 0 4.2rem;
  gap: 2.5rem;

  @media (min-width: 1200px) {
    margin: 0;
    gap: 2.8rem;
  }
`;

const ImgBoxS = styled.div`
  width: 12rem;
  height: 12rem;

  @media (min-width: 1200px) {
    width: 18rem;
    height: 17.83rem;
  }
`;

const ImgBoxW = styled.div`
  width: 12rem;
  height: 2.6rem;

  @media (min-width: 1200px) {
    display: none;
  }
`;

const ImgBoxE = styled.div`
  width: 18rem;

  @media (max-width: 1200px) {
    display: none;
  }
`;

const Wordmark = styled.img``;

const SideBox = styled(ColumnStyle)`
  width: 100%;

  @media (min-width: 1200px) {
    display: flex;
    padding: 10rem;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 1.6rem;
    border: 1.5px solid var(--Light-Gray, #fafafa);
    background: var(--white);

    box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.1);
  }
`;

const Login = styled.div`
  color: var(--Black, #262121);
  text-align: center;

  font-size: 3.2rem;
  font-weight: 800;

  margin-bottom: 6.4rem;

  @media (max-width: 1200px) {
    display: none;
  }
`;

const BtnBox = styled(ColumnStyle)`
  gap: 1rem;
  width: 100%;
`;

const Btn = styled.div`
  display: flex;
  width: 29.8rem;
  padding: 2rem 4.8rem;
  justify-content: center;
  align-items: center;

  border-radius: 1.2rem;

  font-size: 20px;
  font-weight: 600;
  cursor: pointer;

  @media (min-width: 1200px) {
    width: 100%;
  }
`;

const SignupBtn = styled(Btn)`
  background: var(--Black, #262121);
  color: var(--White, #fff);

  &:active {
    background-color: var(--pointPink);
    color: var(--white);
    border: none;
  }
`;

const LoginBtn = styled(Btn)`
  border: 1.5px solid var(--Gray, #d9d9d9);
  background: var(--White, #fff);

  &:active {
    background-color: var(--pointPink);
    color: var(--white);
    border: none;
  }
`;

const KakaoBtn = styled(Btn)`
  background: #fee500;
  color: #3b1d1d;
  gap: 1.6rem;
`;
