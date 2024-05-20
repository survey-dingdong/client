"use client";
import {
  Stack,
  Box,
  FormControlLabel,
  Checkbox,
  Divider,
  Button,
  Link as MuiLink,
  Alert,
  CircularProgress,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import TextField from "src/shared/TextField";
import googleImage from "public/icons/google.png";
import { useState } from "react";
import Image from "next/image";
import { useSnackbar } from "notistack";
import { useRouter } from "next/navigation";
import PasswordTextField from "src/shared/PasswordTextField";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useWorkspaceCreate } from "src/hooks/useWorkspaceCreate";
import { REFRESH_TOKEN_KEY, TOKEN_KEY } from "src/constants/token";

const LoginForm = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const [error, setError] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // [HANDLER]
  const { mutateAsync: createWorkspace } = useWorkspaceCreate();

  const { mutate: login, isPending: isLoginLoading } = useMutation({
    mutationFn: () => axios.post("/users/login", { email, password }),
    onSuccess: async ({ data }) => {
      setError(false);

      sessionStorage.setItem(TOKEN_KEY, data.token);
      sessionStorage.setItem(REFRESH_TOKEN_KEY, data.refresh_token);

      axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;

      router.push(`/workspaces`);

      enqueueSnackbar("로그인 되었습니다.", { variant: "success" });
    },
    onError: () => {
      setError(true);
    },
  });

  //
  //
  //

  return (
    <Stack>
      <Stack gap={2}>
        {error ? (
          <Alert
            severity="error"
            sx={{ border: (theme) => `1px solid ${theme.palette.error.main}` }}
          >
            계정 또는 비밀번호를 확인해 주세요
          </Alert>
        ) : null}
        <TextField
          placeholder="계정을 입력해주세요."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={error}
        />
        <Stack gap="6px">
          <PasswordTextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력해주세요."
            error={error}
          />

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <FormControlLabel
              label="자동 로그인"
              control={<Checkbox />}
              componentsProps={{ typography: { fontSize: 14 } }}
            />
            <MuiLink
              component={Link}
              href="/forgot-password"
              color="text.primary"
              sx={{ fontSize: 14 }}
            >
              비밀번호를 잊어버리셨나요?
            </MuiLink>
          </Box>
        </Stack>
      </Stack>

      {/* Actions */}
      <Stack
        gap={1.5}
        divider={
          <Divider sx={{ color: "#A6ADBD" }}>
            <Typography color="#A6ADBD">OR</Typography>
          </Divider>
        }
      >
        <Button onClick={() => login()}>
          {isLoginLoading ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            "로그인"
          )}
        </Button>
        <Button variant="outlined" sx={{ textTransform: "none" }}>
          <Image
            src={googleImage.src}
            alt=""
            width={18}
            height={18}
            style={{ marginRight: 8 }}
          />
          Google 계정으로 로그인
        </Button>
      </Stack>
    </Stack>
  );
};

export default LoginForm;
