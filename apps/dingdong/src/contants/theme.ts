"use client";

// TODO: remove this!!! after migrate to ds
import {
  alertTitleClasses,
  bottomNavigationActionClasses,
  buttonClasses,
  createTheme,
  linearProgressClasses,
  listItemButtonClasses,
  listItemTextClasses,
  Theme,
  toggleButtonGroupClasses,
} from "@mui/material";

import "./themeType";

export const dingdongTheme: Theme = createTheme({
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
  // components
  components: {
    MuiTypography: {
      defaultProps: {
        color: "text.primary",
      },
      variants: [
        {
          props: { variant: "h4" },
          style: { fontWeight: 800, fontSize: "32px" },
        },
        { props: { variant: "h5" }, style: { fontWeight: 800 } },
        { props: { variant: "h6" }, style: { fontWeight: 800 } },
        {
          props: { variant: "subtitle1" },
          style: { fontWeight: 800, fontSize: 20 },
        },
        { props: { color: "text.tertiary" }, style: { color: "#8E97A8" } },
      ],
    },
    MuiButton: {
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
          fontSize: 24,
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
        root: ({ theme, ownerState }) => ({
          borderRadius: "8px",
          backgroundColor: theme.palette.background.default,
          padding: "8px 12px",
          "& fieldset": {
            borderColor: "#E0E4EA",
          },
          ...(ownerState.readOnly && {
            backgroundColor: "#E0E4EA",
            borderColor: "inherit",
            "& fieldset": {
              border: "none !important",
            },
          }),
        }),
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
          fontWeight: 500,
          marginLeft: 0,
          lineHeight: "16px",
          color: "#545D7580",
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

    // Menu
    MuiMenu: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        paper: ({ theme }) => ({
          borderRadius: 16,
          padding: 8,
          border: `1px solid ${theme.palette.divider}`,
        }),
        list: {
          padding: 0,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          height: 44,
          ":hover": {
            backgroundColor: "#E0E4EA33",
          },
          [`&.${listItemButtonClasses.selected}`]: {
            // backgroundColor: "#F0F7FF !important",
          },
        },
      },
    },
    //
    // List
    //
    MuiListItem: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 8,
          fontSize: 14,
          ":active": {
            backgroundColor: "#F0F7FF",
            [`& .${listItemTextClasses.primary}, svg`]: {
              color: theme.palette.primary.main,
            },
          },
          "&.Mui-selected": {
            backgroundColor: "#F0F7FF",
          },
        }),
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
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: ({ theme, ownerState }) => ({
          ...(ownerState.selected && {
            [`& .${listItemTextClasses.primary}`]: {
              color: theme.palette.primary.main,
              fontWeight: 500,
            },
            i: {
              color: theme.palette.primary.main,
            },
            backgroundColor: "#F0F7FF",
          }),
          ":active": {
            [`& .${listItemTextClasses.primary}, svg`]: {
              color: theme.palette.primary.main,
            },
          },
          borderRadius: 8,
          ...(!ownerState.selected && {
            "&:hover": {
              [`& .${listItemTextClasses.primary}`]: {
                color: theme.palette.primary.main,
              },
              ["i, svg"]: {
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
    MuiListSubheader: {
      styleOverrides: {
        root: {
          fontSize: "12px",
          fontWeight: 700,
          padding: "0 8px",
          lineHeight: "18px",
          marginBottom: 8,
        },
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
      variants: [
        {
          props: { variant: "standard" },
          style: ({ theme }) => ({
            border: `1px solid ${theme.palette.divider}`,
          }),
        },
        {
          props: { severity: "success" },
          style: ({ theme }) => ({
            color: theme.palette.success.main,
            [`& .${alertTitleClasses.root}`]: {
              color: theme.palette.success.main,
            },
          }),
        },
        {
          props: { severity: "info" },
          style: ({ theme }) => ({
            color: theme.palette.info.main,
            [`& .${alertTitleClasses.root}`]: {
              color: theme.palette.info.main,
            },
          }),
        },
        {
          props: { severity: "warning" },
          style: ({ theme }) => ({
            color: theme.palette.warning.main,
            [`& .${alertTitleClasses.root}`]: {
              color: theme.palette.warning.main,
            },
          }),
        },
        {
          props: { severity: "error" },
          style: ({ theme }) => ({
            color: theme.palette.error.main,
            [`& .${alertTitleClasses.root}`]: {
              color: theme.palette.error.main,
            },
          }),
        },
      ],
      styleOverrides: {
        root: {
          borderRadius: 8,
          alignItems: "center",
        },
      },
    },

    MuiAlertTitle: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 700,
        },
      },
    },

    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          width: "fit-content",
        },
        label: {
          fontSize: 14,
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
    MuiSnackbar: {
      defaultProps: {
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "right",
        },
      },
    },

    // Card
    MuiCardActionArea: {
      defaultProps: {
        disableRipple: true,
      },
    },

    // Bottom Navigation
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          height: 50,
        },
      },
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: ({ theme }) => ({
          gap: "3px",
          padding: 0,
          alignItems: "center",

          // icon
          svg: {
            color: theme.palette.text.assistive,
          },
          [`&.${bottomNavigationActionClasses.selected}`]: {
            svg: {
              color: theme.palette.primary.main,
            },
          },
        }),
        label: ({ theme }) => ({
          fontSize: 10,
          color: theme.palette.text.assistive,
          [`&.${bottomNavigationActionClasses.selected}`]: {
            fontWeight: 600,
            fontSize: 10,
            color: theme.palette.primary.main,
          },
        }),
      },
    },
  },
});
