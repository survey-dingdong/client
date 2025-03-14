import { Box, Typography } from "@mui/material";
import React from "react";
import { HEADER_HEIGHT } from "./_constants/header";

//
//
//

interface DefaultHeaderProps {
  title?: string;
  leftAction?: React.ReactNode;
  rightAction?: React.ReactNode;
}

const DefaultHeader: React.FC<DefaultHeaderProps> = ({
  title,
  leftAction,
  rightAction,
}) => {
  //
  //
  //

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: HEADER_HEIGHT,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        bgcolor: (theme) => theme.palette.background.paper,
        paddingX: 2,
        borderBottom: "1px solid",
        borderColor: "line.normal",
      }}
    >
      {/* left action */}
      {leftAction}

      {/* title */}
      <Typography variant="heading2" color="label.strong" sx={{ flexGrow: 1 }}>
        {title}
      </Typography>

      {/* action */}
      <Box display="flex" gap={3}>
        {rightAction}
      </Box>
    </Box>
  );
};

export default DefaultHeader;
