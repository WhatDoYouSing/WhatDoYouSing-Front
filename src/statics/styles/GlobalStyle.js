import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        display: flex;
        flex-direction: column;

        /* &::-webkit-scrollbar {
    display: none;
  } */

  &::-webkit-scrollbar {
    position: absolute;
    right: 0;
    width: 8px;  /* 세로축 스크롤바 폭 너비 */
    
}
&::-webkit-scrollbar-thumb {
    background: rgba(109, 109, 109, 0.2); /* 스크롤바 막대 색상 */
    border:none; /* 스크롤바 막대 테두리 설정  */
    border-radius: 20px;
}
&::-webkit-scrollbar-track {
    background: transparent;  /*스크롤바 뒷 배경 색상*/
}

        @media (min-width: 1200px) {
            padding: 0 16.8rem;
  }
    }

`;

export default GlobalStyles;
