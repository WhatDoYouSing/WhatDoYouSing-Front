import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";

// ... (스타일 컴포넌트들은 아까와 동일하거나 취향껏 수정) ...
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  background-color: #fffcfd;
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: center;
  line-height: 1.4;
`;

const SubText = styled.p`
  color: #666;
  text-align: center;
  margin-bottom: 30px;
`;

const AppButton = styled.a`
  padding: 14px 40px;
  background-color: #ff005c;
  color: white;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  box-shadow: 0 4px 10px rgba(255, 0, 92, 0.2);
`;

const CommunityRedirectPage = () => {
  const { type } = useParams();

  const contentTypeName = type === "note" ? "가사 노트" : "플레이리스트";

  return (
    <Container>
      <Helmet>
        <title>왓두유씽? - 앱에서 보기</title>
        <meta name="apple-itunes-app" content="app-id=6751730490" />
      </Helmet>

      <img src="/logo.png" alt="Logo" style={{ width: 120 }} />

      <Title>
        공유된 {contentTypeName}를<br />
        확인해보세요!
      </Title>

      <SubText>
        이 내용은 왓두유씽 앱에서만
        <br />
        자세히 볼 수 있어요.
      </SubText>

      {/* 앱 다운로드/실행 버튼 */}
      <AppButton href="https://apps.apple.com/kr/app/id6751730490">
        앱 열기 / 다운로드
      </AppButton>
    </Container>
  );
};

export default CommunityRedirectPage;
