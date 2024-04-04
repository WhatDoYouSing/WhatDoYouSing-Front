import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import { ReactComponent as Delete } from "../images/delete.svg";
import { ReactComponent as Back } from "../images/back.svg";

//recoil
import { useRecoilValue } from "recoil";
import {
  SignupState,
  ProfileState,
  PasModifyState,
  NicModifyState,
  PasCheckState,
} from "../assets/recoil/apiRecoil";

//api
import {
  PatchPassword,
  PatchNickname,
  PostSignup,
  PostProfile,
} from "../apis/user";

const IntroTopbar = ({
  text = "로그인",
  backPath = -1,
  del = true,
  delPath = "/initial",
  actBtn = false,
  btnText = "다음으로",
  nextPath = "/",
  isFilled = false,
}) => {
  const navigate = useNavigate();
  const existingPassword = useRecoilValue(PasCheckState);
  const newPassword = useRecoilValue(PasModifyState);
  const newNickname = useRecoilValue(NicModifyState);
  const signupForm = useRecoilValue(SignupState);
  const profile = useRecoilValue(ProfileState);

  const handleClick = async () => {
    if (isFilled) {
      switch (text) {
        case "프로필 설정":
          PostSignup(
            signupForm.username,
            signupForm.password,
            signupForm.nickname,
            profile,
            navigate
          );
          // PostProfile(profile);
          // navigate(nextPath);
          break;
        case "프로필 지정":
          PostProfile(profile);
          // navigate(nextPath);
          break;
        case "비밀번호 변경":
          PatchPassword(existingPassword, newPassword, navigate);
          break;
        case "닉네임 변경":
          PatchNickname(newNickname);
          navigate(nextPath);
          break;
        case "회원가입":
          console.log(newNickname);
          PatchNickname(newNickname);
          navigate(nextPath);
          break;
        default:
          navigate(nextPath);
      }
    } else {
      // alert("필수항목을 모두 채워주세요!");
    }
  };

  return (
    <Wrapper>
      <Container>
        <ImgDiv>
          {del ? (
            <Delete
              onClick={() => {
                navigate(delPath);
              }}
            />
          ) : (
            <Back
              onClick={() => {
                navigate(backPath);
              }}
            />
          )}
        </ImgDiv>
        <Title>{text}</Title>
        {actBtn ? (
          <NextBtn
            className="buttonDiv"
            isFilled={isFilled}
            onMouseUp={handleClick}
          >
            {btnText}
          </NextBtn>
        ) : (
          <></>
        )}
      </Container>
    </Wrapper>
  );
};

export default IntroTopbar;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-end;

  width: 100%;
  height: 7.9rem;
  background: var(--white);

  color: var(--black);
  z-index: 260;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 0 1.6rem 2.7rem;

  @media (min-width: 1100px) {
    padding: 0 16.8rem 2.7rem;
  }
`;

const ImgDiv = styled.div`
  position: absolute;
  left: 0;

  cursor: pointer;

  @media (min-width: 1100px) {
    left: 16.8rem;
  }
`;

const Title = styled.div`
  color: var(--Black, #262121);
  text-align: center;
  font-size: 2rem;
  font-style: normal;
  font-weight: 800;
`;

const NextBtn = styled.button`
  position: absolute;
  display: flex;
  width: 8.1rem;
  height: 4.1rem;
  padding: 1.2rem 1.6rem;
  justify-content: center;
  align-items: center;
  right: 1.6rem;

  @media (min-width: 1100px) {
    right: 16.8rem;
  }

  flex-shrink: 0;
  border-radius: 1.6rem;
  background-color: ${(props) =>
    props.isFilled ? "var(--black)" : "var(--lightGray)"};
  color: ${(props) => (props.isFilled ? "var(--white)" : "var(--darkGray)")};
  text-align: center;

  font-size: 1.4rem;
  font-weight: 500;

  &:active {
    background-color: ${(props) =>
      props.isFilled ? "var(--pointPink)" : "var(--lightGray)"};
  }
`;
