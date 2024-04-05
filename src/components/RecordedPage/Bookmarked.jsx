import React, { useState, useEffect } from "react";
import { styled, css } from "styled-components";

import BookmarkedLyric from "../RecordedPage/BookmarkedLyric";
import BookmarkedComment from "../RecordedPage/BookmarkedComment";
import BookmarkedEmotion from "../RecordedPage/BookmarkedEmotion";

const Bookmarked = ({ pageType }) => {
  const [selectedCategory, setSelectedCategory] = useState(pageType);
  const handleCategory = (category) => {
    setSelectedCategory(category);
  };

  //트래킹 코드
  useEffect(() => {
    (function (w, d, a) {
      w.__beusablerumclient__ = {
        load: function (src) {
          var b = d.createElement("script");
          b.src = src;
          b.async = true;
          b.type = "text/javascript";
          d.getElementsByTagName("head")[0].appendChild(b);
        },
      };
      w.__beusablerumclient__.load(a + "?url=" + encodeURIComponent(d.URL));
    })(window, document, "//rum.beusable.net/load/b230311e131233u903");
  }, []);
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
  /* justify-content: space-between;
  align-items: flex-end;
  align-self: stretch; */
  @media (min-width: 1200px) {
    padding: 0 22.6rem;
  }
`;
const Filter = styled.div`
  position: fixed;
  top: 11rem;
  left: 0;
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: 1.4rem;
  padding: 1.6rem 1.6rem 0.5rem 1.6rem;
  background-color: white;

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
    cursor: pointer;
  }
  .selected {
    color: var(--pointPink);
    border: 1.5px solid var(--pointPink);
  }
  @media (min-width: 1200px) {
    padding: 1.6rem 39.4rem;
  }
`;
