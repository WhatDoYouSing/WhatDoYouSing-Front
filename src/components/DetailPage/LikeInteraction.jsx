import { useEffect, useState } from "react";
import styled from "styled-components";

import note16 from "../../images/note16.png";
import note8 from "../../images/note8.png";
import note4 from "../../images/note4.png";
import note2 from "../../images/note2.png";

const LikeInteraction = ({ noteId }) => {
  const noteImages = [note16, note8, note4, note2];
  const randomIndex = (noteId * 31) % noteImages.length; // 각각의 noteId에 따라 다른 랜덤 이미지 선택
  const selectedNoteImage = noteImages[randomIndex];

  return (
    <Wrapper>
      <div className="ch">
        <img src={selectedNoteImage} width="30px" alt={`Note ${noteId}`} />
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

export default LikeInteraction;
