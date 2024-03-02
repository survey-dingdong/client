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
      main: "#AC5F00",
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
        root: ({ ownerState }) => ({
          ...(ownerState.color === "primary" && {
            ":hover": {
              backgroundColor: "#2D44E7",
            },
            ":disabled": {
              backgroundColor: "#3F57FD",
              opacity: 0.4,
              color: "#fff",
            },
          }),
          ...(ownerState.color === "secondary" && {
            ":hover": {
              backgroundColor: "#38414E",
            },
            ":disabled": {
              backgroundColor: "#191F28",
              opacity: 0.4,
              color: "#fff",
            },
          }),
        }),
      },
      variants: [
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
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: "24px",
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontWeight: 800,
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: "0px 20px 8px 20px",
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: "20px",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontWeight: 700,
          "&.Mui-focused": {
            color: "#36445F",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          borderColor: "#E0E4EA",
          backgroundColor: "#F5F7FA",
        },
        input: {
          padding: "12px 16px",
        },
      },
    },
  },
});

export default theme;
