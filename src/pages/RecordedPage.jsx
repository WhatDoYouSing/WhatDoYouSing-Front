import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

//페이지
import IntroTopbar from "../components/IntroTopbar";
//저장
import { ReactComponent as Search } from "../images/search.svg";
import LyricsItem from "../components/common/LyricsItem";
//내가 남긴
import BookmarkedLyric from "../components/RecordedPage/BookmarkedLyric";
import BookmarkedComment from "../components/RecordedPage/BookmarkedComment";
import BookmarkedEmotion from "../components/RecordedPage/BookmarkedEmotion";

const RecordedPage = () => {
  const { id } = useParams();
  let pageType;
  let firstCategory;

  switch (id) {
    case "1":
      firstCategory = "saved";
      pageType = "saved";
      break;
    case "2":
      firstCategory = "bookmarked";
      pageType = "lyric";
      break;
    case "3":
      firstCategory = "bookmarked";
      pageType = "comment";
      break;
    case "4":
      firstCategory = "bookmarked";
      pageType = "emotion";
      break;
    default:
      firstCategory = "saved";
      pageType = "saved";
  }

  const [selectedCategory, setSelectedCategory] = useState(firstCategory);
  const handleCategory = (category) => {
    setSelectedCategory(category);
  };

  //저장
  const savedItems = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <div>
      <Wrapper>
        <IntroTopbar text="내활동" del={false} />
        <Filter>
          <span
            onClick={() => handleCategory(1)}
            className={selectedCategory === 1 ? "selected" : ""}
          >
            저장
          </span>
          <span
            onClick={() => handleCategory(2)}
            className={selectedCategory !== 1 ? "selected" : ""}
          >
            내가 남긴
          </span>
        </Filter>
        <Line />
        {selectedCategory === "saved" && <Saved />}
        {selectedCategory === "bookmarked" && (
          <Bookmarked pageType={pageType} />
        )}
      </Wrapper>
    </div>
  );
};

export default RecordedPage;

const Wrapper = styled.div`
  margin-top: 11.6rem;
`;

const Filter = styled.div`
  display: flex;
  flex-direction: row;

  span {
    width: 7.8rem;
    color: var(--black);
    text-align: center;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 20.8px */
    letter-spacing: -0.016rem;
  }

  .selected {
    color: var(--pointPink);
    text-align: center;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 20.8px */
    letter-spacing: -0.016rem;

    border-bottom: 2px solid var(--pointPink);
    padding-bottom: 0.6rem;
  }
`;

const Line = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid var(--gray);
`;

//Saved
const Wrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
  align-self: stretch;
`;

const SearchBar = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  gap: 0.8rem;
  padding: 1.5rem 0 3rem 0;

  input {
    height: 4.8rem;
    flex: 1 0 0;
    width: 100%;
    flex-shrink: 0;
    border: none;
    border-bottom: 0.15rem solid var(--black);
    background: var(--white);
    outline: none;
  }

  input::placeholder {
    color: var(--darkGray);
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.032rem;
  }
`;

const ItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  > div:nth-child(odd) {
    align-self: flex-start;
  }

  > div:nth-child(even) {
    align-self: flex-end;
  }
`;


