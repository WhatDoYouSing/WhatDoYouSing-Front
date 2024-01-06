import React, { useState, useRef, useEffect } from "react";
import { styled, css } from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Back } from "../images/back.svg";
import { ReactComponent as Share } from "../images/share.svg";
import { ReactComponent as BookmarkOff } from "../images/bookmark-off.svg";
import { ReactComponent as BookmarkOn } from "../images/bookmark-on.svg";
import { ReactComponent as Meatball } from "../images/meatball.svg";

import MeatballSelect from "./DetailPage/MeatballSelect";

import useClickOutside from "../hooks/useClickOutside";

const TopTab = ({ deletePost, setDeletePost }) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const [isBookmarked, setIsBookmarked] = useState(false);
  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  //외부 클릭시 닫힘
  const meatballRef = useRef(null);
  const [isOpen, setIsOpen] = useClickOutside(meatballRef, false);

  return (
    <>
      <Wrapper>
        <Back onClick={goBack} />
        <Others>
          <Share />
          {isBookmarked ? (
            <BookmarkOn onClick={handleBookmark} />
          ) : (
            <BookmarkOff onClick={handleBookmark} />
          )}
          <Meatball onClick={() => setIsOpen(!isOpen)} ref={meatballRef} />
          {isOpen && (
            <MeatballSelect
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              deletePost={deletePost}
              setDeletePost={setDeletePost}
            />
          )}
        </Others>
      </Wrapper>
    </>
  );
};
export default TopTab;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  width: 100%;
  height: 11.3rem;
  background-color: var(--white);
  color: var(--black);
  z-index: 99;
`;

const Others = styled.div`
  width: auto;
  height: auto;
  flex-direction: row;
  cursor: pointer;
`;
