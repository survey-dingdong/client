"use client";
import { Box } from "@mui/material";
import React from "react";
import Nav, { drawerWidth } from "../Nav/Nav";
import SubNav, { subNavHeight } from "../SubNav/SubNav";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box display="flex">
      <Nav />
      <Box flexGrow={1}>
        <SubNav />
        <main
          style={{
            display: "flex",
            height: `calc(100vh - ${subNavHeight}px)`,
            marginTop: subNavHeight,
          }}
        >
          <Box padding={7} width="100%">
            {children}
          </Box>
        </main>
      </Box>
    </Box>
  );
};

export default Layout;
