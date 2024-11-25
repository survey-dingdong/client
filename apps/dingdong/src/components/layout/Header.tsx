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
        borderColor: "semantic.static",
      }}
    >
      {/* title */}
      <Typography variant="heading2">실험 공고</Typography>

      {/* action */}
      <Box display="flex" gap={3}>
        <IconButton size="small">
          {/* TODO: add icon color */}
          <Icon icon="search" sx={{ color: "labelNormal" }} />
        </IconButton>
        <IconButton size="small">
          <Icon icon="tune" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;
