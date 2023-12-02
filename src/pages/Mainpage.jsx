import React, { useState } from "react";
import styled from "styled-components";

//components
import LyricsItem from "../components/common/LyricsItem";
import EmotionList from "../components/common/EmotionList";
import DropDownBox from "../components/common/DropDownBox";

const MainPage = () => {
  return (
    <div>
      <LyricsItem />
      <EmotionList />
      <DropDownBox />
    </div>
  );
};

export default MainPage;
