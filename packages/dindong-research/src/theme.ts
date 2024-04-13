"use client";
import { linearProgressClasses, listItemTextClasses } from "@mui/material";
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
    divider: "#E0E4EA",
  },
  // components
  components: {
    MuiTypography: {
      defaultProps: {
        color: "text.primary",
        fontFamily: "Pretendard Variable",
      },
      variants: [
        { props: { variant: "h4" }, style: { fontWeight: 800 } },
        { props: { variant: "h6" }, style: { fontWeight: 800 } },
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
        text: ({ theme }) => ({
          fontWeight: "bold",
          ":hover": {
            backgroundColor: theme.palette.grey[100],
          },
        }),
        root: ({ theme, ownerState }) => ({
          ...(ownerState.color === "primary" && {
            ":hover": {
              backgroundColor: "#2D44E7",
            },
            ":disabled": {
              backgroundColor: theme.palette.primary.main,
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
        asterisk: {
          color: "#DB5654",
        },
        root: {
          fontSize: "14px",
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
          fontSize: "14px",
          padding: 0,
          height: "28px",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 700,
        },
      },
      variants: [
        {
          props: { color: "primary" },
          style: ({ theme }) => ({
            backgroundColor: "3F57FD1F",
            color: theme.palette.primary.main,
          }),
        },
        {
          props: { color: "secondary" },
          style: {
            backgroundColor: "#191F281F",
            color: "#191F28",
          },
        },
        {
          props: { color: "success" },
          style: {
            backgroundColor: "#18817A1F",
            color: "#18817A",
          },
        },
        {
          props: { color: "warning" },
          style: {
            backgroundColor: "#AC5F001F",
            color: "#AC5F00",
          },
        },
        {
          props: { color: "error" },
          style: {
            backgroundColor: "#DB56541F",
            color: "#DB56541F",
          },
        },
      ],
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          height: "8px",
          borderRadius: 8,
          backgroundColor: "#F5F7FA",
          [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
          },
        },
      },
    },
    //
    // Table
    //
    MuiTableRow: {
      styleOverrides: {
        root: {
          ["&:last-child td, &:last-child th"]: { border: 0 },
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: ({ theme }) => ({
          "& .MuiTableCell-root": {
            backgroundColor: "#F5F7FA",
            borderBottom: `1px solid ${theme.palette.divider} !important`,
          },
        }),
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderColor: theme.palette.divider,
        }),
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 8,
          "&:hover": {
            color: theme.palette.primary.main,
          },
        }),
        selected: ({ theme }) => ({
          [`${listItemTextClasses.primary}`]: {
            backgroundColor: "#F0F7FF",
            color: theme.palette.primary.main,
          },
        }),
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 16,
          paddingRight: 8,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          padding: "8px 12px",
        },
        root: {
          padding: "8px 12px",
        },
      },
    },

    MuiTooltip: {
      defaultProps: {
        placement: "top",
        arrow: true,
      },
      styleOverrides: {
        tooltip: {
          backgroundColor: "#212121",
          borderRadius: 6,
        },
        arrow: {
          color: "#212121",
        },
      },
    },
  },
});

export default theme;
