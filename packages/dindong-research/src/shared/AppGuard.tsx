"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { token } from "src/utils/token";

interface AppGuardProps {
  children: React.ReactNode;
}

const NO_TOKEN_PATHNAME_REGEX = /^\/(signup\/.*)?$/;

export const AppGuard: React.FC<AppGuardProps> = ({ children }) => {
  const accessToken = token.get("token");
  const pathname = usePathname();
  const noToken = !accessToken && !NO_TOKEN_PATHNAME_REGEX.test(pathname ?? "");

  if (noToken && typeof window !== "undefined") {
    // window.location.href = "/";
  }

  // if (noToken) {
  //   return <></>;
  // }

  return <>{children}</>;
};
