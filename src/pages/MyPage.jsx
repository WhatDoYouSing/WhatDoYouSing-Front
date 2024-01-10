import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

//components
import Topbar from "../components/common/MainPage/Topbar";
import Footer from "../components/common/Footer";

//recoil
import { useRecoilValue, useRecoilState } from "recoil";
import { profileListAtom } from "../assets/recoil/recoil";

//api
import { GetMyPage } from "../apis/my";

const path_list = [
  {
    id: 0,
    name: "저장",

    path: "/recorded/1",

    className: "very-dark",
  },
  {
    id: 1,
    name: "내가 남긴",
    path: "/recorded/2",
    className: "very-dark",
  },
  {
    id: 2,
    name: "가사",

    path: "/recorded/2",

    className: "dark",
  },
  {
    id: 3,
    name: "댓글",

    path: "/recorded/3",

    className: "dark",
  },
  {
    id: 4,
    name: "감정",

    path: "/recorded/4",

    className: "dark",
  },
];

const MyPage = () => {
  const navigate = useNavigate();
  // const isLogin = useRecoilValue(LoginState);
  const isLogin = localStorage.getItem("token") !== null;
  const profileList = useRecoilValue(profileListAtom);

  const Logout = () => {
    window.localStorage.removeItem("user_id");
    window.localStorage.removeItem("username");
    window.localStorage.removeItem("nickname");
    window.localStorage.removeItem("user_profile");
    window.localStorage.removeItem("token");

    navigate("/");
  };

  const [userID, setUserID] = useState(null);
  const [userName, setUserName] = useState(null);
  const [profile, setProfile] = useState(1);

  useEffect(() => {
    if (!isLogin) {
      navigate("/initial");
    } else if (isLogin) {
      setUserID(localStorage.getItem("username") || "");
      setUserName(localStorage.getItem("nickname") || "");
      setProfile(localStorage.getItem("user_profile") || "");

      const handleInfo = async () => {
        const myInfo = await GetMyPage();
        console.log(myInfo);
      };
      handleInfo();
    }
  }, []);

  return isLogin ? (
    <>
      <Topbar />
      <Wrapper>
        <UserInfo>
          <UserProfile>
            <Img src={profileList[profile - 1]?.none_filled} />
          </UserProfile>
          <div className="info">
            <UserID>{userName} 님</UserID>
            <LogBtn onClick={Logout}>로그아웃</LogBtn>
          </div>
        </UserInfo>
        <Grid>
          <Action>
            <div className="title">내 활동</div>
            {path_list.map(({ id, name, path, className }) => (
              <div
                key={id}
                onClick={() => navigate(path)}
                className={className}
              >
                {name}
              </div>
            ))}
          </Action>
          <div>
            <Action>
              <div className="title">회원 정보</div>
              <IDDiv>
                <Nav>아이디 </Nav>
                <span>{userID}</span>
              </IDDiv>
              <Nav onClick={() => navigate("/modifyintro/pas")}>
                비밀번호 변경
              </Nav>
              <Nav onClick={() => navigate("/nic-modify")}>닉네임 변경</Nav>
            </Action>
            <ActionEx>
              <div className="title">기타</div>
              <Nav onClick={() => navigate("/delete")}>회원 탈퇴</Nav>
            </ActionEx>
          </div>
        </Grid>
      </Wrapper>
      <Footer />
    </>
  ) : null;
};

export default MyPage;

const Wrapper = styled.div`
  height: auto;
  min-height: 100%;
  padding-bottom: 15.8rem;
  padding-top: 7.9rem;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  //media-query 따라 조정
  margin-bottom: 4rem;
  padding-top: 3.3rem;
  padding-bottom: 3.6rem;
  border-bottom: 1.2rem solid #fafafa;

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.5em;
  }
`;

const Img = styled.img`
  width: 3.6rem;
  height: 3.6rem;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6.8rem;
  height: 6.8rem;
  border-radius: 50%;
  background-color: var(--lightGray);
`;

const UserID = styled.div`
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 800;
  line-height: 105%;
  letter-spacing: -0.072rem;
`;

const LogBtn = styled.div`
  color: var(--darkGray);

  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.112rem;
  text-decoration-line: underline;

  cursor: pointer;
`;

const Grid = styled.div`
  @media (min-width: 1100px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Action = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3.2rem;
  padding-bottom: 2.4rem;

  gap: 2.4rem;
  border-bottom: 0.05rem solid rgba(38, 33, 33, 0.2);

  @media (min-width: 1100px) {
    border: none;
  }

  .title {
    color: var(--black);

    font-size: 2rem;
    font-weight: 800;
    letter-spacing: -0.04rem;
  }

  .very-dark {
    color: var(--veryDarkGray);

    font-size: 1.6rem;
    font-weight: 600;
    letter-spacing: -0.032rem;
    cursor: pointer;
  }

  .dark {
    color: var(--darkGray);

    font-size: 1.6rem;
    font-weight: 500;
    letter-spacing: -0.032rem;
    cursor: pointer;
  }
`;

const ActionEx = styled(Action)`
  border-bottom: none;
`;

const IDDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    max-width: 17.1rem;
    text-overflow: ellipsis;

    color: var(--darkGray);

    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.32px;
  }
`;

const Nav = styled.div`
  color: var(--veryDarkGray);

  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: -0.032rem;
  cursor: pointer;
`;

const MemberManaging = styled.div`
  margin-bottom: 3.2rem;

  color: var(--black);

  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -0.04rem;

  cursor: pointer;
`;
