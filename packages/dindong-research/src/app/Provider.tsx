"use client";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "dayjs/locale/ko";
import { AppGuard, SnackbarClient } from "src/shared";

//
//
//

export const BASE_PATH = "https://survey-dingdong.site";

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
      <SnackbarClient>
        <QueryClientProvider client={queryClient}>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
            {children}
          </LocalizationProvider>
        </QueryClientProvider>
      </SnackbarClient>
    </AppGuard>
  );
};
