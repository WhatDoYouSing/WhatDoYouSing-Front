import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

//components
import TopTab from "../components/TopTab";
import LyricWithWriter from "../components/DetailPage/LyricWithWriter";
import GotoSong from "../components/DetailPage/GotoSong";
import EmotionBox from "../components/DetailPage/EmotionBox";
import Comments from "../components/DetailPage/Comments";

import ShareModal from "../components/DetailPage/ShareModal";
import DeletePostModal from "../components/DeletePostModal";
import ReportPostModal from "../components/DetailPage/ReportPostModal";

import useClickOutside from "../hooks/useClickOutside";

const Detailpage = () => {
  //이 노래 들으러 가기 비활성화
  const [isListenBtnDisabled, setIsListenBtnDisabled] = useState(false);

  const shareModalRef = useRef();
  const [share, setShare] = useClickOutside(shareModalRef, false);

  const deleteModalRef = useRef(); //게시물 삭제 모달
  const [deletePost, setDeletePost] = useClickOutside(deleteModalRef, false);
  const reportModalRef = useRef(); //게시물 신고 모달
  const [reportPost, setReportPost] = useClickOutside(reportModalRef, false);

  return (
    <>
      <Wrapper>
        <TopTab
          share={share}
          setShare={setShare}
          deletePost={deletePost}
          setDeletePost={setDeletePost}
          reportPost={reportPost}
          setReportPost={setReportPost}
        />
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
      {reportPost && (
        <ModalWrapper>
          <ReportPostModal
            ref={reportModalRef}
            reportPost={reportPost}
            setReportPost={setReportPost}
          />
        </ModalWrapper>
      )}
      {share && (
        <ModalWrapper>
          <ShareModal ref={shareModalRef} share={share} setShare={setShare} />
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
