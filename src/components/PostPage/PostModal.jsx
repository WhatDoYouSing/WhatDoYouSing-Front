import React, { useState, useEffect } from "react";
import styled from "styled-components";

import IntroTopbar from "../IntroTopbar";
import { useRecoilValue } from "recoil";
import PostInput from "./PostInput";

const PostModal = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Wrapper>
        <IntroTopbar
          text="게시글 작성"
          delPath="/"
          actBtn={true}
          btnText="게시하기"
          isFilled={true}
          onPostIdReceived={true}
        />
        <h1>
          <br />
          안녕
        </h1>
      </Wrapper>
    </div>
  );
};

export default PostModal;

const Wrapper = styled.div`
  margin-top: 9.5rem;
  background-color: white;
  height: 100vh;
`;
