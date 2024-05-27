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

const convertTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

//
//
//

export default function Page() {
  const formMethods = useForm<CreateUserRequest>({
    mode: "onChange",
    defaultValues: { username: "", email: "", password: "" },
  });
  const [reEnterPw, setReEnterPw] = React.useState("");

  const pw = useWatch({ control: formMethods.control, name: "password" });
  const email = useWatch({ control: formMethods.control, name: "email" });

  const pwNotMatch = pw !== reEnterPw;

  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  // [TIMER]
  const [time, setTime] = React.useState(300);
  const isTimerStarted = time !== 300;

  // TODO: 서버에서 받아야 할 거 같은데?
  const startTimer = () => {
    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
      console.log(time);
      if (time <= 0) {
        clearInterval(timer);
      }
    }, 1000);

    setTimeout(() => {
      clearInterval(timer);
    }, 300000);
  };

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

  const sendVerificationEmail = useMutation({
    mutationFn: (data: any) => axios.post("/auth/email-verifications", data),
    onSuccess: () => {
      enqueueSnackbar("인증번호를 발송했습니다. 이메일을 확인해주세요.", {
        variant: "success",
      });
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

              <Stack gap={1}>
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
                    <Box display="flex" gap={1}>
                      <TextField
                        fullWidth
                        required
                        label="계정"
                        type="email"
                        placeholder="email@dingdong.com"
                        error={Boolean(fieldState.error)}
                        helperText={fieldState.error?.message}
                        {...field}
                      />
                      <span>
                        <Button
                          disabled={fieldState.invalid}
                          color="inherit"
                          sx={{ whiteSpace: "nowrap", mt: 4 }}
                          onClick={() => {
                            sendVerificationEmail.mutateAsync({
                              email,
                            });

                            startTimer();
                          }}
                        >
                          {isTimerStarted ? "재발송" : "인증번호 발송"}
                        </Button>
                      </span>
                    </Box>
                  )}
                />

                <Stack gap={1}>
                  <TextField
                    fullWidth
                    placeholder="6자리 인증코드 입력해 주세요."
                    type="number"
                  />
                  {isTimerStarted ? (
                    <Box display="flex" gap={1} justifyContent="flex-end">
                      <Typography variant="body2" color="text.secondary">
                        남은 시간 {convertTime(time)}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="primary.main"
                        sx={{ cursor: "pointer" }}
                      >
                        시간 연장하기
                      </Typography>
                    </Box>
                  ) : null}
                </Stack>
              </Stack>

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
