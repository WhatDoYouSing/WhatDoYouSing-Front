import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import IntroTopbar from "../../components/IntroTopbar";
import Footer from "../../components/common/Footer";

import symbol from "../../images/icons/png/doong-ee3.png";
import check_off from "../../images/checkbox-off.svg";
import check_on from "../../images/checkbox-on.svg";

//api
import { DelKakaoAccount } from "../../apis/user";

const KakaoDeletePage = () => {
  const navigate = useNavigate();

  const [isChecked, setIsChecked] = useState(false);

  const handleDelBtn = async () => {
    if (!isChecked) {
      alert("회원탈퇴 약관에 동의해주세요.");
    } else {
      const result = await DelKakaoAccount(navigate);
      console.log(result);
    }
  };

  const toggleCheck = () => {
    // 체크 상태를 토글하는 함수
    setIsChecked((prev) => !prev);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    //트레킹 코드
    (function (w, d, a) {
      w.__beusablerumclient__ = {
        load: function (src) {
          var b = d.createElement("script");
          b.src = src;
          b.async = true;
          b.type = "text/javascript";
          d.getElementsByTagName("head")[0].appendChild(b);
        },
      };
      w.__beusablerumclient__.load(a + "?url=" + encodeURIComponent(d.URL));
    })(window, document, "//rum.beusable.net/load/b230311e131233u903");
  }, []);

  return (
    <>
      <Wrapper>
        <IntroTopbar text="회원탈퇴" delPath="/my" />
        <Box>
          <ImgBoxS>
            <Img src={symbol} />
          </ImgBoxS>
          <span>정말... 떠나시겠어요?</span>
        </Box>
        <SideBox>
          <InfoBox>
            <Check
              src={isChecked ? check_on : check_off}
              onClick={toggleCheck}
            />
            <DelInfo>
              회원탈퇴 버튼을 누르면 계정 정보가 삭제되며, 복구할 수 없음에
              동의합니다.
            </DelInfo>
          </InfoBox>
          <LoginBtn onMouseUp={() => handleDelBtn()}>회원 탈퇴</LoginBtn>
        </SideBox>
      </Wrapper>
      <Footer />
    </>
  );
};

export default KakaoDeletePage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  min-height: 100%;
  padding-bottom: 25.8rem;

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    min-height: 100%;
  }
`;

const Img = styled.img`
  width: 105px;
  height: 105px;

  @media (min-width: 1200px) {
    width: 18rem;
    height: 17.83rem;
  }
`;

const ColumnStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Box = styled(ColumnStyle)`
  margin: 23.7rem 0 6.4rem;
  gap: 2.5rem;

  span {
    font-size: 2rem;
    font-style: normal;
    font-weight: 800;
  }

  @media (min-width: 1200px) {
    margin: 0;
    gap: 2.8rem;
  }
`;

const ImgBoxS = styled.div``;

const SideBox = styled(ColumnStyle)`
  width: 100%;
  margin: 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 1200px) {
    padding: 10rem;
    border-radius: 1.6rem;
    border: 1.5px solid var(--lightGray);
    background: var(--white);

    box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.1);
  }
`;

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Check = styled.img`
  width: 24px;
  height: 24px;
`;

const DelInfo = styled.span`
  flex: 1 0 0;
  color: var(--Dark-Gray, #a0a0a0);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;

  word-break: keep-all;
`;

const LoginBtn = styled.button`
  display: flex;
  padding: 2rem 4.8rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  align-self: stretch;

  border-radius: 1.2rem;
  border: 0.15rem solid var(--gray);
  background: var(--white);

  margin: 1.6rem 0;

  color: var(--black);
  text-align: center;

  font-size: 2rem;
  font-weight: 600;

  &:active {
    background-color: var(--pointPink);
    color: var(--white);
    border: none;
  }
`;
