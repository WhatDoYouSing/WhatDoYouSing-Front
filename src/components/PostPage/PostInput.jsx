import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import EmotionList from "../common/EmotionList";
import { ReactComponent as Delete } from "../../images/lyric-input-delete.svg";
import { ReactComponent as NextBtn } from "../../images/nextBtn.svg";

import { useSetRecoilState, useResetRecoilState } from "recoil";
import {
  SpotifyToken,
  LyricState,
  TrackState,
} from "../../assets/recoil/apiRecoil";
import { GetSpotifyToken } from "../../apis/openLyrics";

const PostInput = ({
  onBtn,
  setLyricInputModal,
  setSearchOpen,
  setSelectOpen,
  selectedTrack,
  setSelectedTrack,
}) => {
  //글자수
  const [detailCount, setDetailCount] = useState(0);

  //유효성 검사
  const [emotion, setEmotion] = useState(null);
  const [detail, setDetail] = useState("");
  const [link, setLink] = useState("");

  const handleEmotionSelect = (selectedEmotion) => {
    setEmotion(selectedEmotion);
    console.log(selectedEmotion);
  };

  //버튼 활성화
  useEffect(() => {
    const isRequiredFieldsValid = emotion !== null && detail;
    onBtn(!!isRequiredFieldsValid);
  }, [emotion, detail]);

  //입력 값 관리 함수
  const handleInputChange = (inputText, maxLength, setState, setCount) => {
    const textWithoutSpaces = inputText.replace(/\s+/g, "");
    const textLength = textWithoutSpaces.length;

    if (textLength <= maxLength) {
      setState(inputText);
      setCount(textLength);
    } else {
      const words = inputText.split(/\s+/);
      let sliceText = "";
      let wordsLength = 0;

      for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (wordsLength + word.length <= maxLength) {
          sliceText += word + " ";
          wordsLength += word.length;
        } else break;
      }

      setState(sliceText);
      setCount(wordsLength);
    }
  };

  const handleHeight = (ref) => {
    ref.current.style.height = "auto";
    ref.current.style.height = ref.current.scrollHeight + "px";
  };

  //해석 입력 값 관리
  const detailRef = useRef(null);
  const handleDetailChange = (e) => {
    const maxLength = 152;
    handleInputChange(e.target.value, maxLength, setDetail, setDetailCount);
  };
  const handleDetailHeight = () => {
    handleHeight(detailRef);
  };

  //가사 검색 모달 열기 & 스포티파이 토큰 받기
  const setToken = useSetRecoilState(SpotifyToken);
  const handleLyricSearchClick = async () => {
    const token = await GetSpotifyToken();
    setToken(token);
    setSearchOpen(true);
    resetTrack();
  };

  //직접 가사 입력하기
  const handleLyricWriteClick = () => {
    setLyricInputModal(true);
  };

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setSelectedTrack((prevTrack) => ({
        ...prevTrack,
        content: detail,
        link: link,
        emotion: emotion,
      }));
    }, 500);

    return () => clearTimeout(delayTimer);
  }, [detail, link, emotion]);

  // 선택한 가사 초기화
  const resetSavedLines = useResetRecoilState(LyricState);
  const resetSavedTrack = useResetRecoilState(TrackState);
  const handleLyricDelete = (e) => {
    e.stopPropagation();
    resetTrack();
  };

  const resetTrack = () => {
    setSelectedTrack((prevTrack) => ({
      ...prevTrack,
      lyric: "",
      name: "",
      artist: "",
      type: "",
    }));
    resetSavedLines();
    resetSavedTrack();
  };

  // 가사 수정을 위한 모달 열기
  const handleLyricClick = () => {
    if (selectedTrack?.type === "input") {
      setLyricInputModal(true);
    } else if (selectedTrack?.type === "search") {
      setSelectOpen(true);
    }
  };

  return (
    <div>
      <Wrapper>
        <Title>
          <div className="select-lyric">
            <span>
              <span className="title" style={{ marginBottom: "3.2rem" }}>
                가사 선택
              </span>
              <span className="star">*</span>
            </span>
            <span className="self-lyric" onClick={handleLyricWriteClick}>
              직접 가사 입력하기
            </span>
          </div>
        </Title>
        <Lyric onClick={handleLyricSearchClick}>
          <span>가사 검색하기</span>
          <NextBtn />
        </Lyric>
        {selectedTrack?.lyric && (
          <>
            <LyricBox onClick={handleLyricClick}>
              <div>{selectedTrack.lyric}</div>
              <Delete onClick={(e) => handleLyricDelete(e)} />
            </LyricBox>
            <Line />
            <Title>
              <span className="title" style={{ marginBottom: "1.6rem" }}>
                가사 출처
              </span>
              <span className="star">*</span>
            </Title>
            <TrackInfo>
              <div>
                노래 제목 <span>{selectedTrack.name}</span>
              </div>
              <div>
                가수 이름 <span>{selectedTrack.artist}</span>
              </div>
            </TrackInfo>
          </>
        )}
        <Line />
        <EmotionDiv>
          <Title>
            <span className="title" style={{ marginBottom: "4rem" }}>
              나의 감정 (최대 1개)
            </span>
            <span className="star">*</span>
          </Title>
          <EmotionList onEmotionSelect={handleEmotionSelect} />
        </EmotionDiv>
        <Line style={{ marginTop: "4rem" }} />
        <Title>
          <span className="title" style={{ marginBottom: "3.2rem" }}>
            나의 해석
          </span>
          <span className="star">*</span>
        </Title>
        <Detail>
          <textarea
            ref={detailRef}
            value={detail}
            onChange={handleDetailChange}
            placeholder="가사 해석, 감상, 노래에 얽힌 상황 등을 152자 이내로 적어 주세요!"
            onBlur={handleDetailHeight}
          />
        </Detail>
        <Limit>
          <span>{detailCount}</span>
          <span> / 152 자</span>
          <span className="ex"> (공백 제외)</span>
        </Limit>
        <Line style={{ marginTop: "5rem" }} />
        <Title>
          <span className="title" style={{ marginBottom: "1.6rem" }}>
            노래를 들을 수 있는 링크
          </span>
        </Title>
        <Source style={{ marginBottom: "8.3rem" }}>
          <input
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="노래를 들을 수 있는 링크를 남겨주세요!"
          />
        </Source>
      </Wrapper>
    </div>
  );
};

