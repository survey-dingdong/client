"use client";
import { createTheme } from "@mui/material/styles";
import { colors } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.blueGrey[900],
    },
    secondary: {
      main: colors.blueGrey[50],
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
        disableElevation: true,
      },
      styleOverrides: {
        text: {
          fontWeight: "bold",
        },
      },
    },
  },
});

export default theme;
