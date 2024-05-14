import Layout from "src/shared/Layout";
import WorkspaceNav from "src/widgets/WorkspaceNav";

export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
