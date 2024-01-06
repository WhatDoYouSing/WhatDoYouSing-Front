import GlobalStyle from "./statics/styles/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from "./pages/Mainpage";
import Detailpage from "./pages/Detailpage";
import SearchPage from "./pages/SearchPage";
import RecommendPage from "./pages/RecommendPage";
import MyPage from "./pages/MyPage";
import PostPage from "./pages/Postpage";
import RecordedPage from "./pages/RecordedPage";
import ResultPage from "./pages/ResultPage";
import ImgSavePage from "./pages/ImgSavePage";

import InitialPage from "./pages/UserInfo/InitialPage";
import LoginPage from "./pages/UserInfo/LoginPage";
import SignupPage from "./pages/UserInfo/SignupPage";
import ProfileSettingPage from "./pages/UserInfo/ProfileSettingPage";

import UserModifyIntroPage from "./pages/UserInfo/UserModifyIntroPage";
import UserDeletePage from "./pages/UserInfo/UserDeletePage";
import PasModifyPage from "./pages/UserInfo/PasModifyPage";
import NicModifyPage from "./pages/UserInfo/NicModifyPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<MainPage />}></Route>
          <Route path={"/initial"} element={<InitialPage />}></Route>
          <Route path={"/login"} element={<LoginPage />}></Route>
          <Route path={"/signup"} element={<SignupPage />}></Route>
          <Route path={"/profile"} element={<ProfileSettingPage />}></Route>
          <Route path={"/detail"} element={<Detailpage />}></Route>
          <Route path={"/search"} element={<SearchPage />}></Route>
          <Route path={"/recommend"} element={<RecommendPage />}></Route>
          <Route path={"/my"} element={<MyPage />}></Route>
          <Route path={"/post"} element={<PostPage />}></Route>
          <Route path={"/recorded"} element={<RecordedPage />}></Route>
          <Route path={"/result"} element={<ResultPage />}></Route>
          <Route path={"/save"} element={<ImgSavePage />}></Route>
          <Route
            path={"/modifyintro"}
            element={<UserModifyIntroPage />}
          ></Route>
          <Route path={"/pas-modify"} element={<PasModifyPage />}></Route>
          <Route path={"/nic-modify"} element={<NicModifyPage />}></Route>
          <Route path={"/delete"} element={<UserDeletePage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
