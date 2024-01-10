import React, { useState, useEffect } from "react";
import styled from "styled-components";

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
      <Topbar />
      <Wrapper>
        <ScrollContainer>
          <RecCarousel savedList={savedList} />
        </ScrollContainer>
        <Reload />
      </Wrapper>
    </>
  );
};

export default RecommendPage;

const Wrapper = styled.div`
  margin-top: 11.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 4rem;
`;

const ScrollContainer = styled.div`
  padding: 9rem 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;
