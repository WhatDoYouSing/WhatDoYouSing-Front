import React, { useState, useEffect } from "react";
import styled from "styled-components";

import LyricsItem from "../common/LyricsItem";
import EmotionSearch from "../ResultPage/EmotionSearch";
import Pagination from "../Pagination";

//api
import { GetMyEmo } from "../../apis/my";

//recoil
import { useRecoilValue } from "recoil";
import { MyEmotionState } from "../../assets/recoil/apiRecoil";

const BookmarkedEmotion = () => {
  const [bookmarkedList, setBookmarkedList] = useState([]);
  const emotionState = useRecoilValue(MyEmotionState);

  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [totalPage, setTotalPage] = useState(1); // 전체 페이지

  useEffect(() => {
    const handleClick = async (currentPage) => {
      const bookmarkedList = await GetMyEmo(emotionState, currentPage);
      setBookmarkedList(bookmarkedList["내가 남긴 감정"]);
      setCurrentPage(bookmarkedList.current_page);
      setTotalPage(bookmarkedList.total_page);
    };

    handleClick(currentPage);
  }, [emotionState, currentPage]);

  return (
    <Box>
      <FixedBox>
        <EmotionSearch isPadding={false} />
      </FixedBox>
      <Wrapper>
        <ItemDiv>
          {bookmarkedList.map((item) => (
            <LyricsItem
              showComment={true}
              showChip={true}
              key={item.post_data.id}
              id={item.post_data.id}
              emotion={item.post_data.sings_emotion}
              likes={item.post_data.likes_count}
              lyrics={item.post_data.lyrics}
              content={item.post_data.content}
              title={item.post_data.title}
              singer={item.post_data.singer}
            />
          ))}
        </ItemDiv>
        <Pagination
          total={totalPage}
          page={currentPage}
          setPage={setCurrentPage}
        />
      </Wrapper>
    </Box>
  );
};

export default BookmarkedEmotion;

const Box = styled.div`
  padding-top: 10rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-top: 6.5rem;
`;

const FixedBox = styled.div`
  position: fixed;
  top: 17rem;
  left: 0;
  display: flex;

  width: 100%;
  padding: 1rem 0 0;
  background-color: white;
  border-bottom: 1px solid var(--gray);

  z-index: 999;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* justify-content: space-between;
  align-items: flex-end;
  align-self: stretch; */
  gap: 4rem;
`;
