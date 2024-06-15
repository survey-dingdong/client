"use client";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import { REFRESH_TOKEN_KEY, TOKEN_KEY } from "src/constants/token";

import "dayjs/locale/ko";
import { token } from "src/utils/token";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { SnackbarClient } from "src/shared";

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
  const router = useRouter();
  const pathname = usePathname();
  const accessToken = token.get("token");

  useEffect(() => {
    if (!accessToken && !pathname?.includes("/signup")) {
      router.replace("/");
    }
  }, [accessToken, pathname, router]);

  return (
    <SnackbarClient>
      <QueryClientProvider client={queryClient}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
          {children}
        </LocalizationProvider>
      </QueryClientProvider>
    </SnackbarClient>
  );
};
