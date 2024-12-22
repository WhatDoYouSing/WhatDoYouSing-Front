import React, { useState } from "react";
import styled from "styled-components";

import { ReactComponent as CheckboxOn } from "../../../images/checkbox-on.svg";
import { ReactComponent as CheckboxOff } from "../../../images/checkbox-off.svg";

const ShutdownModal = ({ setModalOpen }) => {
  const [isChecked, setIsChecked] = useState(false); //하루 보지 않기 눌렀는지

  //확인 버튼 클릭
  const handleClose = () => {
    setModalOpen(false);
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
    setModalOpen(false);
  };

  const handleCheck = () => {
    setModalOpen(true);
  };

  return (
    <Container>
      <TitleAsk>{`[재정비 및 앱 출시 안내]`}</TitleAsk>
      <AskComment>
        안녕하세요, <br />
        왓두유씽? 팀입니다. <br />
        <br />
        현재 왓두유씽? 은 <br />
        서비스 재정비 중이며, <br />
        25년 초 앱 출시를 준비하고 있습니다. <br />
        <br />
        웹사이트로는 <br />
        당분간 서비스 이용이 불가한 점 <br />
        너른 양해 부탁드립니다. <br />
        <br />
        빠른 시일 내에 <br />
        새로운 모습으로 만나뵙겠습니다. <br />
        감사합니다.
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

export default ShutdownModal;

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
