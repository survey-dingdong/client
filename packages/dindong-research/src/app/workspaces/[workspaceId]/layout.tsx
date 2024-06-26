"use client";
import { usePathname } from "next/navigation";
import { Layout } from "src/shared";
import { ProjectNav, WorkspaceNav } from "src/widgets";

export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();

  const isProjectPage = path?.includes("project");

  return (
    <Layout NavComponent={isProjectPage ? <ProjectNav /> : <WorkspaceNav />}>
      {children}
    </Layout>
  );
}
