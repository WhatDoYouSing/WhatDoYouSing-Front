import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import ModalTopbar from "../components/PostPage/ModalTopbar";
import PostInput from "../components/PostPage/PostInput";
import SearchTrackModal from "../components/PostPage/SearchTrackModal";
import SelectLyricModal from "../components/PostPage/SelectLyricModal";
import LyricInput from "../components/PostPage/LyricInput";
import PostCheckModal from "../components/PostCheckModal";

import useClickOutside from "../hooks/useClickOutside";

const PostPage = () => {
  const [requiredFieldsValid, setRequiredFieldsValid] = useState(false);
  const onBtn = (requiredFieldsValid) => {
    setRequiredFieldsValid(requiredFieldsValid);
  };

  // 가사 검색/선택/입력 모달 관리
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isSelectOpen, setSelectOpen] = useState(false);
  const [lyricInputModal, setInputModal] = useState(false);

  // 사용자가 선택한 음악 정보 관리
  const [selectedTrack, setSelectedTrack] = useState(null);

  // 외부 화면 스크롤 방지
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style = `overflow: hidden`;
    document.body.style.position = "fixed";
    return () => {
      document.body.style = `overflow: auto`;
      document.body.style.removeProperty("position");
    };
  }, [isSelectOpen, lyricInputModal]);

  // 업로드 불가 모달
  const postCheckModalRef = useRef();
  const [uploCheckModal, setCheckModal] = useClickOutside(
    postCheckModalRef,
    false
  );

  return (
    <>
      <Wrapper>
        <ModalTopbar
          text="게시글 작성"
          btnText="게시하기"
          isFilled={requiredFieldsValid}
          setUploCheckModal={setCheckModal}
          setSelectedTrack={setSelectedTrack}
          selectedTrack={selectedTrack}
        />
        <PostInput
          onBtn={onBtn}
          setLyricInputModal={setInputModal}
          setSearchOpen={setSearchOpen}
          setSelectOpen={setSelectOpen}
          selectedTrack={selectedTrack}
          setSelectedTrack={setSelectedTrack}
        />
      </Wrapper>

      {isSearchOpen && (
        <SearchTrackModal
          {...{ setSearchOpen, setSelectOpen, setInputModal }}
        />
      )}

      {isSelectOpen && (
        <SelectLyricModal
          {...{ setSearchOpen, setSelectOpen, setSelectedTrack }}
        />
      )}

      {lyricInputModal && (
        <LyricInput
          {...{ selectedTrack, setSelectedTrack, setCheckModal, setInputModal }}
        />
      )}

      {uploCheckModal && (
        <ModalWrapper>
          <Background onClick={() => setCheckModal(!uploCheckModal)} />
          <PostCheckModal
            ref={postCheckModalRef}
            {...{ uploCheckModal, setCheckModal }}
          />
        </ModalWrapper>
      )}
    </>
  );
};

export default PostPage;

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
  z-index: 200;
`;
