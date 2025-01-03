import React, { useState, useEffect, useRef } from "react";
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
import { useSetRecoilState, useRecoilValue } from "recoil";
import { LikeListState, LankingListState, DropdownState } from "../assets/recoil/apiRecoil";

//modal
import ShutdownModal from "../components/common/MainPage/ShutdownModal";
import useClickOutside from "../hooks/useClickOutside";

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
    //저니맵 트레킹 코드
    (function (w, d, a) {
      w.__beusablerumclient__ = {
        load: function (src) {
          var b = d.createElement("script");
          b.src = src;
          b.async = true;
          b.type = "text/javascript";
          d.getElementsByTagName("head")[0].appendChild(b);
        },
      };
      w.__beusablerumclient__.load(a + "?url=" + encodeURIComponent(d.URL));
    })(window, document, "//rum.beusable.net/load/b230311e131233u903");

    //세션 스토리지 초기화
    sessionStorage.clear();
    sessionStorage.setItem("search-from", window.location.pathname);
  }, []);

  //서비스 종료 안내 모달
  const modalRef = useRef();
  const [isModalOpen, setModalOpen] = useClickOutside(modalRef, false);

  useEffect(() => {
    const cookieData = document.cookie.split(";");
    const popupCookie = cookieData.find((cookie) => cookie.trim().startsWith("popupCookie="));
    popupCookie ? setModalOpen(false) : setModalOpen(true);
  }, []);

  return (
    <>
      <Wrapper>
        <Topbar />
        <LikeSection />
        <ChartSection />
        <SearchSection />
        <FloatingBtn />
      </Wrapper>
      <Footer />
      {isModalOpen && (
        <ModalWrapper>
          <Background onClick={() => setModalOpen(false)} />
          <ShutdownModal isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
        </ModalWrapper>
      )}
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

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
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
  z-index: 100;
`;
