import GlobalStyle from "./statics/styles/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from "./pages/Mainpage";
import Detailpage from "./pages/Detailpage";
import SearchPage from "./pages/SearchPage";
import RecommendPage from "./pages/RecommendPage";
import MyPage from "./pages/MyPage";
import PostPage from "./pages/Postpage";
import RecordedPage from "./pages/RecordedPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<MainPage />}></Route>
          <Route path={"/detail"} element={<Detailpage />}></Route>
          <Route path={"/search"} element={<SearchPage />}></Route>
          <Route path={"/recommend"} element={<RecommendPage />}></Route>
          <Route path={"/my"} element={<MyPage />}></Route>
          <Route path={"/post"} element={<PostPage />}></Route>
          <Route path={"/recorded"} element={<RecordedPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
