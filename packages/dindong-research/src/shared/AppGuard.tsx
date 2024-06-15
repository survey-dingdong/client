"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { token } from "src/utils/token";

interface AppGuardProps {
  children: React.ReactNode;
}

const noTokenPath = ["/", "/signup"];

export const AppGuard: React.FC<AppGuardProps> = ({ children }) => {
  const accessToken = token.get("token");

  const pathname = usePathname();
  const noToken = !accessToken && !noTokenPath.includes(pathname ?? "");

  if (noToken && typeof window !== "undefined") {
    window.location.href = "/";
  }

  if (noToken) {
    return null;
  }

  return <>{children}</>;
};
