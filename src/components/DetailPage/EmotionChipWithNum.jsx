import styled, { css } from "styled-components";
import plus from "../../images/plus.svg";

export default function EmotionChipWithNum({
  text,
  src,
  num,
  isSelected = false,
  onClick = () => {},
  hideTextAndCount = false,
  disabled = false,
}) {
  const srcList = Array.isArray(src) && src.length >= 2 ? src : [plus, plus];
  const handleClick = () => {
    onClick();
  };

  return (
    <Container
      onClick={handleClick}
      isSelected={isSelected}
      hideTextAndCount={hideTextAndCount}
      disabled={disabled}
    >
      <Wrapper isSelected={isSelected} disabled={disabled}>
        <ImgDiv>
          <Img src={isSelected ? srcList[1] : srcList[0]}></Img>
        </ImgDiv>
        {!hideTextAndCount && <EmotionText>{text}</EmotionText>}
      </Wrapper>
      {!hideTextAndCount && <Count>{num}</Count>}
    </Container>
  );
}
const Container = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  ${({ isSelected, disabled }) =>
    isSelected &&
    !disabled &&
    css`
      border-color: var(--pointPink);
      color: var(--pointPink);
    `};
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: auto;
  border-radius: 4rem;
  border: 0.15rem solid var(--gray);
  background: var(--white);

  padding: 0.8rem 1.6rem;
  gap: 0.5rem;

  ${({ isSelected, disabled }) =>
    isSelected &&
    !disabled &&
    css`
      border-color: var(--pointPink);
      color: var(--pointPink);
    `};
`;

const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.6rem;
  height: 1.2529rem;
`;

const Img = styled.img`
  width: 1.6rem;
  height: 1.2529rem;
`;

const EmotionText = styled.div`
  padding-top: 0.1rem;
  font-size: 1.4rem;
  font-weight: 500;
  white-space: nowrap;
`;
const Count = styled.div`
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
