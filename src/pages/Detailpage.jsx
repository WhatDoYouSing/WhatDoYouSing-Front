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

  const [deletePost, setDeletePost] = useState(false); //게시물 삭제
  const [reportPost, setReportPost] = useState(false); //게시물 신고
  const deleteModal = () => {
    setDeletePost(deletePost);
  };
  const reportModal = () => {
    setReportPost(reportModal);
  };

  return (
    <div>
      <Wrapper>
        <TopTab />
        {/* {deletePost && <DeletePostModal />} */}
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
