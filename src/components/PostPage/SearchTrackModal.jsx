import React, { useState } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useDragControls } from "framer-motion";

import SearchContent from "./SearchContent";
import { ReactComponent as HandlerIcon } from "../../images/bottomsheet-handler.svg";

const SearchTrackModal = ({ setSearchOpen, setSelectOpen, setInputModal }) => {
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

  return (
    <>
      <Container
        initial="closed"
        animate={animateState}
        variants={{
          opened: { top: `10vh` },
          closed: { top: "100vh" },
        }}
        transition={{ type: "spring", bounce: 0, duration: 0.5 }}
        drag="y"
        dragControls={dragControls}
        dragListener={false}
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.4}
        onDragEnd={handleDragEnd}
      >
        <HandlerContainer onPointerDown={(e) => dragControls.start(e)}>
          <Handler />
        </HandlerContainer>
        <Header>
          <span>가사 검색하기</span>
          <CloseBtn onClick={handleCloseModal}>취소</CloseBtn>
        </Header>
        <SearchContent {...{ setSelectOpen, setInputModal, setSearchOpen }} />
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
  position: fixed;
  z-index: 130;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
`;

const Container = styled(motion.div)`
  position: fixed;
  z-index: 150;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 90vh;
  background-color: var(--white);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding: 0 16px;
  box-sizing: border-box;

  color: var(--black);
  font-size: 16px;
  font-style: normal;

  will-change: transform;
`;

const HandlerContainer = styled.div`
  padding: 20px 0;
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
  padding-bottom: 20px;

  span {
    color: var(--black);
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.4px;
  }
`;

const CloseBtn = styled.div`
  position: absolute;
  right: 2.1rem;
  color: var(--black);
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.2px;
  cursor: pointer;
`;
