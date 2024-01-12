import React, { useState, useRef, useEffect } from "react";
import { styled, css } from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Back } from "../images/back.svg";
import { ReactComponent as Share } from "../images/share.svg";
import { ReactComponent as BookmarkOff } from "../images/bookmark-off.svg";
import { ReactComponent as BookmarkOn } from "../images/bookmark-on.svg";
import { ReactComponent as Meatball } from "../images/meatball.svg";

import MeatballSelect from "./DetailPage/MeatballSelect";

import useClickOutside from "../hooks/useClickOutside";

import { PostScrap, PostCancelScrap } from "../apis/archieve";

const TopTab = ({
  share,
  setShare,
  deletePost,
  setDeletePost,
  reportPost,
  setReportPost,
  postId,
  render,
  setRender,
  thisData,
}) => {
  const navigate = useNavigate();
  const goBack = () => {
    // const string = document.referrer;
    // console.log("이전 경로 : ", document.referrer);

    navigate(-1);
  };

  const handleShare = () => {
    setShare(!share);
  };

  const [isBookmarked, setIsBookmarked] = useState(false);
  useEffect(() => {
    setIsBookmarked(thisData.is_scraped);
  }, [render, thisData]);

  const handleBookmark = () => {
    const Scrap = async (postId) => {
      const response = await PostScrap(postId);
      setIsBookmarked(thisData.is_scraped);
      setRender(render - 1);
    };
    if (localStorage.getItem("token")) {
      Scrap(postId);
    } else {
      alert("로그인이 필요합니다.");
    }
  };

  //외부 클릭시 닫힘
  const meatballRef = useRef(null);
  const [isOpen, setIsOpen] = useClickOutside(meatballRef, false);

  return (
    <>
      <Wrapper>
        <Back onClick={goBack} />
        <Others>
          <Share onClick={handleShare} />
          {isBookmarked ? (
            <BookmarkOn onClick={handleBookmark} />
          ) : (
            <BookmarkOff onClick={handleBookmark} />
          )}
          <Meatball onClick={() => setIsOpen(!isOpen)} ref={meatballRef} />
          {isOpen && (
            <MeatballSelect
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              deletePost={deletePost}
              setDeletePost={setDeletePost}
              reportPost={reportPost}
              setReportPost={setReportPost}
              thisData={thisData}
            />
          )}
        </Others>
      </Wrapper>
    </>
  );
};
export default TopTab;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  width: 100%;
  height: 7.9rem;
  background-color: var(--white);
  color: var(--black);
  z-index: 90;
`;

const Others = styled.div`
  width: auto;
  height: auto;
  flex-direction: row;
  cursor: pointer;
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
