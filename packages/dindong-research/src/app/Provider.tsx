"use client";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import { REFRESH_TOKEN_KEY, TOKEN_KEY } from "src/constants/token";
import { camelToSnake, getObject } from "src/utils/snakeToCamel";
import "dayjs/locale/ko";
interface ProviderProps {
  children: React.ReactNode;
}
const queryClient = new QueryClient();

const baseURL = "http://13.209.133.71:8000";

axios.defaults.baseURL = baseURL;
axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${sessionStorage.getItem("token")}`;

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
    if (error.response?.status === 401) {
      axios
        .post("/auth/refresh", {
          token: sessionStorage.getItem(TOKEN_KEY),
          refreshToken: sessionStorage.getItem(REFRESH_TOKEN_KEY),
        })
        .then((res) => {
          sessionStorage.setItem(TOKEN_KEY, res.data.token);
          sessionStorage.setItem(REFRESH_TOKEN_KEY, res.data.refreshToken);

          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${res.data.token}`;

          return axios.request(error.config);
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
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
        {children}
      </LocalizationProvider>
    </QueryClientProvider>
  );
};
