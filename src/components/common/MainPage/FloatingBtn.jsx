import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import music from "../../../images/change/fab.png";

const FloatingBtn = () => {
  const isLogin = localStorage.getItem("token") !== null;
  const navigate = useNavigate();

  const handleClick = () => {
    if (isLogin) {
      sessionStorage.setItem("from", window.location.pathname);
      navigate("/post");
    } else navigate("/initial");
  };

  return (
    <Wrapper onClick={handleClick}>
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
  z-index: 110;
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
