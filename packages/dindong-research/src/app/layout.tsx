import React from "react";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
// import MSWComponent from "src/mocks/MSWComponent";
import Script from "next/script";
import { Provider } from "./Provider";
import { GlobalStyles } from "@mui/material";

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
            property="stylesheet"
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
          />
          <link rel="icon" type="image/png" href="/favicon.ico" />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/android-chrome-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href="/android-chrome-512x512.png"
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
              <GlobalStyles
                styles={{
                  ol: {
                    margin: 0,
                  },
                  ul: {
                    margin: 0,
                  },
                }}
              />
              <Provider>{children}</Provider>
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
