import { Stack } from "@mui/material";
import React from "react";
import BottomNav from "./BottomNav";
import Header from "./Header";
import { Outlet } from "react-router";
import { BOTTOM_NAV_HEIGHT } from "./_constants/bottomNav";

const Layout: React.FC = () => {
  return (
    <Stack width="100vw" height="100vh">
      <Header />
      <Stack
        // TODO: change to background.normal
        sx={{ bgcolor: (theme) => theme.palette.background.default }}
        flexGrow={1}
        paddingBottom={`${BOTTOM_NAV_HEIGHT + 16}px`}
        overflow="auto"
      >
        <Outlet />
      </Stack>
      <BottomNav />
    </Stack>
  );
};

export default Layout;
