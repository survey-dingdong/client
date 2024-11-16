"use client";
import { createTheme, Theme } from "@mui/material";

import { typography } from "./typography/typography";
import { palette } from "./palette/palette";
import { components } from "./components/components";

export const dingdongTheme: Theme = createTheme({
  palette,
  typography,
  components,
});
