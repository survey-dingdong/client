import { Box, Stack, Typography, Link as MuiLink } from "@mui/material";
import Link from "next/link";
import { LoginForm } from "src/widgets";

export default function Home() {
  return (
    <main>
      <Box display="grid" gridTemplateColumns="560px 1fr" height="100vh">
        <Stack p="80px 44px 44px 44px" gap={3}>
          <Typography variant="h5" color="primary.main" fontWeight={800}>
            LOGO
          </Typography>

          <Typography variant="h4">로그인</Typography>

          <LoginForm />
          <Box flexGrow={1} />

          <Box display="flex" gap={1} alignItems="center">
            <Typography>아직 계정이 없으신가요?</Typography>
            <MuiLink component={Link} href="/signup" color="primary.main">
              회원가입
            </MuiLink>
          </Box>
        </Stack>

        <Box bgcolor="background.default" width="100%" height="100%" />
      </Box>
    </main>
  );
}
