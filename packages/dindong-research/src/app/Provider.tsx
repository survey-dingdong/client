"use client";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { RefreshTokenResponse } from "generated-client";
import { REFRESH_TOKEN_KEY, TOKEN_KEY } from "src/constants/token";
import { getObject, snakeToCamel } from "src/utils/snakeToCamel";
import { SWRConfig } from "swr";

interface ProviderProps {
  children: React.ReactNode;
}
const queryClient = new QueryClient();

const baseURL = "http://13.209.133.71:8000";

axios.defaults.baseURL = baseURL;
axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${sessionStorage.getItem("token")}`;

axios.interceptors.response.use(
  (response) => {
    response.data = getObject(response);
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      axios
        .post("/auth/refresh", {
          token: sessionStorage.getItem(REFRESH_TOKEN_KEY),
          refreshToken: sessionStorage.getItem(TOKEN_KEY),
        })
        .then((res) => {
          sessionStorage.setItem(TOKEN_KEY, res.data.token);
          sessionStorage.setItem(REFRESH_TOKEN_KEY, res.data.refreshToken);

          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${res.data.token}`;
        });
    }
    return Promise.reject(error);
  }
);

//
//
//

export const Provider = ({ children }: ProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {children}
      </LocalizationProvider>
    </QueryClientProvider>
  );
};
