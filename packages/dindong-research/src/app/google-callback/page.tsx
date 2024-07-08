"use client";

import { CircularProgress, Stack } from "@mui/material";
import { handleCallback } from "src/utils/googleLogin";

export default function Page() {
  handleCallback();

  return (
    <Stack
      sx={{
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </Stack>
  );
}
