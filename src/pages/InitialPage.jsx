import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import IntroTopbar from "../components/IntroTopbar";

import { ReactComponent as Symbol } from "../images/symbol.svg";
import { ReactComponent as Watermark } from "../images/watermark-kor.svg";
import { ReactComponent as Kakao } from "../images/kakao.svg";

const InitialPage = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <IntroTopbar />
      <Box>
        <ImgBoxS>
          <Symbol />
        </ImgBoxS>
        <ImgBoxW>
          <Watermark />
        </ImgBoxW>
      </Box>
      <BtnBox>
        <SignupBtn
          onClick={() => {
            navigate("/signup");
          }}
        >
          회원가입
        </SignupBtn>
        <LoginBtn
          onClick={() => {
            navigate("/login");
          }}
        >
          로그인
        </LoginBtn>
        <KakaoBtn>
          <Kakao />
          카카오 로그인
        </KakaoBtn>
      </BtnBox>
    </Wrapper>
  );
};

export default InitialPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Box = styled(Wrapper)`
  margin: 23.7rem 0 4.2rem;
  gap: 2.5rem;
`;

const ImgBoxS = styled.div`
  width: 10.2rem;
  height: 10.1rem;
`;

const ImgBoxW = styled.div`
  width: 12.8rem;
  height: 3rem;
`;

const BtnBox = styled(Wrapper)`
  gap: 1rem;
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
`;

const SignupBtn = styled(Btn)`
  background: var(--Black, #262121);
  color: var(--White, #fff);
`;

const LoginBtn = styled(Btn)`
  border: 1.5px solid var(--Gray, #d9d9d9);
  background: var(--White, #fff);
`;

const KakaoBtn = styled(Btn)`
  background: #fee500;
  color: #3b1d1d;
  gap: 1.6rem;
`;
