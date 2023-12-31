import React, { useState, useEffect } from "react";
import { styled } from "styled-components";

import { ReactComponent as BasicSmile } from "../../../images/basic-smile.svg";

//components
import EmotionList from "../EmotionList";

const SearchSection = () => {
  return (
    <Wrapper>
      <SectionDiv>
        <TopDiv>감정별 검색</TopDiv>
        <EmotionList />
      </SectionDiv>
      <Grid>
        <SectionDiv>
          <TopDiv>다른 방식으로 검색</TopDiv>
          <SearchDiv>
            <SearchItem>
              <ImgDiv>
                <BasicSmile />
              </ImgDiv>
              최신순
            </SearchItem>
            <SearchItem>
              <ImgDiv>
                <BasicSmile />
              </ImgDiv>
              댓글순
            </SearchItem>
          </SearchDiv>
        </SectionDiv>
        <AD>광고 자리입니다~~~!!</AD>
      </Grid>
    </Wrapper>
  );
};

export default SearchSection;

const Wrapper = styled.section``;

const SectionDiv = styled.div`
  margin-bottom: 5rem;
`;

const TopDiv = styled.div`
  display: flex;
  align-items: center;
  height: 4.8rem;
  margin-bottom: 2rem;

  color: var(--black);
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.04rem;

  border-bottom: 0.05rem solid rgba(38, 33, 33, 0.2);
`;

const Grid = styled.div`
  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  gap: 2.4rem;
`;

const SearchDiv = styled.div`
  display: flex;
  gap: 2.4rem;
`;

const SearchItem = styled.button`
  display: flex;
  width: 100%;
  height: 6.4rem;
  padding: 0 2.4rem;
  align-items: center;
  gap: 1.2rem;
  flex: 1 0 0;

  border-radius: 1.6rem;
  border: 0.15rem solid var(--gray);
  background: var(--lightGray);

  color: var(--black);
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: -0.032rem;
`;

const ImgDiv = styled.div`
  width: 1.6rem;
  height: 1.6rem;
`;

const AD = styled.div`
  display: flex;
  padding: 3.6rem 1.6rem;
  justify-content: center;
  align-items: center;
  align-self: stretch;

  margin-bottom: 2.5rem;

  background: var(--gray);
  border-radius: 1.6rem;

  color: #fff;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
`;
