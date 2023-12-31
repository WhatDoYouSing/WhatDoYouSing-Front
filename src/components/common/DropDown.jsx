import React, { useState } from "react";
import { styled, css } from "styled-components";
import { useNavigate } from "react-router-dom";

const options = ["최신순", "좋아요 순", "댓글순"];

const DropDown = ({ selectedOption, handleSelect }) => {
  return (
    <Wrapper>
      {options.map((option) => (
        <ListItem
          key={option}
          value={option}
          onMouseDown={() => handleSelect(option)}
          isSelected={selectedOption === option}
        >
          {option}
        </ListItem>
      ))}
    </Wrapper>
  );
};

export default DropDown;

const Wrapper = styled.div`
  position: absolute;
  top: 5.5rem;
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

  ${({ isSelected }) =>
    isSelected &&
    css`
      color: var(--pointPink);
    `};

  cursor: pointer;
`;
