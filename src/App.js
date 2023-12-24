import GlobalStyle from "./statics/styles/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from "./pages/Mainpage";
import Detailpage from "./pages/Detailpage";
import SearchPage from "./pages/SearchPage";
import RecommendPage from "./pages/RecommendPage";
import MyPage from "./pages/MyPage";

import InitialPage from "./pages/InitialPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

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
          <Route path={"/detail"} element={<Detailpage />}></Route>
          <Route path={"/search"} element={<SearchPage />}></Route>
          <Route path={"/recommend"} element={<RecommendPage />}></Route>
          <Route path={"/my"} element={<MyPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
