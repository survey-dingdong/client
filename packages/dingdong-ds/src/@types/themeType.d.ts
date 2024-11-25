import "@mui/material/styles";
import "@mui/system";
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
    tertiary: TertiaryType;
    label: LabelType;
    text?: Partial<TypeText>;
    line?: TypeLine;
    static?: TypeStatic;
    status?: StatusType;
  }

  export interface PaletteOptions {
    tertiary: TertiaryType;
    label: LabelType;
    text?: Partial<TypeText>;
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
    MuiTag: Partial<StatProps>;
  }

  export interface Components {
    MuiTag?: {
      defaultProps?: ComponentsPropsList["MuiTag"];
      styleOverrides?: ComponentsOverrides<Theme>["MuiTag"];
      variants?: ComponentsVariants["MuiTag"];
    };
  }

  // typography
  export interface TypographyVariants {
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
    body1Normal: React.CSSProperties;
    body1Reading: React.CSSProperties;
    body2Normal: React.CSSProperties;
    body2Reading: React.CSSProperties;
    // label
    label1Normal: React.CSSProperties;
    label1Reading: React.CSSProperties;
    label2: React.CSSProperties;
    // caption
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
  }

  // allow configuration using `createTheme()`
  export interface TypographyVariantsOptions {
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
    body1Normal: React.CSSProperties;
    body1Reading: React.CSSProperties;
    body2Normal: React.CSSProperties;
    body2Reading: React.CSSProperties;
    // label
    label1Normal: React.CSSProperties;
    label1Reading: React.CSSProperties;
    label2: React.CSSProperties;
    // caption
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  export interface TypographyPropsVariantOverrides {
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
    //
    h1: undefined;
    h2: undefined;
    h3: undefined;
    h4: undefined;
    h5: undefined;
    h6: undefined;
    subtitle1: undefined;
    subtitle2: undefined;
  }
}

declare module "@mui/material/Checkbox" {
  export interface CheckboxProps {
    variant?: "round" | "square" | "line";
  }

  export interface CheckboxPropsSizeOverrides {
    small: true;
    normal: true;
    medium: false;
    large: false;
  }
}
