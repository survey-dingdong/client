"use client";
import { Box, Container } from "@mui/material";
import React from "react";
import Header, { headerHeight } from "./Header";
import { usePathname } from "next/navigation";

interface LayoutProps {
  children: React.ReactNode;
  NavComponent?: React.ReactNode;
}

const noPaddingPath = ["/chat"];

export const Layout: React.FC<LayoutProps> = ({ children, NavComponent }) => {
  const pathname = usePathname();
  const isNoPadding = noPaddingPath.some((path) => pathname.includes(path));

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
          {children}
          {/* {isNoPadding ? (
            children
          ) : (
            <Container maxWidth="lg" sx={{ py: 7 }}>
            </Container>
          )} */}
        </main>
      </Box>
    </Box>
  );
};
