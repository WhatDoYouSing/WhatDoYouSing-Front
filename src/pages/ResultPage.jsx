import React, { useState, useEffect } from "react";
import styled from "styled-components";

import ResultTopbar from "../components/ResultPage/ResultTopbar";
import EmotionSearch from "../components/ResultPage/EmotionSearch";
import FilterResult from "../components/ResultPage/FilterResult";
import Footer from "../components/common/Footer";
import FloatingBtn from "../components/common/MainPage/FloatingBtn";

//api
import { GetSearchLatest, GetSearchLike, GetSearchCom } from "../apis/search";

//recoil
import { useSetRecoilState, useRecoilValue } from "recoil";
import { SearchDropdownState } from "../assets/recoil/apiRecoil";

const ResultPage = () => {
  const selectedOption = useRecoilValue(SearchDropdownState);
  // const [bookmarkedList, setBookmarkedList] = useState();
  // const [bookmarkedList2, setBookmarkedList2] = useState();
  // const [bookmarkedList3, setBookmarkedList3] = useState();

  // useEffect(() => {
  //   const handleClick = async () => {
  //     const savedList = await GetSearchLatest("", "", 1);
  //     const savedList2 = await GetSearchLike("", "", 1);
  //     const savedList3 = await GetSearchCom("", "", 1);
  //   };

  //   handleClick();
  // }, []);
  return (
    <>
      <Wrapper>
        <ResultTopbar />
        <EmotionSearch />
        <FilterResult />
      </Wrapper>
      <Footer />
      <FloatingBtn />
    </>
  );
};

export default ResultPage;

const Wrapper = styled.div`
  padding: 11.4rem 0 15.8rem;
  min-height: 100%;
`;
