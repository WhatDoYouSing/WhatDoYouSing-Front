import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LyricsItem from "../common/LyricsItem";

//api
import { GetMyLyrics } from "../../apis/my";

const BookmarkedLyric = () => {
  const lyricItems = Array.from({ length: 10 });
  const [bookmarkedList, setBookmarkedList] = useState([]);

  useEffect(() => {
    const handleClick = async () => {
      const savedList = await GetMyLyrics(1);
      setBookmarkedList(savedList["내가 작성한 게시물"]);
    };

    handleClick();
  }, []);

  console.log("내가 남긴 가사", bookmarkedList);

  return (
    <div>
      <Wrapper>
        {bookmarkedList.map((item) => (
          <LyricsItem
            showComment={true}
            showChip={true}
            key={item.id}
            emotion={item.sings_emotion}
            likes={item.likes_count}
            lyrics={item.lyrics}
            content={item.content}
            title={item.title}
            singer={item.singer}
          />
        ))}
      </Wrapper>
    </div>
  );
};

export default BookmarkedLyric;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
  align-self: stretch;
  gap: 4rem;
`;
