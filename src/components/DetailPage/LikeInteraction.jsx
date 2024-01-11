import { useEffect, useState } from "react";
import styled from "styled-components";

import note16 from "../../images/change/음표1.png";
import note8 from "../../images/change/음표2.png";
import note4 from "../../images/change/음표3.png";
import note2 from "../../images/change//음표4.png";

const LikeInteraction = ({ noteId }) => {
  const noteImages = [note16, note8, note4, note2];
  const randomIndex = (noteId * 31) % noteImages.length; // 각각의 noteId에 따라 다른 랜덤 이미지 선택
  const selectedNoteImage = noteImages[randomIndex];

  return (
    <Wrapper>
      <div className="ch">
        <Img src={selectedNoteImage} alt={`Note ${noteId}`} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  z-index: 300;
  top: -11rem;
  left: -4rem;
  .ch {
    position: relative;
    animation-name: example;
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
  }
  @keyframes example {
    0% {
      transform: rotate(-5deg);
    }
    25% {
      transform: rotate(-30deg);
    }
  }
`;

const Img = styled.img`
  width: 3rem;
`;

export default LikeInteraction;
