import React, { useState } from "react";
import { styled, css } from "styled-components";

import BookmarkedLyric from "../RecordedPage/BookmarkedLyric";
import BookmarkedComment from "../RecordedPage/BookmarkedComment";
import BookmarkedEmotion from "../RecordedPage/BookmarkedEmotion";

const Bookmarked = ({ pageType }) => {
  const [selectedCategory, setSelectedCategory] = useState(pageType);
  const handleCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <Wrapper3>
        <Filter>
          <span
            onClick={() => handleCategory(2)}
            className={selectedCategory === 2 ? "selected2" : "unselected2"}
          >
            가사
          </span>
          <span
            onClick={() => handleCategory(3)}
            className={selectedCategory === 3 ? "selected2" : "unselected2"}
          >
            댓글
          </span>
          <span
            onClick={() => handleCategory(4)}
            className={selectedCategory === 4 ? "selected2" : "unselected2"}
          >
            감정
          </span>
        </Filter>
        {selectedCategory === 2 && <BookmarkedLyric />}
        {selectedCategory === 3 && <BookmarkedComment />}
        {selectedCategory === 4 && <BookmarkedEmotion />}
      </Wrapper3>
    </div>
  );
};

export default Bookmarked;

const Wrapper3 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
  align-self: stretch;

  @media (min-width: 1200px) {
    padding: 0 22.6rem;
  }
`;

const Filter = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: 1.4rem;
  padding: 1.6rem 0;

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

  .selected2 {
    color: var(--pointPink);
    border: 1.5px solid var(--pointPink);
  }

  @media (min-width: 1200px) {
    padding: 4rem 0;
  }
`;
