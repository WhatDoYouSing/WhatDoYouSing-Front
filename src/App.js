import GlobalStyle from "./statics/styles/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from "./pages/Mainpage";
import Detailpage from "./pages/Detailpage";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<MainPage />}></Route>
          <Route path={"/detail"} element={<Detailpage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
