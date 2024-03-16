import { styled } from "styled-components";

import emotionData from "../../assets/data/EmotionData";
import EmotionChip from "../common/EmotionChip";

const ImgCard = ({ captureRef, data }) => {
  const emotion = emotionData;

  return (
    <>
      <Wrapper ref={captureRef}>
        <Container>
          <EmotionChip
            text={emotion[data.sings_emotion]?.text}
            src={emotion[data.sings_emotion]?.src}
            size="small"
          />
          <Lyric>{data.lyrics}</Lyric>
          <Detail>{data.content}</Detail>
          <More>
            <Info>
              <div>{data.title}</div>
              <div>{data.singer}</div>
            </Info>

            <Insta>@what_doyousing</Insta>
          </More>
        </Container>
      </Wrapper>
    </>
  );
};

export default ImgCard;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 35.2556rem;
  height: auto;
  padding: 3.972rem 2.2653rem;
  align-items: flex-start;
  border-radius: 16.516px;
  background: var(--white);
`;

const Insta = styled.div`
  display: flex;
  align-items: flex-end;
  color: var(--Gray, #d9d9d9);
  font-size: 13.732px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 17.851px */
  letter-spacing: -0.137px;
`;

const Container = styled.div`
  display: flex;
  width: 30.7249rem;
  flex-direction: column;
  align-items: flex-start;
`;

const Lyric = styled.div`
  width: 100%;
  align-self: stretch;
  color: var(--Black, #262121);
  font-size: 3.433rem;
  font-style: normal;
  font-weight: 900;
  line-height: 105%;
  letter-spacing: -0.103rem;

  margin-top: 1.7rem;
`;

const Detail = styled.div`
  width: 23.543rem;
  /* height: 5.4rem; */
  overflow: hidden;
  color: var(--Black, #262121);
  text-overflow: ellipsis;
  font-size: 1.2015rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 18.023px */
  letter-spacing: -0.0841rem;
  margin-top: 1.373rem;
  /* margin-bottom: 3.433rem; */
`;

const More = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;

  margin-top: 3.5rem;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.164rem;

  div {
    width: 152px;
    color: var(--gray);
    font-family: Apple SD Gothic Neo;
    font-size: 14.231px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    letter-spacing: -0.142px;
  }
`;
