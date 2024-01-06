import React, { useState } from "react";
import styled from "styled-components";

import ResultTopbar from "../components/ResultPage/ResultTopbar";
import EmotionSearch from "../components/ResultPage/EmotionSearch";
import FilterResult from "../components/ResultPage/FilterResult";
import FloatingBtn from "../components/common/MainPage/FloatingBtn";

const ResultPage = () => {
  return (
    <>
      <Wrapper>
        <ResultTopbar />
        <EmotionSearch />
        <FilterResult />
      </Wrapper>
      <FloatingBtn />
    </>
  );
};

export default ResultPage;

const Wrapper = styled.div`
  margin-top: 11.4rem;
`;
