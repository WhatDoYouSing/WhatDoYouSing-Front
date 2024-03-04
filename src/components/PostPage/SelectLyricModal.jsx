import React, { useState, useEffect } from "react";
import styled from "styled-components";

import SelectTopbar from "./SelectTopbar";

import { GetTrackLyric } from "../../apis/openLyrics";

const SelectLyricModal = ({
  setSearchOpen,
  setSelectOpen,
  selectedTrack,
  setSelectedTrack,
}) => {
  // 가사 받아오기
  const [lineData, setLineData] = useState(null);

  useEffect(() => {
    const handleClick = async () => {
      const lyricData = await GetTrackLyric(selectedTrack.id);
      setLineData(lyricData);
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
    }
  };

  // 가사 선택 해제
  const removeSelectedLine = (index) => {
    setSelectedLines((prevSelectedLines) =>
      prevSelectedLines.filter((selectedLine) => selectedLine.index !== index)
    );
  };

  // 선택한 가사 저장
  const saveSelectedLyric = () => {
    const sortedSelectLines = selectLines
      .slice()
      .sort((a, b) => a.index - b.index);

    const totalSelectedLine = sortedSelectLines
      .map((selectedLine) => selectedLine.words)
      .join(" ")
      .replace(/\s/g, " ");

    setSelectedTrack({
      ...selectedTrack,
      lyric: totalSelectedLine,
    });
  };

  return (
    <>
      <Wrapper>
        <SelectTopbar
          {...{ selectLines, setSearchOpen, setSelectOpen, saveSelectedLyric }}
        />
        <Container>
          <Description>클릭하여 가사를 선택해 주세요.</Description>
          <TrackInfo>
            <img src={selectedTrack.image} alt="album cover img" />
            <div>
              <span>{selectedTrack.name}</span>
              <span>{selectedTrack.artist}</span>
            </div>
          </TrackInfo>
          <TrackLyric>
            {lineData &&
              lineData.map((line, index) =>
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
        </Container>
      </Wrapper>
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
  margin: 20px 0 18px 0;
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
    gap: 8px;

    color: var(--black);
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 26px */
    letter-spacing: -0.2px;
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
    cursor: pointer;
  }
`;
