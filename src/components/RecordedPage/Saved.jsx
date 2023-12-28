import React, { useState } from "react";
import { styled, css } from "styled-components";

import { ReactComponent as Search } from "../../images/search.svg";
import LyricsItem from "../common/LyricsItem";

const Saved = () => {
  const savedItems = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <div>
      <Wrapper>
        <SearchBar>
          <input placeholder="저장한 가사 총 122개"></input>
          <Search />
        </SearchBar>
        <ItemDiv>
          {savedItems.map((id) => (
            <LyricsItem showComment={false} />
          ))}
        </ItemDiv>
      </Wrapper>
    </div>
  );
};

export default Saved;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
  align-self: stretch;
`;

const SearchBar = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  gap: 0.8rem;
  padding: 1.5rem 0 3rem 0;

  input {
    height: 4.8rem;
    flex: 1 0 0;
    width: 100%;
    flex-shrink: 0;
    border: none;
    border-bottom: 0.15rem solid var(--black);
    background: var(--white);
    outline: none;
  }

  input::placeholder {
    color: var(--darkGray);
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.032rem;
  }
`;

const ItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  > div:nth-child(odd) {
    align-self: flex-start;
  }

  > div:nth-child(even) {
    align-self: flex-end;
  }
`;
