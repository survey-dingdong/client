import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import Nav, { drawerWidth } from "@/shared/Nav/Nav";
import { Box } from "@mui/material";
import SubNav from "@/shared/SubNav/SubNav";

export default function RootLayout(props: any) {
  const { children } = props;
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <Box>
              <Nav />
              <SubNav />
              <main style={{ marginLeft: drawerWidth }}>{children}</main>
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
