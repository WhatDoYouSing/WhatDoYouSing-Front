import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

const SignupPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  //아이디 규격 확인
  const [usernameValid, setUsernameValid] = useState(true);

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    const alphanumericPattern = /^[a-zA-Z0-9]{6,}$/;

    if (alphanumericPattern.test(value)) {
      setUsernameValid(true);
    } else {
      setUsernameValid(false);
    }

    setUsername(value);
  };

  //아이디 중복 확인
  const [duplicate, setDuplicate] = useState(null); // 중복 여부 상태

  //비밀번호 일치 확인
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const handlePasswordConfirmChange = (e) => {
    setPasswordConfirm(e.target.value);
  };

  useEffect(() => {
    if (password === passwordConfirm) {
      setPasswordMatch(true);
    } else {
      setPasswordMatch(false);
    }
  }, [password, passwordConfirm]);

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

  //버튼 활성화
  const [requiredFieldsValid, setRequiredFieldsValid] = useState(false);
  useEffect(() => {
    const isRequiredFieldsValid =
      usernameValid && passwordValid && passwordMatch && nickname.length > 0;

    setRequiredFieldsValid(isRequiredFieldsValid);
  }, [usernameValid, passwordValid, passwordMatch, nickname]);

  return (
    <Wrapper>
      <Container>
        <ID>
          <Guide>
            아이디 <span>*</span>
          </Guide>
          <InputID
            type="text"
            placeholder="예 : bora1234"
            value={username}
            onChange={handleUsernameChange}
          />
          <Check>중복확인</Check>
          {usernameValid ? (
            <Condition>영문과 숫자를 조합하여 6자 이상</Condition>
          ) : (
            <Condition style={{ color: "#FF5E2B" }}>
              아이디가 형식에 맞지 않습니다. 다시 입력해주십시오.
            </Condition>
          )}
          {duplicate === true && (
            <Condition style={{ color: "#FF5E2B" }}>
              같은 아이디가 이미 존재합니다. 다른 아이디로 다시 입력해주세요.
            </Condition>
          )}
          {duplicate === false && (
            <ConditionGood>사용 가능한 아이디입니다.</ConditionGood>
          )}
        </ID>
        <div style={{ marginBottom: "30px" }}>
          <Guide>
            비밀번호 <span>*</span>
          </Guide>
          <Input
            type="password"
            placeholder="비밀번호를 입력해 주세요."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Condition>
            영문, 숫자, 특수문자 중 2개 이상 조합하여 10자 이상
          </Condition>
        </div>
        <div style={{ marginBottom: "60px" }}>
          <Guide>
            비밀번호 확인 <span>*</span>
          </Guide>
          <Input
            type="password"
            placeholder="위에서 입력한 비밀번호를 한 번 더 입력해 주세요."
            value={passwordConfirm}
            onChange={handlePasswordConfirmChange}
          />
          {passwordMatch && passwordValid ? (
            <ConditionGood>비밀번호가 일치합니다.</ConditionGood>
          ) : (
            <Condition>
              {passwordMatch
                ? "영문, 숫자, 특수문자 중 2개 이상 조합하여 10자 이상"
                : "비밀번호가 일치하지 않습니다."}
            </Condition>
          )}
        </div>
        <div style={{ marginBottom: "50px" }}>
          <Guide>
            닉네임 <span>*</span>
          </Guide>
          <Input
            type="text"
            placeholder="창밖을보라에서 사용할 닉네임을 입력해 주세요."
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>

        <Btn disabled={!requiredFieldsValid}>회원가입</Btn>
      </Container>
    </Wrapper>
  );
};

export default SignupPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  background-color: #161524;
  color: #fff;
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

const InputGuide = styled.input`
  border-radius: 5px;
  background: var(--card-color, #2b2c3f);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.25);
  border: none;
  outline: none;

  font-family: "Pretendard-Regular";
  font-size: 13px;
  font-style: normal;
  color: #fff;

  padding-left: 10px;
  margin: 10px 0px;

  ::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;

//내용 부분

const Guide = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  color: #fff;

  span {
    color: var(--sub-purple, #a397ff);
  }
`;
const Input = styled(InputGuide)`
  width: 340px;
  height: 46px;
`;

const Condition = styled.div`
  font-family: "Pretendard-Regular";
  color: rgba(255, 255, 255, 0.6);
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
`;

const ConditionGood = styled.div`
  font-family: "Pretendard-Regular";
  color: var(--main-purple, #5a45f5);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
`;

//ID
const ID = styled.div`
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 60px;
`;

const InputID = styled(InputGuide)`
  width: 241px;
  height: 46px;
  margin-right: 10px;
`;

const Check = styled.button`
  width: 89px;
  height: 46px;
  border-radius: 5px;
  background: var(--main-purple, #5a45f5);
  border: none;
  color: #fff;
  text-align: center;
  font-family: "Pretendard-Regular";

  font-size: 14px;
  font-style: normal;
  font-weight: 600;
`;

const Btn = styled.button`
  width: 349px;
  height: 58px;
  margin: 30px 0px;
  padding: 18px 0px 19px 0px;

  border-radius: 14px;
  background: var(--sub-background, #242237);
  border: none;

  color: rgba(255, 255, 255, 0.4);
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;

  ${(props) =>
    !props.disabled &&
    css`
      background: var(--main-purple, #5a45f5);
      color: #fff;
      cursor: pointer;
    `}
`;
