import React, { useState, useEffect } from "react";
import styled from "styled-components";

import ModalTopbar from "./ModalTopbar";
import PostInput from "./PostInput";
import SearchTrackModal from "./SearchTrackModal";
import SelectLyricModal from "./SelectLyricModal";

const PostModal = ({
  newPost,
  setNewPost,
  lyricInputModal,
  setLyricInputModal,
  selectedTrack,
  setSelectedTrack,
  uploCheckModal,
  setUploCheckModal,
}) => {
  const [requiredFieldsValid, setRequiredFieldsValid] = useState(false);
  const onBtn = (requiredFieldsValid) => {
    setRequiredFieldsValid(requiredFieldsValid);
  };

  const [postId, setPostId] = useState("");
  const handlePostIdReceived = (receivedPostId) => {
    setPostId(receivedPostId);
  };

  // 가사 검색/선택 모달 관리
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isSelectOpen, setSelectOpen] = useState(false);

  // 외부 화면 스크롤 방지
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style = `overflow: hidden`;
    document.body.style.position = "fixed";
    return () => {
      document.body.style = `overflow: auto`;
      document.body.style.removeProperty("position");
    };
  }, []);

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
          uploCheckModal={uploCheckModal}
          setUploCheckModal={setUploCheckModal}
          setSelectedTrack={setSelectedTrack}
        />
        <PostInput
          onBtn={onBtn}
          lyricInputModal={lyricInputModal}
          setLyricInputModal={setLyricInputModal}
          isLyricSearchOpen={isSearchOpen}
          setIsLyricSearchOpen={setSearchOpen}
          newPost={newPost}
          selectedTrack={selectedTrack}
          setSelectedTrack={setSelectedTrack}
        />
      </Wrapper>

      {isSearchOpen && (
        <SearchTrackModal
          {...{
            setSearchOpen,
            setSelectOpen,
            isSelectOpen,
            setSelectedTrack,
            setLyricInputModal,
          }}
        />
      )}

      {isSelectOpen && (
        <SelectLyricModal
          {...{ setSearchOpen, setSelectOpen, selectedTrack, setSelectedTrack }}
        />
      )}
    </>
  );
};

export default PostModal;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
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
