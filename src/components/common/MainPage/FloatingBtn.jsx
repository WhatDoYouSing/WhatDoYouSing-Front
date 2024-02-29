import React, { useEffect } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import music from "../../../images/change/fab.png";

//modal
import { useRecoilValue, useRecoilState } from "recoil";
import { useToggleModal } from "../../../hooks/useToggleModal";
import { modalContent1, modalState1 } from "../../../assets/recoil/modal";
import PostModal from "../../PostPage/PostModal";

const FloatingBtn = ({ setNewPost }) => {
  const isLogin = localStorage.getItem("token") !== null;

  const isOpen1 = useRecoilValue(modalState1);
  const { openModal } = useToggleModal();

  const [modalItem, setModalItem] = useRecoilState(modalContent1);

  const handlePost = () => {
    setModalItem(<PostModal />);
    openModal();
    setNewPost(true);
  };

  useEffect(() => {
    if (!isOpen1) {
      setNewPost(false);
    }
  }, [isOpen1, setNewPost]);

  return (
    <Wrapper onClick={handlePost}>
      {/* <Wrapper onClick={() => navigate(isLogin ? "/post" : "/initial")}> */}
      <ImgDiv>
        <Img src={music} />
      </ImgDiv>
    </Wrapper>
  );
};

export default FloatingBtn;

const Wrapper = styled.section`
  position: fixed;
  top: 61rem;
  right: 1.6rem;

  z-index: 100;

  cursor: pointer;

  @media (min-width: 1200px) {
    right: 18.4rem;
  }
`;

const ImgDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 6rem;
  height: 6rem;
  flex-shrink: 0;
  border-radius: 50%;

  background-color: var(--pointPink);
  filter: drop-shadow(0px 5px 25px rgba(0, 0, 0, 0.2));
`;

const Img = styled.img`
  width: 2.4rem;
  height: 2.2rem;
`;
