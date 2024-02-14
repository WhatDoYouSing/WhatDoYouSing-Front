import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

//recoil
import { useSetRecoilState, useRecoilValue } from "recoil";
import {
  SelectEmotionState,
  SearchDropdownState,
  KeywordState,
} from "../assets/recoil/apiRecoil";

//api
import { GetChartTracks, GetDetailLyrics } from "../apis/openLyrics";

const TestPage = () => {
  const navigate = useNavigate();
  const setSearchKeyword = useSetRecoilState(KeywordState);

  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const handleClick = async () => {
      // const savedList = await GetChartTracks("kr", 1, 5, "top", 1);
      const detailLyrics = await GetDetailLyrics(240376536, 147266331);
      // setKeyword(savedList.data);
    };

    handleClick();
  }, []);

  return (
    <>
      <Wrapper>
        <Title>무엇을 노래하나요?</Title>
        <span>{keyword}</span>
      </Wrapper>
    </>
  );
};

export default TestPage;

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
