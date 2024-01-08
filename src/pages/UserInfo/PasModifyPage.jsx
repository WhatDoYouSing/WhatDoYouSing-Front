import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

import IntroTopbar from "../../components/IntroTopbar";
import Footer from "../../components/common/Footer";

//recoil
import { useSetRecoilState } from "recoil";
import { PasModifyState } from "../../assets/recoil/apiRecoil";

const PasModifyPage = () => {
  const navigate = useNavigate();
  const setNewPassword = useSetRecoilState(PasModifyState);

  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  //규격 확인
  const [passwordValid, setPasswordValid] = useState(null);

  //입력 시작 판단 state
  const [isPasswordFocused, setPasswordFocused] = useState(null);

  //비밀번호 일치 확인
  const [passwordMatch, setPasswordMatch] = useState(null);

  //버튼 활성화
  const [requiredFieldsValid, setRequiredFieldsValid] = useState(false);

  // 비밀번호 유효성 확인
  useEffect(() => {
    setPasswordValid(isPasswordValid(password));
  }, [password]);

  const isPasswordValid = (password) => {
    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(
      password
    );

    return (
      password.length >= 10 &&
      [hasLowerCase, hasUpperCase, hasDigit, hasSpecialChar].filter(Boolean)
        .length >= 2
    );
  };

  // 비밀번호 일치 여부 확인
  useEffect(() => {
    setPasswordMatch(password === passwordConfirm);
  }, [password, passwordConfirm]);

  //버튼 활성화
  useEffect(() => {
    const isRequiredFieldsValid = passwordValid && passwordMatch;

    setRequiredFieldsValid(isRequiredFieldsValid);
    if (isRequiredFieldsValid) {
      setNewPassword(password); // 참일 때 setNewPassword 설정
    }
  }, [passwordValid, passwordMatch]);

  return (
    <>
      <Wrapper>
        <IntroTopbar
          text="비밀번호 변경"
          delPath="/my"
          actBtn={true}
          nextPath="/"
          btnText="수정완료"
          isFilled={requiredFieldsValid}
        />

        <PasswordDiv>
          <Box>
            <Guide>
              비밀번호 <span>*</span>
            </Guide>
            <Input
              type="password"
              placeholder="비밀번호를 입력해 주세요."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setPasswordFocused(true)}
            />
            {isPasswordFocused ? (
              <Condition
                style={{
                  color: passwordValid ? "var(--black)" : "var(--pointPink)",
                }}
              >
                {passwordValid
                  ? "비밀번호가 조건에 맞아요."
                  : "영문, 숫자, 특수문자 중 2개 이상 조합하여 10자 이상이어야 해요."}
              </Condition>
            ) : (
              <Condition>
                영문, 숫자, 특수문자 중 2개 이상 조합하여 10자 이상
              </Condition>
            )}
          </Box>
          <Box>
            <Guide>
              비밀번호 확인 <span>*</span>
            </Guide>
            <Input
              type="password"
              placeholder="위에서 입력한 비밀번호를 한 번 더 입력해 주세요."
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
            {passwordMatch && passwordValid ? (
              <Condition style={{ color: "var(--black)" }}>
                비밀번호가 일치합니다.
              </Condition>
            ) : (
              <Condition
                style={{
                  color: passwordMatch ? "var(--darkGray)" : "var(--pointPink)",
                }}
              >
                {passwordMatch
                  ? "영문, 숫자, 특수문자 중 2개 이상 조합하여 10자 이상"
                  : "비밀번호가 일치하지 않아요."}
              </Condition>
            )}
          </Box>
        </PasswordDiv>
      </Wrapper>
      <Footer />
    </>
  );
};

export default PasModifyPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: auto;
  min-height: 100%;
  padding: 13.7rem 0 15.8rem;

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

const PasswordDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.6rem;
`;
