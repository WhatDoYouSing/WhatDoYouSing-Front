import React, { useState } from "react";
import { styled } from "styled-components";

//components
import EmotionChip from "./EmotionChip";

const emotionData = [
  ["쾌감", "벅참"],
  ["신남", "행복", "희망"],
  ["설렘", "평온"],
  ["위로", "센치함", "쓸쓸함"],
  ["그리움", "슬픔"],
];

const emotionLongData = [
  ["쾌감", "벅참", "신남", "행복", "희망", "설렘"],
  ["평온", "위로", "센치함", "쓸쓸함", "그리움", "슬픔"],
];

const EmotionList = ({ onEmotionSelect }) => {
  //과연 이 방법이 최선인지는 모르겠지만...🥲 최선을 다해보았습니다
  //다른 좋은 방법 있으면 언제든 수정 부탁합니다~~!!

  const [selectedChip, setSelectedChip] = useState({
    rowIndex: null,
    chipIndex: null,
  });

  const handleChipClick = (rowIndex, chipIndex) => {
    setSelectedChip({ rowIndex, chipIndex });
    onEmotionSelect(emotionData[rowIndex][chipIndex]);
  };
  return (
    <>
      <ShortWrapper>
        {emotionData.map((row, rowIndex) => (
          <GridDiv key={rowIndex}>
            {row.map((emotion, chipIndex) => (
              <EmotionChip
                key={chipIndex}
                text={emotion}
                isSelected={
                  selectedChip.rowIndex === rowIndex &&
                  selectedChip.chipIndex === chipIndex
                }
                onClick={() => handleChipClick(rowIndex, chipIndex)}
              />
            ))}
          </GridDiv>
        ))}
      </ShortWrapper>
      <Wrapper>
        {emotionLongData.map((row, rowIndex) => (
          <GridDiv key={rowIndex}>
            {row.map((emotion, chipIndex) => (
              <EmotionChip
                key={chipIndex}
                size="large"
                text={emotion}
                isSelected={
                  selectedChip.rowIndex === rowIndex &&
                  selectedChip.chipIndex === chipIndex
                }
                onClick={() => handleChipClick(rowIndex, chipIndex)}
              />
            ))}
          </GridDiv>
        ))}
      </Wrapper>
    </>
  );
};

export default EmotionList;

const ShortWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  @media (min-width: 1216px) {
    display: none;
  }
`;

const GridDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (max-width: 1216px) {
    display: none;
  }
`;
