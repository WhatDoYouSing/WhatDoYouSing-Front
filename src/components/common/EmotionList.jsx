import React, { useState } from "react";
import { styled } from "styled-components";

//components
import EmotionChip from "./EmotionChip";

//recoil
import { useRecoilValue } from "recoil";
import { emotionListAtom } from "../../assets/recoil/recoil";

import emotion_Data from "../../assets/data/EmotionData";

const EmotionList = ({
  onEmotionSelect = null,
  closeModal,
  size = "medium",
  big = true,
}) => {
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const emotions = useRecoilValue(emotionListAtom);
  const emotion_data = emotion_Data[0];
  console.log(emotions[0], emotion_data);

  const emotionData = [
    [emotions[0], emotions[1]],
    [emotions[2], emotions[3], emotions[4]],
    [emotions[5], emotions[6]],
    [emotions[7], emotions[8], emotions[9]],
    [emotions[10], emotions[11]],
  ];

  const emotionLongData = [
    [
      emotions[0],
      emotions[1],
      emotions[2],
      emotions[3],
      emotions[4],
      emotions[5],
    ],
    [
      emotions[6],
      emotions[7],
      emotions[8],
      emotions[9],
      emotions[10],
      emotions[11],
    ],
  ];

  const handleChipClick = (emotion) => {
    setSelectedEmotion(emotion);
    if (onEmotionSelect) {
      onEmotionSelect(emotion.id);
      if (!big) {
        closeModal();
      }
    }
  };
  return (
    <>
      <ShortWrapper>
        {emotionData.map((row, rowIndex) => (
          <GridDiv key={rowIndex}>
            {row.map((emotion, chipIndex) => (
              <EmotionChip
                key={chipIndex}
                text={emotion?.text}
                src={emotion?.src}
                size={size}
                isSelected={selectedEmotion === emotion}
                onClick={() => handleChipClick(emotion)}
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
                text={emotion?.text}
                src={emotion?.src}
                isSelected={selectedEmotion === emotion}
                onClick={() => handleChipClick(emotion)}
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
    display: ${(props) => (props.big ? "none" : "flex")};
  }
`;

const GridDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Wrapper = styled.div`
  display: ${(props) => (props.big ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (max-width: 1216px) {
    display: none;
  }
`;
