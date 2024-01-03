import React, { useState } from "react";
import styled from "styled-components";

import IntroTopbar from "../components/IntroTopbar";
import PostContent from "../components/PostPage/PostContent";

const Postpage = (props) => {
  const [requiredFieldsValid, setRequiredFieldsValid] = useState(false);
  const onBtn = (requiredFieldsValid) => {
    setRequiredFieldsValid(requiredFieldsValid);
  };

  return (
    <div>
      <Wrapper>
        <IntroTopbar
          text="게시글 작성"
          actBtn={true}
          btnText="게시하기"
          nextPath="/detail"
          isFilled={requiredFieldsValid}
        />
        <PostContent onBtn={onBtn} />
      </Wrapper>
    </div>
  );
};

export default Postpage;

const Wrapper = styled.div`
  margin-top: 11.6rem;
`;
