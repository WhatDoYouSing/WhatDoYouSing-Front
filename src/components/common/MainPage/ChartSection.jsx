import React, { useState, useEffect } from "react";
import { styled } from "styled-components";

//components
import LyricsItem from "../LyricsItem";
import DropDownBox from "../DropDownBox";

//api
import { GetSortLatest, GetSortLike, GetSortCom } from "../../../apis/main";

//recoil
import { useRecoilValue } from "recoil";
import { DropdownState } from "../../../assets/recoil/apiRecoil";

const ChartSection = () => {
  const chartItems = Array.from({ length: 10 }, (_, index) => index + 1);
  const column1 = chartItems.slice(0, 5);
  const column2 = chartItems.slice(5);

  const selectedOption = useRecoilValue(DropdownState);

  const handleClick = async () => {
    switch (selectedOption) {
      case "최신순":
        const sortedLatestList = await GetSortLatest();
        break;
      case "좋아요 순":
        const sortedLikeList = await GetSortLike();
        break;
      case "댓글순":
        const sortedComeList = await GetSortCom();
        break;

      default:
    }
  };

  const MainPage = () => {
    useEffect(() => {
      const handleInfo = async () => {};
      handleInfo();
    }, []);
  };

  return (
    <Wrapper>
      <TopDiv>
        TOP 10
        <DropDownBox />
      </TopDiv>
      <ChartDiv>
        <Column>
          {column1.map((id) => (
            <ChartItem key={id}>
              {id}
              <LyricsItem showComment={false} />
            </ChartItem>
          ))}
        </Column>
        <Column>
          {column2.map((id) => (
            <ChartItem key={id}>
              {id}
              <LyricsItem showComment={false} />
            </ChartItem>
          ))}
        </Column>
      </ChartDiv>
    </Wrapper>
  );
};

export default ChartSection;

const Wrapper = styled.section`
  margin-bottom: 5rem;
`;

const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  color: var(--black);
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.04rem;

  border-bottom: 0.05rem solid rgba(38, 33, 33, 0.2);
`;

const ChartDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 1100px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* 두 개의 열로 설정 */
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ChartItem = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;

  gap: 1.6rem;

  color: var(--darkGray);

  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -0.04rem;
`;
