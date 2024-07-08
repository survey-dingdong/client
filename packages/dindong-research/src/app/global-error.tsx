"use client";

import { Box } from "@mui/material";
import ErrorSection from "src/widgets/ErrorSection";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <Box width="100vw" height="100vh">
          <ErrorSection reset={reset} />
        </Box>
      </body>
    </html>
  );
}
