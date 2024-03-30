import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
import PostModal from "../components/PostPage/PostModal";

const MainPage = () => {
  const navigate = useNavigate();
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
          const defComeList = await GetSortLatest();
          setLikeList(sortedLatestList.data.Likes);
          setLankingList(sortedLatestList.data.LankingList);
      }
    };

    handleClick();
  }, [selectedOption]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const token = window.localStorage.getItem("token");
    const nickname = window.localStorage.getItem("nickname");
    const userProfile = window.localStorage.getItem("user_profile");
    if (token !== null) {
      if (nickname === null) {
        navigate("/nic-modify");
        alert("닉네임이 지정되지 않아 해당 단계로 이동합니다.");
      } else if (userProfile === null) {
        navigate("/profile/2");
        alert("프로필이 지정되지 않아 해당 단계로 이동합니다.");
      }
    }
  }, []);

  const [newPost, setNewPost] = useState(false);

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
            <PostModal setNewPost={setNewPost} />
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
