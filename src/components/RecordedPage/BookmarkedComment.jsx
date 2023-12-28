import React, { useState } from "react";
import styled from "styled-components";

import CommentBox from "../CommentBox";

const BookmarkedComment = () => {
  return (
    <div>
      <Wrapper>
        <CommentWrapper>
          <CommentBox />
          <CommentBox />
          <CommentBox />
          <CommentBox />
          <CommentBox />
          <CommentBox />
          <CommentBox />
          <CommentBox />
        </CommentWrapper>
      </Wrapper>
    </div>
  );
};

export default BookmarkedComment;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
  align-self: stretch;
`;

const CommentWrapper = styled.div``;
