import React, { useRef } from "react";
import styled from "styled-components";
import { useLocation, useParams } from "react-router";
import html2canvas from "html2canvas";

import ImgCard from "../ImgSavePage/ImgCard";

import { ReactComponent as Save } from "../../images/save.svg";

const ShareModal = ({ data }) => {
  const location = useLocation();
  const type = useParams();

  const handleCopyClipBoard = async () => {
    console.log(location, type);
    const textToCopy = `https://whatdoyousing.swygbro.com${location.pathname}`;
    try {
      await navigator.clipboard.writeText(textToCopy);
      alert("클립보드에 링크가 복사되었어요.");
    } catch (err) {
      console.log(err);
    }
  };

  const captureRef = useRef(null);
  const handleCapture = () => {
    html2canvas(captureRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = imgData;
      link.download = "whatdoyousing.png";
      link.click();
    });
  };

  return (
    <>
      <Container>
        <Title>공유하기</Title>
        <UrlDiv>
          <Url>{`https://whatdoyousing.swygbro.com${location.pathname}`}</Url>
          <Btn onClick={handleCopyClipBoard}>복사</Btn>
        </UrlDiv>
        <ImgDiv onClick={handleCapture}>
          <SaveImg>이미지로 저장하기</SaveImg>
          <SvgDiv>
            <Save width={16} height={16} />
          </SvgDiv>
        </ImgDiv>
      </Container>
      <div style={{ opacity: 0 }}>
        <ImgCard captureRef={captureRef} data={data} />
      </div>
    </>
  );
};

export default ShareModal;

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 30rem;
  height: auto;

  padding: 20px 16px;
  align-items: center;
  gap: 16px;
  border-radius: 10px;
  background-color: var(--white);
  z-index: 101;
`;

const Title = styled.div`
  color: var(--black);
  text-align: center;
  font-size: 2rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -0.4px;
`;

const UrlDiv = styled.div`
  display: flex;
  width: 26.8rem;
  padding: 0.8rem 1.6rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  border-radius: 1rem;
  border: 0.1rem solid var(--gray);
  background: var(--white);
`;

const Url = styled.span`
  display: -webkit-box;
  width: 17.3rem;

  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  flex-shrink: 0;

  overflow: hidden;
  color: var(--black);
  text-align: center;
  text-overflow: ellipsis;

  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Btn = styled.span`
  display: flex;

  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 1.6rem;
  background: var(--pointPink);

  width: 5.3rem;
  height: 3.2rem;
  color: var(--white);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const ImgDiv = styled.div`
  width: 26.8rem;
  height: 4.8rem;
  border-radius: 1rem;
  background-color: var(--black);
  display: flex;
  flex-direction: row;

  align-items: center;
  gap: 8.2rem;
  padding: 1.6rem;
`;

const SaveImg = styled.span`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;

  overflow: hidden;
  color: var(--White, #fff);
  text-overflow: ellipsis;

  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const SvgDiv = styled.span`
  margin-right: 2rem;
`;
