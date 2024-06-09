import { Container } from "@mui/material";
import { Layout } from "src/shared";
import { MyNav } from "src/widgets";

export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout NavComponent={<MyNav />}>
      <Container maxWidth="lg" sx={{ py: 7 }}>
        {children}
      </Container>
    </Layout>
  );
}
