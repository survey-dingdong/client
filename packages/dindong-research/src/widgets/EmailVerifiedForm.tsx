"use client";
import {
  Box,
  Button,
  Collapse,
  FormHelperText,
  Stack,
  Typography,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { EmailVerificationRequest } from "generated-client";
import { useSnackbar } from "notistack";
import React from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import { authApi } from "src/apis/client";
import { TextField } from "src/shared";

//
//
//

const BUTTON_WIDTH = 80;

const LIMIT_MINUTES = 5;

//
//
//

const EmailVerifiedForm = () => {
  const { control, setValue, setError } = useFormContext();
  const watchedEmail = useWatch({ control, name: "email" });

  const { enqueueSnackbar } = useSnackbar();
  const [verificationCode, setVerificationCode] = React.useState("");
  const [verificationStatus, setVerificationStatus] = React.useState<
    "success" | "error" | "idle" | "verifying"
  >("idle");

  // [TIMER]
  const [timeLeft, setTimeLeft] = React.useState(LIMIT_MINUTES * 60);
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    setVerificationStatus("verifying");
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    setTimeLeft(LIMIT_MINUTES * 60);

    // 새로운 타이머 설정
    timerRef.current = setTimeout(() => {
      setTimeLeft(0);
    }, LIMIT_MINUTES * 60 * 1000);
  };

  React.useEffect(() => {
    // 타이머가 줄어드는 효과를 위해 매초마다 실행
    const interval = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft <= 0) {
          setVerificationStatus("idle");
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

  const checkDuplicate = useMutation({
    mutationFn: () =>
      authApi.checkEmailAvailabilityAuthEmailAvailabilityPost({
        emailVerificationRequest: { email: watchedEmail },
      }),
    onSuccess: (res) => {
      if (!res.availability) {
        setError("email", {
          message: "이미 사용중인 이메일입니다.",
          type: "duplicate",
        });

        throw new Error("이미 사용중인 이메일입니다.");
      }
    },
    onError: () => {
      setError("email", {
        message: "이미 사용중인 이메일입니다.",
        type: "duplicate",
      });
    },
  });

  const sendVerificationEmail = useMutation({
    mutationFn: (data: EmailVerificationRequest) =>
      authApi.sendVerificationEmailAuthEmailVerificationsPost({
        emailVerificationRequest: data,
        verificationType: "signup",
      }),

    onSuccess: () => {
      startTimer();
      enqueueSnackbar("인증번호를 발송했습니다. 이메일을 확인해주세요.", {
        variant: "success",
      });
    },
  });

  const handleSendVerificationEmail = async () => {
    try {
      await checkDuplicate.mutateAsync();

      sendVerificationEmail.mutateAsync({
        email: watchedEmail,
      });
    } catch (err) {
      //
    }
  };

  const verifyCode = useMutation({
    mutationFn: (data: { email: string; code: string }) =>
      authApi.validateVerificationEmailAuthEmailVerificationsValidationPost({
        verifyEmailRequest: data,
        verificationType: "signup",
      }),
    onSuccess: () => {
      setValue("emailVerified", true);
      setValue("verifiedEmail", watchedEmail);
      setVerificationStatus("success");
    },
    onError: () => {
      setVerificationStatus("error");
    },
  });

  React.useEffect(() => {
    if (verificationStatus === "success") {
      if (timerRef.current) {
        setVerificationCode("");
        clearTimeout(timerRef.current);
      }
    }
  }, [verificationStatus]);

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
                onClick={handleSendVerificationEmail}
              >
                {verificationStatus === "idle" ? "인증번호 발송" : "재발송"}
              </Button>
            </span>
          </Box>
        )}
      />

      {/* 인증번호 입력 */}

      <Stack>
        <Collapse in={verificationStatus === "verifying"}>
          <Box display="flex" gap={1}>
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

            <span>
              <Button
                variant="text"
                sx={{ whiteSpace: "nowrap", minWidth: BUTTON_WIDTH }}
                disabled={
                  verificationCode.length !== 6 ||
                  verificationStatus === "success"
                }
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
        </Collapse>

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

        {verificationStatus === "verifying" ? (
          <Typography variant="body2" color="text.secondary">
            남은 시간 {formatTime(timeLeft)}
          </Typography>
        ) : null}
      </Stack>
    </Stack>
  );
};

export default EmailVerifiedForm;
