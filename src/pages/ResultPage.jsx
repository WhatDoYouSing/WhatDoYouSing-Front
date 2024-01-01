import React, { useState } from "react";
import styled from "styled-components";

import ResultTopbar from "../components/ResultPage/ResultTopbar";
import FilterResult from "../components/ResultPage/FilterResult";

const ResultPage = () => {
  return (
    <>
      <Wrapper>
        <ResultTopbar />
        <FilterResult />
      </Wrapper>
    </>
  );
};

export default ResultPage;

const Wrapper = styled.div`
  margin-top: 11.6rem;
`;
