import React, { useState } from "react";
import styled from "styled-components";

import IntroTopbar from "../components/IntroTopbar";
import PostContent from "../components/PostPage/PostContent";

const Postpage = () => {
  return (
    <div>
      <Wrapper>
        <IntroTopbar
          text="게시글 작성"
          actBtn={true}
          btnText="게시하기"
          nextPath="/detail"
        />
        <PostContent />
      </Wrapper>
    </div>
  );
};

export default Postpage;

const Wrapper = styled.div`
  margin-top: 11.6rem;
`;
