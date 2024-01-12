import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";

//components
import RecCarousel from "../components/RecCarousel";
import Topbar from "../components/common/MainPage/Topbar";

import { ReactComponent as Reload } from "../images/reload.svg";

//api
import { GetRecommend } from "../apis/main";
import { GetLyricsList } from "../apis/lyrics";

const RecommendPage = () => {
  const [savedList, setSavedList] = useState([]);

  useEffect(() => {
    const handleClick = async () => {
      const savedList = await GetRecommend();
      setSavedList(savedList.data);
    };

    handleClick();
  }, []);

  return (
    <>
      <Helmet>
        <meta name="theme-color" content="#262121" />
      </Helmet>
      <Topbar />
      <Wrapper>
        <ScrollContainer>
          <RecCarousel savedList={savedList} />
        </ScrollContainer>
        <Reload style={{ marginBottom: "7.6rem" }} />
      </Wrapper>
    </>
  );
};

export default RecommendPage;

const Wrapper = styled.div`
  margin: 5rem 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  gap: 4rem;
`;

const ScrollContainer = styled.div`
  padding: 9rem 0 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;
