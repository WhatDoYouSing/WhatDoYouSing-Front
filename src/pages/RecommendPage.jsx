import React, { useState, useEffect } from "react";
import styled from "styled-components";

//components
import RecCarousel from "../components/RecCarousel";
import Topbar from "../components/common/MainPage/Topbar";

import { ReactComponent as Reload } from "../images/reload.svg";

const RecommendPage = () => {
  return (
    <>
      <Topbar />
      <Wrapper>
        <ScrollContainer>
          <RecCarousel />
        </ScrollContainer>
        <Reload style={{ marginBottom: "7.6rem" }} />
      </Wrapper>
    </>
  );
};

export default RecommendPage;

const Wrapper = styled.div`
  margin: 5rem 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  gap: 4rem;
`;

const ScrollContainer = styled.div`
  padding: 9rem 0 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;
