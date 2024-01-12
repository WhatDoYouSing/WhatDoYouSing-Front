import { styled } from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import EmotionChipWithNum from "./EmotionChipWithNum";
import EmotionSelectModal from "./EmotionSelectModal";

import useClickOutside from "../../hooks/useClickOutside";

//recoil
import { useRecoilValue } from "recoil";
import { emotionListAtom } from "../../assets/recoil/recoil";

//api
import { PatchDetailEmo, GetDetailEmo, DelDetailEmo } from "../../apis/detail";

const EmotionBox = ({ postId, render, setRender }) => {
  const navigate = useNavigate();

  const emotions = useRecoilValue(emotionListAtom);
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useClickOutside(dropdownRef, false);

  const [emotionCount, setEmotionCount] = useState([]);

  const [selectedChip, setSelectedChip] = useState({
    content: null,
  });

  //칩 클릭 & 데이터 PATCH
  const handleChipClick = async (content) => {
    if (localStorage.getItem("token")) {
      if (selectedChip.content === content) {
        delEmotion(postId);
      } else {
        patchEmotion(postId, content);
      }

      setSelectedChip((prevSelectedChip) => ({
        content: prevSelectedChip.content === content ? null : content,
      }));
    } else {
      alert("로그인이 필요합니다.");
      navigate("/initial");
    }
  };

  const patchEmotion = async (postId, content) => {
    const patchEmotions = await PatchDetailEmo(postId, content);

    if (patchEmotions.message === "투표감정 조회 실패") {
      setEmotionCount([]);
    } else {
      setEmotionCount(patchEmotions.data.Emotion);
      setSelectedChip({
        content: patchEmotions.data.my_emotion
          ? patchEmotions.data.my_emotion[0]
          : null,
      });
    }

    setRender(render + 1);
  };

  const delEmotion = async (postId) => {
    const delEmotions = await DelDetailEmo(postId);
    setRender(render + 1);
  };

  //데이터 조회
  useEffect(() => {
    getEmotion(postId, "");
  }, [render]);

  const getEmotion = async (postId, content) => {
    const patchEmotions = await GetDetailEmo(postId, content);

    if (patchEmotions.message === "투표감정 조회 실패") {
      setEmotionCount([]);
    } else {
      setEmotionCount(patchEmotions.data.Emotion);
      setSelectedChip({
        content: patchEmotions.data.my_emotion
          ? patchEmotions.data.my_emotion[0]
          : null,
      });
    }
  };

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <Emotions>
        <EmotionChipWithNum
          onClick={() => setIsOpen(!isOpen)}
          hideTextAndCount={true}
          disabled={true}
        />
        {emotionCount &&
          emotionCount.map((emotion, index) => (
            <EmotionChipWithNum
              key={emotion.content}
              text={emotions[+emotion.content].text}
              src={emotions[+emotion.content].src}
              num={emotion.num}
              hideTextAndCount={false}
              disabled={false}
              isSelected={selectedChip.content === emotion.content}
              onClick={() => handleChipClick(emotion.content)}
            />
          ))}
      </Emotions>
      {isOpen && (
        <EmotionSelectModal
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
