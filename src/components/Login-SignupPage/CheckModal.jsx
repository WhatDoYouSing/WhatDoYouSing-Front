import React, { useState } from "react";
import styled from "styled-components";

//회원정보 확인 모달
const CheckModal = () => {
  return (
    <>
      <Wrapper>
        <Title>회원정보 확인</Title>
        <ComDiv>
          <AskComment>
            현재로서는 <br /> 아이디와 비밀번호를
            <br /> 분실 시 찾을 수 없어요 ㅠ.ㅠ
          </AskComment>
          <AskComment>정말 이 회원정보로 가입하시겠어요?</AskComment>
        </ComDiv>
        <Button>네. 회원정보 기억했어요!</Button>
      </Wrapper>
    </>
  );
};

export default CheckModal;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  height: auto;

  //추후 삭제 확인용 border
  border: 1px solid #000;

  padding: 20px 16px;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background-color: var(--white);
  color: var(--black);
  text-align: center;
`;

const Title = styled.div`
  font-size: 2rem;
  font-style: normal;
  font-weight: 800;
`;

const ComDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  font-size: 1.6rem;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.32px;

  gap: 1.5rem;
  margin: 1.6rem 0 1rem;
`;

const AskComment = styled.div``;

const Button = styled.button`
  width: 26.8rem;
  height: 4.8rem;

  border-radius: 1rem;
  background: var(--pointPink);
  color: var(--white);
`;
