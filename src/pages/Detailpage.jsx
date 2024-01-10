import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router";
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
import DeleteComModal from "../components/DeleteComModal";

import useClickOutside from "../hooks/useClickOutside";

import { GetLyricsDetail } from "../apis/detail";
import DeleteReModal from "../components/DeleteReModal";

const Detailpage = () => {
  //이 노래 들으러 가기 비활성화 -- data로부터 값받아 설정해줄것!
  const [isListenBtnDisabled, setIsListenBtnDisabled] = useState(false);
  const setLinked = () => {
    if (
      thisData.link === ""
        ? setIsListenBtnDisabled(true)
        : setIsListenBtnDisabled(false)
    );
  };

  const shareModalRef = useRef();
  const [share, setShare] = useClickOutside(shareModalRef, false);

  const deleteModalRef = useRef(); //게시물 삭제 모달
  const [deletePost, setDeletePost] = useClickOutside(deleteModalRef, false);
  const reportModalRef = useRef(); //게시물 신고 모달
  const [reportPost, setReportPost] = useClickOutside(reportModalRef, false);

  const deleteComModalRef = useRef(); //댓글 삭제 모달
  const [deleteCom, setDeleteCom] = useClickOutside(deleteComModalRef, false);
  const [comNum, setComNum] = useState("");

  const deleteReModalRef = useRef(); //답글 삭제 모달
  const [deleteRe, setDeleteRe] = useClickOutside(deleteReModalRef, false);
  const [reNum, setReNum] = useState("");

  //params로 id 받기
  let { postid } = useParams();
  //가사 상세 데이터
  const [thisData, setThisData] = useState({});
  //렌더링 설정
  const [render, setRender] = useState(1);

  useEffect(() => {
    const GetLyricDetailData = async (pk) => {
      const response = await GetLyricsDetail(pk);
      console.log(response);
      setThisData(response.data);
      setLinked();
    };
    GetLyricDetailData(postid);
  }, [render]);

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
          postId={postid}
          render={render}
          setRender={setRender}
          thisData={thisData}
        />
        <LyricWithWriter lyricContent={thisData} />
        <GotoSong
          lyricContent={thisData}
          render={render}
          setRender={setRender}
          disabled={isListenBtnDisabled}
        />
        <EmotionBox postId={postid} render={render} setRender={setRender} />
        <Comments
          postId={postid}
          render={render}
          setRender={setRender}
          deleteCom={deleteCom}
          setDeleteCom={setDeleteCom}
          deleteRe={deleteRe}
          setComNum={setComNum}
          setDeleteRe={setDeleteRe}
          setReNum={setReNum}
        />
      </Wrapper>
      {deletePost && (
        <ModalWrapper>
          <Background onClick={() => setDeletePost(!deletePost)} />
          <DeletePostModal
            ref={deleteModalRef}
            deletePost={deletePost}
            setDeletePost={setDeletePost}
            postId={postid}
          />
        </ModalWrapper>
      )}
      {reportPost && (
        <ModalWrapper>
          <Background onClick={() => setReportPost(!reportPost)} />
          <ReportPostModal
            ref={reportModalRef}
            reportPost={reportPost}
            setReportPost={setReportPost}
          />
        </ModalWrapper>
      )}
      {share && (
        <ModalWrapper>
          <Background onClick={() => setShare(!share)} />
          <ShareModal
            ref={shareModalRef}
            share={share}
            setShare={setShare}
            data={thisData}
          />
        </ModalWrapper>
      )}
      {deleteCom && (
        <ModalWrapper>
          <Background onClick={() => setDeleteCom(!deleteCom)} />
          <DeleteComModal
            ref={deleteComModalRef}
            deleteCom={deleteCom}
            setDeleteCom={setDeleteCom}
            comNum={comNum}
            render={render}
            setRender={setRender}
          />
        </ModalWrapper>
      )}
      {deleteRe && (
        <ModalWrapper>
          <Background onClick={() => setDeleteRe(!deleteRe)} />
          <DeleteReModal
            ref={deleteReModalRef}
            deleteRe={deleteRe}
            setDeleteRe={setDeleteRe}
            reNum={reNum}
            render={render}
            setRender={setRender}
          />
        </ModalWrapper>
      )}
    </>
  );
};

export default Detailpage;

const Wrapper = styled.div`
  margin-top: 7.9rem;
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
  z-index: 2;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.25);
  z-index: 50;
`;
