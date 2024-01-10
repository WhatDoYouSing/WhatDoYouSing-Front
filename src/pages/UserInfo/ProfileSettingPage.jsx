import React, { useState, useRef, useEffect } from "react";
import { styled, css } from "styled-components";
import { useNavigate } from "react-router-dom";

import IntroTopbar from "../../components/IntroTopbar";

//recoil
import { useSetRecoilState, useRecoilValue } from "recoil";
import { ProfileState } from "../../assets/recoil/apiRecoil";

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
  const selectedProfiles = useRecoilValue(ProfileState);
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleChipClick = (selectedIndex) => {
    setSelectedProfile(selectedIndex);
    selectedProfileIndex(selectedIndex + 1);
    console.log(selectedProfiles);
  };

  return (
    <>
      <Wrapper>
        <IntroTopbar
          text="프로필 설정"
          del={false}
          actBtn={true}
          btnText={"가입하기"}
          nextPath="/"
          isFilled={selectedProfile !== null}
        />
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

const Image = styled.img`
  width: 8.2rem;
  height: 8.2rem;
`;

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
