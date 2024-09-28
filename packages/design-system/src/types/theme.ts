import { PaletteColor, SimplePaletteColorOptions } from "@mui/material";

interface LabelType {
  normal: string;
  strong: string;
  neutral: string;
  alternative: string;
  tertiary: string;
  tertiaryDisabled: string;
  assistive: string;
  disabled: string;
}

declare module "@mui/material/styles" {
  interface Palette extends Omit<PaletteColor, "background"> {
    tertiary: SimplePaletteColorOptions;
    label: LabelType;
  }

  interface TypeBackground {
    normal: string;
    alternative: string;
    primary: string;
    success: string;
    info: string;
    warning: string;
    error: string;
    inherit: string;
    snackbar: string;
    action: {
      disabled: {};
    };
  }

  interface PaletteOptions {
    tertiary: SimplePaletteColorOptions;
    label: LabelType;
  }

  interface TypeText {
    tertiary: string;
    assistive: string;
  }
}
