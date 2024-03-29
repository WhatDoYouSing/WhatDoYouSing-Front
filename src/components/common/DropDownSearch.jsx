import React, { useState, useRef, useEffect } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import useClickOutside from "../../hooks/useClickOutside";

import { ReactComponent as Open } from "../../images/dropdown-open.svg";
import { ReactComponent as Close } from "../../images/dropdown-close.svg";

//components
import DropDown from "./DropDown";

//recoil
import { useSetRecoilState, useRecoilValue } from "recoil";
import { SearchDropdownState } from "../../assets/recoil/apiRecoil";

const DropDownSearch = () => {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useClickOutside(dropdownRef, false);
  const [selectedOption, setSelectedOption] = useState("댓글순");
  const setOption = useSetRecoilState(SearchDropdownState);
  const settingSearchOption = useRecoilValue(SearchDropdownState);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    setSelectedOption(settingSearchOption); //버튼 눌러서 검색할 때 state 설정
  }, []);

  useEffect(() => {
    const handleFirstState = () => {
      setOption(selectedOption);
    };
    handleFirstState();
  }, [selectedOption]); //처음 로딩되었을 때 selectedOption recoil 반영

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

export default DropDownSearch;

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
