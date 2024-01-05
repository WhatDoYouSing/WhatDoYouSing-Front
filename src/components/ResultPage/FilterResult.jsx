import React, { useState, useEffect } from "react";
import { styled } from "styled-components";

//components
import LyricsItem from "../common/LyricsItem";
import DropDownBox from "../common/DropDownBox";

const FilterResult = () => {
  return (
    <>
      <Wrapper>
        <TopDiv>
          <div className="count">25개의 가사를 찾았어요!</div>
          <DropDownBox />
        </TopDiv>
      </Wrapper>
    </>
  );
};

export default FilterResult;

const Wrapper = styled.section`
  margin-top: 0.5rem;
`;

const TopDiv = styled.div`
  display: flex;
  width: 100%;

  justify-content: space-between;
  align-items: center;
  border-bottom: 0.05rem solid rgba(38, 33, 33, 0.2);

  .count {
    color: var(--veryDarkGray);
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */
    letter-spacing: -0.32px;
  }
`;
