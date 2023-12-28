import React, { useState, useRef } from "react";
import styled, { css } from "styled-components";
import CommentBox from "../CommentBox";
import { ReactComponent as SubmitBtn } from "../../images/submit.svg";

const Comments = () => {
  const isSticky = useRef(null);
  const handleReplyFocus = () => {
    isSticky.current.focus();
  };

  return (
    <Wrapper>
      <CommentCount>댓글 0개</CommentCount>
      <CommentInput>
        <input ref={isSticky} placeholder="댓글을 남겨보세요."></input>
        <SubmitBtn />
      </CommentInput>
      <CommentBox onReply={handleReplyFocus} />
      <CommentBox onReply={handleReplyFocus} />
      <CommentBox onReply={handleReplyFocus} />
      <CommentBox onReply={handleReplyFocus} />
      <CommentBox onReply={handleReplyFocus} />
      <CommentBox onReply={handleReplyFocus} />
      <CommentBox onReply={handleReplyFocus} />
    </Wrapper>
  );
};

export default Comments;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const CommentCount = styled.div`
  color: var(--veryDarkGray);
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 1.8rem;
`;

const CommentInput = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  align-self: stretch;
  margin-bottom: 0.8rem;
  input {
    display: flex;
    height: 4rem;
    padding-left: 1.6rem;
    align-items: center;
    gap: 0.8rem;
    flex: 1 0 0;

    border-radius: 2rem;
    border: 0.15rem solid var(--gray);

    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
