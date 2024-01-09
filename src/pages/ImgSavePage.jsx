import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

import { ReactComponent as Close } from "../images/close.svg";
import { ReactComponent as Save } from "../images/save.svg";

import ImgCard from "../components/ImgSavePage/ImgCard";
import html2canvas from "html2canvas";

const ImgSavePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const captureRef = useRef(null);

  const data = location.state?.data;

  const handleCapture = () => {
    html2canvas(captureRef.current, { scale: 4 });
    html2canvas(captureRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("imgae/png");

      const newWindow = window.open("", "_blank");
      newWindow.document.write(
        `<html><head><title>Captured Image</title></head><body style="background-color: black; display: flex; align-items: center; justify-content: center;  width: 100vw; margin: 0;"><img src="${imgData}" alt="Captured Image" style="top:80%; left: 80%; width: 80%; border-radius: 64px"/></body></html>`
      );
    });
  };

  return (
    <>
      <Wrapper>
        <TopBar>
          <Container>
            <Close
              onClick={() => {
                navigate(`/detail/${data.id}`);
              }}
            />
            <Title>이미지 저장</Title>
            <Save width={18} height={18} onClick={handleCapture} />
          </Container>
        </TopBar>
        <ImgCard captureRef={captureRef} data={data} />
      </Wrapper>
    </>
  );
};

export default ImgSavePage;

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background-color: var(--black);
`;

const TopBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 11.3rem;
  background-color: var(--black);
`;
const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 0 1.6rem 2.7rem;

  @media (min-width: 1200px) {
    padding: 0 16.8rem 2.7rem;
  }
`;

const Title = styled.div`
  color: var(--white);
  text-align: center;
  font-size: 2rem;
  font-style: normal;
  font-weight: 800;
`;
