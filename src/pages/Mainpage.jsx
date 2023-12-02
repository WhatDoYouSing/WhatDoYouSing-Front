import React, { useState } from "react";
import styled from "styled-components";

//components
import LyricsItem from "../components/common/LyricsItem";
import EmotionChip from "../components/common/EmotionChip";
import EmotionList from "../components/common/EmotionList";

const MainPage = () => {
  return (
    <div>
      <LyricsItem />
      <EmotionList />
    </div>
  );
};

export default MainPage;
