import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
    ${normalize}

    html,
    body {
        overflow-x: hidden;
        width: 100vw;
        height: 100%;
        margin: 0;
        background-color: white;
        font-family: 'Noto Sans KR', sans-serif;        
    }
`
export default GlobalStyle;
