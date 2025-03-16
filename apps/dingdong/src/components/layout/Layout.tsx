import { Stack } from "@mui/material";
import React from "react";
import BottomNav from "./BottomNav";

import { Outlet } from "react-router-dom";

interface LayoutProps {
  header?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = () => {
  return (
    <Stack width="100vw" height="100vh">
      <Stack
        // TODO: change to background.normal
        sx={{ bgcolor: (theme) => theme.palette.background.default }}
        flexGrow={1}
        overflow="auto"
      >
        <Outlet />
      </Stack>
      <BottomNav />
    </Stack>
  );
};

export default Layout;
