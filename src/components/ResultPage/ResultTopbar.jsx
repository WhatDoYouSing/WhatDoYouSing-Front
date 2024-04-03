import React, { useState, useEffect } from "react";
import { styled, css } from "styled-components";
import { useNavigate } from "react-router-dom";

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

  //검색페이지에서 넘어올 때 placeholder에 검색어 들어있도록
  useEffect(() => {
    setKeyword(searchKeyword);
  }, []);

  //결과페이지 내에서 새 검색어 작성 후 검색
  const clickSearch = () => {
    setSearchKeyword(keyword);
  };

  const goBack = () => {
    const from = sessionStorage.getItem("search-from");
    navigate(from || -1);
    window.sessionStorage.removeItem("search-from");
  };

  return (
    <Box>
      <Wrapper>
        <Back onClick={goBack} />
        <input
          placeholder={keyword ? keyword : "가사, 가수명, 제목을 검색해보세요!"}
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onFocus={() => setIsInputFocused(true)}
        />
        <Search onClick={clickSearch} />
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
    color: black;

    font-size: 16px;
    font-style: normal;
    font-weight: 500;
  }
`;
