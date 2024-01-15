import React, { useState, useEffect } from "react";
import { styled, css } from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

import EmotionSearch from "./EmotionSearch";

import { ReactComponent as Back } from "../../images/back.svg";
import { ReactComponent as Search } from "../../images/search.svg";

//recoil
import { useSetRecoilState, useRecoilValue } from "recoil";
import { KeywordState } from "../../assets/recoil/apiRecoil";

const ResultTopbar = () => {
  const navigate = useNavigate();
  const setSearchKeyword = useSetRecoilState(KeywordState);
  const searchKeyword = useRecoilValue(KeywordState);

  const [keyword, setKeyword] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);

  useEffect(() => {
    if (isInputFocused) {
      const delayTimer = setTimeout(() => {
        // 입력이 0.5초 동안 멈추면 작업 수행
        setSearchKeyword(keyword);
      }, 300);

      // cleanup 함수
      return () => clearTimeout(delayTimer);
    }
  }, [keyword]);

  useEffect(() => {
    setPlaceholder(searchKeyword);
  }, []);

  return (
    <Box>
      <Wrapper>
        <Back
          onClick={() => {
            navigate(-1);
          }}
        />
        <input
          placeholder={placeholder ? placeholder : "가사를 검색해보세요!"}
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onFocus={() => setIsInputFocused(true)}
        />
        <Search />
      </Wrapper>
      <EmotionSearch />
    </Box>
  );
};
export default ResultTopbar;

const Box = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: 0 1.6rem;

  @media (min-width: 1100px) {
    padding: 0;
  }

  z-index: 90;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  padding-bottom: 1rem;

  width: 100%;
  height: 7.9rem;
  background: var(--white);
  color: var(--black);
  z-index: 9999;

  @media (min-width: 1100px) {
    padding: 0 16.8rem 1rem;
  }

  input {
    width: 100%;
    height: 4.8rem;
    border: none;
    outline: none;
    border-radius: 0;
    border-bottom: 0.15rem solid var(--black);
    background: var(--white);

    font-size: 16px;
    font-style: normal;
    font-weight: 500;
  }
`;
