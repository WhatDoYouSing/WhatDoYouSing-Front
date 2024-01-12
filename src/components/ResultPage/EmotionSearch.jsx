import { styled } from "styled-components";
import React, { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import EmotionChipWithNum from "../DetailPage/EmotionChipWithNum";

//recoil
import { useRecoilValue, useSetRecoilState } from "recoil";
import { emotionListAtom } from "../../assets/recoil/recoil";
import {
  MyEmotionState,
  SelectEmotionState,
} from "../../assets/recoil/apiRecoil";

const EmotionSearch = () => {
  const emotions = useRecoilValue(emotionListAtom);

  const selectedMyEmotion = useRecoilValue(MyEmotionState); //my 검색 결과로 떴을 때
  const selectedSearchEmotion = useRecoilValue(SelectEmotionState);

  const setSelectedMyEmotion = useSetRecoilState(MyEmotionState);
  const setSelectedSearchEmotion = useSetRecoilState(SelectEmotionState);

  const location = useLocation();
  const isResultPage = location.pathname === "/result";

  const [selectedChip, setSelectedChip] = useState(
    isResultPage ? selectedSearchEmotion : 0
  );

  const handleChipClick = (index) => {
    setSelectedChip((prevSelectedChip) =>
      prevSelectedChip === index ? null : index
    );
    setSelectedMyEmotion(index);

    if (isResultPage) {
      setSelectedSearchEmotion((prevSelectedChip) =>
        prevSelectedChip === index ? "" : index
      );
    }
  };
  console.log(selectedMyEmotion, selectedSearchEmotion);
  return (
    <>
      <Emotions>
        {emotions.map((emotion, index) => (
          <EmotionChipWithNum
            key={index}
            text={emotion.text}
            src={emotion.src}
            isSelected={selectedChip === index}
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
  padding: 1rem 0;
  align-items: flex-start;
  align-self: stretch;
  overflow-x: scroll;
  background-color: var(--white);

  width: 100%;

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

  @media (min-width: 1100px) {
    padding: 1rem 16.8rem;
  }
`;
