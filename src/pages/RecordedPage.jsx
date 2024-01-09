import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//페이지
import IntroTopbar from "../components/IntroTopbar";
import Saved from "../components/RecordedPage/Saved";
import Bookmarked from "../components/RecordedPage/Bookmarked";

const RecordedPage = () => {
  const { id } = useParams();
  let pageType;
  let firstCategory;
  const navigate = useNavigate();

  switch (id) {
    case "1":
      firstCategory = "saved";
      pageType = "saved";
      break;
    case "2":
      firstCategory = "bookmarked";
      pageType = "lyric";
      break;
    case "3":
      firstCategory = "bookmarked";
      pageType = "comment";
      break;
    case "4":
      firstCategory = "bookmarked";
      pageType = "emotion";
      break;
    default:
      firstCategory = "saved";
      pageType = "saved";
  }

  const [selectedCategory, setSelectedCategory] = useState(firstCategory);
  const handleCategory = (category) => {
    setSelectedCategory(category);

    if (category === "saved") {
      navigate("/recorded/1");
    } else if (category === "bookmarked") {
      navigate("/recorded/2");
    }
  };
  return (
    <div>
      <Wrapper>
        <IntroTopbar text="내활동" del={true} delPath="/my" />
        <Filter>
          <span
            onClick={() => handleCategory("saved")}
            className={selectedCategory === "saved" ? "selected" : "unselected"}
          >
            저장
          </span>
          <span
            onClick={() => handleCategory("bookmarked")}
            className={
              selectedCategory === "bookmarked" ? "selected" : "unselected"
            }
          >
            내가 남긴
          </span>
        </Filter>
        <Line />
        {selectedCategory === "saved" && <Saved />}

        {selectedCategory === "bookmarked" && (
          <Bookmarked pageType={pageType} />
        )}
      </Wrapper>
    </div>
  );
};

export default RecordedPage;

const Wrapper = styled.div`
  margin-top: 11.6rem;
`;

const Filter = styled.div`
  display: flex;
  flex-direction: row;

  span {
    width: 7.8rem;
    color: var(--black);
    text-align: center;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 20.8px */
    letter-spacing: -0.016rem;
    cursor: pointer;
  }

  .selected {
    color: var(--pointPink);
    text-align: center;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 20.8px */
    letter-spacing: -0.016rem;

    border-bottom: 2px solid var(--pointPink);
    padding-bottom: 0.6rem;
  }
`;

const Line = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid var(--gray);
`;
