"use client";
import { Button, Stack } from "@mui/material";
import React from "react";
import {
  Controller,
  FormProvider,
  useForm,
  useFormContext,
  useWatch,
} from "react-hook-form";
import {
  PasswordTextField,
  ThumbnailLayout,
  passwordMessage,
  passwordRegex,
} from "src/shared";
import EmailVerifiedForm from "src/widgets/EmailVerifiedForm";

export default function Page() {
  const formMethods = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      reEnterPw: "",
      emailVerified: false,
    },
  });

  const watchedPw = useWatch({
    control: formMethods.control,
    name: "password",
  });

  const watchedReEnterPw = useWatch({
    control: formMethods.control,
    name: "reEnterPw",
  });

  const watchedEmailVerified = useWatch({
    control: formMethods.control,
    name: "emailVerified",
  });

  //
  //
  //

  return (
    <ThumbnailLayout
      title="비밀번호 재설정"
      description={
        watchedEmailVerified
          ? `인증이 완료되었습니다.\n새로운 비밀번호를 입력해 주세요.`
          : "회원가입시 사용한 계정 정보 입력 후 인증을 진행해 주세요."
      }
    >
      <FormProvider {...formMethods}>
        <FormSection isEmilVerified={watchedEmailVerified} />
        <Button
          disabled={
            !watchedEmailVerified ||
            watchedPw !== watchedReEnterPw ||
            !watchedEmailVerified ||
            !formMethods.formState.isValid
          }
        >
          비밀번호 재설정
        </Button>
      </FormProvider>
    </ThumbnailLayout>
  );
}

const FormSection = ({ isEmilVerified }: { isEmilVerified: boolean }) => {
  const { control } = useFormContext();

  const pw = useWatch({ control, name: "password" });

  //
  //
  //

  if (isEmilVerified) {
    return (
      <Stack gap={2}>
        <Controller
          name="password"
          control={control}
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

        <Controller
          name="reEnterPw"
          control={control}
          rules={{
            required: true,
            validate: (value) => {
              if (value !== pw) {
                return "비밀번호가 일치하지 않습니다.";
              }
              return true;
            },
          }}
          render={({ field, fieldState }) => (
            <PasswordTextField
              {...field}
              required
              label="비밀번호 재입력"
              placeholder="비밀번호를 재입력 해주세요."
              error={Boolean(fieldState.error)}
              helperText={fieldState.error?.message}
            />
          )}
        />
      </Stack>
    );
  }

  return <EmailVerifiedForm verificationType="reset_password" />;
};
