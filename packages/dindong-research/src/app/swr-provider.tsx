"use client";
import { SWRConfig } from "swr";

interface SWRProviderProps {
  children: React.ReactNode;
}

const baseURL = "https://api.example.com";

const fetcher = async (url: string) => {
  const res = await fetch(baseURL + url); // baseURL을 요청 URL에 추가
  return res.json();
};

export const SWRProvider = ({ children }: SWRProviderProps) => {
  return <SWRConfig value={{ fetcher }}>{children}</SWRConfig>;
};
