import { Box, IconButton, Typography } from "@mui/material";
import { Icon } from "dingdong-ds";
import React from "react";

const Header: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        bgcolor: (theme) => theme.palette.background.paper,
      }}
    >
      {/* title */}
      <Typography variant="h2">실험 공고</Typography>

      {/* action */}
      <Box display="flex" gap={3}>
        <IconButton>
          <Icon icon="noteText" />
        </IconButton>
        <IconButton>
          <Icon icon="noteText" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;
