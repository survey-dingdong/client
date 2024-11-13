import { SimplePaletteColorOptions } from "@mui/material";
import "@mui/material/styles";
import "@mui/system";

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
  interface TypeText {
    tertiary: string;
    assistive: string;
  }

  interface PaletteOptions {
    tertiary: SimplePaletteColorOptions;
    label: LabelType;
    text?: Partial<TypeText>;
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
  }
}
