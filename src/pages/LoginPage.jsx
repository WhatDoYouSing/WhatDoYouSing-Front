import React, { useState } from "react";
import styled from "styled-components";

import IntroTopbar from "../components/IntroTopbar";

import { ReactComponent as Symbol } from "../images/symbol.svg";
import { ReactComponent as Watermark } from "../images/watermark-kor.svg";
import { ReactComponent as WatermarkE } from "../images/watermark-eng.svg";

const LoginPage = () => {
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
        <ImgBoxE>
          <WatermarkE />
        </ImgBoxE>
      </Box>
      <SideBox>
        <Login>로그인</Login>
        <InputBox>
          <Input type="text" placeholder="아이디" />
          <Input type="password" placeholder="비밀번호" />
        </InputBox>
        <LoginBtn>로그인</LoginBtn>
      </SideBox>
    </Wrapper>
  );
};

export default LoginPage;

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
  width: 10.2rem;
  height: 10.1rem;

  @media (min-width: 1200px) {
    width: 18rem;
    height: 17.83rem;
  }
`;

const ImgBoxW = styled.div`
  width: 12.8rem;
  height: 3rem;

  @media (min-width: 1200px) {
    display: none;
  }
`;

const ImgBoxE = styled.div`
  width: 17rem;

  @media (max-width: 1200px) {
    display: none;
  }
`;

const SideBox = styled(ColumnStyle)`
  width: 100%;

  @media (min-width: 1200px) {
    display: flex;
    padding: 10rem;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 16px;
    border: 1.5px solid var(--lightGray);
    background: var(--white);

    box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.1);
  }
`;

const Login = styled.div`
  color: var(--black);
  text-align: center;

  font-size: 3.2rem;
  font-weight: 800;

  margin-bottom: 6.4rem;

  @media (max-width: 1200px) {
    display: none;
  }
`;

const InputBox = styled(ColumnStyle)`
  width: 100%;
  gap: 1.6rem;
`;

const Input = styled.input`
  width: 100%;
  height: 4.8rem;
  background: var(--white);
  padding: 0 1rem;

  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;

  border: none;
  outline: none;
  border-bottom: 0.2rem solid var(--black);
  transition: border-bottom-color 0.3s ease;

  &::placeholder {
    color: var(--gray);
  }
`;

const LoginBtn = styled.button`
  display: flex;
  padding: 2rem 4.8rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  align-self: stretch;

  border-radius: 1.2rem;
  border: 0.15rem solid var(--gray);
  background: var(--white);

  margin: 3.2rem 0;

  color: var(--black);
  text-align: center;

  font-size: 2rem;
  font-weight: 600;
`;
