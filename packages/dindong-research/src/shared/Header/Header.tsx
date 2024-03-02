"use client";

import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { NextPage } from "next";
import React from "react";

//
//
//

export const headerHeight = 64;

//
//
//

const Header: NextPage = () => {
  const theme = useTheme();

  //
  //
  //

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: (theme) => theme.palette.background.paper,
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
      }}
      elevation={0}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: "flex", gap: 1 }}>
          {/* TODO: changed logo image */}
          <Typography
            variant="h5"
            color={theme.palette.primary.main}
            fontWeight={800}
          >
            LOGO
          </Typography>
        </Box>

        <Tooltip title="Open settings">
          <IconButton sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
