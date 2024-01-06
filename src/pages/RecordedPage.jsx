import React, { useState } from "react";
import styled from "styled-components";

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
  const [selectedCategory, setSelectedCategory] = useState(1);
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
        {selectedCategory === 1 && (
          <div>
            <Wrapper2>
              <SearchBar>
                <input placeholder="저장한 가사 총 122개"></input>
                <Search />
              </SearchBar>
              <ItemDiv>
                {savedItems.map((id) => (
                  <LyricsItem showComment={false} />
                ))}
              </ItemDiv>
            </Wrapper2>
          </div>
        )}
        {(selectedCategory === 2 ||
          selectedCategory === 3 ||
          selectedCategory === 4) && (
          <div>
            <Wrapper3>
              <Filter2>
                <span
                  onClick={() => handleCategory(2)}
                  className={
                    selectedCategory === 2 ? "selected2" : "unselected2"
                  }
                >
                  가사
                </span>
                <span
                  onClick={() => handleCategory(3)}
                  className={
                    selectedCategory === 3 ? "selected2" : "unselected2"
                  }
                >
                  댓글
                </span>
                <span
                  onClick={() => handleCategory(4)}
                  className={
                    selectedCategory === 4 ? "selected2" : "unselected2"
                  }
                >
                  감정
                </span>
              </Filter2>
              {selectedCategory === 2 && <BookmarkedLyric />}
              {selectedCategory === 3 && <BookmarkedComment />}
              {selectedCategory === 4 && <BookmarkedEmotion />}
            </Wrapper3>
          </div>
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

//내가 남긴
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

const Filter2 = styled.div`
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
