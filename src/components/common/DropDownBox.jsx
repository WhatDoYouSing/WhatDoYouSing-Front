import React, { useState, useRef } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import useClickOutside from "../../hooks/useClickOutside";

import { ReactComponent as Open } from "../../images/dropdown-open.svg";
import { ReactComponent as Close } from "../../images/dropdown-close.svg";

//components
import DropDown from "./DropDown";

const DropDownBox = () => {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useClickOutside(dropdownRef, false);
  const [selectedOption, setSelectedOption] = useState("좋아요 순");

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <Wrapper>
      <Container onMouseDown={() => setIsOpen(!isOpen)} ref={dropdownRef}>
        <div>{selectedOption}</div>
        {isOpen ? <Close /> : <Open />}
      </Container>
      {isOpen && (
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
