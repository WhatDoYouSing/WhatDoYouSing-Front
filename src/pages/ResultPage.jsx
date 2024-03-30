import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import ResultTopbar from "../components/ResultPage/ResultTopbar";
import EmotionSearch from "../components/ResultPage/EmotionSearch";
import FilterResult from "../components/ResultPage/FilterResult";
import Footer from "../components/common/Footer";
import FloatingBtn from "../components/common/MainPage/FloatingBtn";

import PostModal from "../components/PostPage/PostModal";
import LyricInput from "../components/PostPage/LyricInput";
import PostCheckModal from "../components/PostCheckModal";
import useClickOutside from "../hooks/useClickOutside";

const ResultPage = () => {
  const [newPost, setNewPost] = useState(false);
  const [lyricInputModal, setLyricInputModal] = useState(false);

  useEffect(() => {
    if (newPost) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [newPost]);

  // 사용자가 선택한 음악 정보 관리
  const [selectedTrack, setSelectedTrack] = useState(null);
  useEffect(() => {
    setSelectedTrack({
      lyric: "",
    });
    //트레킹 코드
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
  }, []);

  // 업로드 불가 모달
  const postCheckModalRef = useRef();
  const [uploCheckModal, setUploCheckModal] = useClickOutside(
    postCheckModalRef,
    false
  );

  return (
    <>
      <Wrapper>
        <ResultTopbar />
        <FilterResult />
      </Wrapper>
      <Footer />
      <FloatingBtn newPost={newPost} setNewPost={setNewPost} />
      {newPost && (
        <PostModalWrapper>
          <PostModal
            newPost={newPost}
            setNewPost={setNewPost}
            lyricInputModal={lyricInputModal}
            setLyricInputModal={setLyricInputModal}
            selectedTrack={selectedTrack}
            setSelectedTrack={setSelectedTrack}
            uploCheckModal={uploCheckModal}
            setUploCheckModal={setUploCheckModal}
          />
        </PostModalWrapper>
      )}

      {lyricInputModal && (
        <PostModalWrapper>
          <LyricInput
            selectedTrack={selectedTrack}
            setSelectedTrack={setSelectedTrack}
            uploCheckModal={uploCheckModal}
            setUploCheckModal={setUploCheckModal}
          />
        </PostModalWrapper>
      )}

      {uploCheckModal && (
        <ModalWrapper>
          <Background onClick={() => setUploCheckModal(!uploCheckModal)} />
          <PostCheckModal
            ref={postCheckModalRef}
            uploCheckModal={uploCheckModal}
            setUploCheckModal={setUploCheckModal}
          />
        </ModalWrapper>
      )}
    </>
  );
};

export default ResultPage;

const Wrapper = styled.div`
  padding: 13.5rem 0 15.8rem;
  min-height: 100%;
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
