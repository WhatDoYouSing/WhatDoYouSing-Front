import React, { useState } from "react";
import styled from "styled-components";

//img test
// svg 파일 이렇게 하면 컴포넌트로 쓸 수 있을 듯!!
import { ReactComponent as BasicSmile } from "../images/basic-smile.svg";
import { ReactComponent as Like } from "../images/like.svg";
//components
import LyricsItem from "../components/common/LyricsItem";

const MainPage = () => {
  return (
    <div>
      <LyricsItem />
      <StyledSVG />
      <Like width="50" height="50" />
    </div>
  );
};

export default MainPage;

const StyledSVG = styled(BasicSmile)`
  width: 50px;
  height: 50px;
`;

// const Like = styled.svg`
//   width: 50px;
//   height: 50px;
// `;
