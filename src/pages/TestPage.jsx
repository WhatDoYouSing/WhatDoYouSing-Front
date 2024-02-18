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
import {
  GetChartTracks,
  GetAlbum,
  GetMusicSearch,
  GetDetailLyrics,
} from "../apis/openLyrics";

const TestPage = () => {
  const navigate = useNavigate();
  const setSearchKeyword = useSetRecoilState(KeywordState);

  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const handleClick = async () => {
      // const savedList = await GetChartTracks("kr", 1, 10, "hot", 0);
      const artiSearchResult = await GetAlbum(34234172);
      const searchResult = await GetMusicSearch("SWift");
      const detailLyrics = await GetDetailLyrics(240376536, 147266331);

      setKeyword(detailLyrics.message.body.lyrics.lyrics_body);

      // console.log(searchResult.message.body.track_list);
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

  span {
    font-size: 2.2rem;
    font-style: normal;
    font-weight: 400;
    white-space: pre-line;
  }
`;

const Title = styled.div`
  margin-top: 12.3rem;
  margin-bottom: 5rem;

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
