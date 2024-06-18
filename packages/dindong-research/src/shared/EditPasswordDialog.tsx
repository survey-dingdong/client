import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Stack,
} from "@mui/material";
import React, { useId } from "react";
import {
  passwordMessage,
  passwordRegex,
  PasswordTextField,
} from "./PasswordTextField";
import { Controller, FormProvider, useForm, useWatch } from "react-hook-form";
import {
  ChangePasswordRequest,
  changePasswordUsersPasswordPatch,
} from "src/client";
import { useSnackbar } from "notistack";

//
//
//

interface EditPasswordDialogProps {
  open: boolean;
  onClose: () => void;
}

type EditPasswordDialogContentProps = Omit<EditPasswordDialogProps, "open">;

interface FormType extends ChangePasswordRequest {
  reEnterPw: string;
}

//
//
//

const EditPasswordDialogContent: React.FC<EditPasswordDialogContentProps> = ({
  onClose,
}) => {
  const formId = useId();
  const formMethods = useForm<FormType>({ mode: "onChange" });

  const { enqueueSnackbar } = useSnackbar();

  // [STATUS]
  const watchedPw = useWatch({
    control: formMethods.control,
    name: "newPassword",
  });

  const watchedReEnterPw = useWatch({
    control: formMethods.control,
    name: "reEnterPw",
  });

  const handleSubmit = formMethods.handleSubmit(
    async ({ reEnterPw, ...data }) => {
      console.log("hi");
      try {
        await changePasswordUsersPasswordPatch({ requestBody: data });
        enqueueSnackbar("비밀번호가 변경되었습니다.", {
          variant: "success",
        });

        onClose();
      } catch (err) {
        enqueueSnackbar("비밀번호 변경에 실패했습니다.", {
          variant: "error",
        });
      }
    }
  );

  //
  //
  //

  return (
    <>
      <DialogTitle>계정 정보 수정</DialogTitle>
      <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <FormProvider {...formMethods}>
          <Stack component="form" id={formId} onSubmit={handleSubmit} gap={1}>
            {/* old password */}
            <Controller
              name="oldPassword"
              control={formMethods.control}
              rules={{ required: true }}
              render={({ field, fieldState }) => (
                <PasswordTextField
                  {...field}
                  required
                  label="현재 비밀번호"
                  placeholder="현재 비밀번호를 입력해 주세요."
                  error={Boolean(fieldState.error)}
                  helperText={fieldState.error?.message}
                />
              )}
            />

            {/* new password */}
            <Controller
              name="newPassword"
              rules={{
                required: true,
                pattern: {
                  value: passwordRegex,
                  message: passwordMessage,
                },
              }}
              control={formMethods.control}
              render={({ field, fieldState }) => (
                <PasswordTextField
                  required
                  {...field}
                  label="변경할 비밀번호"
                  placeholder="변경할 비밀번호를 입력해 주세요. (영문, 숫자/특수문자 8자 이상)"
                  error={Boolean(fieldState.error)}
                  helperText={fieldState.error?.message}
                />
              )}
            />

            {/* re-enter password */}
            <Controller
              name="reEnterPw"
              control={formMethods.control}
              rules={{
                required: true,
                validate: (value) => {
                  if (value !== watchedPw) {
                    return "비밀번호가 일치하지 않습니다.";
                  }
                  return true;
                },
              }}
              render={({ field, fieldState }) => (
                <PasswordTextField
                  {...field}
                  required
                  label="변경할 비밀번호 재입력"
                  placeholder="변경할 비밀번호를 재입력 해주세요."
                  error={Boolean(fieldState.error)}
                  helperText={fieldState.error?.message}
                />
              )}
            />
          </Stack>
        </FormProvider>
      </DialogContent>
      <DialogActions>
        <Button color="inherit" onClick={onClose}>
          취소
        </Button>
        <Button
          type="submit"
          form={formId}
          disabled={!formMethods.formState.isValid}
        >
          저장(주의 틀리면 로그인창으로 감!! 개발중)
        </Button>
      </DialogActions>
    </>
  );
};

const EditPasswordDialog: React.FC<EditPasswordDialogProps> = ({
  open,
  onClose,
  ...props
}) => {
  return (
    <Dialog fullWidth maxWidth="xs" open={open} onClose={onClose}>
      <EditPasswordDialogContent {...props} onClose={onClose} />
    </Dialog>
  );
};

export default EditPasswordDialog;
