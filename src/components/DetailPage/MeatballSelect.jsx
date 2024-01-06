import React, { useState } from "react";
import { styled, css } from "styled-components";
import { useNavigate } from "react-router-dom";

const options = ["게시글 삭제", "게시글 신고"];

const MeatballSelect = ({
  isOpen,
  setIsOpen,
  deletePost,
  setDeletePost,
  reportSel,
}) => {
  const handleOptionClick = (option) => {
    option === "게시글 삭제" ? setDeletePost(!deletePost) : reportSel();
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Wrapper className="meatball-select">
        {options.map((option) => (
          <ListItem
            key={option}
            value={option}
            onMouseDown={() => handleOptionClick(option)}
          >
            {option}
          </ListItem>
        ))}
      </Wrapper>
    </>
  );
};

export default MeatballSelect;

const Wrapper = styled.div`
  position: absolute;
  z-index: 9990;
  top: 100%;
  right: 1.5rem;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1.6rem;
  background: var(--white);

  box-shadow: 0 0.5rem 2.5rem 0 rgba(0, 0, 0, 0.1);
`;

const ListItem = styled.div`
  display: flex;
  width: 12rem;
  height: 4.8rem;
  justify-content: center;
  align-items: center;

  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  /* 
  ${({ isSelected }) =>
    isSelected &&
    css`
      color: var(--pointPink);
    `}; */

  cursor: pointer;
`;
