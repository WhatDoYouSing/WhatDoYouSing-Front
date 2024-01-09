import React, { useState, useEffect } from "react";
import { styled, css } from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

//recoil
import { useRecoilValue, useRecoilState } from "recoil";
import { profileListAtom } from "../../../assets/recoil/recoil";

const ITEM_LIST = [
  {
    id: 0,
    name: "홈",
    path: "/",
  },
  {
    id: 1,
    name: "검색",
    path: "/search",
  },
  {
    id: 2,
    name: "추천",
    path: "/recommend",
  },
];

const Topbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const profileList = useRecoilValue(profileListAtom);
  const isLogin = localStorage.getItem("token") !== null;

  const [profile, setProfile] = useState(null);
  const [isFilled, setIsFilled] = useState("none_filled");
  const [currentTab, setCurrentTab] = useState(null);

  useEffect(() => {
    const currentTabId = ITEM_LIST.findIndex((item) => item.path === pathname);
    setCurrentTab(currentTabId !== -1 ? currentTabId : null);
  }, [pathname]);

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      setProfile(localStorage.getItem("user_profile") || "");
    } else {
    }
  }, []);

  const handleItemClick = (id) => {
    setCurrentTab(id);
    navigate(ITEM_LIST[id].path);
  };

  const handleMyClick = () => {
    navigate("/my");
  };

  return (
    <Wrapper>
      <Container>
        <NavBar>
          {ITEM_LIST.map(({ id, name, path }) => (
            <NavItem
              key={id}
              onClick={() => handleItemClick(id)}
              selected={currentTab === id}
            >
              {name}
            </NavItem>
          ))}
        </NavBar>
        {isLogin ? (
          <>
            <UserProfile onClick={handleMyClick}>
              <Img
                src={
                  pathname === "/my"
                    ? profileList[profile - 1]?.filled
                    : profileList[profile - 1]?.none_filled
                }
              />
            </UserProfile>
          </>
        ) : (
          <NavItem onClick={() => navigate("/initial")}>로그인</NavItem>
        )}
      </Container>
      <RoundDiv />
    </Wrapper>
  );
};

export default Topbar;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-end;

  width: 100%;
  height: 11.6rem;
  background: var(--black);

  color: var(--white);
  z-index: 99;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 0 1.6rem 2.7rem;

  @media (min-width: 1100px) {
    padding: 0 16.8rem 2.7rem;
  }
`;

const NavBar = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;
`;

const NavItem = styled.div`
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.016rem;
  cursor: pointer;

  ${({ selected }) =>
    selected &&
    css`
      color: var(--pointPink);
    `};
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  flex-shrink: 0;
  background-color: var(--lightGray);

  border-radius: 50%;
  cursor: pointer;
`;
const Img = styled.img`
  width: 2.2rem;
  height: 2.2rem;
`;

const RoundDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 1.6rem;
  background-color: var(--white);
  border-radius: 1.6rem 1.6rem 0 0;
  z-index: 1;
`;
