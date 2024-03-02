import Layout from "src/shared/Layout/Layout";

export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
