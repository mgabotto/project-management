import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html {
    height: 100%;
    font-size: 10px
}

* {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
}

body {
    background: ${(props) => props.theme.colors.persianGreen};
}


`;

export default GlobalStyle;
