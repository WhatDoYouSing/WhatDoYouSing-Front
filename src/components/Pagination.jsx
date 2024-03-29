import React, { useState, useEffect } from "react";
import { styled } from "styled-components";

import beforeOne from "../images/beforeOnepage.svg";
import beforeAll from "../images/beforeAllpage.svg";
import nextOne from "../images/nextOnepage.svg";
import nextAll from "../images/nextAllpage.svg";

const Pagination = ({ total, page, setPage }) => {
  const [phase, setPhase] = useState(1);

  const limit = window.innerWidth <= 1100 ? 5 : 10;
  const totalPhase = Math.ceil(total / limit);

  const displayList =
    phase === totalPhase
      ? phase >= 2
        ? page - (phase - 1) * limit
        : total
      : limit;

  useEffect(() => {
    console.log(page, Math.ceil(page / limit));
    setPhase(Math.ceil(page / limit));
  }, [page]);

  return (
    <Wrapper>
      <Button onClick={() => setPage(1)}>
        <img src={beforeAll} alt="" />
      </Button>
      <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
        <img src={beforeOne} alt="" />
      </Button>
      {Array(displayList)
        .fill()
        .map((_, i) => {
          const displayPage = (phase - 1) * limit + (i + 1);
          return (
            <PageButton
              key={displayPage}
              onClick={() => setPage(displayPage)}
              current={page === displayPage ? "page" : undefined}
            >
              {displayPage}
            </PageButton>
          );
        })}
      <Button onClick={() => setPage(page + 1)} disabled={page === total}>
        <img src={nextOne} alt="" />
      </Button>
      <Button onClick={() => setPage(total)}>
        <img src={nextAll} alt="" />
      </Button>
    </Wrapper>
  );
};

export default Pagination;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 100%;
  margin: 4rem 0;
`;

const Button = styled.button`
  border: none;
  margin: 0;
  background: transparent;
  color: var(--black);
`;

const PageButton = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: transparent;
  color: var(--black);
  font-size: 11px;
  cursor: pointer;

  font-size: 14px;
  font-style: normal;
  font-weight: 600;

  &[current] {
    color: var(--pointPink);
  }
`;
