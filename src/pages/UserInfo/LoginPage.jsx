import React, { useState } from "react";
import styled from "styled-components";

import IntroTopbar from "../../components/IntroTopbar";

import symbol from "../../images/change/animals.png";
import wordmark from "../../images/change/wordmark-kor.png";
import wordmarkE from "../../images/change/wormark-eng.png";

//api
import { PostLogin } from "../../apis/user";

const LoginPage = () => {
  //아이디/비밀번호 입력
  const [formData, setFormData] = useState({
    userid: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  //로그인 함수
  const handleLogin = async () => {
    if (formData?.userid.trim() === "") {
      alert("아이디를 입력해주세요.");
    } else if (formData?.password.trim() === "") {
      alert("비밀번호를 입력해주세요.");
    } else {
      const isOK = await PostLogin(formData.userid, formData.password);
    }
  };

  return (
    <Wrapper>
      <IntroTopbar />
      <Box>
        <ImgBoxS>
          <Symbol src={symbol} />
        </ImgBoxS>
        <ImgBoxW>
          <Wordmark src={wordmark} />
        </ImgBoxW>
        <ImgBoxE>
          <WordmarkE src={wordmarkE} />
        </ImgBoxE>
      </Box>
      <SideBox>
        <Login>로그인</Login>
        <InputBox>
          <Input
            type="text"
            name="userid"
            value={formData.userid}
            onChange={handleInputChange}
            placeholder="아이디"
          />
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="비밀번호"
          />
        </InputBox>
        <LoginBtn onMouseUp={handleLogin}>로그인</LoginBtn>
      </SideBox>
    </Wrapper>
  );
};

export default LoginPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    height: 100%;
  }
`;

const ColumnStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Box = styled(ColumnStyle)`
  margin: 23.7rem 0 4.2rem;
  gap: 2.5rem;

  @media (min-width: 1200px) {
    margin: 0;
    gap: 2.8rem;
  }
`;

const ImgBoxS = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12rem;
  height: 12rem;

  @media (min-width: 1200px) {
    width: 18rem;
    height: 17.83rem;
  }
`;

const ImgBoxW = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12rem;
  height: 2.7rem;

  @media (min-width: 1200px) {
    display: none;
  }
`;

const ImgBoxE = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18rem;

  @media (max-width: 1200px) {
    display: none;
  }
`;

const WordmarkE = styled.img`
  width: 18rem;
  height: 166.01px;
`;

const Wordmark = styled.img`
  width: 12rem;
  height: 2.7rem;
`;

const Symbol = styled.img`
  width: 12rem;
  height: 12rem;

  @media (min-width: 1200px) {
    width: 18rem;
    height: 17.83rem;
  }
`;

const SideBox = styled(ColumnStyle)`
  width: 100%;

  @media (min-width: 1200px) {
    display: flex;
    padding: 10rem;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 16px;
    border: 1.5px solid var(--lightGray);
    background: var(--white);

    box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.1);
  }
`;

const Login = styled.div`
  color: var(--black);
  text-align: center;

  font-size: 3.2rem;
  font-weight: 800;

  margin-bottom: 6.4rem;

  @media (max-width: 1200px) {
    display: none;
  }
`;

const InputBox = styled(ColumnStyle)`
  width: 100%;
  gap: 1.6rem;
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

const LoginBtn = styled.button`
  display: flex;
  padding: 2rem 4.8rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  align-self: stretch;

  border-radius: 1.2rem;
  border: 0.15rem solid var(--gray);
  background: var(--white);

  margin: 3.2rem 0;

  color: var(--black);
  text-align: center;

  font-size: 2rem;
  font-weight: 600;

  &:active {
    background-color: var(--pointPink);
    color: var(--white);
    border: none;
  }
`;
