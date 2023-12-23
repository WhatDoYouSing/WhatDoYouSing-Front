import React, { useState } from "react";
import styled from "styled-components";

//components
import TopTab from "../components/TopTab";
import LyricWithWriter from "../components/DetailPage/LyricWithWriter";
import GotoSong from "../components/DetailPage/GotoSong";
import EmotionBox from "../components/DetailPage/EmotionBox";
import CommentBox from "../components/CommentBox";
import AskModal from "../components/AskModal";

const Detailpage = () => {
  return (
    <div>
      <Wrapper>
        <TopTab />
        <LyricWithWriter />
        <GotoSong />
        <EmotionBox />
      </Wrapper>
    </div>
  );
};

export default Detailpage;

const Wrapper = styled.div`
  margin-top: 11.6rem;
`;
