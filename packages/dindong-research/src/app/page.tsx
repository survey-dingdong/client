import { Box, Typography, Link as MuiLink } from "@mui/material";
import Link from "next/link";
import { ThumbnailLayout } from "src/shared";
import { LoginForm } from "src/widgets";

export default function Home() {
  return (
    <main>
      <ThumbnailLayout title="로그인">
        <LoginForm />
        <Box flexGrow={1} />

        <Box display="flex" gap={1} alignItems="center">
          <Typography variant="body2">아직 계정이 없으신가요?</Typography>
          <MuiLink
            component={Link}
            href="/signup/agreement"
            color="primary.main"
            variant="body2"
          >
            회원가입
          </MuiLink>
        </Box>
      </ThumbnailLayout>
    </main>
  );
}
