import React, { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";

import CommentBox from "../CommentBox";

import { ReactComponent as SubmitBtn } from "../../images/submit.svg";
import noContent from "../../images/noContent.svg";
import { GetComment, PostComment, PostReply } from "../../apis/comment";

const Comments = ({ postId, render, setRender }) => {
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);
  const [activeReply, setActiveReply] = useState(null);

  const isSticky = useRef(null);
  const handleReplyFocus = (comment_id) => {
    isSticky.current.focus();
    setActiveReply(comment_id);
  };

  //댓글 조회
  useEffect(() => {
    const GetComData = async (postId) => {
      const response = await GetComment(postId);

      if (response.message === "댓글이 존재하지 않습니다.") {
        setCommentList([]);
      } else {
        setCommentList(response.data);
      }
    };
    GetComData(postId);
  }, [render]);

  //댓글 작성 || 답댓글 작성
  const handleSubmit = () => {
    if (comment.trim() === "") return null;
    if (localStorage.getItem("token")) {
      if (activeReply === null) {
        const PostComData = async (postId, comment) => {
          const response = await PostComment(postId, comment);
          setRender(render + 1);
        };
        PostComData(postId, comment);
      } else {
        const PostReData = async (comment_id, postId, comment) => {
          const response = await PostReply(comment_id, postId, comment);
          console.log(response);
          setActiveReply(null);
          setRender(render + 1);
          console.log(comment_id);
        };
        PostReData(activeReply, postId, comment);
      }

      setComment("");
    } else alert("로그인이 필요합니다.");
  };

  const totalCommentsCount = commentList
    ? commentList.reduce(
        (acc, commentContent) => acc + commentContent.recomments_count + 1,
        0
      )
    : [];

  return (
    <Wrapper>
      <CommentCount>댓글 {totalCommentsCount}개</CommentCount>
      <CommentInput>
        <input
          ref={isSticky}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="댓글을 남겨보세요."
          style={{ outline: "none" }}
        ></input>
        <SubmitBtn onClick={handleSubmit} />
      </CommentInput>
      {commentList.length === 0 ? (
        <NoneDiv>
          <img src={noContent} width={"105rem"} height={"105rem"} />
          <div className="noneMent">
            댓글이 없어요.
            <br /> 첫 댓글을 남겨보시는 건 어때요?
          </div>
        </NoneDiv>
      ) : null}
      {commentList.map((commentContent, index) => (
        <CommentBox
          key={commentContent.comment_id}
          content={commentContent}
          onReply={() => handleReplyFocus(commentContent.comment_id)}
          render={render}
          setRender={setRender}
          isActive={activeReply === commentContent.comment_id}
          activeReplyIndex={activeReply}
          // author={commentContent.author}
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
