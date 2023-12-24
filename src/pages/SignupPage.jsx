import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

import IntroTopbar from "../components/IntroTopbar";

const SignupPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  //아이디 규격 확인
  const [usernameValid, setUsernameValid] = useState(true);

  //아이디 중복 확인
  const [duplicate, setDuplicate] = useState(null);

  //비밀번호 일치 확인
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  return (
    <Wrapper>
      <IntroTopbar />
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
          />
          <Check>중복확인</Check>
        </Contents>
        {usernameValid ? (
          <Condition>영문과 숫자를 조합하여 6자 이상</Condition>
        ) : (
          <Condition style={{ color: "var(--pointPink)" }}>
            아이디가 형식에 맞지 않아요. 다시 입력해 주세요.
          </Condition>
        )}
        {duplicate === true && (
          <Condition style={{ color: "var(--pointPink)" }}>
            같은 아이디가 이미 존재해요. 다시 입력해 주세요.
          </Condition>
        )}
        {duplicate === false && (
          <Condition style={{ color: "var(--black)" }}>
            사용 가능한 아이디입니다.
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
          />
          <Condition>
            영문, 숫자, 특수문자 중 2개 이상 조합하여 10자 이상
          </Condition>
        </Box>
        <Box>
          <Guide>
            비밀번호 확인 <span>*</span>
          </Guide>
          <Input
            type="password"
            placeholder="위에서 입력한 비밀번호를 한 번 더 입력해 주세요."
          />
          {passwordMatch && passwordValid ? (
            <Condition style={{ color: "var(--black)" }}>
              비밀번호가 일치합니다.
            </Condition>
          ) : (
            <Condition>
              {passwordMatch
                ? "영문, 숫자, 특수문자 중 2개 이상 조합하여 10자 이상"
                : "비밀번호가 일치하지 않습니다."}
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
          placeholder="창밖을보라에서 사용할 닉네임을 입력해 주세요."
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <Condition>10자 이하</Condition>
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
  padding: 1.2rem 1.6rem;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  border-radius: 1.6rem;
  background: var(--black);

  color: var(--white);
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
