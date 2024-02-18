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
} from "@mui/material";
import { NextPage } from "next";
import React from "react";
import { drawerWidth } from "../Nav/Nav";

//
//
//

const pages = ["설문", "실험"];

const SubNav: NextPage = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
        backgroundColor: (theme) => theme.palette.background.paper,
      }}
      elevation={0}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: "flex", gap: 1 }}>
          {pages.map((page) => (
            <Button key={page} variant="text" sx={{ my: 2, display: "block" }}>
              {page}
            </Button>
          ))}
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

export default SubNav;
