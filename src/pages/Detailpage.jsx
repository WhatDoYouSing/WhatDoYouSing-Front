import React, { useState } from "react";
import styled from "styled-components";

//components
import TopTab from "../components/TopTab";
import LyricWithWriter from "../components/DetailPage/LyricWithWriter";
import GotoSong from "../components/DetailPage/GotoSong";
import EmotionBox from "../components/DetailPage/EmotionBox";
import Comments from "../components/DetailPage/Comments";

import DeletePostModal from "../components/DeletePostModal";

const Detailpage = () => {
  //이 노래 들으러 가기 비활성화
  const [isListenBtnDisabled, setIsListenBtnDisabled] = useState(false);

  const [deletePost, setDeletePost] = useState(false);

  //자식의 자식요소에서 전달받은 option으로 모달띄우기,, (이상)
  const handleOptionClick = (option) => {
    console.log("디테일페이지에 전달된 option:", option);

    if (option === "게시글 삭제") {
      setDeletePost(true);
    }
  };

  return (
    <div>
      <Wrapper>
        <TopTab />
        {deletePost && <DeletePostModal />}
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
