import React, { useState } from "react";
import styled from "styled-components";

const PostContent = () => {
  return (
    <div>
      <Wrapper>
        <Title>
          <span className="title">인용할 가사</span>
          <span className="star">*</span>
        </Title>
      </Wrapper>
    </div>
  );
};

export default PostContent;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 2rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -0.04rem;

  .title {
    color: var(--black);
  }
  .star {
    color: var(--pointPink);
  }
`;
