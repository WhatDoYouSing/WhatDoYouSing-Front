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

const EmotionSearch = ({ isPadding = true }) => {
  const emotions = useRecoilValue(emotionListAtom);

  const selectedMyEmotion = useRecoilValue(MyEmotionState); //my 검색 결과로 떴을 때
  const selectedSearchEmotion = useRecoilValue(SelectEmotionState);

  const setSelectedMyEmotion = useSetRecoilState(MyEmotionState);
  const setSelectedSearchEmotion = useSetRecoilState(SelectEmotionState);

  const location = useLocation();
  const isResultPage = location.pathname === "/result";

  const [selectedChip, setSelectedChip] = useState(
    isResultPage ? selectedSearchEmotion : null
  );

  const handleChipClick = (index) => {
    setSelectedChip((prevSelectedChip) =>
      prevSelectedChip === index ? null : index
    );
    setSelectedMyEmotion((prevSelectedChip) =>
      prevSelectedChip === index ? "" : index
    );

    if (isResultPage) {
      setSelectedSearchEmotion((prevSelectedChip) =>
        prevSelectedChip === index ? "" : index
      );
    }
  };
  // console.log(selectedMyEmotion, selectedSearchEmotion);
  return (
    <Wrapper>
      <Emotions isPadding={isPadding}>
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
    </Wrapper>
  );
};

export default EmotionSearch;

const Wrapper = styled.div`
  padding: 0 1.6rem;
`;

const Emotions = styled.div`
  display: flex;
  padding: ${(props) => (props.isPadding ? "1rem 0" : "0 0 1.6rem")};
  margin: ${(props) => (props.isPadding ? "" : "0 0 1.6rem")};
  border-bottom: ${(props) =>
    props.isPadding ? "none" : "1px solid var(--gray)"};
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
    padding: ${(props) => (props.isPadding ? "1rem 16.8rem" : "0 0 1.6rem")};
  }
`;
