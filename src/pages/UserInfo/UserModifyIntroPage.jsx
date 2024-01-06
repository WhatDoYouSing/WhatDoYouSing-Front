import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

import IntroTopbar from "../../components/IntroTopbar";
import Footer from "../../components/common/Footer";

import { ReactComponent as Symbol } from "../../images/symbol.svg";
import wordmark from "../../images/icons/wordmark-kor.svg";
import wordmarkE from "../../images/icons/wordmark-eng.svg";

const UserModifyIntroPage = () => {
  const type = useParams();
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (type.id === "pas") {
      console.log(type);
      navigate("/pas-modify");
    } else if (type.id === "nic") {
      console.log(type);
      navigate("/nic-modify");
    } else {
      console.log(type);
    }
  };

  return (
    <>
      <Wrapper>
        <IntroTopbar text="회원정보 수정" delPath="/my" />
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
          <Login>회원정보 수정</Login>
          <span>비밀번호를 입력하세요.</span>
          <InputBox>
            <Input
              type="password"
              placeholder="본인의 비밀번호를 입력해 주세요."
            />
          </InputBox>
          <LoginBtn onClick={handleNavigate}>확인</LoginBtn>
        </SideBox>
      </Wrapper>
      <Footer />
    </>
  );
};

export default UserModifyIntroPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  min-height: 100%;
  padding-bottom: 15.8rem;

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    min-height: 100%;
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
  /* 
  @media (min-width: 1200px) {
    margin: 0;
    gap: 2.8rem;
  } */

  @media (max-width: 1200px) {
    display: none;
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
  margin: 23.7rem 0 4.2rem;
  gap: 2.5rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  span {
    margin-bottom: 1rem;
    font-size: 2rem;
    font-style: normal;
    font-weight: 800;
    text-align: start;
  }

  @media (min-width: 1200px) {
    padding: 10rem;
    border-radius: 1.6rem;
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
