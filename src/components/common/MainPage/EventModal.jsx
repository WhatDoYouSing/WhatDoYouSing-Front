import React, { useState } from "react";
import styled from "styled-components";

import { ReactComponent as CheckboxOn } from "../../../images/checkbox-on.svg";
import { ReactComponent as CheckboxOff } from "../../../images/checkbox-off.svg";
import { ReactComponent as MenuImg } from "../../../images/menu-img-in-modal.svg";

const EventModal = ({ setEventModal }) => {
  const [isChecked, setIsChecked] = useState(false); //하루 보지 않기 눌렀는지

  //확인 버튼 클릭
  const handleClose = () => {
    setEventModal(false);
  };
  //오늘 하루 보지 않기 클릭
  const handleCloseToday = () => {
    const now = new Date(); //현재 시각
    const midnight = new Date(); //자정 시각
    midnight.setHours(24, 0, 0, 0);
    const timeDiff = midnight - now;

    //계산된 시간차를 초로 변환
    const maxAgeSeconds = Math.ceil(timeDiff / 1000);
    document.cookie = `eventCookie="valid"; max-age=${maxAgeSeconds}`;
    setIsChecked(true);
    setEventModal(false);
  };

  const handleCheck = () => {
    setIsChecked(true);
  };

  return (
    <Container>
      <AskComment>
        <span>{`[대동제 맞이 이벤트 안내]`}</span>
        <br />
        안녕하세요,
        <br />
        왓두유씽? 팀입니다.
      </AskComment>
      <MenuImg />
      <AskComment>
        {`해방이화 138주년 대동제 <LIBER EWHA>를 맞아 칵테일 테스트를 준비했습니다!`}
        <br /> <br />
        {`나에게 맞는 칵테일이 무엇인지 알아보고, 5/9(목)~5/10(금) 학관 12번 <왓두유씽?> 부스에서 똑같은 칵테일을 마셔보세요 :)`}
      </AskComment>
      <ButtonDiv>
        <button onClick={handleClose} style={{ background: "#A0A0A0" }}>
          닫기
        </button>
        <button
          onClick={() =>
            (window.location.href = "https://what-do-you-drink.vercel.app/")
          }
          style={{ background: "var(--pointPink)" }}
        >
          테스트하러 가기
        </button>
      </ButtonDiv>
      <CheckDiv onMouseDown={handleCheck} onMouseUp={handleCloseToday}>
        {isChecked ? <CheckboxOn /> : <CheckboxOff />}
        <CheckMessage>오늘 하루 보지 않기</CheckMessage>
      </CheckDiv>
    </Container>
  );
};

export default EventModal;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  padding: 3rem 1.6rem 2rem 1.6rem;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 1.6rem;
  background-color: var(--white);
  z-index: 101;
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

  span {
    color: var(--pointPink);
    text-align: center;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 600;
    line-height: 130%; /* 20.8px */
    letter-spacing: -0.016rem;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  width: 100%;
  height: 48px;
  gap: 8px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-radius: 10px;
    background: var(--pointPink);

    overflow: hidden;
    color: var(--White, #fff);
    text-align: center;
    text-overflow: ellipsis;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: var(--white);
  }
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
