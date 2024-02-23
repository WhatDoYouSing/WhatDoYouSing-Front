import React, { useState, useEffect } from "react";
import styled from "styled-components";

// import IntroTopbar from "../IntroTopbar";
import ModalTopbar from "./ModalTopbar";

import { useRecoilValue } from "recoil";
import PostInput from "./PostInput";

const PostModal = (props) => {
  const [requiredFieldsValid, setRequiredFieldsValid] = useState(false);
  const onBtn = (requiredFieldsValid) => {
    setRequiredFieldsValid(requiredFieldsValid);
  };

  const [postId, setPostId] = useState("");
  const handlePostIdReceived = (receivedPostId) => {
    setPostId(receivedPostId);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Wrapper>
        <ModalTopbar
          text="게시글 작성"
          delPath="/"
          actBtn={true}
          btnText="게시하기"
          isFilled={requiredFieldsValid}
          onPostIdReceived={handlePostIdReceived}
        />
        <PostInput onBtn={onBtn} />
      </Wrapper>
    </div>
  );
};

export default PostModal;

const Wrapper = styled.div`
  margin-top: 9.5rem;
  width: 100vw;
  overflow-x: hidden;
  background-color: white;
  z-index: 120;
`;
