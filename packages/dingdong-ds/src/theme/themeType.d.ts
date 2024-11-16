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

  interface TypographyVariants {
    // display
    display1: React.CSSProperties;
    display2: React.CSSProperties;
    // title
    title1: React.CSSProperties;
    title2: React.CSSProperties;
    title3: React.CSSProperties;
    // heading
    heading1: React.CSSProperties;
    heading2: React.CSSProperties;
    // headline
    headline1: React.CSSProperties;
    headline2: React.CSSProperties;
    // body
    body1: {
      normal: React.CSSProperties;
      reading: React.CSSProperties;
    };
    body2: {
      normal: React.CSSProperties;
      reading: React.CSSProperties;
    };
    // label
    label: {
      normal: React.CSSProperties;
      reading: React.CSSProperties;
    };
    label2: React.CSSProperties;
    // caption
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
  }

  // allow configuration using `createTheme()`
  interface TypographyVariantsOptions {
    // display
    display1: React.CSSProperties;
    display2: React.CSSProperties;
    // title
    title1: React.CSSProperties;
    title2: React.CSSProperties;
    title3: React.CSSProperties;
    // heading
    heading1: React.CSSProperties;
    heading2: React.CSSProperties;
    // headline
    headline1: React.CSSProperties;
    headline2: React.CSSProperties;
    // body
    body1: {
      normal: React.CSSProperties;
      reading: React.CSSProperties;
    };
    body2: {
      normal: React.CSSProperties;
      reading: React.CSSProperties;
    };
    // label
    label: {
      normal: React.CSSProperties;
      reading: React.CSSProperties;
    };
    label2: React.CSSProperties;
    // caption
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    display1: true;
    display2: true;
    title1: true;
    title2: true;
    title3: true;
    heading1: true;
    heading2: true;
    headline1: true;
    headline2: true;
    body1: true;
    body2: true;
    label: true;
    label2: true;
    caption1: true;
    caption2: true;
  }
}
