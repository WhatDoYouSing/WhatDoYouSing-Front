import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import IntroTopbar from "../../components/IntroTopbar";
import Footer from "../../components/common/Footer";

import { KakaoLogin } from "../../apis/user";

//recoil
import { useSetRecoilState } from "recoil";
import { NicModifyState } from "../../assets/recoil/apiRecoil";

const KakaoLoginPage = () => {
  const navigate = useNavigate();

  const urlParams = new URL(window.location.toString()).searchParams;
  const AUTHORIZATION_CODE = urlParams.get("code");

  //   const [userData, setUserData] = useState(null);

  const getData = async () => {
    console.log(AUTHORIZATION_CODE);
    const response = await KakaoLogin(AUTHORIZATION_CODE);
    console.log(response);
  };

  useEffect(() => {
    getData();
  }, []);

  return <></>;
};

export default KakaoLoginPage;
