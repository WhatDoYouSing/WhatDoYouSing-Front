import React, { useState } from "react";
import styled from "styled-components";

import TopClose from "../components/PostPage/TopClose";
import PostContent from "../components/PostPage/PostContent";

const Postpage = () => {
  return (
    <div>
      <Wrapper>
        <TopClose />
        <PostContent />
      </Wrapper>
    </div>
  );
};

export default Postpage;

const Wrapper = styled.div`
  margin-top: 11.6rem;
`;
