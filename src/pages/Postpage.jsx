import React, { useState } from "react";
import styled from "styled-components";

import IntroTopbar from "../components/IntroTopbar";
import PostContent from "../components/PostPage/PostContent";

const Postpage = (props) => {
  const [requiredFieldsValid, setRequiredFieldsValid] = useState(false);
  const onBtn = (requiredFieldsValid) => {
    setRequiredFieldsValid(requiredFieldsValid);
  };

  const [postId, setPostId] = useState("");
  const handlePostIdReceived = (receivedPostId) => {
    setPostId(receivedPostId);
  };

  return (
    <div>
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
        <PostContent onBtn={onBtn} />
      </Wrapper>
    </div>
  );
};

export default Postpage;

const Wrapper = styled.div`
  margin-top: 7.9rem;
`;
