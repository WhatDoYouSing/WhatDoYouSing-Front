import React, { useState } from "react";
import styled from "styled-components";

//components
import TopTab from "../components/TopTab";
import LyricWithWriter from "../components/DetailPage/LyricWithWriter";
import GotoSong from "../components/DetailPage/GotoSong";
import EmotionBox from "../components/DetailPage/EmotionBox";
import Comments from "../components/DetailPage/Comments";
import AskModal from "../components/AskModal";

const Detailpage = () => {
  //이 노래 들으러 가기 비활성화
  const [isListenBtnDisabled, setIsListenBtnDisabled] = useState(false);

  return (
    <div>
      <Wrapper>
        <TopTab />
        <LyricWithWriter />
        <GotoSong disabled={isListenBtnDisabled} />
        <EmotionBox />
        <Comments />
      </Wrapper>
    </div>
  );
};

export default Detailpage;

const Wrapper = styled.div`
  margin-top: 11.6rem;
`;
