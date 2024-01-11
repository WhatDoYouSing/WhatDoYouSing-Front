import React, { useState, useEffect } from "react";
import { styled } from "styled-components";

//components
import LyricsItem from "../LyricsItem";
import DropDownBox from "../DropDownBox";

//recoil
import { useRecoilValue } from "recoil";
import { LankingListState } from "../../../assets/recoil/apiRecoil";

const ChartSection = () => {
  const lankingList = useRecoilValue(LankingListState);
  const column1 = lankingList.slice(0, 5);
  const column2 = lankingList.slice(5);

  return (
    <Wrapper>
      <TopDiv>
        TOP 10
        <DropDownBox />
      </TopDiv>
      <ChartDiv>
        <Column>
          {column1.map((item, index) => (
            <ChartItem key={item.id}>
              {index + 1}
              <LyricsItem
                isRec={false}
                showComment={false}
                id={item.id}
                lyrics={item.lyrics}
                content={item.content}
                title={item.title}
                singer={item.singer}
              />
            </ChartItem>
          ))}
        </Column>
        <Column>
          {column2.map((item, index) => (
            <ChartItem key={item}>
              {index + 6}
              <LyricsItem
                showComment={false}
                id={item.id}
                lyrics={item.lyrics}
                content={item.content}
                title={item.title}
                singer={item.singer}
              />
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
  font-family: "Pretendard-regular";
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
  padding-left: 20%;
  gap: 2rem;
`;

const ChartItem = styled.div`
  display: flex;
  /* align-items: flex-start;
  justify-content: flex-end; */

  width: 100%;

  gap: 1.6rem;

  color: var(--darkGray);

  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -0.04rem;
`;
