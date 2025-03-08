"use client";
import React from "react";
import { dingdongTheme } from "@dingdong/design-system";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import Script from "next/script";
import { Provider } from "./Provider";
import { GlobalStyles } from "@mui/material";
import localFont from "next/font/local";

//
//
//

const myFont = localFont({
  src: [
    {
      path: "../static/font/Pretendard-Medium.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../static/font/Pretendard-Regular.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../static/font/Pretendard-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../static/font/Pretendard-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../static/font/Pretendard-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
});

//
//
//

export default function RootLayout(props: any) {
  const { children } = props;

  return (
    <>
      <html lang="en" className={myFont.className}>
        <head>
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
            <ThemeProvider theme={dingdongTheme}>
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
