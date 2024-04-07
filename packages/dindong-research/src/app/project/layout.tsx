"use client";
import { Box, Container, Stack } from "@mui/material";
import { usePathname } from "next/navigation";
import Header, { headerHeight } from "src/shared/Header";
import Nav from "src/shared/Nav";
import { ProjectBottomNav } from "src/widgets/ProjectBottomNav";
import { bottomNavHeight } from "src/widgets/ProjectBottomNav/ProjectBottomNav";

const needNavBottom = ["/information"];

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isNeedNavBottom = needNavBottom.some((path) => pathname.includes(path));

  return (
    <Stack sx={{ pt: 8 }}>
      <Header />

      <Box display="flex">
        <Nav />
        <Stack width="100%" sx={{ position: "relative", pb: bottomNavHeight }}>
          <Container maxWidth="lg" sx={{ py: 7 }}>
            {children}
          </Container>
          {isNeedNavBottom ? <ProjectBottomNav /> : null}
        </Stack>
      </Box>
    </Stack>
  );
}
