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

//scroll snap을 쓰면 될 거라고 생각했는데... 안일했습니다...
//useRef 써서 자체 세로 캐러셀을 만들어야 될 것 같아요
//시간 날 때 각 잡고 좀 더 만들어볼게요!!
