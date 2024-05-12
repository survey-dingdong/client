import React from "react";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import MSWComponent from "src/mocks/MSWComponent";
import Script from "next/script";
import SnackbarClient from "src/shared/SnackbarClient";
import { Provider } from "./Provider";

//
//
//

export default async function RootLayout(props: any) {
  const { children } = props;

  return (
    <>
      <html lang="en">
        <head>
          <link
            rel="stylesheet"
            as="style"
            crossOrigin="anonymous"
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
          />
        </head>
        <body
          style={{
            margin: 0,
            backgroundColor: "#F8FAFB",
          }}
        >
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>
              <SnackbarClient>
                <Provider>
                  <MSWComponent>{children}</MSWComponent>
                </Provider>
              </SnackbarClient>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </body>
      </html>

      <Script
        src="https://kit.fontawesome.com/3cf6dbe963.js"
        crossOrigin="anonymous"
      ></Script>
      <Script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></Script>
    </>
  );
}
