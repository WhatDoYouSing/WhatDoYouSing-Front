import React, { useState } from "react";
import { styled, css } from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Back } from "../../images/back.svg";

const TopBack = () => {
  const navigate = useNavigate();
  const goMy = () => {
    navigate("/my");
  };

  return (
    <div>
      <Wrapper>
        <Back onClick={goMy} />
        <span>내활동</span>
      </Wrapper>
    </div>
  );
};

export default TopBack;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 11.3rem;
  background-color: var(--white);
  color: var(--black);
  z-index: 9999;

  span {
    color: var(--black);
    text-align: center;
    font-size: 2rem;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: -0.04rem;
    margin-left: 12.1rem;
  }
`;
