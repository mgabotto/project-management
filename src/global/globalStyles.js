import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html {
    height: 100%;
}

* {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 20px
}

body {
    background: #FFFFFF;
}


`;

export default GlobalStyle;
