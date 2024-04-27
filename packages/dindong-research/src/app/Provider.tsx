"use client";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { SWRConfig } from "swr";

interface ProviderProps {
  children: React.ReactNode;
}

const baseURL = "https://api.example.com";

const fetcher = async (url: string) => {
  const res = await fetch(baseURL + url); // baseURL을 요청 URL에 추가
  return res.json();
};

export const Provider = ({ children }: ProviderProps) => {
  return (
    // <SWRConfig value={{ fetcher }}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {children}
    </LocalizationProvider>
    // </SWRConfig>
  );
};
