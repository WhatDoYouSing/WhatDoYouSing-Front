import React, { useState } from "react";
import styled from "styled-components";

//components
import LyricsItem from "../components/common/LyricsItem";

import Topbar from "../components/common/MainPage/Topbar";

const RecommendPage = () => {
  const chartItems = Array.from({ length: 3 }, (_, index) => index + 1);

  return (
    <Wrapper>
      <Topbar />
      <ScrollContainer>
        {chartItems.map((id) => (
          <ScrollArea key={id}>
            <LyricsItem />
          </ScrollArea>
        ))}
      </ScrollContainer>
    </Wrapper>
  );
};

export default RecommendPage;

const Wrapper = styled.div`
  margin-top: 11.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ScrollContainer = styled.div`
  overflow: auto;
  scroll-snap-type: y mandatory;
`;

const ScrollArea = styled.div`
  width: 100%;
  height: 100%;
  scroll-snap-align: start;
  display: inline-block;
`;
