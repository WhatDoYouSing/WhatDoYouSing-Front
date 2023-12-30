import React, { useState, useRef } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import useClickOutside from "../../hooks/useClickOutside";

import { ReactComponent as Open } from "../../images/dropdown-open.svg";
import { ReactComponent as Close } from "../../images/dropdown-close.svg";

//components
import DropDown from "./DropDown";

const DropDownBox = () => {
  const [isDropdownView, setDropdownView] = useState(false);
  const [selectedOption, setSelectedOption] = useState("좋아요 순");
  const dropdownRef = useRef(null);

  useClickOutside(dropdownRef, () => {
    if (isDropdownView) {
      setDropdownView(false);
    }
  });

  const handleClickContainer = () => {
    setDropdownView(!isDropdownView);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    setDropdownView(false);
  };
  return (
    <Wrapper>
      <Container onMouseDown={handleClickContainer} ref={dropdownRef}>
        <div>{selectedOption}</div>
        {isDropdownView ? <Close /> : <Open />}
      </Container>
      {isDropdownView && (
        <DropDown selectedOption={selectedOption} handleSelect={handleSelect} />
      )}
    </Wrapper>
  );
};

export default DropDownBox;

const Wrapper = styled.div`
  position: relative;
  display: flex;
`;

const Container = styled.label`
  width: 120px;
  padding: 1.4rem 1.6rem;

  border-radius: 16px;
  background: var(--White, #fff);
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
`;
