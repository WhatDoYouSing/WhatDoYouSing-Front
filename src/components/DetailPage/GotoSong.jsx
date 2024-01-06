import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { ReactComponent as Heart } from "../../images/heart.svg";
import { ReactComponent as FullHeart } from "../../images/full-heart.svg";

import LikeInteraction from "./LikeInteraction";
import Aos from "aos";
import "aos/dist/aos.css";

const GotoSong = ({ disabled }) => {
  const [showLikeInteraction, setShowLikeInteraction] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [noteId, setNoteId] = useState(1);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const handleLikeBtnClick = () => {
    setShowLikeInteraction(true);
    setIsLiked(true);

    // 2초가 지나기 전에 클릭 시 애니메이션 초기화
    setTimeout(() => {
      setShowLikeInteraction(false);
      setIsLiked(false);
      Aos.init({ duration: 1000 });
    }, 2000);

    // 새로운 랜덤한 note 애니메이션을 위해 노트 ID를 변경
    setNoteId((prevNoteId) => prevNoteId + 1);
  };

  return (
    <>
      <Wrapper>
        <SongDiv>
          <SongTitle>1 + 1</SongTitle>
          <SongSinger>나상현씨밴드</SongSinger>
        </SongDiv>
        <Buttons>
          <LikeBtn onMouseDown={handleLikeBtnClick}>
            {showLikeInteraction && (
              <div
                style={{ position: "absolute" }}
                data-aos="zoom-in-up"
                data-aos-duration="300"
                data-aos-offset="5"
              >
                <LikeInteraction noteId={noteId} />
              </div>
            )}
            {isLiked ? <FullHeart /> : <Heart />}
            234,345
          </LikeBtn>
          <GoListen disabled={disabled}>이 노래 들으러 가기</GoListen>
        </Buttons>
      </Wrapper>
    </>
  );
};

export default GotoSong;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
  align-self: stretch;
  padding: 4rem 0;
`;

const SongDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  color: var(--Gray, #d9d9d9);

  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.16px;
`;

const SongTitle = styled.div`
  display: flex;
`;

const SongSinger = styled.div`
  display: flex;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const LikeBtn = styled.button`
  display: flex;
  position: relative;
  padding: 1.2rem 2rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  align-self: stretch;
  border-radius: 8rem;
  background: var(--black);

  color: var(--white);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const GoListen = styled.div`
  display: flex;
  padding: 1.2rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 8rem;
  border: 0.15rem solid var(--gray);
  background: var(--white);

  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  ${({ disabled }) =>
    disabled &&
    css`
      color: var(--gray);
    `};
`;
