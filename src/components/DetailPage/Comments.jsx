import React, { useState, useRef } from "react";
import styled, { css } from "styled-components";
import CommentBox from "../CommentBox";
import { ReactComponent as SubmitBtn } from "../../images/submit.svg";
import noContent from "../../images/noContent.svg";
// import noContent from "../../images/noContent.png";

const Comments = () => {
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);

  const handleComment = () => {
    if (comment.trim() !== "") {
      setCommentList((prevList) => [...prevList, comment]);
      setComment(""); // 댓글 입력 창 초기화
    }
  };

  const isSticky = useRef(null);
  const handleReplyFocus = () => {
    isSticky.current.focus();
  };

  return (
    <Wrapper>
      <CommentCount>댓글 {commentList.length}개</CommentCount>
      <CommentInput>
        <input
          ref={isSticky}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="댓글을 남겨보세요."
          style={{ outline: "none" }}
        ></input>
        <SubmitBtn onClick={handleComment} />
      </CommentInput>
      {commentList.length === 0 ? (
        <NoneDiv>
          <img src={noContent} width={"105rem"} height={"105rem"} />
          {/* <NoContent width={"10.5rem"} height={"10.5rem"} fill="#a0a0a0" /> */}
          <div className="noneMent">
            댓글이 없어요.
            <br /> 첫 댓글을 남겨보시는 건 어때요?
          </div>
        </NoneDiv>
      ) : null}
      {commentList.map((commentContent, index) => (
        <CommentBox
          key={index}
          content={commentContent}
          onReply={handleReplyFocus}
        />
      ))}
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

const NoneDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin: 6.4rem 0;
  .noneMent {
    color: var(--Dark-Gray, #a0a0a0);
    text-align: center;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */
    letter-spacing: -0.032rem;
    margin-top: 1.6rem;
  }
`;
