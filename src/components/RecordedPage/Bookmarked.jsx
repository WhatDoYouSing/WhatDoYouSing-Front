import React, { useState } from "react";
import { styled, css } from "styled-components";

import BookmarkedLyric from "../RecordedPage/BookmarkedLyric";
import BookmarkedComment from "../RecordedPage/BookmarkedComment";
import BookmarkedEmotion from "../RecordedPage/BookmarkedEmotion";

const Bookmarked = () => {
  const [selectedCategory, setSelectedCategory] = useState("saved");
  const handleCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <Wrapper>
        <Filter>
          <span
            onClick={() => handleCategory("lyric")}
            className={selectedCategory === "lyric" ? "selected" : "unselected"}
          >
            가사
          </span>
          <span
            onClick={() => handleCategory("comment")}
            className={
              selectedCategory === "comment" ? "selected" : "unselected"
            }
          >
            댓글
          </span>
          <span
            onClick={() => handleCategory("emotion")}
            className={
              selectedCategory === "emotion" ? "selected" : "unselected"
            }
          >
            감정
          </span>
        </Filter>
        {selectedCategory === "lyric" && <BookmarkedLyric />}
        {selectedCategory === "comment" && <BookmarkedComment />}
        {selectedCategory === "emotion" && <BookmarkedEmotion />}
      </Wrapper>
    </div>
  );
};

export default Bookmarked;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
  align-self: stretch;
  padding: 1.6rem 0;
`;

const Filter = styled.div`
  display: flex;
  width: 35.8rem;
  align-items: flex-start;
  gap: 1.4rem;

  span {
    display: flex;
    padding: 1.9rem 2rem;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    flex: 1 0 0;
    border-radius: 4rem;
    border: 1.5px solid var(--gray);
    background: var(--white);

    width: 2.8rem;
    height: 1.6rem;
    color: var(--black);
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .selected {
    color: var(--pointPink);
    border: 1.5px solid var(--pointPink);
  }
`;
