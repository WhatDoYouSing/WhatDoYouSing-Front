import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LyricsItem from "../common/LyricsItem";
import Pagination from "../Pagination";

//api
import { GetMyLyrics } from "../../apis/my";

//recoil
import { useSetRecoilState } from "recoil";
import { MyEmotionState } from "../../assets/recoil/apiRecoil";

const BookmarkedLyric = () => {
  const [bookmarkedList, setBookmarkedList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [totalPage, setTotalPage] = useState(1); // 전체 페이지
  const setMyEmotionState = useSetRecoilState(MyEmotionState);

  useEffect(() => {
    const handleClick = async (currentPage) => {
      const savedList = await GetMyLyrics(currentPage);
      setBookmarkedList(savedList["내가 작성한 게시물"]);

      setCurrentPage(savedList.current_page);
      setTotalPage(savedList.total_page);
    };

    handleClick(currentPage);
    setMyEmotionState("");
  }, [currentPage]);

  return (
    <div>
      <Wrapper>
        <LyricsWrapper>
          {bookmarkedList.map((item) => (
            <LyricsItem
              showComment={true}
              showChip={true}
              key={item.id}
              id={item.id}
              emotion={item.sings_emotion}
              likes={item.likes_count}
              lyrics={item.lyrics}
              content={item.content}
              title={item.title}
              singer={item.singer}
            />
          ))}
        </LyricsWrapper>
        <Pagination
          total={totalPage}
          page={currentPage}
          setPage={setCurrentPage}
        />
      </Wrapper>
    </div>
  );
};

export default BookmarkedLyric;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const LyricsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  gap: 4rem;
`;
