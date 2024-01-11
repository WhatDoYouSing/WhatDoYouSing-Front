import React, { useState, useEffect } from "react";
import styled from "styled-components";

import EmotionList from "../common/EmotionList";
import { LyricState } from "../../assets/recoil/apiRecoil";
import { useSetRecoilState } from "recoil";

const PostContent = ({ onBtn }) => {
  const setPostForm = useSetRecoilState(LyricState);

  //글자수
  const [lyricCount, setLyricCount] = useState(0);
  const [detailCount, setDetailCount] = useState(0);

  //유효성 검사
  const [lyric, setLyric] = useState("");
  const [emotion, setEmotion] = useState(null);
  const [detail, setDetail] = useState("");
  const [song, setSong] = useState("");
  const [singer, setSinger] = useState("");
  const [link, setLink] = useState("");

  const handleEmotionSelect = (selectedEmotion) => {
    setEmotion(selectedEmotion);
  };

  //버튼 활성화
  useEffect(() => {
    const isRequiredFieldsValid =
      lyric && emotion !== null && detail && song && singer;
    onBtn(!!isRequiredFieldsValid);
  }, [lyric, emotion, detail, song, singer]);

  const handleLyricChange = (e) => {
    const inputText = e.target.value;
    const maxLength = 60;

    setLyric(inputText.slice(0, maxLength));
    setLyricCount(
      inputText.replace(/\s/g, "").length > maxLength
        ? maxLength
        : inputText.replace(/\s/g, "").length
    );
  };

  const handleDetailChange = (e) => {
    const inputText = e.target.value;
    const maxLength = 150;

    setDetail(inputText.slice(0, maxLength));
    setDetailCount(
      inputText.replace(/\s/g, "").length > maxLength
        ? maxLength
        : inputText.replace(/\s/g, "").length
    );
  };

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      // 입력이 0.5초 동안 멈추면 작업 수행
      setPostForm({
        lyrics: lyric,
        content: detail,
        title: song,
        singer: singer,
        link: link,
        sings_emotion: emotion,
      });
    }, 500);

    // cleanup 함수
    return () => clearTimeout(delayTimer);
  }, [lyric, detail, song, singer, link, emotion]);

  return (
    <div>
      <Wrapper>
        <Title>
          <span className="title" style={{ marginBottom: "3.2rem" }}>
            인용할 가사
          </span>
          <span className="star">*</span>
        </Title>
        <Lyric>
          <textarea
            value={lyric}
            onChange={handleLyricChange}
            maxLength={60}
            placeholder="인용하고 싶은 가사를 60자 이내로 적어주세요!"
            rows={3}
          ></textarea>
        </Lyric>
        <Limit>
          <span>{lyricCount}</span>
          <span> / 60 자</span>
          <span className="ex"> (공백 제외)</span>
        </Limit>
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
            // value={detail}
            // onChange={(e) => {
            //   setDetail(e.target.value);
            //   setDetailCount(e.target.value.replace(/\s/g, "").length);
            // }}
            // maxLength={150}
            // placeholder="가사 해석, 감상, 노래에 얽힌 상황 등을 150자 이내로 적어 주세요!"
            value={detail}
            onChange={handleDetailChange}
            maxLength={150}
            placeholder="가사 해석, 감상, 노래에 얽힌 상황 등을 150자 이내로 적어 주세요!"
          ></textarea>
        </Detail>
        <Limit>
          <span>{detailCount}</span>
          <span> / 150 자</span>
          <span className="ex"> (공백 제외)</span>
        </Limit>
        <Line style={{ marginTop: "5rem" }} />
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

export default PostContent;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
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
    height: auto;
    align-self: stretch;
    color: var(--black);
    font-size: 4rem;
    font-style: normal;
    font-weight: 900;
    line-height: 105%;
    letter-spacing: -0.12rem;
    border: none;
    outline: none;
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

const EmotionDiv = styled.div`
  width: 100%;
`;

const Detail = styled.div`
  margin-bottom: 2.4rem;
  textarea {
    width: 100vw;
    height: auto;
    align-self: stretch;
    color: var(--black);
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 21px */
    letter-spacing: -0.098rem;
    border: none;
    outline: none;
  }
  textarea::placeholder {
    color: var(--gray);
  }
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
