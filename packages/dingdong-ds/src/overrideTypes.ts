import "@mui/material/styles";
import {
  ComponentsVariants,
  ComponentsOverrides,
  Theme,
} from "@mui/material/styles";
import "@mui/system";
import { TagProps } from "./components";

declare module "@mui/material/Typography" {
  interface TypographyPropsColorOverrides {
    color: true;
    variant: true;
  }
}

declare global {
  export interface LabelType {
    normal: string;
    strong: string;
    neutral: string;
    alternative: string;
    tertiary: string;
    tertiaryDisabled: string;
    assistive: string;
    disabled: string;
  }

  export interface TypeLine {
    normal: string;
    neutral: string;
    alternative: string;
  }

  export interface TypeStatic {
    white: string;
    tertiary: string;
    black: string;
  }

  export interface TertiaryType {
    main: string;
    light: string;
  }
}

//
declare module "@mui/material/styles" {
  export interface TypeText {
    tertiary: string;
    assistive: string;
  }

  export interface Palette {
    label: LabelType;
    text: TypeText;
    tertiary: TertiaryType;
    line?: TypeLine;
    static?: TypeStatic;
    status?: StatusType;
  }

  export interface PaletteOptions {
    label?: LabelType;
    text?: Partial<TypeText>;
    tertiary?: TertiaryType;
    line?: TypeLine;
    static?: TypeStatic;
    status?: StatusType;
  }

  export interface TypeBackground {
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

  export interface StatusType {
    primary: string;
    info: string;
    success: string;
    warning: string;
    error: string;
    inherit: string;
  }

  export interface ComponentNameToClassKey {
    MuiTag: "root" | "value" | "unit";
  }

  export interface ComponentsPropsList {
    MuiTag: Partial<TagProps>;
  }

  export interface Components {
    MuiTag?: {
      defaultProps?: ComponentsPropsList["MuiTag"];
      styleOverrides?: ComponentsOverrides<Theme>["MuiTag"];
      variants?: ComponentsVariants["MuiTag"];
    };
  }
}

// ========== Typography ==========

declare module "@mui/material/styles" {
  // allow configuration using `createTheme()`
  interface TypographyVariants {
    headline1: React.CSSProperties;
    headline2: React.CSSProperties;
    caption2: React.CSSProperties;
    label2: React.CSSProperties;
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
    // body
    body1Normal: React.CSSProperties;
    body1Reading: React.CSSProperties;
    body2Normal: React.CSSProperties;
    body2Reading: React.CSSProperties;
    // label
    label1Normal: React.CSSProperties;
    label1Reading: React.CSSProperties;
    // caption
    caption1: React.CSSProperties;
  }

  // allow configuration using `createTheme()`
  interface TypographyVariantsOptions {
    headline1?: React.CSSProperties;
    headline2?: React.CSSProperties;
    caption2?: React.CSSProperties;
    label2?: React.CSSProperties;
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
    // body
    body1Normal: React.CSSProperties;
    body1Reading: React.CSSProperties;
    body2Normal: React.CSSProperties;
    body2Reading: React.CSSProperties;
    // label
    label1Normal: React.CSSProperties;
    label1Reading: React.CSSProperties;
    // caption
    caption1: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    // 기본 variants 비활성화
    h1: false;
    h2: false;
    h3: false;
    h4: false;
    h5: false;
    h6: false;
    subtitle1: false;
    subtitle2: false;
    body1: false;
    body2: false;
    caption: false;
    button: false;
    overline: false;

    // 커스텀 variants 활성화
    display1: true;
    display2: true;
    title1: true;
    title2: true;
    title3: true;
    heading1: true;
    heading2: true;
    headline1: true;
    headline2: true;
    body1Normal: true;
    body1Reading: true;
    body2Normal: true;
    body2Reading: true;
    label1Normal: true;
    label1Reading: true;
    label2: true;
    caption1: true;
    caption2: true;
  }
}

declare module "@mui/material/Checkbox" {
  interface CheckboxProps {
    variant?: "round" | "square" | "line";
  }

  interface CheckboxPropsSizeOverrides {
    small: true;
    normal: true;
    medium: false;
    large: false;
  }
}
