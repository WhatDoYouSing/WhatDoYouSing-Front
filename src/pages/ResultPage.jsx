import React, { useState } from "react";
import styled from "styled-components";

import ResultTopbar from "../components/ResultPage/ResultTopbar";
import EmotionSearch from "../components/ResultPage/EmotionSearch";
import FilterResult from "../components/ResultPage/FilterResult";
import Footer from "../components/common/Footer";
import FloatingBtn from "../components/common/MainPage/FloatingBtn";

//recoil
import { useSetRecoilState, useRecoilValue } from "recoil";
import { SearchDropdownState } from "../assets/recoil/apiRecoil";

const ResultPage = () => {
  const selectedOption = useRecoilValue(SearchDropdownState);
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
