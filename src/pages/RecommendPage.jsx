import React, { useState } from "react";
import styled from "styled-components";

//components
import RecCarousel from "../components/RecCarousel";
import Topbar from "../components/common/MainPage/Topbar";

import { ReactComponent as Reload } from "../images/reload.svg";

const RecommendPage = () => {
  const chartItems = Array.from({ length: 3 }, (_, index) => index + 1);

  return (
    <>
      <Topbar />
      <Wrapper>
        <ScrollContainer>
          <RecCarousel />
        </ScrollContainer>
        <Reload />
      </Wrapper>
    </>
  );
};

export default RecommendPage;

const Wrapper = styled.div`
  margin-top: 11.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 4rem;
`;

const ScrollContainer = styled.div`
  padding-top: 11.6rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;
