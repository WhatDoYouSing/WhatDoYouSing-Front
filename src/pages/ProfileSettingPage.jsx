import React, { useState } from "react";
import { styled, css } from "styled-components";

import IntroTopbar from "../components/IntroTopbar";

import { ReactComponent as LP } from "../images/profile-LP.svg";
import { ReactComponent as Mike } from "../images/profile-mike.svg";
import { ReactComponent as Headset } from "../images/profile-headset.svg";

import { ReactComponent as FilledLP } from "../images/profile-LP-filled.svg";
import { ReactComponent as FilledMike } from "../images/profile-mike-filled.svg";
import { ReactComponent as FilledHeadset } from "../images/profile-headset-filled.svg";

const profiles = [
  [{ id: "LP", none_filled: <LP />, filled: <FilledLP /> }],
  [
    { id: "Mike", none_filled: <Mike />, filled: <FilledMike /> },
    { id: "Headset", none_filled: <Headset />, filled: <FilledHeadset /> },
  ],
];

const ProfileSettingPage = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState({
    rowIndex: null,
    profileIndex: null,
  });

  const handleChipClick = (rowIndex, profileIndex) => {
    setSelectedProfile({ rowIndex, profileIndex });
    setIsSelected(true);
  };

  return (
    <Wrapper>
      <IntroTopbar
        text="프로필 설정"
        del={false}
        actBtn={true}
        btnText="가입하기"
        isFilled={isSelected}
      />
      <Guide>
        거의 다 왔어요! <br /> 사용할 프로필을 선택해 주세요.
      </Guide>
      <ProfileDiv>
        {profiles.map((row, rowIndex) => (
          <Row key={rowIndex}>
            {row.map(({ none_filled, filled }, profileIndex) => (
              <ProfileBox
                key={profileIndex}
                isSelected={
                  selectedProfile.rowIndex === rowIndex &&
                  selectedProfile.profileIndex === profileIndex
                }
                onClick={() => handleChipClick(rowIndex, profileIndex)}
              >
                {selectedProfile.rowIndex === rowIndex &&
                selectedProfile.profileIndex === profileIndex
                  ? filled
                  : none_filled}
              </ProfileBox>
            ))}
          </Row>
        ))}
      </ProfileDiv>
    </Wrapper>
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

const Box = styled(Wrapper)`
  margin: 23.7rem 0 4.2rem;
  gap: 2.5rem;
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
  display: flex;
  flex-wrap: wrap;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
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
