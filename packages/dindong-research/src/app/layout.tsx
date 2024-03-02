import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import React from "react";
import { worker } from "../mocks/browser";
import { MSWComponent } from "./_component/MSWComponent";

export default function RootLayout(props: any) {
  const { children } = props;

  React.useEffect(() => {
    // Start the mocking when the application starts.
    worker.start();
    // Clean up once the component is unmounted.
    return () => {
      worker.stop();
    };
  }, []);

  return (
    <html lang="en">
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <ThemeProvider theme={theme}>
          <MSWComponent />
          <body style={{ margin: 0, backgroundColor: "#F8FAFB" }}>
            {children}
          </body>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </html>
  );
}
