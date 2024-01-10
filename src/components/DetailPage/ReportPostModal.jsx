import React, { useState, useRef } from "react";
import styled from "styled-components";

import { ReactComponent as Link } from "../../images/link.svg";

//게시글 신고 모달
const ReportPostModal = ({ reportPost, setReportPost }) => {
  const handleClickRep = () => {
    setReportPost(!reportPost); //모달 닫기
  };

  return (
    <Container>
      <TitleAsk>신고하기</TitleAsk>
      <AskComment>
        출처가 정확하지 않거나 법적 혹은 윤리적으로 부적절한 글이 보이면 신고해
        주세요.
      </AskComment>
      <ButtonDiv onMouseUp={handleClickRep} className="buttonDiv">
        <Button className="button">카카오톡 오픈채팅으로 신고</Button>
        <Link />
      </ButtonDiv>
    </Container>
  );
};

export default ReportPostModal;

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
    background-color: var(--black);
  }
  .buttonDiv:focus {
    outline: none;
  }
  .button:focus {
    outline: none;
  }
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
  width: 20.6rem;
  text-align: center;
  color: var(--black);
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.032rem;
`;

const ButtonDiv = styled.button`
  width: 26.8rem;
  height: 4.8rem;
  border-radius: 10px;
  background: var(--pointPink);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6.4rem;
`;

const Button = styled.div`
  font-size: 1.4rem;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: var(--white);
`;
