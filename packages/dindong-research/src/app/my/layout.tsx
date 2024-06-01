import { Layout } from "src/shared";
import { MyNav } from "src/widgets";

export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout NavComponent={<MyNav />}>{children}</Layout>;
}
