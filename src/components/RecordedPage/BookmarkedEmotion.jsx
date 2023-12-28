import React, { useState } from "react";
import styled from "styled-components";
import LyricsItem from "../common/LyricsItem";

const BookmarkedEmotion = () => {
  const lyricItems = Array.from({ length: 10 });
  return (
    <div>
      <Wrapper>
        {lyricItems.map((id) => (
          <LyricsItem showComment={true} showChip={true} />
        ))}
      </Wrapper>
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
  gap: 4rem;
`;
