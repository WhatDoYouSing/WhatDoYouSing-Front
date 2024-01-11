import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

import IntroTopbar from "../../components/IntroTopbar";
import Footer from "../../components/common/Footer";

import symbol from "../../images/change/animals.png";
import wordmark from "../../images/change/wordmark-kor.png";
import wordmarkE from "../../images/change/wormark-eng.png";

//api
// import { PostCheckPassword } from "../../apis/user";

//recoil
import { useSetRecoilState, useRecoilValue } from "recoil";
import { PasCheckState } from "../../assets/recoil/apiRecoil";

const UserModifyIntroPage = () => {
  const type = useParams();
  const navigate = useNavigate();
  const setCheckPassword = useSetRecoilState(PasCheckState);
  const checkPassword = useRecoilValue(PasCheckState);

  const [password, setPassword] = useState("");

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      // 입력이 0.5초 동안 멈추면 작업 수행
      setCheckPassword(password);
    }, 500);

    console.log(checkPassword);

    // cleanup 함수
    return () => clearTimeout(delayTimer);
  }, [password, setCheckPassword]);

  const handleNavigate = async () => {
    console.log(password);
    if (type.id === "pas") {
      navigate("/pas-modify");
    } else if (type.id === "nic") {
      navigate("/nic-modify");
    } else {
      alert("오류 발생!ㅠ.ㅠ");
    }
  };

  return (
    <>
      <Wrapper>
        <IntroTopbar text="회원정보 수정" delPath="/my" />
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
          <Login>회원정보 수정</Login>
          <span>비밀번호를 입력하세요.</span>
          <InputBox>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="본인의 비밀번호를 입력해 주세요."
            />
          </InputBox>
          <LoginBtn onMouseUp={handleNavigate}>확인</LoginBtn>
        </SideBox>
      </Wrapper>
      <Footer />
    </>
  );
};

export default UserModifyIntroPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  min-height: 100%;
  padding-bottom: 15.8rem;

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    min-height: 100%;
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
  /* 
  @media (min-width: 1200px) {
    margin: 0;
    gap: 2.8rem;
  } */

  @media (max-width: 1200px) {
    display: none;
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
  margin: 23.7rem 0 4.2rem;
  gap: 2.5rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  span {
    margin-bottom: 1rem;
    font-size: 2rem;
    font-style: normal;
    font-weight: 800;
    text-align: start;
  }

  @media (min-width: 1200px) {
    padding: 10rem;
    border-radius: 1.6rem;
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
