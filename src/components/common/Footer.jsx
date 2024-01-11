import React, { useState } from "react";
import { styled, css } from "styled-components";
import { useNavigate } from "react-router-dom";

import { ReactComponent as LikeLion } from "../../images/ewha-likelion.svg";
import { ReactComponent as Insta } from "../../images/insta.svg";
import { ReactComponent as Github } from "../../images/github.svg";

const Footer = () => {
  const handleIconClick = (url) => {
    window.open(url, "_blank");
  };
  return (
    <Wrapper>
      <Container>
        <InfoDiv>
          <Title>멋쟁이 사자처럼 11기 졸업프로젝트 '왓두유씽?'</Title>
          <Title>Likelion Ewha 11th Graduation Project</Title>
        </InfoDiv>
        <IconDiv>
          <ImgDiv
            onClick={() =>
              handleIconClick("https://www.instagram.com/likelion_ewha/")
            }
          >
            <LikeLion />
          </ImgDiv>
          <ImgDiv
            onClick={() =>
              handleIconClick("https://www.instagram.com/what_doyousing/")
            }
          >
            <Insta />
          </ImgDiv>
          <ImgDiv
            onClick={() => handleIconClick("https://github.com/WhatDoYouSing")}
          >
            <Github />
          </ImgDiv>
        </IconDiv>
        <Copyright>Copyright © WDYS. All Rights Reserved.</Copyright>
      </Container>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transform: translateY(-100%);

  width: calc(100% + 1.6rem * 2);
  margin-left: -1.6rem;
  margin-top: auto;
  height: 15.8rem;

  background-color: var(--lightGray);
  color: var(--darkGray);

  @media (min-width: 1200px) {
    width: calc(100% + 16.8rem * 2);
    margin-left: -16.8rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1.9rem;
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 16.64px;
`;

const Title = styled.span`
  color: var(--Dark-Gray, #a0a0a0);
  text-align: center;
  font-size: 10.4px;
  font-style: normal;
  font-weight: 500;
  line-height: 16.64px; /* 160% */
`;

const IconDiv = styled.div`
  display: flex;
  justify-content: center;

  gap: 1.9rem;
`;

const ImgDiv = styled.div`
  cursor: pointer;
`;

const Copyright = styled.span`
  color: var(--Dark-Gray, #a0a0a0);
  text-align: center;
  font-family: "Pretendard-regular";
  font-size: 8.32px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
