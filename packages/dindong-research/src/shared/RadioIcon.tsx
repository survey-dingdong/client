import { Box, colors } from "@mui/material";

const commonStyle = {
  width: 16,
  height: 16,
  borderRadius: "50%",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const RadioCheckedIcon = (
  <Box
    sx={{
      ...commonStyle,
      backgroundColor: (theme) => theme.palette.primary.main,
      "::before": {
        content: '""',
        width: "6px",
        height: "6px",
        backgroundColor: "white",
        borderRadius: "50%",
        position: "absolute",
      },
    }}
  />
);

export const RadioIcon = (
  <Box
    sx={{
      ...commonStyle,
      backgroundColor: "#8D97A5",
      "::before": {
        content: '""',
        width: "12px",
        height: "12px",
        backgroundColor: "white",
        borderRadius: "50%",
        position: "absolute",
      },
    }}
  />
);
