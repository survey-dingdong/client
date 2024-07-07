"use client";
import { Box, Typography, Link as MuiLink } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TOKEN_KEY } from "src/constants/token";
import { ThumbnailLayout } from "src/shared";
import { token } from "src/utils/token";
import { LoginForm } from "src/widgets";

export default function Home() {
  const router = useRouter();
  const accessToken = token.get(TOKEN_KEY);

  if (accessToken) {
    return router.replace("/workspaces");
  }

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
