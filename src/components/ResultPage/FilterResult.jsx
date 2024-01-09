import React, { useState, useEffect } from "react";
import { styled } from "styled-components";

//components

import LyricsItem from "../common/LyricsItem";
import DropDownBox from "../common/DropDownBox";

import noContent from "../../images/noContent.svg";

const FilterResult = () => {
  const [result, setResult] = useState("");

  return (
    <>
      <Wrapper>
        <TopDiv>
          <div className="count">{result.length}개의 가사를 찾았어요!</div>
          <DropDownBox isSearch={true} />
        </TopDiv>
        {result.length === 0 ? (
          <NoneDiv>
            <img src={noContent} width={"105rem"} height={"105rem"} />
            <div className="noneMent">
              검색결과가 없어요.
              <br /> 사용자님이 등록해 보시는 건 어때요?
            </div>
          </NoneDiv>
        ) : null}
      </Wrapper>
    </>
  );
};

export default FilterResult;

const Wrapper = styled.section`
  margin-top: 0.5rem;
  height: auto;
`;

const TopDiv = styled.div`
  display: flex;
  width: 100%;
  height: auto;
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

const NoneDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin: 6.4rem 0;
  .noneMent {
    color: var(--Dark-Gray, #a0a0a0);
    text-align: center;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */
    letter-spacing: -0.032rem;
    margin-top: 1.6rem;
  }
`;
