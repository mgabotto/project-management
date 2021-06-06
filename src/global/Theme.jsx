import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#eeeeee",
    secondary: "#00adb5",
    tertiary: "#393e46",
    dark: "#222831",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1.5rem",
    medium: "1.8rem",
    large: "3rem",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
