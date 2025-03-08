import { createTheme, PaletteMode, Theme } from "@mui/material";
import { components } from "./components/components";
import { typography } from "./typography/typography";
import { palette } from "./palette/palette";

export interface CreateDingdongThemeProps {
  paletteMode?: PaletteMode;
}

export type CreateDingdongTheme = (props?: CreateDingdongThemeProps) => Theme;

export const createDingdongTheme: CreateDingdongTheme = (props = {}) => {
  const { paletteMode = "light" } = props;

  return createTheme({
    typography,
    components,
    palette: {
      ...palette,
      mode: paletteMode,
    },
  });
};

export const dingdongTheme = createDingdongTheme();
