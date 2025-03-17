import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { HEADER_HEIGHT } from "./_constants/header";

//
//
//

interface DefaultHeaderProps {
  title?: string;
  leftAction?: React.ReactNode;
  rightAction?: React.ReactNode;
  bottom?: React.ReactNode;
}

const DefaultHeader: React.FC<DefaultHeaderProps> = ({
  title,
  leftAction,
  rightAction,
  bottom,
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
        bgcolor: (theme) => theme.palette.background.paper,
        borderBottom: "1px solid",
        borderColor: "line.normal",
      }}
    >
      <Stack>
        <Stack
          flexDirection="row"
          padding={2}
          gap={3}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* left action */}
          {leftAction}

          {/* title */}
          <Typography
            variant="heading2"
            color="label.strong"
            sx={{ flexGrow: 1 }}
          >
            {title}
          </Typography>

          {/* action */}
          <Box display="flex" gap={3}>
            {rightAction}
          </Box>
        </Stack>

        {/* bottom */}
        {bottom}
      </Stack>
    </Box>
  );
};

export default DefaultHeader;
