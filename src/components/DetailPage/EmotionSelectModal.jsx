import React, { useState } from "react";
import styled, { css } from "styled-components";

import EmotionList from "../common/EmotionList";

const EmotionSelectModal = ({ closeModal, onEmotionSelect }) => {
  return (
    <Container>
      <EmotionList
        size="small"
        big={false}
        closeModal={closeModal}
        onEmotionSelect={onEmotionSelect}
      />
    </Container>
  );
};

export default EmotionSelectModal;

const Container = styled.div`
  position: absolute;
  z-index: 100000000;
  top: -24.2rem;
  display: flex;
  width: 32.7rem;
  height: 24.9rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1.6rem;
  background: var(--white);

  /* 드롭다운 그림자 */
  box-shadow: 0 0.5rem 2.5rem 0 rgba(0, 0, 0, 0.1);
`;
