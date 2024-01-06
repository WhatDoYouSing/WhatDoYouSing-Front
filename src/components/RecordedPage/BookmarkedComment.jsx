import React, { useState } from "react";
import styled from "styled-components";

import CommentBox from "../CommentBox";

const BookmarkedComment = () => {
  return (
    <Wrapper>
      <CommentWrapper></CommentWrapper>
    </Wrapper>
  );
};

export default BookmarkedComment;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
`;

const CommentWrapper = styled.div``;
