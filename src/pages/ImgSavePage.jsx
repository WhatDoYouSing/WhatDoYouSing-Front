import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useLocation, useParams } from "react-router-dom";

import { ReactComponent as Close } from "../images/close.svg";
import { ReactComponent as Save } from "../images/save.svg";

import { GetLyricsDetail } from "../apis/detail";

import ImgCard from "../components/ImgSavePage/ImgCard";
import html2canvas from "html2canvas";

const ImgSavePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const captureRef = useRef(null);

  const data = location.state?.data;
  // console.log("감정id: ", data.sings_emotion);

  let { postid } = useParams();
  console.log("감정id: ", postid);

  //가사 상세 데이터
  const [thisData, setThisData] = useState({});

  useEffect(() => {
    const GetLyricDetailData = async (pk) => {
      const response = await GetLyricsDetail(pk);
      setThisData(response.data);
    };
    GetLyricDetailData(postid);
  }, []);

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
                navigate(`/detail/${postid}`);
              }}
            />
            <Title>이미지 저장</Title>
            <Save width={18} height={18} onClick={handleCapture} />
          </Container>
        </TopBar>
        <Setting>
          다운로드 버튼을 누른 후,
          <br />
          이미지를 꾹 눌러서 저장해 주세요!
        </Setting>
        <ImgCard captureRef={captureRef} data={thisData} />
        <Setting2>
          ※ 사파리 이용자의 경우
          <br />
          설정 Safari 팝업 차단 '해제'를 해주세요.
        </Setting2>
      </Wrapper>
    </>
  );
};

export default ImgSavePage;

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
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

const Setting = styled.div`
  color: var(--Dark-Gray, #a0a0a0);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  margin-top: 3rem;
`;

const Setting2 = styled.div`
  color: var(--Dark-Gray, #a0a0a0);
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
