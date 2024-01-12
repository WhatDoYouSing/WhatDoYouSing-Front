import React, { useState, useEffect } from "react";
import styled from "styled-components";

import ResultTopbar from "../components/ResultPage/ResultTopbar";
import EmotionSearch from "../components/ResultPage/EmotionSearch";
import FilterResult from "../components/ResultPage/FilterResult";
import Footer from "../components/common/Footer";
import FloatingBtn from "../components/common/MainPage/FloatingBtn";

const ResultPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Wrapper>
        <ResultTopbar />

        <FilterResult />
      </Wrapper>
      <Footer />
      <FloatingBtn />
    </>
  );
};

export default ResultPage;

const Wrapper = styled.div`
  padding: 13.5rem 0 15.8rem;
  min-height: 100%;
`;
