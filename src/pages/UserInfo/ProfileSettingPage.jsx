import React, { useState, useRef, useEffect } from "react";
import { styled, css } from "styled-components";
import { useNavigate } from "react-router-dom";

import CheckModal from "../../components/Login-SignupPage/CheckModal";

import useClickOutside from "../../hooks/useClickOutside";

//recoil
import { useSetRecoilState, useRecoilValue } from "recoil";
import { ProfileState } from "../../assets/recoil/apiRecoil";

import { ReactComponent as Back } from "../../images/back.svg";

import henry from "../../images/icons/henry-prof.svg";
import cherry from "../../images/icons/cherry-prof.svg";
import luke from "../../images/icons/luke-prof.svg";
import doong_ee from "../../images/icons/doong-ee-prof.svg";

import filled_henry from "../../images/icons/henry-prof-filled.svg";
import filled_cherry from "../../images/icons/cherry-prof-filled.svg";
import filled_luke from "../../images/icons/luke-prof-filled.svg";
import filled_doong_ee from "../../images/icons/doong-ee-prof-filled.svg";

const profiles = [
  { id: "Henry", none_filled: henry, filled: filled_henry },
  { id: "Cherry", none_filled: cherry, filled: filled_cherry },
  { id: "Luke", none_filled: luke, filled: filled_luke },
  { id: "Doongee", none_filled: doong_ee, filled: filled_doong_ee },
];

const ProfileSettingPage = () => {
  const navigate = useNavigate();
  const selectedProfileIndex = useSetRecoilState(ProfileState);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const checkModalRef = useRef(); //게시물 삭제 모달
  const [isOpen, setIsOpen] = useClickOutside(checkModalRef, false);

  const handleChipClick = (selectedIndex) => {
    setSelectedProfile(selectedIndex);
    selectedProfileIndex(selectedIndex + 1);
  };

  return (
    <>
      <Wrapper>
        <TopBarWrapper>
          <TopBarContainer>
            <ImgDiv>
              <Back
                onClick={() => {
                  navigate(-1);
                }}
              />
            </ImgDiv>
            <Title>프로필 설정</Title>

            <NextBtn
              isFilled={selectedProfile !== null}
              onClick={() => setIsOpen(!isOpen)}
            >
              가입하기
            </NextBtn>
          </TopBarContainer>
        </TopBarWrapper>
        {/* 내용 부분 */}
        <Guide>
          거의 다 왔어요! <br /> 사용할 프로필을 선택해 주세요.
        </Guide>
        <ProfileDiv>
          {profiles.map(({ none_filled, filled }, profileIndex) => (
            <ProfileBox
              key={profileIndex}
              isSelected={selectedProfile === profileIndex}
              onClick={() => handleChipClick(profileIndex)}
            >
              <Image
                src={selectedProfile === profileIndex ? filled : none_filled}
              />
            </ProfileBox>
          ))}
        </ProfileDiv>
      </Wrapper>

      {isOpen && (
        <ModalWrapper>
          <CheckModal ref={checkModalRef} />
        </ModalWrapper>
      )}
    </>
  );
};

export default ProfileSettingPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 11.3rem;

  @media (min-width: 1200px) {
    padding: 0 20.6rem;
  }
`;

const TopBarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-end;

  width: 100%;
  height: 11.3rem;
  background: var(--white);

  color: var(--black);
  z-index: 99;
`;

const TopBarContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 0 1.6rem 2.7rem;

  @media (min-width: 1200px) {
    padding: 0 16.8rem 2.7rem;
  }
`;

const ImgDiv = styled.div`
  position: absolute;
  left: 1.6rem;

  cursor: pointer;
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

  flex-shrink: 0;
  border-radius: 1.6rem;
  background-color: ${(props) =>
    props.isFilled ? "var(--black)" : "var(--lightGray)"};
  color: ${(props) => (props.isFilled ? "var(--white)" : "var(--darkGray)")};
  text-align: center;

  font-size: 1.4rem;
  font-weight: 500;
`;

const Guide = styled.div`
  color: var(--black);
  text-align: center;
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 124%;

  margin-top: 5.8rem;
`;

const ProfileDiv = styled.div`
  margin: 9.4rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 1.6rem;
`;

const Image = styled.img``;

const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16.2rem;
  height: 16.2rem;
  border-radius: 50%;
  background-color: var(--lightGray);

  ${({ isSelected }) =>
    isSelected &&
    css`
      filter: drop-shadow(0px 0px 1.4rem rgba(255, 0, 92, 0.2));
    `};

  cursor: pointer;
`;

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.25);
  z-index: 100;
`;
