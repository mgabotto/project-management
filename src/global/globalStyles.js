import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html {
    height: 100%;
    font-size: 10px;
    width: auto;
}

* {
    padding: 0;
    box-sizing: border-box;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme.colors.dark};

}

body {
    background: ${(props) => props.theme.colors.secondary};
}


`;

export default GlobalStyle;
