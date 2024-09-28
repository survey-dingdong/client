import { createTheme, Theme } from "@mui/material";

export const theme: Theme = createTheme({
  palette: {
    primary: {
      main: "#3F57FD",
      light: "#1730E1",
      dark: "#1730E1",
    },
    secondary: {
      main: "#191F28",
      light: "#444E5D",
    },
    tertiary: {
      main: "#EAECF2",
      light: "#E0E4EE",
    },
    label: {
      normal: "#191F28",
      strong: "#000000",
      neutral: "#2E2F33E0",
      alternative: "#36445F66",
      tertiary: "#7988A9",
      tertiaryDisabled: "#7988A966",
      assistive: "#FFFFFF",
      disabled: "#36445F29",
    },
    success: {
      main: "#18817A",
    },
    info: {
      main: "#4577D8",
    },
    warning: {
      main: "#AC5F00",
    },
    error: {
      main: "#DB5654",
    },
    text: {
      primary: "#36445F",
      secondary: "#545D75",
      tertiary: "#545D75",
      assistive: "#A6ADBD",
    },
    divider: "#E0E4EA",
    background: {
      default: "#F5F7FA",
      alternative: "#F7F7F8",
      primary: "#3F57FD1F",
      success: "#18817A1F",
      info: "#4577D81F",
      warning: "#AC5F001F",
      error: "#DB56541F",
      inherit: "#00000014",
      snackbar: "#3C3C47",
    },
  },
});
