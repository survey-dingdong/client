"use client";
import { Box, Stack } from "@mui/material";
import Header, { headerHeight } from "src/shared/Header";
import Nav from "src/shared/Nav";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Stack sx={{ pt: 8 }}>
      <Header />

      <Box display="flex" height={`calc(100vh - ${headerHeight}px)`}>
        <Nav />
        {children}
      </Box>
    </Stack>
  );
}
