"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  // palette
  palette: {
    primary: {
      main: "#3F57FD",
    },
    secondary: {
      main: "#191F28",
    },
    success: {
      main: "#18817A",
    },
    info: {
      main: "#4577D8",
    },
    warning: {
      main: "#DB5654",
    },
    error: {
      main: "#DB5654",
    },
    text: {
      primary: "#36445F",
      secondary: "#545D75",
    },
  },
  // components
  components: {
    MuiTypography: {
      defaultProps: {
        color: "text.primary",
      },
      variants: [
        { props: { color: "text.tertiary" }, style: { color: "#8E97A8" } },
      ],
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
        disableElevation: true,
        style: {
          borderRadius: 10,
          padding: "8px 22px",
        },
      },
      styleOverrides: {
        text: {
          fontWeight: "bold",
        },
      },
      variants: [
        {
          props: { color: "primary" },
          style: {
            ":hover": {
              backgroundColor: "#2D44E7",
            },
            ":disabled": {
              backgroundColor: "#3F57FD",
              opacity: 0.4,
              color: "#fff",
            },
          },
        },
        {
          props: { color: "secondary" },
          style: {
            ":hover": {
              backgroundColor: "#38414E",
            },
            ":disabled": {
              backgroundColor: "#191F28",
              opacity: 0.4,
              color: "#fff",
            },
          },
        },
        {
          props: { color: "inherit" },
          style: {
            color: "#36445F",
            backgroundColor: "#EAEDF3",
            ":hover": {
              backgroundColor: "#E0E4EA",
            },
            ":disabled": {
              backgroundColor: "#EAEDF3",
              opacity: 0.4,
              color: "#36445F",
            },
          },
        },
      ],
    },
  },
});

export default theme;
