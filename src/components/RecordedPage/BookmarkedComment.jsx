import React, { useState, useEffect } from "react";
import styled from "styled-components";

import CommentBox from "../CommentBox";

//api
import { GetMyComment } from "../../apis/my";

const BookmarkedComment = () => {
  const [bookmarkedList, setBookmarkedList] = useState([]);

  useEffect(() => {
    const handleClick = async () => {
      const savedList = await GetMyComment(1);
      setBookmarkedList(savedList["내가 쓴 댓글/대댓글 최신순 정렬"]);
    };

    handleClick();
  }, []);

  console.log("내가 남긴 댓글", bookmarkedList);
  return (
    <Wrapper>
      <CommentWrapper>
        {bookmarkedList.map((item) => (
          <CommentBox />
        ))}
      </CommentWrapper>
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
