import React, { useState, useEffect } from "react";
import styled from "styled-components";

//components

import Topbar from "../components/common/MainPage/Topbar";
import Footer from "../components/common/Footer";
import LikeSection from "../components/common/MainPage/LikeSection";
import ChartSection from "../components/common/MainPage/ChartSection";
import SearchSection from "../components/common/MainPage/SearchSection";
import FloatingBtn from "../components/common/MainPage/FloatingBtn";

//api
import { GetSortLatest, GetSortLike, GetSortCom } from "../apis/main";

//recoil
import { useSetRecoilState, useRecoilValue } from "recoil";
import { LikeListState, LankingListState } from "../assets/recoil/apiRecoil";

const MainPage = () => {
  const setLikeList = useSetRecoilState(LikeListState);
  const setLankingList = useSetRecoilState(LankingListState);
  const likeList = useRecoilValue(LikeListState);

  useEffect(() => {
    const handleInfo = async () => {
      const sortedLatestList = await GetSortLatest();
      const sortedLikeList = await GetSortLike();
      const sortedComeList = await GetSortCom();
      setLikeList(sortedLatestList.data.Likes);
      setLankingList(sortedLatestList.data.LankingList);
    };

    handleInfo();
    console.log(likeList);
  }, []);

  // const handleClick = async () => {
  //   switch (selectedOption) {
  //     case "최신순":
  //       const sortedLatestList = await GetSortLatest();
  //       setChartList(sortedLatestList);
  //       break;
  //     case "좋아요 순":
  //       const sortedLikeList = await GetSortLike();
  //       setChartList(sortedLikeList);
  //       break;
  //     case "댓글순":
  //       const sortedComeList = await GetSortCom();
  //       setChartList(sortedComeList);
  //       break;

  //     default:
  //       const defComeList = await GetSortCom();
  //       setChartList(defComeList);
  //   }
  // };

  return (
    <>
      <Wrapper>
        <Topbar />
        <LikeSection />
        <ChartSection />
        <SearchSection />
        <FloatingBtn />
      </Wrapper>
      <Footer />
    </>
  );
};

export default MainPage;

const Wrapper = styled.div`
  height: auto;
  min-height: 100%;
  padding-bottom: 15.8rem;
  margin-top: 11.6rem;
`;
