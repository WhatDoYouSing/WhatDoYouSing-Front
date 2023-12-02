import React, { useState } from "react";
import styled from "styled-components";

//components
import CommentBox from "../components/CommentBox";
import AskModal from "../components/AskModal";

const Detailpage = () => {
  return (
    <div>
      <CommentBox />
      <AskModal />
    </div>
  );
};

export default Detailpage;
