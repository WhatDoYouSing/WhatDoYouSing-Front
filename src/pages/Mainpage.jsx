import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";

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

  // const isModalOpen = useRecoilValue(modalState);
  // const { openModal } = useToggleModal();

  // const [modalItem, setModalItem] = useRecoilState(modalContent);

  // const handlePost = () => {
  //   setModalItem(<PostModal />);
  //   openModal();
  // };

  const [newPost, setNewPost] = useState(false);

  return (
    <>
      {/* <Helmet>
        <meta name="theme-color" content="#262121" />
      </Helmet> */}
      <FlowWrapper newPost={newPost}>
        <Wrapper>
          <Topbar />
          <LikeSection />
          <ChartSection />
          <SearchSection />
          <FloatingBtn newPost={newPost} setNewPost={setNewPost} />
        </Wrapper>
        <Footer />
      </FlowWrapper>
      {newPost && (
        <PostModalWrapper>
          <PostModal />
        </PostModalWrapper>
      )}
    </>
  );
};

export default MainPage;

const FlowWrapper = styled.div`
  height: auto;
  min-height: 100%;
  /* position: ${(newPost) => (newPost ? "fixed" : "absolute")};
  top: 0; */
  /* overflow-y: ${(newPost) => (newPost ? "hidden" : "auto")}; */
`;

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
  top: 0;
  z-index: 110;
  background-color: white;
`;
