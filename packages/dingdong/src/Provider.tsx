"use client";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "dayjs/locale/ko";
import { AppGuard, SnackbarClient } from "./component/shared";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./constant/theme";
import { Stack } from "./js/stackflow";
// TODO: Import AppGuard and SnackbarClient from the shared package

//
//
//

interface ProviderProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

//
//
//

export const Provider = ({ children }: ProviderProps) => {
  return (
    <AppGuard>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarClient>
          <QueryClientProvider client={queryClient}>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
              <Stack />
              {children}
            </LocalizationProvider>
          </QueryClientProvider>
        </SnackbarClient>
      </ThemeProvider>
    </AppGuard>
  );
};
