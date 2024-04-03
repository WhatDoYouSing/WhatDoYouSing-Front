import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const Toast = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <Wrapper>
      <AnimatePresence>
        <Container
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <div>선택 가능한 최대 글자수 64자를 초과했습니다.</div>
        </Container>
      </AnimatePresence>
    </Wrapper>
  );
};

export default Toast;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Container = styled(motion.div)`
  position: fixed;
  bottom: 40px;
  padding: 8px 24px;
  background: rgba(109, 109, 109, 0.8);
  color: var(--white);
  border-radius: 100px;
  z-index: 9999;

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.32px;

  div {
    margin-top: -2px;
  }
`;
