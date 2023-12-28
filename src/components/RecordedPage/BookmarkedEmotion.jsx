import React, { useState } from "react";
import styled from "styled-components";

const BookmarkedEmotion = () => {
  return (
    <div>
      <Wrapper></Wrapper>
    </div>
  );
};

export default BookmarkedEmotion;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
  align-self: stretch;
`;
