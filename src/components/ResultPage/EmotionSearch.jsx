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
    <Wrapper isPadding={isPadding}>
      <PaddingDiv isPadding={isPadding} />
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
      <PaddingDiv2 isPadding={isPadding} />
    </Wrapper>
  );
};

export default EmotionSearch;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  padding: 0 1.6rem;

  @media (min-width: 1100px) and (max-width: 1200px) {
    padding: ${(props) => (props.isPadding ? "0 16.8rem" : "0 16.8rem")};
  }

  @media (min-width: 1200px) {
    padding: ${(props) => (props.isPadding ? "0 16.8rem" : "0 39.4rem")};
  }
`;

const PaddingDiv = styled.div`
  position: absolute;
  flex-shrink: 0;
  width: 1.6rem;
  height: 100%;
  background-color: var(--white);
  z-index: 1000;
  left: 0;

  @media (min-width: 1100px) and (max-width: 1200px) {
    width: 16.8rem;
  }

  @media (min-width: 1200px) {
    width: ${(props) => (props.isPadding ? "16.8rem" : "39.4rem")};
  }
`;

const PaddingDiv2 = styled.div`
  position: absolute;
  flex-shrink: 0;
  width: 1.6rem;
  height: 100%;
  background-color: var(--white);
  bottom: 0;
  right: 0;
  left: auto;
  top: 0;

  @media (max-width: 1100px) {
    left: calc(100% - 1.6rem);
  }

  @media (min-width: 1100px) and (max-width: 1200px) {
    left: calc(100% - 16.8rem);
    width: 16.8rem;
  }

  @media (min-width: 1200px) {
    left: ${(props) =>
      props.isPadding ? "calc(100% - 16.8rem)" : "calc(100% - 39.4rem)"};
    width: ${(props) => (props.isPadding ? "16.8rem" : "39.4rem")};
  }
`;

const Emotions = styled.div`
  display: flex;
  padding: 0;
  /* padding: ${(props) => (props.isPadding ? "1rem 0" : "0 0 1.6rem")}; */
  margin: 0;
  align-items: flex-start;
  align-self: stretch;
  overflow-x: scroll;

  background-color: var(--white);

  width: 100%;

  /* 스크롤바 감추기 */
  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 1100px) {
    padding: ${(props) => (props.isPadding ? "1rem 0" : "0 0")};
    //검색 결과 페이지 : 내가남긴 감정 페이지
  }
`;