export default PostInput;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding-top: 7.9rem;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 2rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -0.04rem;
  width: 100%;

  .title {
    color: var(--black);
  }
  .star {
    color: var(--pointPink);
  }
  .select-lyric {
    padding-top: 2.8rem;
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .self-lyric {
    color: var(--black);
    font-size: 1.6rem;
    text-decoration: underline;
    font-weight: 500;
    line-height: 130%; /* 20.8px */
    letter-spacing: -0.16px;
    font-style: normal;
    cursor: pointer;
    /* margin-left: 50%; */
  }
`;

const Lyric = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 6.4119rem;
  background-color: var(--black);
  border-radius: 1.3358rem;
  align-items: center;
  justify-content: space-between;

  gap: 13.358px;
  font-size: 1.9rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  white-space: nowrap;

  margin: 3.2rem 0;
  padding: 0 2.1rem;
  cursor: pointer;
  span {
    color: white;
  }
`;

const LyricBox = styled.div`
  width: 100%;
  margin: -0.8rem 0 3.2rem;
  padding: 2.4rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  gap: 8px;
  background-color: var(--lightGray);
  border-radius: 16px;

  div {
    width: 100%;
    align-self: stretch;
    color: var(--black);
    font-size: 4rem;
    font-style: normal;
    font-weight: 900;
    line-height: 105%;
    letter-spacing: -0.12rem;
  }

  svg {
    flex-shrink: 0;
  }
`;

const Limit = styled.div`
  align-self: flex-end;
  margin-bottom: 5rem;
  color: var(--black);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  .ex {
    color: var(--darkGray);
  }
`;

const Line = styled.div`
  width: 100%;
  border-bottom: 0.05rem solid var(--black);
  opacity: 0.2;
  line-height: 0.1rem;
  margin-bottom: 5.8rem;
`;

const EmotionDiv = styled.div`
  width: 100%;
`;

const Detail = styled.div`
  width: 100%;
  margin-bottom: 2.4rem;

  textarea {
    width: 100%;
    align-self: stretch;
    color: var(--black);
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 21px */
    letter-spacing: -0.098rem;
  }

  textarea::placeholder {
    color: var(--gray);
  }
`;

const Source = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;

  .smallTitle {
    color: var(--black);
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.032rem;
  }

  input {
    height: 4.8rem;
    flex: 1 0 0;
    width: 26.4rem;
    flex-shrink: 0;
    border: none;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    border-radius: 0;
    border-bottom: 0.15rem solid var(--black);
    background: var(--white);
    outline: none;

    margin-bottom: 8rem;
  }

  input::placeholder {
    color: var(--gray);
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.032rem;
  }
`;

const TrackInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 3.2rem;

  div {
    display: flex;
    align-items: center;
    height: 4.8rem;
    color: var(--black);
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.032rem;

    span {
      display: flex;
      align-items: center;
      margin-left: 3.2rem;
      height: 4.8rem;
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 400;
    }
  }
`;
