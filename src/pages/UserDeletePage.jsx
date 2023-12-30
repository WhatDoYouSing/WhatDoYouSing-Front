import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import IntroTopbar from "../components/IntroTopbar";
import Footer from "../components/common/Footer";

import { ReactComponent as Symbol } from "../images/symbol.svg"; ///추후 아이콘 확정되면 수정 예정
import { ReactComponent as Check } from "../images/checkbox-off.svg";

const UserDeletePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Wrapper>
        <IntroTopbar text="회원탈퇴" />
        <Box>
          <ImgBoxS>
            <Symbol />
          </ImgBoxS>
          <span>정말... 떠나시겠어요?</span>
        </Box>
        <SideBox>
          <Login>회원정보 수정</Login>
          <Info>비밀번호를 입력하세요.</Info>
          <InputBox>
            <Input
              type="password"
              placeholder="본인의 비밀번호를 입력해 주세요."
            />
          </InputBox>
          <InfoBox>
            <Check />
            <DelInfo>
              회원탈퇴 버튼을 누르면 계정 정보가 삭제되며, 복구할 수 없습니다.
              정말로 탈퇴하시겠습니까?
            </DelInfo>
          </InfoBox>
          <LoginBtn onClick={() => navigate("/")}>회원 탈퇴</LoginBtn>
        </SideBox>
      </Wrapper>
      <Footer />
    </>
  );
};

export default UserDeletePage;

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
  margin: 23.7rem 0 6.4rem;
  gap: 2.5rem;

  span {
    font-size: 2rem;
    font-style: normal;
    font-weight: 800;
  }

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

const SideBox = styled(ColumnStyle)`
  width: 100%;
  margin: 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 1200px) {
    padding: 10rem;
    border-radius: 1.6rem;
    border: 1.5px solid var(--lightGray);
    background: var(--white);

    box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.1);
  }
`;

const Info = styled.span`
  margin-bottom: 1rem;
  font-size: 2rem;
  font-style: normal;
  font-weight: 800;
  text-align: start;
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

  margin-bottom: 6.4rem;
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

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.8rem;
`;

const DelInfo = styled.span`
  flex: 1 0 0;
  color: var(--Dark-Gray, #a0a0a0);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;

  word-break: keep-all;
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

  margin: 1.6rem 0;

  color: var(--black);
  text-align: center;

  font-size: 2rem;
  font-weight: 600;
`;
