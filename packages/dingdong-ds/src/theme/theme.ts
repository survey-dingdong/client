"use client";
import { createTheme, PaletteOptions, Theme, ThemeOptions } from "@mui/material";

import { typography } from "./typography/typography";
import { palette } from "./palette/palette";
import { components } from "./components/components";


export const dingdongTheme = createTheme({
  palette,
  typography,
  components,
});
