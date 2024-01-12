import React from "react";
import { styled } from "styled-components";

import beforeOne from "../images/beforeOnepage.svg";
import beforeAll from "../images/beforeAllpage.svg";
import nextOne from "../images/nextOnepage.svg";
import nextAll from "../images/nextAllpage.svg";

const Pagination = ({ total, limit, page, setPage }) => {
  const numPages = total;

  return (
    <Wrapper>
      <Button onClick={() => setPage(1)}>
        <img src={beforeAll} />
      </Button>
      <Button onClick={() => setPage(page - 1)}>
        <img src={beforeOne} />
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
      <Button onClick={() => setPage(page + 1)}>
        <img src={nextOne} />
      </Button>
      <Button onClick={() => setPage(total)}>
        <img src={nextAll} />
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
