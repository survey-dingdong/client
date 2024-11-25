import { Box, IconButton, Typography } from "@mui/material";
import { Icon } from "dingdong-ds";
import React from "react";

const Header: React.FC = () => {
  //
  //
  //

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        bgcolor: (theme) => theme.palette.background.paper,
        padding: 2,
        // borderBottom: (theme) => `1px solid ${theme.palette.semantic.static}`,
        borderBottom: "1px solid",
        borderColor: "line.normal",
      }}
    >
      {/* title */}
      <Typography variant="heading2" color="label.strong">
        실험 공고
      </Typography>

      {/* action */}
      <Box display="flex" gap={3}>
        <IconButton
          size="small"
          sx={{ color: (theme) => theme.palette.label.normal }}
        >
          {/* TODO: add icon color - label.normal */}
          <Icon icon="search" size="small" />
        </IconButton>
        <IconButton
          size="small"
          sx={{ color: (theme) => theme.palette.label.normal }}
        >
          <Icon icon="tune" size="small" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;
