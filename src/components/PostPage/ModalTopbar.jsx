import React, { useState, useEffect } from "react";
import { styled } from "styled-components";

import { ReactComponent as Back } from "../../images/back.svg";

const ModalTopbar = ({
  selectLines,
  setSearchOpen,
  setSelectOpen,
  saveSelectedLyric,
}) => {
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    setIsFilled(selectLines.length > 0);
  }, [selectLines]);

  const handleCloseModal = () => {
    if (isFilled) {
      saveSelectedLyric();
      setSearchOpen(false);
      setSelectOpen(false);
    }
  };

  return (
    <Wrapper>
      <Container>
        <ImgDiv>
          <Back onClick={() => setSelectOpen(false)} />
        </ImgDiv>
        <Title>가사 선택하기</Title>
        <NextBtn
          className="buttonDiv"
          isFilled={isFilled}
          onClick={handleCloseModal}
        >
          선택완료
        </NextBtn>
      </Container>
    </Wrapper>
  );
};

export default ModalTopbar;

const Wrapper = styled.div`
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 7.9rem;
  background: var(--white);
  color: var(--black);
`;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4.8rem;

  @media (min-width: 1100px) {
    padding: 0 16.8rem;
  }
`;

const ImgDiv = styled.div`
  position: absolute;
  left: 0;
  cursor: pointer;

  @media (min-width: 1100px) {
    left: 16.8rem;
  }
`;

const Title = styled.div`
  text-align: center;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
`;

const NextBtn = styled.button`
  position: absolute;
  display: flex;
  width: 8.1rem;
  height: 4.1rem;
  padding: 1.2rem 1.6rem;
  justify-content: center;
  align-items: center;
  right: 1.6rem;

  @media (min-width: 1100px) {
    right: 16.8rem;
  }

  flex-shrink: 0;
  border-radius: 1.6rem;
  background-color: ${(props) =>
    props.isFilled ? "var(--pointPink)" : "var(--lightGray)"};
  color: ${(props) => (props.isFilled ? "var(--white)" : "var(--darkGray)")};
  text-align: center;
  font-size: 1.4rem;
  font-weight: 500;
`;
