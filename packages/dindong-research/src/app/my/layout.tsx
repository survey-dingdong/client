import { Layout } from "src/shared";
import { ContentContainer, MyNav } from "src/widgets";

export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout NavComponent={<MyNav />}>
      <ContentContainer sx={{ py: 7 }}>{children}</ContentContainer>
    </Layout>
  );
}
