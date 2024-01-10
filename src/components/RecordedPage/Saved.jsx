import React, { useState, useEffect } from "react";
import { styled, css } from "styled-components";

import { ReactComponent as Search } from "../../images/search.svg";
import ResultLyrics from "../common/ResultLyrics";
import Pagination from "../Pagination";

//api
import { GetMySaved } from "../../apis/my";

//recoil
import { useSetRecoilState } from "recoil";
import { MyEmotionState } from "../../assets/recoil/apiRecoil";

const Saved = () => {
  const [savedList, setSavedList] = useState([]);

  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [totalItems, setTotalItems] = useState(null); // 전체 부스 개수
  const [totalPage, setTotalPage] = useState(1); // 전체 페이지
  const [keyword, setKeyword] = useState("");
  const setMyEmotionState = useSetRecoilState(MyEmotionState);

  useEffect(() => {
    const handleClick = async (currentPage) => {
      const savedList = await GetMySaved(keyword, currentPage);
      setSavedList(savedList["내가 스크랩한 게시물"]);
      setTotalItems(savedList.total);
      setCurrentPage(savedList.current_page);
      setTotalPage(savedList.total_page);
    };

    handleClick(keyword, currentPage);
    setMyEmotionState("");
  }, [keyword, currentPage]);

  return (
    <div>
      <Wrapper>
        <SearchBar>
          <input
            placeholder="저장한 가사를 검색해보세요!"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          ></input>
          <Search />
        </SearchBar>
        <SearchResult>총 {totalItems}개</SearchResult>
        <ItemDiv>
          {savedList.map((item, index) => (
            <ResultLyrics
              showComment={false}
              id={item.id}
              isReverse={index % 2 !== 0}
              lyrics={item.lyrics}
              content={item.content}
              title={item.title}
              singer={item.singer}
            />
          ))}
        </ItemDiv>
        <Pagination
          total={totalPage}
          page={currentPage}
          setPage={setCurrentPage}
        />
      </Wrapper>
    </div>
  );
};

export default Saved;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const SearchBar = styled.div`
  position: absolute;
  background-color: #fff;
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  gap: 0.8rem;
  padding: 1.5rem 0 0.8rem 0;

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

const SearchResult = styled.div`
  display: flex;
  width: 100%;

  align-items: flex-start;
  margin-top: 7.2rem;

  color: var(--Dark-Gray, #a0a0a0);

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: -0.32px;

  padding: 0.8rem 0 1.6rem;
`;

const ItemDiv = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  gap: 2rem;
  > div:nth-child(odd) {
    align-self: flex-start;
  }

  > div:nth-child(even) {
    align-self: flex-end;
  }
`;
