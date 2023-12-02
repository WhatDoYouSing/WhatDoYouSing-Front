import React, { useState } from "react";
import styled from "styled-components";

//components
import LyricsItem from "../components/common/LyricsItem";
import EmotionChip from "../components/common/EmotionChip";

const MainPage = () => {
  return (
    <div>
      <LyricsItem />
      <EmotionChip />
    </div>
  );
};

export default MainPage;
