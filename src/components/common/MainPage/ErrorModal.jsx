import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import { ReactComponent as CheckboxOn } from "../../../images/checkbox-on.svg";
import { ReactComponent as CheckboxOff } from "../../../images/checkbox-off.svg";

const ErrorModal = ({ errorModal, setErrorModal }) => {
  const [isChecked, setIsChecked] = useState(false); //하루 보지 않기 눌렀는지

  //확인 버튼 클릭
  const handleClose = () => {
    setErrorModal(false);
  };
  //오늘 하루 보지 않기 클릭
  const handleCloseToday = () => {
    const now = new Date(); //현재 시각
    const midnight = new Date(); //자정 시각
    midnight.setHours(24, 0, 0, 0);
    const timeDiff = midnight - now;

    //계산된 시간차를 초로 변환
    const maxAgeSeconds = Math.ceil(timeDiff / 1000);
    document.cookie = `popupCookie="valid"; max-age=${maxAgeSeconds}`;
    setIsChecked(true);
    setErrorModal(false);
  };

  const handleCheck = () => {
    setIsChecked(true);
  };

  return (
    <Container>
      <TitleAsk>{`[서비스 장애 안내]`}</TitleAsk>
      <AskComment>
        안녕하세요,
        <br />
        왓두유씽? 팀입니다. <br />
        <br />
        현재 서버상의 오류로 인해
        <br />
        게시글 작성의 가사 선택하기 기능이
        <br />
        작동하지 않아 문제 해결 중에 있습니다. <br />
        <br />
        대신 '직접 가사 입력하기' 기능을 통해 <br /> 게시글 작성이 가능하오니
        <br />
        서비스 이용에 참고 부탁드립니다. <br />
        <br />
        이용에 불편을 드려 진심으로 죄송합니다.
      </AskComment>
      <ButtonDiv onClick={handleClose}>
        <Button>확인</Button>
      </ButtonDiv>
      <CheckDiv onMouseDown={handleCheck} onMouseUp={handleCloseToday}>
        {isChecked ? <CheckboxOn /> : <CheckboxOff />}
        <CheckMessage>오늘 하루 보지 않기</CheckMessage>
      </CheckDiv>
    </Container>
  );
};

export default ErrorModal;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  /* height: auto; */

  padding: 3rem 1.6rem 2rem 1.6rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 1.6rem;
  background-color: var(--white);
  z-index: 101;
`;

const TitleAsk = styled.div`
  color: var(--pointPink);
  text-align: center;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; /* 20.8px */
  letter-spacing: -0.016rem;
  margin-bottom: 1rem;
`;

const AskComment = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  color: var(--black);
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.016rem;
`;

const ButtonDiv = styled.button`
  width: 26.8rem;
  height: 4.8rem;
  border-radius: 10px;
  background: var(--pointPink);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.div`
  font-size: 1.4rem;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: var(--white);
`;

const CheckDiv = styled.div`
  width: 26.8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.6rem;
`;

const CheckMessage = styled.div`
  color: var(--darkGray);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
