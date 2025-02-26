"use client";
import { createTheme, PaletteOptions, Theme, ThemeOptions } from "@mui/material";

import { typography } from "./typography/typography";
import { palette } from "./palette/palette";
import { components } from "./components/components";

export type DingdongThemeOptions = ThemeOptions | {
  palette: typeof palette;
  typography: typeof typography;
  components: typeof components;
};

export const dingdongTheme:DingdongThemeOptions = createTheme({
  palette,
  typography,
  components,
});
