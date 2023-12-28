import React, { useState } from "react";
import styled from "styled-components";

//components

import Topbar from "../components/common/MainPage/Topbar";
import LikeSection from "../components/common/MainPage/LikeSection";
import ChartSection from "../components/common/MainPage/ChartSection";
import SearchSection from "../components/common/MainPage/SearchSection";
import FloatingBtn from "../components/common/MainPage/FloatingBtn";

const MainPage = () => {
  return (
    <Wrapper>
      <Topbar />
      <LikeSection />
      <ChartSection />
      <SearchSection />

      <FloatingBtn />
    </Wrapper>
  );
};

export default MainPage;

const Wrapper = styled.div`
  margin-top: 11.6rem;
  z-index: 100;
`;
