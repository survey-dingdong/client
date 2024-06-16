"use client";
import {
  Stack,
  Box,
  Divider,
  Button,
  Link as MuiLink,
  Alert,
  CircularProgress,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import { TextField, PasswordTextField } from "src/shared";
import googleImage from "public/icons/google.png";
import { useState } from "react";
import Image from "next/image";
import { useSnackbar } from "notistack";
import { useMutation } from "@tanstack/react-query";
import { REFRESH_TOKEN_KEY, TOKEN_KEY } from "src/constants/token";
import { token } from "src/utils/token";
import { loginUsersLoginPost } from "src/client";

//
//
//

const LoginForm = () => {
  const { enqueueSnackbar } = useSnackbar();

  const [error, setError] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = email && password;

  const { mutate: login, isPending: isLoginLoading } = useMutation({
    mutationFn: () => loginUsersLoginPost({ requestBody: { email, password } }),
    onSuccess: async ({ refreshToken, token: userToken }) => {
      setError(false);

      token.set(TOKEN_KEY, userToken);
      token.set(REFRESH_TOKEN_KEY, refreshToken);

      if (window !== undefined) {
        window.location.href = `${window.location.origin}/workspaces`;
      }

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
    <Stack gap={3}>
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
          error={error}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && isFormValid) {
              login();
            }
          }}
        />
        <Stack gap="6px">
          <PasswordTextField
            value={password}
            placeholder="비밀번호를 입력해주세요."
            error={error}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && isFormValid) {
                login();
              }
            }}
          />

          <Box display="flex" justifyContent="flex-end" alignItems="center">
            <MuiLink
              component={Link}
              href="/password"
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
        <Button disabled={!isFormValid} onClick={() => login()}>
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
