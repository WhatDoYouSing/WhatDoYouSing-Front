import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import ModalTopbar from "./ModalTopbar";

const LyricInput = ({
  selectedTrack,
  setSelectedTrack,
  setCheckModal,
  setInputModal,
}) => {
  // 글자수
  const [lyricCount, setLyricCount] = useState(0);

  // 유효성 검사
  const [lyric, setLyric] = useState("");
  const [song, setSong] = useState("");
  const [singer, setSinger] = useState("");

  useEffect(() => {
    if (selectedTrack) {
      setLyric(selectedTrack.lyric);
      setSong(selectedTrack.name);
      setSinger(selectedTrack.artist);
    } else {
      setLyric("");
      setSong("");
      setSinger("");
    }
  }, [selectedTrack]);

  const [fieldsValid, setFieldsValid] = useState(false);
  const completeBtn = (fieldsValid) => {
    setFieldsValid(fieldsValid);
  };

  useEffect(() => {
    const isRequiredFields = lyric !== "" && singer !== "" && song !== "";
    completeBtn(!!isRequiredFields);
  }, [lyric, song, singer]);

  // 입력 값 관리 함수
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

  // 가사 입력 값 관리
  const lyricRef = useRef(null);
  const handleLyricChange = (e) => {
    const maxLength = 60;
    handleInputChange(e.target.value, maxLength, setLyric, setLyricCount);
  };
  const handleLyricHeight = (e) => {
    setLyric(e.target.value.replace(/\n/g, " ").trim());
    handleHeight(lyricRef);
  };

  // 입력한 가사 저장
  const saveInputLyric = () => {
    setSelectedTrack((prevTrack) => ({
      ...prevTrack,
      lyric: lyric,
      name: song,
      artist: singer,
      type: "input",
    }));
  };

  return (
    <>
      <Wrapper>
        <ModalTopbar
          text="직접 가사 입력하기"
          del={false}
          isFilled={fieldsValid}
          btnText="입력완료"
          saveInputLyric={saveInputLyric}
          setUploCheckModal={setCheckModal}
          setLyricInputModal={setInputModal}
        />
        <Message>
          출처가 정확하지 않거나 법적 혹은 윤리적으로
          <br />
          부적절한 가사 업로드 시 제재될 수 있어요.
        </Message>
        <Title>
          <span className="title" style={{ marginBottom: "3.2rem" }}>
            인용할 가사
          </span>
          <span className="star">*</span>
        </Title>
        <Lyric>
          <textarea
            ref={lyricRef}
            value={lyric}
            onChange={handleLyricChange}
            placeholder="인용하고 싶은 가사를 60자 이내로 적어주세요!"
            onBlur={(e) => handleLyricHeight(e)}
          />
        </Lyric>
        <Limit>
          <span>{lyricCount}</span>
          <span> / 60 자</span>
          <span className="ex"> (공백 제외)</span>
        </Limit>
        <Line />
        <Title>
          <span className="title" style={{ marginBottom: "1.6rem" }}>
            가사 출처
          </span>
          <span className="star">*</span>
        </Title>
        <Source>
          <div className="smallTitle">노래 제목</div>
          <input
            value={song}
            onChange={(e) => setSong(e.target.value)}
            placeholder="노래 제목을 남겨주세요!"
          />
        </Source>
        <Source>
          <div className="smallTitle">가수 이름</div>
          <input
            value={singer}
            onChange={(e) => setSinger(e.target.value)}
            placeholder="가수 이름을 남겨주세요!"
          />
        </Source>
        <Line style={{ marginTop: "5rem" }} />
      </Wrapper>
    </>
  );
};

export default LyricInput;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  overflow: scroll;
  background-color: white;
  z-index: 120;

  &::-webkit-scrollbar {
    display: none;
  }

  padding: 7.9rem calc(100% * 1.6 / 39) 0;

  @media (min-width: 1100px) {
    padding: 0 16.8rem;
  }
`;

const Message = styled.div`
  display: flex;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: -0.04rem;
  width: 100%;
  height: auto;
  background-color: var(--lightGray);
  color: var(--darkGray);
  border-radius: 1rem;
  align-items: center;
  padding: 1.4rem;
  margin: 1.6rem 0 3.2rem 0;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 2rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -0.04rem;

  .title {
    color: var(--black);
  }
  .star {
    color: var(--pointPink);
  }
`;

const Lyric = styled.div`
  width: 100%;
  margin-bottom: 2.4rem;

  textarea {
    width: 100%;
    height: 15rem;
    align-self: stretch;
    color: var(--black);
    font-size: 4rem;
    font-style: normal;
    font-weight: 900;
    line-height: 105%;
    letter-spacing: -0.12rem;
  }

  textarea::placeholder {
    width: 100%;
    align-self: stretch;
    color: var(--gray);
    font-size: 4rem;
    font-style: normal;
    font-weight: 900;
    line-height: 105%;
    letter-spacing: -0.12rem;
  }
`;

const Limit = styled.div`
  width: 100%;

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
  margin: 0.8rem 0;
  margin-bottom: 5rem;
`;

const Source = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
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
