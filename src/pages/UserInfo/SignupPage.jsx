import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

import IntroTopbar from "../../components/IntroTopbar";

//recoil
import { useSetRecoilState, useRecoilValue } from "recoil";
import { SignupState } from "../../assets/recoil/apiRecoil";

//api
import { PostCheckId } from "../../apis/user";

const SignupPage = () => {
  const navigate = useNavigate();
  const setSignupForm = useSetRecoilState(SignupState);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [nickname, setNickname] = useState("");

  //규격 확인
  const [usernameValid, setUsernameValid] = useState(null);
  const [passwordValid, setPasswordValid] = useState(null);
  const [nicknameValid, setNicknameValid] = useState(null);

  //입력 시작 판단 state
  const [isUsernameFocused, setUsernameFocused] = useState(null);
  const [isPasswordFocused, setPasswordFocused] = useState(null);
  const [isNicknameFocused, setNicknameFocused] = useState(null);

  //아이디 중복 확인
  const [duplicate, setDuplicate] = useState(null);

  //비밀번호 일치 확인
  const [passwordMatch, setPasswordMatch] = useState(null);

  //버튼 활성화
  const [requiredFieldsValid, setRequiredFieldsValid] = useState(false);

  //중복 확인 API 로직
  const handleDuplicate = async () => {
    if (username.trim() === "") {
      alert("아이디를 입력해주세요.");
      return;
    }
    const isChecked = await PostCheckId(username);

    setDuplicate(isChecked["duplicate"]);
  };

  // 아이디 규격 확인
  useEffect(() => {
    const isUsernameValid = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/.test(username);
    setUsernameValid(isUsernameValid);
    setDuplicate(null);
  }, [username]);

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

  const handleNicChange = (e) => {
    setUsername(e.target.value);
  };

  // 닉네임 유효성 확인
  useEffect(() => {
    // 예시: 10자 이하로 유효하다고 가정
    const isNicknameValid = nickname.length > 0 && nickname.length <= 10;
    setNicknameValid(isNicknameValid);
  }, [nickname]);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      // 입력이 0.5초 동안 멈추면 작업 수행
      setSignupForm({
        username: username,
        password: password,
        nickname: nickname,
      });
      console.log("update +", nickname);
    }, 500);

    // cleanup 함수
    return () => clearTimeout(delayTimer);
  }, [nickname]);

  //버튼 활성화
  useEffect(() => {
    const isRequiredFieldsValid =
      usernameValid &&
      !duplicate &&
      passwordValid &&
      passwordMatch &&
      nicknameValid;

    if (isRequiredFieldsValid) {
      setSignupForm({
        username: username,
        password: password,
        nickname: nickname,
      }); // 참일 때 signupForm 설정
    }

    setRequiredFieldsValid(isRequiredFieldsValid);
  }, [usernameValid, duplicate, passwordValid, passwordMatch, nicknameValid]);
  //나중에 중복확인을 아이디 규격 참일 때 가능하게 설정하고, 중복 확인 참일 때 활성화되도록 수정

  return (
    <Wrapper>
      <IntroTopbar
        text="회원가입"
        actBtn={true}
        nextPath="/profile"
        isFilled={requiredFieldsValid}
      />
      <Box>
        <Guide>
          아이디 <span>*</span>
        </Guide>
        <Contents>
          <InputID
            type="text"
            placeholder="예 : abcd1234"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onFocus={() => setUsernameFocused(true)}
          />
          <Check onClick={handleDuplicate} duplicate={duplicate}>
            {duplicate == null ? "중복확인" : "확인완료"}
          </Check>
        </Contents>
        {duplicate == null && (
          <>
            {isUsernameFocused ? (
              usernameValid ? (
                <Condition style={{ color: "var(--black)" }}>
                  아이디가 조건에 맞아요. 중복 확인을 진행해 주세요.
                </Condition>
              ) : (
                <Condition style={{ color: "var(--pointPink)" }}>
                  아이디가 형식에 맞지 않아요. 다시 입력해 주세요.
                </Condition>
              )
            ) : (
              <Condition>영문과 숫자를 조합하여 6자 이상</Condition>
            )}
          </>
        )}

        {duplicate === true && (
          <Condition style={{ color: "var(--pointPink)" }}>
            같은 아이디가 이미 존재해요. 다시 입력해 주세요.
          </Condition>
        )}
        {duplicate === false && (
          <Condition style={{ color: "var(--black)" }}>
            아이디 중복확인이 완료되었어요.
          </Condition>
        )}
      </Box>

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
              비밀번호가 일치해요.
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
      <Box>
        <Guide>
          닉네임 <span>*</span>
        </Guide>
        <Input
          type="text"
          placeholder="예 : lyrics"
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
  );
};

export default SignupPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  margin-top: 12.9rem;

  @media (min-width: 1200px) {
    padding: 0 20.6rem;
  }
`;

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  overflow-y: scroll;
  box-sizing: border-box;
  padding-left: 20px;

  &::-webkit-scrollbar {
    display: none;
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

const InputID = styled(Input)``;

const Check = styled.button`
  display: flex;
  min-width: 8.1rem;
  padding: 1.2rem 1.45rem;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  border-radius: 1.6rem;
  background-color: ${(props) =>
    props.duplicate == false ? "var(--white)" : "var(--black)"};
  color: ${(props) =>
    props.duplicate == false ? "var(--black)" : "var(--white)"};
  border: ${(props) =>
    props.duplicate == false
      ? "1.5px solid var(--black)"
      : "1.5px solid var(--black)"};
  text-align: center;

  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
`;

const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  width: 100%;
  gap: 0.8rem;
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
  padding: 3.6rem 0;
  margin: 3.6rem 0;

  border-top: 0.05rem solid rgba(38, 51, 38, 0.2);
  border-bottom: 0.05rem solid rgba(38, 51, 38, 0.2);
`;
