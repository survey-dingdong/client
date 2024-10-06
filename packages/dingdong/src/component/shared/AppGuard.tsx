"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { token } from "../../util/token";

interface AppGuardProps {
  children: React.ReactNode;
}

const NO_TOKEN_PATHNAME_LIST = [
  "/",
  "/signup/agreement",
  "/signup/form",
  "/password",
  "/terms",
  "/google-callback",
  "/login/provider-error",
];

export const AppGuard: React.FC<AppGuardProps> = ({ children }) => {
  const accessToken = token.get("token");

  const pathname = usePathname();

  const guestPage = NO_TOKEN_PATHNAME_LIST.includes(pathname ?? "");

  // TODO: Implement this
  // if (!guestPage && !accessToken && typeof window !== "undefined") {
  //   window.location.href = "/";
  //   return null;
  // }

  return <>{children}</>;
};
