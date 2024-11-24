import { buttonClasses, Theme } from "@mui/material";
import { Components } from "@mui/material/styles/components";

export const MuiButton: Components<Theme>["MuiButton"] = {
  defaultProps: {
    variant: "contained",
    disableRipple: true,
    disableElevation: true,
    style: {
      borderRadius: 10,
    },
  },
  styleOverrides: {
    text: ({ theme }) => ({
      fontWeight: "bold",
      ":hover": {
        backgroundColor: theme.palette.grey[100],
      },
    }),
    root: ({ theme, ownerState }) => ({
      padding: "8px 22px",
      ...(ownerState.color === "primary" &&
        ownerState.variant === "contained" && {
          ":hover": {
            backgroundColor: "#2D44E7",
          },
          [`&.${buttonClasses.disabled}`]: {
            backgroundColor: theme.palette.primary.main,
            opacity: 0.4,
            color: theme.palette.common.white,
          },
        }),
      ...(ownerState.color === "secondary" && {
        ":hover": {
          backgroundColor: "#38414E",
        },
        [`&.${buttonClasses.disabled}`]: {
          backgroundColor: "#191F28",
          opacity: 0.4,
          color: "#fff",
        },
      }),
    }),
  },
  variants: [
    {
      props: { color: "inherit", variant: "contained" },
      style: ({ theme }) => ({
        color: theme.palette.text.primary,
        backgroundColor: "#EAEDF3",
        ":hover": {
          backgroundColor: "#E0E4EA",
        },
        ":disabled": {
          backgroundColor: "#EAEDF3",
          opacity: 0.4,
          color: theme.palette.text.primary,
        },
      }),
    },
    {
      props: { variant: "outlined", color: "primary" },
      style: ({ theme }) => ({
        ":hover": {
          backgroundColor: theme.palette.background.default,
        },
      }),
    },
    {
      props: {
        variant: "text",
      },
      style: {
        borderRadius: "10px",
        [`& .${buttonClasses.startIcon}`]: {
          marginLeft: 0,
        },
      },
    },
    {
      props: { variant: "text", color: "primary" },
      style: ({ theme }) => ({
        padding: "6px 8px",
        fontWeight: 500,
        ":hover": {
          backgroundColor: "#F0F7FF",
        },
        ":disabled": {
          opacity: 0.4,
          color: theme.palette.primary.main,
        },
      }),
    },
  ],
};
