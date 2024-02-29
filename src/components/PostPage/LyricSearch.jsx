import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const LyricSearch = ({
  isLyricSearchOpen,
  setIsLyricSearchOpen,
  render,
  setRender,
}) => {
  return (
    <>
      <Container>
        <Top>
          <span> </span>
          <span>가사 검색하기</span>
          <span className="cancelBtn">취소</span>
        </Top>
      </Container>
    </>
  );
};

export default LyricSearch;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80%;
  bottom: 0;
  border-radius: 2rem 2rem 0 0;
  background-color: var(--white);
  z-index: 101;
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem;
  font-size: 1.5rem;
  .cancelBtn {
    cursor: pointer;
  }
`;
