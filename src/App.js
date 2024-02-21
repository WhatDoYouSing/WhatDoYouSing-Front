import GlobalStyle from "./statics/styles/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Helmet } from "react-helmet-async";

import MainPage from "./pages/Mainpage";
import Detailpage from "./pages/Detailpage";
import SearchPage from "./pages/SearchPage";
import RecommendPage from "./pages/RecommendPage";
import MyPage from "./pages/MyPage";
import PostPage from "./pages/Postpage";
import RecordedPage from "./pages/RecordedPage";
import ResultPage from "./pages/ResultPage";

import InitialPage from "./pages/UserInfo/InitialPage";
import LoginPage from "./pages/UserInfo/LoginPage";
import SignupPage from "./pages/UserInfo/SignupPage";
import ProfileSettingPage from "./pages/UserInfo/ProfileSettingPage";

import KakaoLoginPage from "./pages/UserInfo/KakaoLoginPage";
import KakaoNicknamePage from "./pages/UserInfo/KakaoNicknamePage";
import KakaoDeletePage from "./pages/UserInfo/KakaoDeletePage";

import UserModifyIntroPage from "./pages/UserInfo/UserModifyIntroPage";
import UserDeletePage from "./pages/UserInfo/UserDeletePage";
import PasModifyPage from "./pages/UserInfo/PasModifyPage";
import NicModifyPage from "./pages/UserInfo/NicModifyPage";

import TestPage from "./pages/TestPage";

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <BrowserRouter>
        <Helmet>
          <meta name="theme-color" content="#ffffff" />
        </Helmet>
        <Routes>
          <Route path={"/test"} element={<TestPage />}></Route>

          <Route path={"/"} element={<MainPage />}></Route>
          <Route path={"/initial"} element={<InitialPage />}></Route>
          <Route path={"/login"} element={<LoginPage />}></Route>
          <Route path={"/signup"} element={<SignupPage />}></Route>
          <Route path={"/profile/:id"} element={<ProfileSettingPage />}></Route>
          <Route
            path={"/accounts/kakao/callback"}
            element={<KakaoLoginPage />}
          ></Route>
          <Route
            path={"/kakao-nicname"}
            element={<KakaoNicknamePage />}
          ></Route>
          <Route path={"/detail/:postid"} element={<Detailpage />}></Route>
          <Route path={"/search"} element={<SearchPage />}></Route>
          <Route path={"/recommend"} element={<RecommendPage />}></Route>
          <Route path={"/my"} element={<MyPage />}></Route>
          <Route path={"/post"} element={<PostPage />}></Route>
          <Route path={"/recorded/:id"} element={<RecordedPage />}></Route>
          <Route path={"/result"} element={<ResultPage />}></Route>
          <Route
            path={"/modifyintro/:id"}
            element={<UserModifyIntroPage />}
          ></Route>
          <Route path={"/pas-modify"} element={<PasModifyPage />}></Route>
          <Route path={"/nic-modify"} element={<NicModifyPage />}></Route>
          <Route path={"/delete"} element={<UserDeletePage />}></Route>
          <Route path={"/kakao-delete"} element={<KakaoDeletePage />}></Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
