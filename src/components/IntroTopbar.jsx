import React, { useState, useEffect } from "react";
import { styled, css } from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

import { ReactComponent as Delete } from "../images/delete.svg";
import { ReactComponent as Back } from "../images/back.svg";

//recoil
import { useRecoilValue } from "recoil";
import { PasModifyState, NicModifyState } from "../assets/recoil/apiRecoil";

//api
import { PatchPassword, PatchNickname } from "../apis/user";

const IntroTopbar = ({
  text = "로그인",
  backPath = -1,
  del = true,
  delPath = "/initial",
  actBtn = false,
  btnText = "다음으로",
  nextPath = "/",
  isFilled = false,
}) => {
  const navigate = useNavigate();

  const newPassword = useRecoilValue(PasModifyState);
  const newNickname = useRecoilValue(NicModifyState);

  const handleClick = async () => {
    switch (text) {
      case "비밀번호 변경":
        PatchPassword(newPassword);
        console.log(newPassword);
        // navigate(nextPath);
        break;
      case "닉네임 변경":
        console.log(newNickname);
        PatchNickname(newNickname);
        // navigate(nextPath);
        break;
      case "게시글 작성":
        break;

      default:
        navigate(nextPath);
    }
  };

  return (
    <Wrapper>
      <Container>
        <ImgDiv>
          {del ? (
            <Delete
              onClick={() => {
                navigate(delPath);
              }}
            />
          ) : (
            <Back
              onClick={() => {
                navigate(backPath);
              }}
            />
          )}
        </ImgDiv>
        <Title>{text}</Title>
        {actBtn ? (
          <NextBtn isFilled={isFilled} onClick={handleClick}>
            {btnText}
          </NextBtn>
        ) : (
          <></>
        )}
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
  z-index: 99;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 0 1.6rem 2.7rem;

  @media (min-width: 1200px) {
    padding: 0 16.8rem 2.7rem;
  }
`;

const ImgDiv = styled.div`
  position: absolute;
  left: 1.6rem;

  cursor: pointer;
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
  background-color: ${(props) =>
    props.isFilled ? "var(--black)" : "var(--lightGray)"};
  color: ${(props) => (props.isFilled ? "var(--white)" : "var(--darkGray)")};
  text-align: center;

  font-size: 1.4rem;
  font-weight: 500;
`;
