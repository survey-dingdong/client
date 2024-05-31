"use client";
import { Box, Button, FormHelperText, Stack, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useSnackbar } from "notistack";
import React from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import TextField from "src/shared/TextField";

//
//
//

const BUTTON_WIDTH = 80;

//
//
//

const EmailVerifiedForm = () => {
  const { control, setValue } = useFormContext();
  const watchedEmail = useWatch({ control, name: "email" });

  const { enqueueSnackbar } = useSnackbar();
  const [verificationCode, setVerificationCode] = React.useState("");
  const [verificationStatus, setVerificationStatus] = React.useState<
    "success" | "error" | "idle"
  >("idle");

  // [TIMER]
  const [timeLeft, setTimeLeft] = React.useState(5 * 60);
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);

  const isTimerRunning = !!timerRef.current;

  const startTimer = () => {
    // 기존 타이머가 있으면 초기화
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    setTimeLeft(3 * 60); // 3분으로 초기화

    // 새로운 타이머 설정
    timerRef.current = setTimeout(() => {
      setTimeLeft(0);
    }, 3 * 60 * 1000);
  };

  React.useEffect(() => {
    // 타이머가 줄어드는 효과를 위해 매초마다 실행
    const interval = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prevTimeLeft - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  //
  //
  //

  const sendVerificationEmail = useMutation({
    mutationFn: (data: any) => axios.post("/auth/email-verifications", data),
    onSuccess: () => {
      enqueueSnackbar("인증번호를 발송했습니다. 이메일을 확인해주세요.", {
        variant: "success",
      });
    },
  });

  const verifyCode = useMutation({
    mutationFn: (data: { email: string; code: string }) =>
      axios.post("/auth/email-verifications/verify", data),
    onSuccess: () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      setValue("emailVerified", true);
      setVerificationStatus("success");
    },
    onError: () => {
      setVerificationStatus("error");
    },
  });

  //
  //
  //

  return (
    <Stack gap={1}>
      <Controller
        name="email"
        control={control}
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
              disabled={isTimerRunning || verificationStatus === "success"}
              {...field}
            />
            <span>
              <Button
                disabled={fieldState.invalid || !field.value}
                color="inherit"
                sx={{
                  whiteSpace: "nowrap",
                  minWidth: BUTTON_WIDTH,
                  mt: 4,
                }}
                onClick={() => {
                  sendVerificationEmail.mutateAsync({
                    email: field.value,
                  });

                  startTimer();
                }}
              >
                {isTimerRunning ? "재발송" : "인증번호 발송"}
              </Button>
            </span>
          </Box>
        )}
      />

      {/* 인증번호 입력 */}
      {isTimerRunning ? (
        <Stack gap={1}>
          <Box display="flex" gap={1}>
            <Stack gap={0.5} width="100%">
              <TextField
                fullWidth
                value={verificationCode}
                placeholder="6자리 인증코드 입력해 주세요."
                type="number"
                error={verificationStatus === "error"}
                onChange={(e) => {
                  if (e.target.value.length > 6) {
                    return;
                  }

                  setVerificationCode(e.target.value);
                }}
              />
              <FormHelperText
                error={verificationStatus === "error"}
                sx={{
                  color: verificationStatus === "success" ? "success.main" : "",
                }}
              >
                {verificationStatus === "error"
                  ? "인증번호가 일치하지 않습니다."
                  : verificationStatus === "success"
                  ? "인증이 완료되었습니다."
                  : ""}
              </FormHelperText>
            </Stack>

            <span>
              <Button
                variant="text"
                sx={{ whiteSpace: "nowrap", minWidth: BUTTON_WIDTH }}
                disabled={verificationCode.length !== 6}
                onClick={() => {
                  verifyCode.mutateAsync({
                    email: watchedEmail,
                    code: verificationCode,
                  });
                }}
              >
                인증
              </Button>
            </span>
          </Box>

          {isTimerRunning ? (
            <Typography variant="body2" color="text.secondary">
              남은 시간 {formatTime(timeLeft)}
            </Typography>
          ) : null}
        </Stack>
      ) : null}
    </Stack>
  );
};

export default EmailVerifiedForm;
