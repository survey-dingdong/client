"use client";
import { Button, Stack } from "@mui/material";

import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import React from "react";
import { Controller, FormProvider, useForm, useWatch } from "react-hook-form";

import { useMutation } from "@tanstack/react-query";
import EmailVerifiedForm from "src/widgets/EmailVerifiedForm";
import {
  TextField,
  PASSWORD_HELPER_TEXT,
  passwordRegex,
  PasswordTextField,
} from "src/shared";
import { userApi } from "src/client";
import { CreateUserRequest } from "dingdong-api-client";

//
//
//

interface CreateUserFormType extends CreateUserRequest {
  emailVerified: boolean;
  verifiedEmail: string;
}

export default function Page() {
  const formMethods = useForm<CreateUserFormType>({
    mode: "onChange",
    defaultValues: {
      username: "",
      email: "",
      password: "",
      verifiedEmail: "",
      emailVerified: false,
    },
  });
  const [reEnterPw, setReEnterPw] = React.useState("");

  const pw = useWatch({ control: formMethods.control, name: "password" });
  const emailVerified = useWatch({
    control: formMethods.control,
    name: "emailVerified",
  });

  const pwNotMatch = pw !== reEnterPw;

  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  // [HANDLER]
  const mutation = useMutation({
    mutationFn: (createUserRequest: CreateUserRequest) =>
      userApi.createUserUsersPost({
        createUserRequest,
      }),
    onSuccess: () => {
      enqueueSnackbar("회원가입에 성공했습니다.", {
        variant: "success",
      });

      router.push("/");
    },
  });

  const postUser = formMethods.handleSubmit(
    ({ emailVerified, verifiedEmail, ...data }) => {
      if (!emailVerified || !verifiedEmail || verifiedEmail !== data.email) {
        return;
      }

      mutation.mutate(data);
    }
  );

  return (
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
                  label="닉네임"
                  placeholder="닉네임을 입력해 주세요."
                  {...field}
                />
              )}
            />

            <EmailVerifiedForm />

            <Controller
              name="password"
              control={formMethods.control}
              rules={{
                required: true,
                pattern: {
                  value: passwordRegex,
                  message: PASSWORD_HELPER_TEXT,
                },
              }}
              render={({ field, fieldState }) => (
                <PasswordTextField
                  {...field}
                  required
                  error={Boolean(fieldState.error)}
                  helperText={PASSWORD_HELPER_TEXT ?? fieldState.error?.message}
                  label="비밀번호"
                  placeholder="설정할 비밀번호를 입력해 주세요."
                />
              )}
            />

            <PasswordTextField
              required
              value={reEnterPw}
              label="비밀번호 재입력"
              placeholder="설정할 비밀번호를 재입력 해주세요."
              error={Boolean(reEnterPw && pwNotMatch)}
              helperText={
                reEnterPw && pwNotMatch ? "비밀번호가 일치하지 않습니다." : ""
              }
              onChange={(e: any) => setReEnterPw(e.target.value)}
            />
          </Stack>

          <Button
            type="submit"
            disabled={
              !formMethods.formState.isValid || pwNotMatch || !emailVerified
            }
          >
            회원가입
          </Button>
        </Stack>
      </form>
    </FormProvider>
  );
}
