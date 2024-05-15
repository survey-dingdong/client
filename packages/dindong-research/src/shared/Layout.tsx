"use client";
import { Box, Container } from "@mui/material";
import React from "react";
import Header, { headerHeight } from "./Header";
import WorkspaceNav from "src/widgets/WorkspaceNav";

interface LayoutProps {
  children: React.ReactNode;
  NavComponent?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, NavComponent }) => {
  return (
    <Box display="flex">
      <Header />
      <Box flexGrow={1}>
        <main
          style={{
            display: "flex",
            height: `calc(100vh - ${headerHeight}px)`,
            marginTop: headerHeight,
          }}
        >
          {NavComponent ? NavComponent : null}

          <Container maxWidth="lg" sx={{ py: 7 }}>
            {children}
          </Container>
        </main>
      </Box>
    </Box>
  );
};

export default Layout;
