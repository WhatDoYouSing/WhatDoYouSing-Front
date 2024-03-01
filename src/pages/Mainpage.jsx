import React, { useState, useEffect } from "react";
import styled from "styled-components";

//components

import Topbar from "../components/common/MainPage/Topbar";
import Footer from "../components/common/Footer";
import LikeSection from "../components/common/MainPage/LikeSection";
import ChartSection from "../components/common/MainPage/ChartSection";
import SearchSection from "../components/common/MainPage/SearchSection";
import FloatingBtn from "../components/common/MainPage/FloatingBtn";

//api
import { GetSortLatest, GetSortLike, GetSortCom } from "../apis/main";

//recoil
import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil";
import {
  LikeListState,
  LankingListState,
  DropdownState,
} from "../assets/recoil/apiRecoil";

//modal
import { useToggleModal } from "../hooks/useToggleModal";
import { modalContent, modalState } from "../assets/recoil/modal";
import PostModal from "../components/PostPage/PostModal";
import LyricInput from "../components/PostPage/LyricInput";

const MainPage = () => {
  const setLikeList = useSetRecoilState(LikeListState);
  const setLankingList = useSetRecoilState(LankingListState);

  const selectedOption = useRecoilValue(DropdownState);

  useEffect(() => {
    const handleClick = async () => {
      switch (selectedOption) {
        case "최신순":
          const sortedLatestList = await GetSortLatest();
          setLikeList(sortedLatestList.data.Likes);
          setLankingList(sortedLatestList.data.LankingList);
          break;
        case "좋아요순":
          const sortedLikeList = await GetSortLike();
          setLikeList(sortedLikeList.data.Likes);
          setLankingList(sortedLikeList.data.LankingList);
          break;
        case "댓글순":
          const sortedComeList = await GetSortCom();
          setLikeList(sortedComeList.data.Likes);
          setLankingList(sortedComeList.data.LankingList);
          break;

        default:
          // const defComeList = await GetSortCom();
          // setLikeList(defComeList.data.Likes);
          // setLankingList(defComeList.data.LankingList);
          const defComeList = await GetSortLatest();
          setLikeList(sortedLatestList.data.Likes);
          setLankingList(sortedLatestList.data.LankingList);
      }
    };

    handleClick();
  }, [selectedOption]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [newPost, setNewPost] = useState(false);
  const [lyricInputModal, setLyricInputModal] = useState(false);

  useEffect(() => {
    // newPost 상태가 변경될 때마다 body에 스크롤 방지 스타일을 추가 또는 제거합니다.
    if (newPost) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // cleanup 함수를 사용하여 컴포넌트가 언마운트될 때 스타일을 초기화합니다.
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [newPost]);

  return (
    <>
      <Wrapper>
        <Topbar />
        <LikeSection />
        <ChartSection />
        <SearchSection />
        <FloatingBtn newPost={newPost} setNewPost={setNewPost} />

        {newPost && (
          <PostModalWrapper>
            <PostModal
              newPost={newPost}
              setNewPost={setNewPost}
              lyricInputModal={lyricInputModal}
              setLyricInputModal={setLyricInputModal}
            />
          </PostModalWrapper>
        )}

        {lyricInputModal && (
          <PostModalWrapper>
            <LyricInput />
          </PostModalWrapper>
        )}
      </Wrapper>
      <Footer />
    </>
  );
};

export default MainPage;

const Wrapper = styled.div`
  height: auto;
  min-height: 100%;
  padding-bottom: 15.8rem;
  margin-top: 7.9rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const PostModalWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  right: 0;
  left: 0;
  z-index: 110;
  background-color: white;
`;
