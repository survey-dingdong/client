"use client";
import { Stack } from "@mui/material";
import React from "react";
import ErrorSection from "src/widgets/ErrorSection";

//
//
//

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Stack
      height="100vh"
      width="100vw"
      justifyContent="center"
      alignItems="center"
    >
      <ErrorSection reset={reset} />
    </Stack>
  );
}
