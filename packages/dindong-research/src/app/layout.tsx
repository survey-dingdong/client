import React from "react";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";

/**
 * Initialize MSW (Mock Service Worker) for API mocking in development and client-side only.
 */
async function initMSW() {
  if (
    process.env.NEXT_PUBLIC_API_MOCKING === "enabled" &&
    typeof window !== "undefined"
  ) {
    const { worker } = await import("../mocks/browser");
    worker.start();
  }
}

//
//
//

export default async function RootLayout(props: any) {
  const { children } = props;

  initMSW();

  return (
    <html lang="en">
      <body style={{ margin: 0, backgroundColor: "#F8FAFB" }}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
