import React, { useState } from "react";
import styled from "styled-components";

//게시글 삭제 모달
const DeletePostModal = () => {
  return (
    <>
      <Wrapper>
        <TitleAsk>게시글 삭제</TitleAsk>
        <AskComment>정말 게시글을 삭제하시겠습니까?</AskComment>
        <Button>게시글 삭제</Button>
      </Wrapper>
    </>
  );
};

export default DeletePostModal;

const Wrapper = styled.div`
  position: absolute;
  z-index: 9999;
  top: 20rem;
  left: 5rem;
  display: flex;
  flex-direction: column;
  width: 30rem;
  height: auto;

  padding: 20px 16px;
  align-items: center;
  gap: 16px;
  border-radius: 10px;
  background-color: var(--white);
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

const Button = styled.div`
  width: 26.8rem;
  height: 4.8rem;
  border-radius: 10px;
  background: var(--pointPink);
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
