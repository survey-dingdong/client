"use client";
import {
  Stack,
  InputAdornment,
  IconButton,
  Box,
  FormControlLabel,
  Checkbox,
  Divider,
  Button,
  Link as MuiLink,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import TextField from "src/shared/TextField";
import googleImage from "public/google.png";
import { useState } from "react";
import Image from "next/image";
import { useSnackbar } from "notistack";

const LoginForm = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Stack>
      <Stack gap={2}>
        <TextField
          placeholder="계정을 입력해주세요."
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <Stack gap="6px">
          <TextField
            value={password}
            type={passwordVisible ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력해주세요."
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  size="small"
                  onClick={() => setPasswordVisible((prev) => !prev)}
                >
                  {passwordVisible ? (
                    <i className="fa-regular fa-eye" />
                  ) : (
                    <i className="fa-regular fa-eye-slash" />
                  )}
                </IconButton>
              </InputAdornment>
            }
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
        divider={<Divider sx={{ color: "#A6ADBD" }}>OR</Divider>}
      >
        <Button
          LinkComponent={Link}
          href="/workspaces"
          onClick={() =>
            enqueueSnackbar("로그인 되었습니다.", { variant: "success" })
          }
        >
          로그인
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
