"use client";
import { useParams, usePathname, useRouter } from "next/navigation";
import React from "react";
import ThumbnailLayout from "src/shared/ThumbnailLayout";
import {} from "next/router";

export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [, , step] = pathname?.split("/");

  const getTitle = () => {
    switch (step) {
      case "agreement":
        return `회원가입을 위해\n약관에 동의해주세요`;
      case "form":
        return "회원가입";

      default:
        return "";
    }
  };

  return <ThumbnailLayout title={getTitle()}>{children}</ThumbnailLayout>;
}
