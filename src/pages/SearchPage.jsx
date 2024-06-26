import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { ReactComponent as Search } from "../images/search.svg";

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
    setSearchKeyword(keyword);
  }, [keyword]);

  useEffect(() => {
    setSearchKeyword("");
    setSearchEmotion("");
    setSearchOption("최신순");

    //저니맵 트레킹 코드
    (function (w, d, a) {
      w.__beusablerumclient__ = {
        load: function (src) {
          var b = d.createElement("script");
          b.src = src;
          b.async = true;
          b.type = "text/javascript";
          d.getElementsByTagName("head")[0].appendChild(b);
        },
      };
      w.__beusablerumclient__.load(a + "?url=" + encodeURIComponent(d.URL));
    })(window, document, "//rum.beusable.net/load/b230311e131233u903");
  }, []);

  const handleSearch = () => {
    sessionStorage.setItem("search-from", window.location.pathname);
    navigate("/result");
  };

  return (
    <>
      <Wrapper>
        <Topbar />
        <SearchDiv>
          <Title>무엇을 노래하나요?</Title>
          <InputDiv>
            <Input
              placeholder="가사, 가수명, 제목을 검색해보세요!"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <ImgDiv>
              <Search onClick={handleSearch} />
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
  margin: 5.8rem 0 16.8rem;
`;

const Title = styled.div`
  margin-top: 12.3rem;

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
  padding: none;
  border-radius: 0;
  border-bottom: 0.15rem solid var(--black);
  transition: border-bottom-color 0.3s ease;

  font-size: 16px;
  font-style: normal;
  font-weight: 500;

  &:focus,
  &:not(:placeholder-shown) {
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
