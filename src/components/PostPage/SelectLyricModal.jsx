import React, { useState, useEffect } from "react";
import styled from "styled-components";

import SelectTopbar from "./SelectTopbar";
import Toast from "./Toast";
import { ReactComponent as NoResultSvg } from "../../images/noContent.svg";

import { GetTrackLyric } from "../../apis/openLyrics";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { LyricState, TrackState } from "../../assets/recoil/apiRecoil";

const SelectLyricModal = ({
  setSearchOpen,
  setSelectOpen,
  setSelectedTrack,
}) => {
  // 가사 받아오기
  const [lineData, setLineData] = useState([]);
  const savedLines = useRecoilValue(LyricState);
  const savedTrackInfo = useRecoilValue(TrackState);

  useEffect(() => {
    const handleClick = async () => {
      try {
        const lyricData = await GetTrackLyric(savedTrackInfo.id);
        setLineData(lyricData);
      } catch (error) {
        setLineData(null);
      }

      if (savedLines !== "") {
        setSelectedLines(savedLines);
      }
    };

    handleClick();

    document.body.style = `overflow: hidden`;
    return () => (document.body.style = `overflow: auto`);
  }, []);

  // 가사 문장별 선택
  const [selectLines, setSelectedLines] = useState([]);

  const handleLineClick = (index, line) => {
    const totalSelectedLineLength = selectLines
      .map((selectedLine) => selectedLine.words)
      .join("")
      .replace(/\s/g, "").length;
    const newWordLength = line.replace(/\s/g, "").length;

    if (totalSelectedLineLength + newWordLength <= 60) {
      setSelectedLines((prevSelectedLines) => [
        ...prevSelectedLines,
        { index, words: line },
      ]);
    } else {
      setShowToast(true);
    }
  };

  // 가사 선택 해제
  const removeSelectedLine = (index) => {
    setSelectedLines((prevSelectedLines) =>
      prevSelectedLines.filter((selectedLine) => selectedLine.index !== index)
    );
  };

  // 선택한 가사 저장
  const setSavedLines = useSetRecoilState(LyricState);
  const saveSelectedLyric = () => {
    const sortedSelectLines = selectLines
      .slice()
      .sort((a, b) => a.index - b.index);

    const totalSelectedLine = sortedSelectLines
      .map((selectedLine) => selectedLine.words)
      .join(" ")
      .replace(/\s/g, " ");

    setSelectedTrack((prevTrack) => ({
      ...prevTrack,
      id: savedTrackInfo.id,
      name: savedTrackInfo.name,
      artist: savedTrackInfo.artist,
      lyric: totalSelectedLine,
      type: "search",
    }));

    setSavedLines(selectLines);
    setSearchOpen(false);
    setSelectOpen(false);
  };

  // 가사 선택 모달 닫기
  const closeModal = () => {
    setSelectOpen(false);
  };

  // Toast 메시지 띄우기
  const [showToast, setShowToast] = useState(false);

  return (
    <>
      <Wrapper>
        <SelectTopbar {...{ selectLines, saveSelectedLyric, closeModal }} />
        <Container>
          <Description>클릭하여 가사를 선택해 주세요.</Description>
          <TrackInfo>
            <img src={savedTrackInfo.image} alt="album cover img" />
            <div>
              <span>{savedTrackInfo.name}</span>
              <span>{savedTrackInfo.artist}</span>
            </div>
          </TrackInfo>
          {lineData ? (
            <TrackLyric>
              {lineData.map((line, index) =>
                selectLines.find(
                  (selectedLine) => selectedLine.index === index
                ) ? (
                  <div
                    key={index}
                    onClick={() => removeSelectedLine(index)}
                    style={{ color: "var(--pointPink)" }}
                  >
                    {line.words}
                  </div>
                ) : (
                  <div
                    key={index}
                    onClick={() => handleLineClick(index, line.words)}
                  >
                    {line.words}
                  </div>
                )
              )}
            </TrackLyric>
          ) : (
            <NoResultContainer>
              <NoResultEmoji />
              <div>이 노래는 아직 등록된 가사가 없어요.</div>
            </NoResultContainer>
          )}
        </Container>
      </Wrapper>
      {showToast && <Toast onClose={() => setShowToast(false)} />}
    </>
  );
};

export default SelectLyricModal;

const Wrapper = styled.div`
  z-index: 200;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--white);
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Container = styled.div`
  margin-top: 9.5rem;
  padding: 0 16px;

  @media (min-width: 1100px) {
    padding: 0 16.8rem;
  }
`;

const Description = styled.div`
  width: 100%;
  padding: 14px;
  border-radius: 5px;
  background-color: var(--lightGray);

  font-size: 16px;
  color: var(--darkGray);
`;

const TrackInfo = styled.div`
  margin: 36px 0 24px 0;
  padding: 8px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 8px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 2px;

    font-family: "FullAppleSDGothicNeo";
    font-size: 18px;
    font-style: normal;
    line-height: 130%;
    letter-spacing: -0.18px;

    span:nth-child(1) {
      color: var(--black);
      font-weight: 700;
    }

    span:nth-child(2) {
      color: var(--veryDarkGray);
      font-weight: 500;
    }
  }
`;

const TrackLyric = styled.div`
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;

  color: var(--black);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 200%;
  letter-spacing: -0.36px;

  div {
    width: fit-content;
    cursor: pointer;
  }
`;

const NoResultContainer = styled.div`
  padding-top: 16rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;

  color: var(--darkGray);
  font-size: 1.6rem;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.032rem;
`;

const NoResultEmoji = styled(NoResultSvg)`
  width: 10.5rem;
  height: 10.5rem;
  flex-shrink: 0;
`;
