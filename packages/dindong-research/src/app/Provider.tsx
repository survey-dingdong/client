"use client";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import { REFRESH_TOKEN_KEY, TOKEN_KEY } from "src/constants/token";
import { camelToSnake, getObject } from "src/utils/snakeToCamel";
import "dayjs/locale/ko";
import { token } from "src/utils/token";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { SnackbarClient } from "src/shared";

//
//
//

interface ProviderProps {
  children: React.ReactNode;
}
const queryClient = new QueryClient();

const baseURL = "http://13.209.133.71:8000";

axios.defaults.baseURL = baseURL;
axios.defaults.headers.common["Authorization"] = `Bearer ${token.get("token")}`;

axios.interceptors.request.use((request) => {
  request.params = camelToSnake(request.params);
  request.data = camelToSnake(request.data);
  return request;
});

axios.interceptors.response.use(
  (response) => {
    response.data = getObject(response, "response");

    return response;
  },
  (error: any) => {
    const _token = token.get(TOKEN_KEY);
    const _refreshToken = token.get(REFRESH_TOKEN_KEY);

    if (error.response?.status === 401 && _token && _refreshToken) {
      axios
        .post("/auth/refresh", {
          token: _token,
          refreshToken: _refreshToken,
        })
        .then((res) => {
          token.set(TOKEN_KEY, res.data.token);
          token.set(REFRESH_TOKEN_KEY, res.data.refreshToken);

          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${res.data.token}`;

          return axios.request(error.config);
        })
        .catch(() => {
          token.remove(TOKEN_KEY);
          token.remove(REFRESH_TOKEN_KEY);
          window.location.href = "/";
        });
    }

    return Promise.reject(error);
  }
);

//
//
//

export const Provider = ({ children }: ProviderProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const accessToken = token.get("token");

  useEffect(() => {
    if (!accessToken && !pathname.includes("/signup")) {
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
