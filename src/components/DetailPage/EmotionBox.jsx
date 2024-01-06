import { styled } from "styled-components";
import React, { useState, useRef } from "react";

import EmotionChipWithNum from "./EmotionChipWithNum";
import EmotionSelectMoal from "./EmotionSelectModal";

import useClickOutside from "../../hooks/useClickOutside";

//recoil
import { useRecoilValue } from "recoil";
import { emotionListAtom } from "../../assets/recoil/recoil";

const EmotionBox = () => {
  const emotions = useRecoilValue(emotionListAtom);
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useClickOutside(dropdownRef, false);

  const emotionCountData = [
    { icons: "", count: "" },
    { icons: emotions[0], count: 10 },
    { icons: emotions[1], count: 0 },
    { icons: emotions[2], count: 2 },
    { icons: emotions[3], count: 4 },
    { icons: emotions[4], count: 19 },
    { icons: emotions[5], count: 2 },
    { icons: emotions[6], count: 3 },
    { icons: emotions[7], count: 0 },
    { icons: emotions[8], count: 13 },
    { icons: emotions[9], count: 4 },
    { icons: emotions[10], count: 5 },
    { icons: emotions[11], count: 12 },
  ];
  //count수는 임의 목데이터, 추후 연결

  const [selectedChip, setSelectedChip] = useState({
    index: null,
  });

  const handleChipClick = (index) => {
    if (index === 0) {
      setIsOpen(!isOpen);
    } else {
      setSelectedChip((prevSelectedChip) => ({
        index: prevSelectedChip.index === index ? null : index,
      }));
    }
  };

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <Emotions>
        {emotionCountData.map((emotion, index) =>
          emotion.count !== 0 ? (
            <EmotionChipWithNum
              key={index}
              text={emotion.icons.text}
              src={emotion.icons.src}
              num={emotion.count}
              hideTextAndCount={index === 0}
              disabled={index === 0}
              isSelected={selectedChip.index === index}
              onClick={() => handleChipClick(index)}
            />
          ) : null
        )}
      </Emotions>
      {isOpen && (
        <EmotionSelectMoal
          onEmotionSelect={handleChipClick}
          closeModal={handleModal}
          ref={dropdownRef}
        />
      )}
    </Wrapper>
  );
};

export default EmotionBox;

const Wrapper = styled.div`
  position: relative;
`;

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
