"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { token } from "src/utils/token";

interface AppGuardProps {
  children: React.ReactNode;
}

const NO_TOKEN_PATHNAME_REGEX = /^\/$|^\/signup\/.*$|^\/password(?:\/.*)?$/;

export const AppGuard: React.FC<AppGuardProps> = ({ children }) => {
  const accessToken = token.get("token");
  const pathname = usePathname();
  const guestPage =
    !accessToken && !NO_TOKEN_PATHNAME_REGEX.test(pathname ?? "");

  if (guestPage && typeof window !== "undefined") {
    window.location.href = "/";
  }

  if (guestPage) {
    return <></>;
  }

  return <>{children}</>;
};
