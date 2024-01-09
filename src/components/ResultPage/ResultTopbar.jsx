import React, { useState, useEffect } from "react";
import { styled, css } from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

import { ReactComponent as Back } from "../../images/back.svg";
import { ReactComponent as Search } from "../../images/search.svg";

const ResultTopbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <Wrapper>
        <Back
          onClick={() => {
            navigate(-1);
          }}
        />
        <input placeholder="가사를 검색해보세요!" />
        <Search />
      </Wrapper>
    </>
  );
};
export default ResultTopbar;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-end;

  width: 100%;
  height: 11.4rem;
  background: var(--white);
  color: var(--black);
  z-index: 9999;

  input {
    width: 100%;
    height: 4.8rem;
    border: none;
    outline: none;
    border-bottom: 0.15rem solid var(--black);
    background: var(--white);
  }
`;
