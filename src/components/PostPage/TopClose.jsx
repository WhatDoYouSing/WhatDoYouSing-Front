import React, { useState } from "react";
import { styled, css } from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Close } from "../../images/delete.svg";

const TopClose = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Wrapper>
        <Close onClick={goBack} />
        <Title>게시글 작성</Title>
        <PostBtn>게시하기</PostBtn>
      </Wrapper>
    </>
  );
};

export default TopClose;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 11.3rem;
  background-color: var(--white);
  color: var(--black);
  z-index: 9999;
`;

const Title = styled.div`
  color: var(--black);
  text-align: center;
  font-size: 2rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -0.04rem;
  margin-left: 10rem;
  margin-right: 5.3rem;
`;

const PostBtn = styled.div`
  display: flex;
  width: 8.1rem;
  height: 4.1rem;
  padding: 1.2rem 1.6rem;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  flex-shrink: 0;
  border-radius: 1.6rem;
  background: var(--black);
  margin-right: 1.6rem;

  color: var(--white);
  text-align: center;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
