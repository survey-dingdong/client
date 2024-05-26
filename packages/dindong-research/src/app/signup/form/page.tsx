"use client";
import { Box, Button, Link as MuiLink, Stack, Typography } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import React from "react";
import { Controller, FormProvider, useForm, useWatch } from "react-hook-form";
import PasswordTextField, {
  passwordMessage,
  passwordRegex,
} from "src/shared/PasswordTextField";
import TextField from "src/shared/TextField";
import { useMutation } from "@tanstack/react-query";
import { CreateUserRequest } from "generated-client";

//
//
//

export default function Page() {
  const formMethods = useForm<CreateUserRequest>({
    mode: "onChange",
    // TODO: change to password after server is ready
    defaultValues: { username: "", email: "", password: "" },
  });
  const [reEnterPw, setReEnterPw] = React.useState("");

  const pw = useWatch({ control: formMethods.control, name: "password" });
  const pwNotMatch = pw !== reEnterPw;

  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  // [HANDLER]
  const mutation = useMutation({
    mutationFn: (data: any) => axios.post("/users", data),
    onSuccess: () => {
      enqueueSnackbar("회원가입에 성공했습니다.", {
        variant: "success",
      });

      router.push("/");
    },
  });

  const postUser = formMethods.handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <>
      <FormProvider {...formMethods}>
        <form onSubmit={postUser}>
          <Stack gap={3}>
            <Stack gap={2}>
              <Controller
                name="username"
                control={formMethods.control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    required
                    label="이름"
                    placeholder="본인 이름을 입력해 주세요."
                    {...field}
                  />
                )}
              />

              <Controller
                name="email"
                control={formMethods.control}
                rules={{
                  required: true,
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "이메일 형식으로 입력해 주세요.",
                  },
                }}
                render={({ field, fieldState }) => (
                  <TextField
                    required
                    label="계정"
                    type="email"
                    placeholder="email@dingdong.com"
                    error={Boolean(fieldState.error)}
                    helperText={fieldState.error?.message}
                    {...field}
                  />
                )}
              />

              <Controller
                name="password"
                control={formMethods.control}
                rules={{
                  required: true,
                  pattern: {
                    value: passwordRegex,
                    message: passwordMessage,
                  },
                }}
                render={({ field, fieldState }) => (
                  <PasswordTextField
                    {...field}
                    required
                    error={Boolean(fieldState.error)}
                    helperText={fieldState.error?.message}
                    label="비밀번호"
                    placeholder={passwordMessage}
                  />
                )}
              />

              <PasswordTextField
                required
                value={reEnterPw}
                label="비밀번호 재입력"
                placeholder="비밀번호를 재입력 해주세요."
                error={Boolean(reEnterPw && pwNotMatch)}
                helperText={
                  reEnterPw && pwNotMatch ? "비밀번호가 일치하지 않습니다." : ""
                }
                onChange={(e: any) => setReEnterPw(e.target.value)}
              />
            </Stack>

            <Button
              type="submit"
              disabled={!formMethods.formState.isValid || pwNotMatch}
            >
              회원가입
            </Button>
          </Stack>
        </form>
      </FormProvider>

      <Box flexGrow={1} />

      <Box display="flex" gap={1} alignItems="center">
        <Typography variant="body2">이미 계정이 있으신가요?</Typography>
        <MuiLink component={Link} href="/" color="primary.main" variant="body2">
          로그인
        </MuiLink>
      </Box>
    </>
  );
}
