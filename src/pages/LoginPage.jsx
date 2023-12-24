import React, { useState } from "react";
import styled from "styled-components";

import IntroTopbar from "../components/IntroTopbar";

import { ReactComponent as Symbol } from "../images/symbol.svg";
import { ReactComponent as Watermark } from "../images/watermark-kor.svg";

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
      </Box>
      <InputBox>
        <Input type="text" placeholder="아이디" />
        <Input type="password" placeholder="비밀번호" />
      </InputBox>
      <LoginBtn>로그인</LoginBtn>
    </Wrapper>
  );
};

export default LoginPage;

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

const InputBox = styled(Wrapper)`
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
  border: 0.15rem var(--Gray, #d9d9d9);
  background: var(--White, #fff);

  margin: 1.6rem 0;

  color: var(--black);
  text-align: center;

  font-size: 2rem;
  font-weight: 600;
`;
