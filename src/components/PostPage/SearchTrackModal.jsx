import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useDragControls } from "framer-motion";

import SearchContent from "./SearchContent";
import { ReactComponent as HandlerIcon } from "../../images/bottomsheet-handler.svg";

const SearchTrackModal = ({
  setSearchOpen,
  setSelectOpen,
  isSelectOpen,
  setSelectedTrack,
}) => {
  // 바텀 시트 관리
  const [isOpen, setIsOpen] = useState(true);
  const dragControls = useDragControls();
  const animateState = isOpen ? "opened" : "closed";

  const handleDragEnd = (event, info) => {
    const offsetThreshold = 150;
    const deltaThreshold = 5;
    const isOverOffsetThreshold = Math.abs(info.offset.y) > offsetThreshold;
    const isOverDeltaThreshold = Math.abs(info.delta.y) > deltaThreshold;
    const isOverThreshold = isOverOffsetThreshold || isOverDeltaThreshold;

    if (!isOverThreshold) return;

    const newIsOpened = info.offset.y < 0;
    setIsOpen(newIsOpened);

    if (!newIsOpened) {
      setTimeout(() => {
        setSearchOpen(false);
      }, 300);
    }
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      setSearchOpen(false);
    }, 300);
  };

  // 외부 화면 스크롤 방지
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style = `overflow: hidden`;
    return () => (document.body.style = `overflow: auto`);
  }, [isSelectOpen]);

  return (
    <>
      <Container
        initial="closed"
        animate={animateState}
        variants={{
          opened: { top: `10%` },
          closed: { top: "100vh" },
        }}
        transition={{ type: "spring", bounce: 0, duration: 0.5 }}
        drag="y"
        dragControls={dragControls}
        dragListener={false}
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
      >
        <HandlerContainer>
          <Handler onPointerDown={(e) => dragControls.start(e)} />
        </HandlerContainer>
        <Header>
          <span>가사 검색하기</span>
          <CloseBtn onClick={handleCloseModal}>취소</CloseBtn>
        </Header>
        <SearchContent {...{ setSelectOpen, setSelectedTrack }} />
      </Container>
      <Overlay
        initial={false}
        animate={animateState}
        variants={{
          opened: {
            pointerEvents: "all",
            opacity: 0.7,
          },
          closed: {
            pointerEvents: "none",
            opacity: 0,
          },
        }}
        onTap={handleCloseModal}
      />
    </>
  );
};

export default SearchTrackModal;

const Overlay = styled(motion.div)`
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
`;

const Container = styled(motion.div)`
  z-index: 120;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 90%;
  background-color: var(--white);
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  padding: 0 16px;
  box-sizing: border-box;

  color: var(--black);
  font-size: 16px;
  font-style: normal;

  will-change: transform;
`;

const HandlerContainer = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Handler = styled(HandlerIcon)`
  cursor: grab;
  user-select: none;
`;

const Header = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;

  font-size: 15px;
  line-height: 100%; /* 15px */
  letter-spacing: -0.3px;

  span {
    font-size: 2rem;
    font-weight: 700;
  }
`;

const CloseBtn = styled.div`
  position: absolute;
  right: 2rem;
  font-size: 1.8rem;
  font-weight: 400;
  cursor: pointer;
`;
