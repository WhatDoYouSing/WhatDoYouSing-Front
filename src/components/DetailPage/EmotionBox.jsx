import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

import EmotionChipWithNum from "./EmotionChipWithNum";

const EmotionBox = () => {
  const emotionCountData = [
    { text: "", count: "" },
    { text: "쾌감", count: 10 },
    { text: "벅참", count: 5 },
    { text: "신남", count: 2 },
    { text: "행복", count: 4 },
    { text: "희망", count: 19 },
    { text: "설렘", count: 2 },
    { text: "평온", count: 3 },
    { text: "위로", count: 3 },
    { text: "센치함", count: 13 },
    { text: "쓸쓸함", count: 4 },
    { text: "그리움", count: 5 },
    { text: "슬픔", count: 12 },
    { text: "기타", count: 13 },
    //count수는 임의 목데이터, 추후 연결
  ];

  const [selectedChip, setSelectedChip] = useState({
    index: null,
  });

  const handleChipClick = (index) => {
    setSelectedChip({ index });
  };

  return (
    <>
      <Emotions>
        {emotionCountData.map((emotion, index) => (
          <EmotionChipWithNum
            key={index}
            text={emotion.text}
            num={emotion.count}
            hideTextAndCount={index === 0}
            disabled={index === 0}
            isSelected={selectedChip.index === index}
            onClick={() => handleChipClick(index)}
          />
        ))}
      </Emotions>
    </>
  );
};

export default EmotionBox;

const Emotions = styled.div`
  display: flex;
  padding: 1rem 0rem;
  align-items: flex-start;
  padding: 1rem 0;
  margin-top: 0.8rem;
  gap: 0.8rem;
  align-self: stretch;
  overflow-x: auto;

  width: "100%";
  border-top: 0.025rem solid var(--gray);

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
