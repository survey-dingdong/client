"use client";

import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Popover,
  Toolbar,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { useWorkspaces } from "src/hooks/useWorkspaces";
import { ProfileCard } from "src/widgets";

//
//
//

export const headerHeight = 64;

//
//
//

const Header: NextPage = () => {
  const theme = useTheme();
  const [menuAnchorEl, setMenuAnchorEl] = React.useState<null | HTMLElement>(
    null
  );

  const { workspaces } = useWorkspaces();

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const renderMenu = () => {
    return (
      <Popover
        open={Boolean(menuAnchorEl)}
        anchorEl={menuAnchorEl}
        elevation={0}
        slotProps={{
          paper: {
            sx: {
              top: "57px !important",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              p: 2,
              width: 286,
              borderRadius: 4,
              border: (theme) => `1px solid ${theme.palette.divider}`,
            },
          },
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        onClose={handleMenuClose}
      >
        <ProfileCard />
        {/* actions */}
        <Box display="flex" gap={1}>
          <Button
            color="inherit"
            fullWidth
            LinkComponent={Link}
            href="/my"
            onClick={handleMenuClose}
          >
            마이페이지
          </Button>
          <Button
            color="inherit"
            fullWidth
            LinkComponent={Link}
            href="/"
            onClick={handleMenuClose}
          >
            로그아웃
          </Button>
        </Box>
      </Popover>
    );
  };

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
            component={Link}
            href={workspaces ? `/workspaces/${workspaces[0]?.id}` : "/"}
          >
            LOGO
          </Typography>
        </Box>

        <Tooltip title="Open settings">
          <IconButton
            sx={{ p: 0 }}
            onClick={(e) => setMenuAnchorEl(e.currentTarget)}
          >
            <Avatar alt="" />
          </IconButton>
        </Tooltip>
      </Toolbar>
      {renderMenu()}
    </AppBar>
  );
};

export default Header;
