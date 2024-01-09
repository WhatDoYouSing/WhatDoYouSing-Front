import React, { useState, useEffect } from "react";
import styled from "styled-components";

import CommentBox from "../CommentBox";
import Pagination from "../Pagination";

//api
import { GetMyComment } from "../../apis/my";

const BookmarkedComment = () => {
  const [bookmarkedList, setBookmarkedList] = useState([]);
  const [response, setResponse] = useState();

  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [totalPage, setTotalPage] = useState(1); // 전체 페이지

  useEffect(() => {
    const handleClick = async (currentPage) => {
      const savedList = await GetMyComment(currentPage);
      setBookmarkedList(savedList["내가 쓴 댓글/대댓글 최신순 정렬"]);
      setCurrentPage(savedList.current_page);
      setTotalPage(savedList.total_page);
      console.log(bookmarkedList);
    };

    handleClick(currentPage);
  }, [currentPage]);

  return (
    <Wrapper>
      <CommentWrapper>
        {bookmarkedList.map((item) => (
          <CommentBox showReply={false} key={item.comment_id} content={item} />
        ))}
      </CommentWrapper>
      <Pagination
        total={totalPage}
        page={currentPage}
        setPage={setCurrentPage}
      />
    </Wrapper>
  );
};

export default BookmarkedComment;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
`;
