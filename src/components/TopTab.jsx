import React, { useState, useRef, useEffect } from "react";
import { styled, css } from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Back } from "../images/back.svg";
import { ReactComponent as Share } from "../images/share.svg";
import { ReactComponent as BookmarkOff } from "../images/bookmark-off.svg";
import { ReactComponent as Meatball } from "../images/meatball.svg";

import MeatballSelect from "./DetailPage/MeatballSelect";

import useClickOutside from "../hooks/useClickOutside";

const TopTab = ({ deleteModal, reportModal }) => {
  const [deleteSelect, setDeleteSelect] = useState(false); //게시물 삭제
  const [reportSelect, setReportSelect] = useState(false); //게시물 신고
  //자식(MeatballSelect)에게 받기
  const deleteSel = () => {
    setDeleteSelect(true);
  };
  const reportSel = () => {
    setReportSelect(true);
  };
  //부모(Detailpage)에게 전달
  useEffect(() => {
    deleteModal(deleteSelect);
    reportModal(reportSelect);
  }, [deleteSelect, reportSelect]);

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  //미트볼 클릭 여부
  const [isMeatballClicked, setMeatballClicked] = useState(false);
  const handleMeatball = () => {
    setMeatballClicked(!isMeatballClicked);
    console.log("isMeatballClicked:", !isMeatballClicked);
  };

  //선택한 미트볼 옵션
  const [selectedMeatball, setSelectedMeatball] = useState();
  const handleSelect = (option) => {
    setSelectedMeatball(option);
  };

  //외부 클릭시 닫힘
  const meatballRef = useRef(null);

  useClickOutside(meatballRef, () => {
    if (isMeatballClicked) {
      setMeatballClicked(!isMeatballClicked);
    }
  });

  // 선택된 미트볼 옵션을 처리할 콜백 함수
  const handleMeatballSelect = (option) => {
    console.log("TopTab에 전달된 미트볼 option:", option);
  };

  return (
    <>
      <Wrapper>
        <Back onClick={goBack} />
        <Others>
          <Share />
          <BookmarkOff />
          <Meatball onMouseDown={handleMeatball} ref={meatballRef} />
          {isMeatballClicked && (
            <MeatballSelect
              selectedMeatball={selectedMeatball}
              handleSelect={handleSelect}
              ref={meatballRef}
              deleteSel={deleteSel}
              reportSel={reportSel}
            />
          )}
        </Others>
      </Wrapper>
    </>
  );
};
export default TopTab;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  width: 100%;
  height: 11.3rem;
  background-color: var(--white);
  color: var(--black);
  z-index: 999;
`;

const Others = styled.div`
  width: auto;
  height: auto;
  flex-direction: row;
  cursor: pointer;
`;
