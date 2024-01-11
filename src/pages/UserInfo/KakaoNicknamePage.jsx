import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import IntroTopbar from "../../components/IntroTopbar";
import Footer from "../../components/common/Footer";

//recoil
import { useSetRecoilState } from "recoil";
import { NicModifyState } from "../../assets/recoil/apiRecoil";

const KakaoNicknamePage = () => {
  const navigate = useNavigate();

  const [nickname, setNickname] = useState("");
  const setNewNicname = useSetRecoilState(NicModifyState);

  //규격 확인
  const [nicknameValid, setNicknameValid] = useState(null);

  //입력 시작 판단 state
  const [isNicknameFocused, setNicknameFocused] = useState(null);

  //버튼 활성화
  const [requiredFieldsValid, setRequiredFieldsValid] = useState(false);

  // 닉네임 유효성 확인
  useEffect(() => {
    // 예시: 10자 이하로 유효하다고 가정
    const isNicknameValid = nickname.length > 0 && nickname.length <= 10;
    setNicknameValid(isNicknameValid);
  }, [nickname]);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      // 입력이 0.5초 동안 멈추면 작업 수행
      setNewNicname(nickname);
    }, 500);

    // cleanup 함수
    return () => clearTimeout(delayTimer);
  }, [nickname, setNewNicname]);

  //버튼 활성화
  useEffect(() => {
    setRequiredFieldsValid(nicknameValid);
    if (requiredFieldsValid) {
      setNewNicname(nickname); // 참일 때 setNewPassword 설정
    }
  }, [nicknameValid]);

  return (
    <>
      <Wrapper>
        <IntroTopbar
          text="회원가입"
          delPath="/initial"
          actBtn={true}
          nextPath="/profile/2"
          btnText="다음으로"
          isFilled={requiredFieldsValid}
        />

        <Box>
          <Guide>
            닉네임 <span>*</span>
          </Guide>
          <Input
            type="text"
            placeholder="새로 사용할 닉네임을 입력해 주세요."
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            onFocus={() => setNicknameFocused(true)}
          />
          {isNicknameFocused ? (
            <Condition
              style={{
                color: nicknameValid ? "var(--black)" : "var(--pointPink)",
              }}
            >
              {nicknameValid
                ? "닉네임이 조건에 맞아요."
                : "1자 이상 10자 이하여야 해요."}
            </Condition>
          ) : (
            <Condition>10자 이하</Condition>
          )}
        </Box>
      </Wrapper>
      <Footer />
    </>
  );
};

export default KakaoNicknamePage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: auto;
  min-height: 100%;
  padding: 12.9rem 0 15.8rem;

  @media (min-width: 1200px) {
    padding: 0 20.6rem;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Guide = styled.div`
  color: var(--black);

  font-size: 2rem;
  font-style: normal;
  font-weight: 800;

  span {
    color: var(--pointPink);
  }
`;

const Input = styled.input`
  width: 100%;
  height: 4.8rem;
  background: var(--white);
  padding: 0 1rem;

  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;

  border: none;
  outline: none;
  border-bottom: 0.2rem solid var(--black);
  transition: border-bottom-color 0.3s ease;

  &::placeholder {
    color: var(--gray);
  }
`;

const Condition = styled.div`
  color: var(--darkGray);

  font-size: 1.6rem;
  font-weight: 500;
`;
