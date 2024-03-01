import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { DelLyrics } from "../apis/lyrics";

//게시글 삭제 모달
const PostCheckModal = ({ uploCheckModal, setUploCheckModal }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    setUploCheckModal(false);
    console.log(uploCheckModal);
  };

  return (
    <Container>
      <TitleAsk>업로드 불가</TitleAsk>
      <AskComment>필수 표시가 된 항목을 모두 작성해주세요!</AskComment>
      <Button onMouseUp={handleClick} className="buttonDiv">
        확인
      </Button>
    </Container>
  );
};

export default PostCheckModal;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  height: auto;

  padding: 20px 16px;
  align-items: center;
  gap: 16px;
  border-radius: 10px;
  background-color: var(--white);

  .buttonDiv:active {
    background-color: var(--pointPink);
  }
  z-index: 210;
`;

const TitleAsk = styled.div`
  color: var(--black);
  text-align: center;
  font-size: 2rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -0.4px;
`;

const AskComment = styled.div`
  color: var(--black);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.32px;
`;

const Button = styled.button`
  width: 26.8rem;
  height: 4.8rem;
  border-radius: 10px;
  background: var(--black);
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.4rem;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: var(--white);
`;
