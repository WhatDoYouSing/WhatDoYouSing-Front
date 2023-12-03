import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const fonts = {
  AppleSDGothicNeo: "AppleSDGothicNeo",
  Pretendard: "Pretendard-regular",
};

const GlobalStyles = createGlobalStyle`
    ${reset}
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table{
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
    }
    html,
    body,
    #root {
        width: 100%;
        height: 100%;
        font-family: "AppleSDGothicNeo", "Pretendard-regular", sans-serif;
        font-size: 62.5%;  // 1rem을 10px로 설정        
        background-color: #ffffff;
    }
    * {
    font-family: "AppleSDGothicNeo", "Pretendard-regular", sans-serif;
    font-weight: 400;
    box-sizing: border-box;
    }

    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }

    body {
        padding: 0 1.6rem;

        @media (min-width: 1100px) {
            padding: 0 16.8rem;
  }
    }

`;

export default GlobalStyles;
