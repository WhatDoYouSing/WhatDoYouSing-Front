import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { ReactComponent as Search } from "../images/search.svg";
import { Helmet } from "react-helmet-async";

//components
import LyricsItem from "../components/common/LyricsItem";
import EmotionList from "../components/common/EmotionList";
import DropDownBox from "../components/common/DropDownBox";

import Topbar from "../components/common/MainPage/Topbar";

//recoil
import { useSetRecoilState, useRecoilValue } from "recoil";
import {
  SelectEmotionState,
  SearchDropdownState,
  KeywordState,
} from "../assets/recoil/apiRecoil";

const SearchPage = () => {
  const navigate = useNavigate();
  const setSearchKeyword = useSetRecoilState(KeywordState);
  const setSearchOption = useSetRecoilState(SearchDropdownState);
  const setSearchEmotion = useSetRecoilState(SelectEmotionState);

  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      // 입력이 0.5초 동안 멈추면 작업 수행
      setSearchKeyword(keyword);
    }, 500);
    // cleanup 함수
    return () => clearTimeout(delayTimer);
  }, [keyword]);

  useEffect(() => {
    setSearchKeyword("");
    setSearchEmotion("");
    setSearchOption("최신순");
  }, []);

  return (
    <>
      <Helmet>
        <meta name="theme-color" content="#262121" />
      </Helmet>
      <Wrapper>
        <Topbar />
        <SearchDiv>
          <Title>무엇을 노래하나요?</Title>
          <InputDiv>
            <Input
              placeholder="가사를 검색해보세요!"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <ImgDiv>
              <Search onClick={() => navigate("/result")} />
            </ImgDiv>
          </InputDiv>
        </SearchDiv>
        <EmotionList isSearch={true} />
      </Wrapper>
    </>
  );
};

export default SearchPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 7.9rem;
`;

const Title = styled.div`
  margin-top: 14.3rem;

  color: var(--black);

  font-size: 3.2rem;
  font-style: normal;
  font-weight: 900;
  line-height: 105%;
  letter-spacing: -0.096rem;
`;

const SearchDiv = styled.div`
  width: 100%;
  @media (min-width: 650px) {
    width: 58.8rem;
  }
`;

const InputDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0.8rem;

  margin: 2.4rem 0 4.8rem;
`;

const Input = styled.input`
  width: 100%;
  height: 4.8rem;
  background: var(--white);

  border: none;
  outline: none;
  border-bottom: 0.15rem solid var(--black);
  transition: border-bottom-color 0.3s ease;

  &:focus {
    border-bottom-color: var(--pointPink);
  }
`;

const ImgDiv = styled.div`
  display: flex;
  width: 4.8rem;
  height: 4.8rem;
  justify-content: center;
  align-items: center;
`;
