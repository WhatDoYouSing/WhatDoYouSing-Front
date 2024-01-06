import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { ReactComponent as Search } from "../images/search.svg";

//components
import LyricsItem from "../components/common/LyricsItem";
import EmotionList from "../components/common/EmotionList";
import DropDownBox from "../components/common/DropDownBox";

import Topbar from "../components/common/MainPage/Topbar";

const SearchPage = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Topbar />
      <SearchDiv>
        <Title>무엇을 노래하나요?</Title>
        <InputDiv>
          <Input placeholder="가사를 검색해보세요!" />
          <ImgDiv>
            <Search onClick={() => navigate("/result")} />
          </ImgDiv>
        </InputDiv>
      </SearchDiv>
      <EmotionList />
    </Wrapper>
  );
};

export default SearchPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 11.6rem;
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
