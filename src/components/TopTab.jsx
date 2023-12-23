import React, { useState } from "react";
import { styled, css } from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Back } from "../images/back.svg";
import { ReactComponent as Share } from "../images/share.svg";
import { ReactComponent as BookmarkOff } from "../images/bookmark-off.svg";
import { ReactComponent as Meatball } from "../images/meatball.svg";

import MeatballSelect from "./DetailPage/MeatballSelect";

const TopTab = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  //미트볼 클릭 여부
  const [isMeatballClicked, setMeatballClicked] = useState(false);
  const handleMeatball = () => {
    setMeatballClicked(!isMeatballClicked);
  };
  //선택한 미트볼 옵션
  const [selectedMeatball, setSelectedMeatball] = useState();
  const handleSelect = (option) => {
    setSelectedMeatball(option);
  };

  return (
    <>
      <Wrapper>
        <Back onClick={goBack} />
        <Others>
          <Share />
          <BookmarkOff />
          <Meatball onClick={handleMeatball} />
          {isMeatballClicked && (
            <MeatballSelect
              selectedMeatball={selectedMeatball}
              handleSelect={handleSelect}
            />
          )}
        </Others>
      </Wrapper>
    </>
  );
};
export default TopTab;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  width: 100%;
  height: 11.3rem;
  background-color: var(--white);
  color: var(--black);
  z-index: 9999;
`;

const Others = styled.div`
  width: auto;
  height: auto;
  flex-direction: row;
  cursor: pointer;
`;
