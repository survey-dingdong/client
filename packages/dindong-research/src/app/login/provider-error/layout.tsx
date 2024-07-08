"use client";
import React from "react";
import { ThumbnailLayout } from "src/shared";
import { Box, Typography, Link as MuiLink } from "@mui/material";
import Link from "next/link";

export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThumbnailLayout>{children}</ThumbnailLayout>;
}
