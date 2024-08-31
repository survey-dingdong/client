"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { ThumbnailLayout } from "src/shared";
import ErrorSection from "src/widgets/ErrorSection";

export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <React.Suspense fallback={<ErrorSection reset={() => router.refresh()} />}>
      <ThumbnailLayout>{children}</ThumbnailLayout>
    </React.Suspense>
  );
}
