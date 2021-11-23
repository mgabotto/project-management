import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#d0ddeb",
    secondary: "#d0ceee",
    lightblue: "#212985",
    tertiary: "#1a237e",
    dark: "#000051",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1.6rem",
    medium: "1.8rem",
    large: "3rem",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
