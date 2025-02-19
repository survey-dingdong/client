"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { ThumbnailLayout } from "src/shared";
import { Box, Typography, Link as MuiLink } from "@mui/material";
import Link from "next/link";

const getTitle = (step: string) => {
  switch (step) {
    case "agreement":
      return `회원가입을 위해\n약관에 동의해주세요`;
    case "form":
      return "회원가입";

    default:
      return "";
  }
};

export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  let step = "";

  if (Array.isArray(pathname)) {
    const [, , step] = pathname?.split("/");
  }

  return (
    <ThumbnailLayout title={getTitle(step)}>
      {children}
      <Box flexGrow={1} />
      <Box display="flex" gap={1} alignItems="center">
        <Typography variant="body2">이미 계정이 있으신가요?</Typography>
        <MuiLink component={Link} href="/" color="primary.main" variant="body2">
          로그인
        </MuiLink>
      </Box>
    </ThumbnailLayout>
  );
}
