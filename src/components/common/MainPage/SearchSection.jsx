import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import comments from "../../../images/comments.svg";
import lastest from "../../../images/latest.svg";

//components
import EmotionList from "../EmotionList";

//recoil
import { useSetRecoilState, useRecoilValue } from "recoil";
import { SearchDropdownState } from "../../../assets/recoil/apiRecoil";

const SearchSection = () => {
  const navigate = useNavigate();
  const setSelectOption = useSetRecoilState(SearchDropdownState);

  const moveSearchLatest = () => {
    setSelectOption("최신순");
    navigate("/result");
  };

  const moveSearchComm = () => {
    setSelectOption("댓글순");
    navigate("/result");
  };

  return (
    <Wrapper>
      <SectionDiv>
        <TopDiv>감정별 검색</TopDiv>
        <EmotionList isSearch={true} />
      </SectionDiv>
      <Grid>
        <SectionDiv>
          <TopDiv>다른 방식으로 검색</TopDiv>
          <SearchDiv>
            <SearchItem onClick={moveSearchLatest}>
              <ImgDiv>
                <Img src={comments} />
              </ImgDiv>
              최신순
            </SearchItem>
            <SearchItem onClick={moveSearchComm}>
              <ImgDiv>
                <Img src={lastest} />
              </ImgDiv>
              댓글순
            </SearchItem>
          </SearchDiv>
        </SectionDiv>
        <AD>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1919598055512436"
            crossorigin="anonymous"
          ></script>

          <ins
            class="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-1919598055512436"
            data-ad-slot="1197662171"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        </AD>
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

const Img = styled.img``;

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
