import React from "react";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import MSWComponent from "src/mocks/MSWComponent";
import { SWRConfig } from "swr";

//
//
//

export default async function RootLayout(props: any) {
  const { children } = props;

  return (
    <html lang="en">
      <body style={{ margin: 0, backgroundColor: "#F8FAFB" }}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <MSWComponent>{children}</MSWComponent>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
