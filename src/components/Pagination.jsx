import React, { useState } from "react";
import { styled } from "styled-components";

import beforeOne from "../images/beforeOnepage.svg";
import beforeAll from "../images/beforeAllpage.svg";
import nextOne from "../images/nextOnepage.svg";
import nextAll from "../images/nextAllpage.svg";

const Pagination = ({ total, page, setPage }) => {
  const range = window.innerWidth <= 400 ? 5 : 10;
  const numPages = total;
  const totalPhase = Math.ceil(total / range);

  const [phase, setPhase] = useState(1);

  return (
    <Wrapper>
      <Button onClick={() => setPage(1)}>
        <img src={beforeAll} alt="" />
      </Button>
      <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
        <img src={beforeOne} alt="" />
      </Button>
      {Array(numPages)
        .fill()
        .map((_, i) => (
          <PageButton
            key={i + 1}
            onClick={() => setPage(i + 1)}
            current={page === i + 1 ? "page" : undefined}
          >
            {i + 1}
          </PageButton>
        ))}
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
