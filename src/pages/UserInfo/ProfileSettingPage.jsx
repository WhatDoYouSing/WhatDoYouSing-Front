import React, { useState, useRef, useEffect } from "react";
import { styled, css } from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

import IntroTopbar from "../../components/IntroTopbar";

//recoil
import { useSetRecoilState, useRecoilValue } from "recoil";
import { ProfileState } from "../../assets/recoil/apiRecoil";

import henry from "../../images/icons/henry-prof.png";
import cherry from "../../images/icons/cherry-prof.png";
import luke from "../../images/icons/luke-prof.png";
import doong_ee from "../../images/icons/doong-ee-prof.png";

import filled_henry from "../../images/icons/henry-prof-filled.png";
import filled_cherry from "../../images/icons/cherry-prof-filled.png";
import filled_luke from "../../images/icons/luke-prof-filled.png";
import filled_doong_ee from "../../images/icons/doong-ee-prof-filled.png";

const profiles = [
  { id: "Henry", none_filled: henry, filled: filled_henry },
  { id: "Cherry", none_filled: cherry, filled: filled_cherry },
  { id: "Luke", none_filled: luke, filled: filled_luke },
  { id: "Doongee", none_filled: doong_ee, filled: filled_doong_ee },
];

const ProfileSettingPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const selectedProfileIndex = useSetRecoilState(ProfileState);
  const selectedProfiles = useRecoilValue(ProfileState);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [isKakao, setIsKakao] = useState(false);

  useEffect(() => {
    const setText = () => {
      if (id === "1") {
        setIsKakao(false);
      } else if (id === "2") {
        setIsKakao(true);
      }
    };
    setText();
    (function (w, d, a) {
      w.__beusablerumclient__ = {
        load: function (src) {
          var b = d.createElement("script");
          b.src = src;
          b.async = true;
          b.type = "text/javascript";
          d.getElementsByTagName("head")[0].appendChild(b);
        },
      };
      w.__beusablerumclient__.load(a + "?url=" + encodeURIComponent(d.URL));
    })(window, document, "//rum.beusable.net/load/b230311e131233u903");
  }, []);

  const handleChipClick = (selectedIndex) => {
    setSelectedProfile(selectedIndex);
    selectedProfileIndex(selectedIndex + 1);
  };

  return (
    <>
      <Wrapper>
        <IntroTopbar
          text={isKakao ? "프로필 지정" : "프로필 설정"}
          del={false}
          actBtn={true}
          btnText={"가입하기"}
          nextPath="/"
          isFilled={selectedProfile !== null}
        />
        <Guide>
          거의 다 왔어요! <br /> 사용할 프로필을 선택해 주세요.
        </Guide>
        <ProfileDiv style={{ marginBottom: "10rem" }}>
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

  margin: 16.8rem 0 5rem;

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

  /* margin-top: 5.8rem; */
`;

const ProfileDiv = styled.div`
  margin: 9.4rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 1.6rem;
`;

const Image = styled.img`
  width: 10.4681rem;
  height: 8.1997rem;
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
