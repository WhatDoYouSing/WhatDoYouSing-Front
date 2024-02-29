import React, { useState } from "react";
import styled from "styled-components";

import IntroTopbar from "../components/IntroTopbar";
import PostContent from "../components/PostPage/PostContent";
import SearchTrackModal from "../components/PostPage/SearchTrackModal";
import SelectLyricModal from "../components/PostPage/SelectLyricModal";

const Postpage = (props) => {
  const [requiredFieldsValid, setRequiredFieldsValid] = useState(false);
  const onBtn = (requiredFieldsValid) => {
    setRequiredFieldsValid(requiredFieldsValid);
  };

  const [postId, setPostId] = useState("");
  const handlePostIdReceived = (receivedPostId) => {
    setPostId(receivedPostId);
  };

  // 모달 관리
  const [isSearchOpen, setSearchOpen] = useState(true);
  const [isSelectOpen, setSelectOpen] = useState(false);

  // 사용자가 선택한 음악 정보 관리
  const [selectedTrack, setSelectedTrack] = useState(null);
  console.log(selectedTrack);

  return (
    <>
      <Wrapper>
        <IntroTopbar
          text="게시글 작성"
          delPath="/"
          actBtn={true}
          btnText="게시하기"
          nextPath={`/detail/${postId}`}
          isFilled={requiredFieldsValid}
          onPostIdReceived={handlePostIdReceived}
        />
        <PostContent onBtn={onBtn} selectedTrack={selectedTrack} />
      </Wrapper>

      {isSearchOpen && (
        <SearchTrackModal
          {...{ setSearchOpen, setSelectOpen, isSelectOpen, setSelectedTrack }}
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

export default Postpage;

const Wrapper = styled.div`
  margin-top: 9.5rem;
`;
