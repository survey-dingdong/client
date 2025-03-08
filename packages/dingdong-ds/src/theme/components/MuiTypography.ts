import { Components } from "@mui/material/styles/components";

export const TYPOGRAPHY_FONT_FAMILY_NAMES = Object.freeze([
  "Pretendard Variable",
  "Pretendard",
  "-apple-system",
  "BlinkMacSystemFont",
  "system-ui",
  "Roboto",
  "Helvetica Neue",
  "Segoe UI",
  "Apple SD Gothic Neo",
  "Noto Sans KR",
  "Malgun Gothic",
  "Apple Color Emoji",
  "Segoe UI Emoji",
  "Segoe UI Symbol",
  "sans-serif",
]);

export const MuiTypography: Components["MuiTypography"] = {
  defaultProps: {
    color: "text.primary",
    fontWeight: "medium",
    fontFamily: TYPOGRAPHY_FONT_FAMILY_NAMES.join(","),
    variantMapping: {
      heading1: "h1",
      heading2: "h2",
      title1: "h3",
      title2: "h4",
      title3: "h5",
      headline1: "p",
      headline2: "p",
      display1: "p",
      display2: "p",
      body1Normal: "p",
      body1Reading: "p",
      body2Normal: "p",
      body2Reading: "p",
      label1Normal: "p",
      label1Reading: "p",
      label2: "p",
      caption1: "p",
      caption2: "p",
    },
  },
  // TODO: change to mapping
  variants: [
    { props: { color: "text.tertiary" }, style: { color: "#8E97A8" } },
    {
      props: { variant: "headline1", fontWeight: "bold" },
      style: { fontWeight: 600 },
    },
    {
      props: { variant: "heading2", fontWeight: "bold" },
      style: { fontWeight: 600 },
    },
    {
      props: { variant: "heading2", fontWeight: "bold" },
      style: { fontWeight: 600 },
    },
    {
      props: { variant: "body1Normal", fontWeight: "bold" },
      style: { fontWeight: 400 },
    },
    {
      props: { variant: "body1Reading", fontWeight: "bold" },
      style: { fontWeight: 400 },
    },
    {
      props: { variant: "body2Normal", fontWeight: "bold" },
      style: { fontWeight: 400 },
    },
    {
      props: { variant: "body2Reading", fontWeight: "bold" },
      style: { fontWeight: 400 },
    },
    {
      props: { variant: "label1Normal", fontWeight: "bold" },
      style: { fontWeight: 600 },
    },
    {
      props: { variant: "label1Reading", fontWeight: "bold" },
      style: { fontWeight: 600 },
    },
    {
      props: { variant: "label2", fontWeight: "bold" },
      style: { fontWeight: 400 },
    },
    {
      props: { variant: "caption1", fontWeight: "bold" },
      style: { fontWeight: 400 },
    },
    {
      props: { variant: "caption2", fontWeight: "bold" },
      style: { fontWeight: 400 },
    },
  ],
  styleOverrides: {
    root: ({ ownerState }) => ({
      ...(ownerState.fontWeight === "bold" && { fontWeight: 700 }),
      ...(ownerState.fontWeight === "medium" && { fontWeight: 500 }),
      ...(ownerState.fontWeight === "regular" && { fontWeight: 400 }),
    }),
  },
};
