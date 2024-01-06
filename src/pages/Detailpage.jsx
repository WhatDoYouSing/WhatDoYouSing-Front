import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

//components
import TopTab from "../components/TopTab";
import LyricWithWriter from "../components/DetailPage/LyricWithWriter";
import GotoSong from "../components/DetailPage/GotoSong";
import EmotionBox from "../components/DetailPage/EmotionBox";
import Comments from "../components/DetailPage/Comments";

import DeletePostModal from "../components/DeletePostModal";

import useClickOutside from "../hooks/useClickOutside";

const Detailpage = () => {
  //이 노래 들으러 가기 비활성화
  const [isListenBtnDisabled, setIsListenBtnDisabled] = useState(false);

  const deleteModalRef = useRef(); //게시물 삭제 모달
  const [deletePost, setDeletePost] = useClickOutside(deleteModalRef, false);

  return (
    <>
      <Wrapper>
        <TopTab deletePost={deletePost} setDeletePost={setDeletePost} />
        <LyricWithWriter />
        <GotoSong disabled={isListenBtnDisabled} />
        <EmotionBox />
        <Comments />
      </Wrapper>
      {deletePost && (
        <ModalWrapper>
          <DeletePostModal
            ref={deleteModalRef}
            deletePost={deletePost}
            setDeletePost={setDeletePost}
          />
        </ModalWrapper>
      )}
    </>
  );
};

export default Detailpage;

const Wrapper = styled.div`
  margin-top: 11.6rem;
`;

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.25);
  z-index: 100;
`;
