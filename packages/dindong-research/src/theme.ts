"use client";
import {
  buttonClasses,
  linearProgressClasses,
  listItemTextClasses,
  toggleButtonGroupClasses,
} from "@mui/material";
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
    background: {
      default: "#F5F7FA",
    },
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
            [`&.${buttonClasses.disabled}`]: {
              backgroundColor: theme.palette.primary.main,
              opacity: 0.4,
              color: "#fff",
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
        {
          props: { variant: "outlined", color: "primary" },
          style: {
            ":hover": {
              backgroundColor: "#F5F7FA",
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

    //
    // Form
    //
    MuiFormLabel: {
      styleOverrides: {
        asterisk: {
          color: "#DB5654",
        },
        root: ({ theme }) => ({
          fontSize: "14px",
          fontWeight: 700,
          color: theme.palette.text.primary,
          "&.Mui-focused": {
            color: theme.palette.text.primary,
          },
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          backgroundColor: "#F5F7FA",
          padding: "8px 12px",
          "& fieldset": {
            borderColor: "#E0E4EA",
          },
        },
        input: {
          fontSize: "14px",
          padding: 0,
          height: "28px",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontFamily: "Pretendard Variable",
          fontWeight: 500,
          marginLeft: 0,
          lineHeight: "16px",
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
          fontFamily: "Pretendard Variable",
          borderRadius: 16,
          fontSize: 14,
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: 14,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: ({ theme, ownerState }) => ({
          ...(ownerState.selected && {
            color: theme.palette.primary.main,
          }),
          borderRadius: 8,
          ...(!ownerState.selected && {
            "&:hover": {
              color: theme.palette.primary.main,
              i: {
                color: theme.palette.primary.main,
              },
              backgroundColor: "inherit",
            },
          }),
        }),
        selected: ({ theme }) => ({
          [`& .${listItemTextClasses.primary}`]: {
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

    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },

    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          width: "fit-content",
        },
      },
    },

    MuiToggleButtonGroup: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: "#EAEDF3",
          borderRadius: "8px",
          [`& .${toggleButtonGroupClasses.grouped}`]: {
            margin: theme.spacing(0.5),
            border: 0,
            borderRadius: theme.shape.borderRadius,
          },
        }),
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: "6px",
          height: "32px",
          width: "100%",
          "&.Mui-selected": {
            fontWeight: 700,
            backgroundColor: theme.palette.background.paper,
            "&:hover": {
              backgroundColor: theme.palette.background.paper,
            },
          },
        }),
      },
    },
  },
});

export default theme;
