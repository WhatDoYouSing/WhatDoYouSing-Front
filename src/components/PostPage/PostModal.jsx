import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

// import IntroTopbar from "../IntroTopbar";
import ModalTopbar from "./ModalTopbar";

import { useRecoilValue } from "recoil";
import PostInput from "./PostInput";

import useClickOutside from "../../hooks/useClickOutside";
import LyricSearch from "./LyricSearch";
import LyricInput from "./LyricInput";
import { modalContent2, modalState2 } from "../../assets/recoil/modal";
import { useToggleModal } from "../../hooks/useToggleModal";

const PostModal = ({
  newPost,
  setNewPost,
  lyricInputModal,
  setLyricInputModal,
}) => {
  // useEffect(() => {
  //   document.body.style.overflow = "hidden";
  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, []);

  const [requiredFieldsValid, setRequiredFieldsValid] = useState(false);
  const onBtn = (requiredFieldsValid) => {
    setRequiredFieldsValid(requiredFieldsValid);
  };

  const [postId, setPostId] = useState("");
  const handlePostIdReceived = (receivedPostId) => {
    setPostId(receivedPostId);
  };

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  const [render, setRender] = useState(1);
  //가사 검색하기
  const lyricSearchModalRef = useRef();
  const [isLyricSearchOpen, setIsLyricSearchOpen] = useClickOutside(
    lyricSearchModalRef,
    false
  );

  return (
    <>
      <Wrapper>
        <ModalTopbar
          text="게시글 작성"
          delPath="/"
          actBtn={true}
          btnText="게시하기"
          isFilled={requiredFieldsValid}
          onPostIdReceived={handlePostIdReceived}
          newPost={newPost}
          setNewPost={setNewPost}
        />
        <PostInput
          onBtn={onBtn}
          lyricInputModal={lyricInputModal}
          setLyricInputModal={setLyricInputModal}
          isLyricSearchOpen={isLyricSearchOpen}
          setIsLyricSearchOpen={setIsLyricSearchOpen}
          newPost={newPost}
        />
      </Wrapper>

      {isLyricSearchOpen && (
        <ModalWrapper1>
          <Background
            onClick={() => setIsLyricSearchOpen(!isLyricSearchOpen)}
          />
          <LyricSearch
            ref={lyricSearchModalRef}
            isLyricSearchOpen={isLyricSearchOpen}
            setIsLyricSearchOpen={setIsLyricSearchOpen}
            render={render}
            setRender={setRender}
          />
        </ModalWrapper1>
      )}
    </>
  );
};

export default PostModal;

const Wrapper = styled.div`
  /* width: calc(100% + 3.6rem); */
  width: 100%;
  height: 100%;
  position: fixed;
  margin-top: 7.9rem;

  overflow: scroll;
  background-color: white;
  z-index: 120;

  &::-webkit-scrollbar {
    display: none;
  }

  padding: 0 calc(100% * 1.6 / 39);

  @media (min-width: 1100px) {
    padding: 0 16.8rem;
  }
`;

const ModalWrapper1 = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 125;
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
  background: rgba(0, 0, 0, 0.6);
  z-index: 100;
`;
