import React, { useEffect } from "react";
import styled from "styled-components";

import { ReactComponent as CloseIcon } from "../../images/delete.svg";

const ImgSaveModal = ({ imgData, setShowModal }) => {
  // 외부 화면 스크롤 방지
  useEffect(() => {
    document.body.style = `overflow: hidden`;
    return () => (document.body.style = `overflow: auto`);
  }, []);

  return (
    <Wrapper>
      <TopBar>
        <Container>
          <Close onClick={() => setShowModal(false)} />
          <Title>이미지 저장</Title>
        </Container>
      </TopBar>
      <Box>
        <Setting>이미지를 꾹 눌러서 저장해 주세요!</Setting>
        <Shadow>
          <img src={imgData} alt="lyric card img" />
        </Shadow>
      </Box>
    </Wrapper>
  );
};

export default ImgSaveModal;

const Wrapper = styled.div`
  z-index: 120;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--white);
`;

const TopBar = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 7.9rem;

  @media (min-width: 792px) {
    width: 792px;
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 4.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Close = styled(CloseIcon)`
  position: absolute;
  left: 0;
  cursor: pointer;
`;

const Title = styled.div`
  color: var(--black);
  text-align: center;
  font-size: 2rem;
  font-style: normal;
  font-weight: 800;
`;

const Box = styled.div`
  margin-top: 1.6rem;
  display: flex;
  flex-direction: column;

  justify-content: center;
  gap: 2rem;
`;

const Setting = styled.div`
  color: var(--darkGray);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Shadow = styled.div`
  width: 354px;
  border-radius: 16.516px;
  box-shadow: 0 0.5rem 2.5rem 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;

  img {
    width: 100%;
  }
`;
