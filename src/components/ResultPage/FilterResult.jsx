import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { useLocation } from "react-router-dom";

//components
import DropDownSearch from "../common/DropDownSearch";
import ResultLyrics from "../common/ResultLyrics";
import Pagination from "../Pagination";

import noContent from "../../images/noContent.svg";

//api
import {
  GetSearchLatest,
  GetSearchLike,
  GetSearchCom,
} from "../../apis/search";

//recoil
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  SelectEmotionState,
  SearchDropdownState,
  KeywordState,
} from "../../assets/recoil/apiRecoil";

const FilterResult = () => {
  const location = useLocation();
  const [result, setResult] = useState("");
  const selectedEmotion = useRecoilValue(SelectEmotionState);
  const selectedOption = useRecoilValue(SearchDropdownState);
  const selectedKeyword = useRecoilValue(KeywordState);

  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [totalItems, setTotalItems] = useState(null); // 전체 부스 개수
  const [totalPage, setTotalPage] = useState(1); // 전체 페이지

  const setData = (searchList) => {
    setResult(searchList.data);
    setTotalItems(searchList.total);
    setCurrentPage(searchList.current_page);
    setTotalPage(searchList.total_page);
  };

  console.log(selectedOption, selectedEmotion, selectedKeyword);
  const setSelectOption = useSetRecoilState(SearchDropdownState);

  useEffect(() => {
    if (location.state) {
      setSelectOption(location.state);
    }
  }, []);

  useEffect(() => {
    const handleClick = async (currentPage) => {
      switch (selectedOption) {
        case "최신순":
          const searchLatest = await GetSearchLatest(
            selectedKeyword,
            selectedEmotion,
            currentPage
          );
          setData(searchLatest.data);
          break;

        case "좋아요순":
          const sortedLikeList = await GetSearchLike(
            selectedKeyword,
            selectedEmotion,
            currentPage
          );
          setData(sortedLikeList.data);
          break;

        case "댓글순":
          const sortedComeList = await GetSearchCom(
            selectedKeyword,
            selectedEmotion,
            currentPage
          );
          setData(sortedComeList.data);
          break;

        default:
          const searchDef = await GetSearchLatest(
            selectedKeyword,
            selectedEmotion,
            currentPage
          );
          setResult(searchDef);
          break;
      }
    };

    handleClick(currentPage);
  }, [selectedOption, selectedEmotion, selectedKeyword, currentPage]);

  return (
    <>
      <Wrapper>
        <FixedBox>
          <TopDiv>
            <div className="count">{totalItems}개의 가사를 찾았어요!</div>
            <DropDownSearch />
          </TopDiv>
        </FixedBox>
        {totalItems === 0 ? (
          <NoneDiv>
            <img src={noContent} alt="noContent" />
            <div className="noneMent">
              검색결과가 없어요.
              <br /> 사용자님이 등록해 보시는 건 어때요?
            </div>
          </NoneDiv>
        ) : (
          <>
            <ItemDiv>
              {result &&
                result.map((item, index) => (
                  <ResultLyrics
                    key={index}
                    showComment={false}
                    isReverse={index % 2 !== 0}
                    id={item.id}
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
          </>
        )}
      </Wrapper>
    </>
  );
};

export default FilterResult;

const Wrapper = styled.section`
  margin-top: 0.5rem;
  height: auto;
`;

const FixedBox = styled.div`
  position: fixed;
  width: 100%;
  top: 10.7rem;
  left: 0;

  @media (min-width: 1100px) {
    padding: 0 16.8rem;
    top: 12rem;
  }

  z-index: 50;

  background-color: white;
  padding-top: 1rem;
`;

const TopDiv = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.6rem;
  border-bottom: 0.05rem solid rgba(38, 33, 33, 0.2);
  background-color: white;

  .count {
    color: var(--veryDarkGray);
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */
    letter-spacing: -0.32px;
  }
`;

const NoneDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 18.5rem 0;
  gap: 1.366rem;

  .noneMent {
    color: var(--Dark-Gray, #a0a0a0);
    text-align: center;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */
    letter-spacing: -0.032rem;
  }
`;

const ItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6.4rem;
  width: 100%;
  gap: 2rem;
  > div:nth-child(odd) {
    align-self: flex-start;
  }

  > div:nth-child(even) {
    align-self: flex-end;
    margin-bottom: 2rem;

    @media (min-width: 1100px) {
      margin-top: 0.2rem;
      margin-bottom: 0;
    }
  }

  @media (min-width: 1100px) {
    gap: 3rem;
    margin-top: 10rem;
  }
`;
