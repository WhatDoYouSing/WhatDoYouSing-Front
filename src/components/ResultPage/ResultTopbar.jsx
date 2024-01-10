import React, { useState, useEffect } from "react";
import { styled, css } from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

import { ReactComponent as Back } from "../../images/back.svg";
import { ReactComponent as Search } from "../../images/search.svg";

//recoil
import { useSetRecoilState, useRecoilValue } from "recoil";
import { KeywordState } from "../../assets/recoil/apiRecoil";

const ResultTopbar = () => {
  const navigate = useNavigate();
  const setSearchKeyword = useSetRecoilState(KeywordState);
  const searchKeyword = useSetRecoilState(KeywordState);

  const [keyword, setKeyword] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);

  useEffect(() => {
    if (isInputFocused) {
      const delayTimer = setTimeout(() => {
        // 입력이 0.5초 동안 멈추면 작업 수행
        setSearchKeyword(keyword);
      }, 500);

      // cleanup 함수
      return () => clearTimeout(delayTimer);
    }
  }, [keyword]);

  // useEffect(() => {
  //   setKeyword(searchKeyword);
  // }, []);

  return (
    <>
      <Wrapper>
        <Back
          onClick={() => {
            navigate(-1);
          }}
        />
        <input
          placeholder="가사를 검색해보세요!"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onFocus={() => setIsInputFocused(true)}
        />
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
  height: 7.9rem;
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
