import React, { useState, useEffect } from "react";
import styled from "styled-components";

import LyricsItem from "../common/LyricsItem";
import EmotionSearch from "../ResultPage/EmotionSearch";

//api
import { GetMyEmo } from "../../apis/my";

const BookmarkedEmotion = () => {
  const lyricItems = Array.from({ length: 10 });
  const [bookmarkedList, setBookmarkedList] = useState([]);

  useEffect(() => {
    const handleClick = async () => {
      const savedList = await GetMyEmo(0, 1);
      setBookmarkedList(savedList);
    };

    handleClick();
  }, []);

  console.log("내가 남긴 감정", bookmarkedList);
  return (
    <>
      <EmotionSearch />
      <Wrapper>
        {lyricItems.map((id) => (
          <LyricsItem showComment={true} showChip={true} />
        ))}
      </Wrapper>
    </>
  );
};

export default BookmarkedEmotion;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
  align-self: stretch;
  gap: 4rem;
`;
