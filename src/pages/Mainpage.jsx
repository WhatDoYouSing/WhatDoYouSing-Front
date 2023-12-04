import React, { useState } from "react";
import styled from "styled-components";

//components

import Topbar from "../components/common/MainPage/Topbar";
import LikeSection from "../components/common/MainPage/LikeSection";
import ChartSection from "../components/common/MainPage/ChartSection";
import SearchSection from "../components/common/MainPage/SearchSection";

const MainPage = () => {
  return (
    <Wrapper>
      <Topbar />
      <LikeSection />
      <ChartSection />
      <SearchSection />
    </Wrapper>
  );
};

export default MainPage;

const Wrapper = styled.div`
  margin-top: 11.6rem;
`;
