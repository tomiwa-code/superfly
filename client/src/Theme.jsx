import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    dark: "#212121",
    white: "#FFFFFF",
    mid_white: "#fafafa",
    danger: "#FF2121",
    primary: "#FF4081",
    secondary: "#512DA8",
    light_secondary: "#673AB7",
    lighter_secondary: "#D1C4E9",
    dark_grey: "#757575",
    light_grey: "#BDBDBD",
    lighter_grey: "#E2E2E2",
  },
  devices: {
    small: "640px",
    medium: "1007px",
    large: "1008px",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
