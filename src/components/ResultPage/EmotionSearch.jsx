import { styled } from "styled-components";
import React, { useState, useRef } from "react";

import EmotionChipWithNum from "../DetailPage/EmotionChipWithNum";

//recoil
import { useRecoilValue } from "recoil";
import { emotionListAtom } from "../../assets/recoil/recoil";

const EmotionSearch = () => {
  const emotions = useRecoilValue(emotionListAtom);

  const [selectedChip, setSelectedChip] = useState({
    index: null,
  });

  const handleChipClick = (index) => {
    setSelectedChip((prevSelectedChip) => ({
      index: prevSelectedChip.index === index ? null : index,
    }));
  };

  return (
    <>
      <Emotions>
        {emotions.map((emotion, index) => (
          <EmotionChipWithNum
            key={index}
            text={emotion.text}
            src={emotion.src}
            isSelected={selectedChip.index === index}
            onClick={() => handleChipClick(index)}
          />
        ))}
      </Emotions>
    </>
  );
};

export default EmotionSearch;

const Emotions = styled.div`
  display: flex;
  padding: 1rem 0rem;
  align-items: flex-start;
  align-self: stretch;
  overflow-x: auto;

  width: "100%";

  /* 스크롤바 감추기 */
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;
