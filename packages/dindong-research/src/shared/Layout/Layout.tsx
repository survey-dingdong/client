"use client";
import { Box, Container } from "@mui/material";
import React from "react";
import Nav, { drawerWidth } from "../Nav/Nav";
import Header, { headerHeight } from "../Header/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
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
          {/* <Nav /> */}
          <Container maxWidth="lg" sx={{ py: 7 }}>
            {children}
          </Container>
        </main>
      </Box>
    </Box>
  );
};

export default Layout;
