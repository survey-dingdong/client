"use client";
import {
  Box,
  Paper,
  Stack,
  Typography,
  Link as MuiLink,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import React from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";

import { useQueryClient } from "@tanstack/react-query";
import { TextField } from "src/shared";
import { Tag } from "src/widgets";
import { enqueueSnackbar } from "notistack";
import { fetchUserQueryKey, useUser } from "src/hooks/useUser";
import { updateUserUsersPatch } from "src/client";

type DialogType = "nickname" | "account";

//
//
//

export default function Page() {
  const { user } = useUser();
  const queryClient = useQueryClient();

  const formMethods = useForm({ defaultValues: user });

  React.useEffect(() => {
    formMethods.reset(user);
  }, [formMethods, user]);

  // [STATE]
  const [editType, setEditType] = React.useState<null | DialogType>(null);

  // [HANDLERS]
  const handleDialogClose = () => {
    setEditType(null);
  };

  const handleSubmit = formMethods.handleSubmit(async (data) => {
    try {
      await updateUserUsersPatch({
        requestBody: data,
      });

      await queryClient.invalidateQueries({ queryKey: [fetchUserQueryKey] });

      enqueueSnackbar("계정 정보가 수정되었습니다.", {
        variant: "success",
      });

      handleDialogClose();
    } catch (error) {
      enqueueSnackbar("계정 정보 수정에 실패했습니다.", {
        variant: "error",
      });
      console.error(error);
    }
  });

  // [COMPONENTS RENDER]
  const renderEditUsernameDialog = () => {
    return (
      <Dialog
        open={editType === "nickname"}
        maxWidth="xs"
        fullWidth
        onClose={handleDialogClose}
      >
        <DialogTitle>기본 정보 수정</DialogTitle>
        <DialogContent>
          <Controller
            control={formMethods.control}
            name="username"
            render={({ field }) => (
              <TextField
                {...field}
                required
                fullWidth
                label="닉네임"
                placeholder="닉네임을 입력해주세요."
              />
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button color="inherit" onClick={handleDialogClose}>
            취소
          </Button>
          <Button onClick={handleSubmit}>저장</Button>
        </DialogActions>
      </Dialog>
    );
  };

  const renderEditAccountDialog = () => {
    return (
      <Dialog
        open={editType === "account"}
        maxWidth="xs"
        fullWidth
        onClose={handleDialogClose}
      >
        <DialogTitle>계정 정보 수정</DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <Controller
            control={formMethods.control}
            name="email"
            rules={{
              required: true,
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "이메일 형식으로 입력해 주세요.",
              },
            }}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                required
                fullWidth
                label="계정"
                placeholder="이메일을 입력해주세요."
                error={Boolean(fieldState.error) || fieldState.invalid}
                helperText={fieldState.error?.message}
              />
            )}
          />
          {/* <Controller
            control={formMethods.control}
            name="password"
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
                fullWidth
                label="비밀번호"
                error={Boolean(fieldState.error)}
                helperText={fieldState.error?.message}
              />
            )}
          /> */}
        </DialogContent>
        <DialogActions>
          <Button color="inherit" onClick={handleDialogClose}>
            취소
          </Button>
          <Button type="submit" disabled={!formMethods.formState.isDirty}>
            저장
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  //
  //
  //

  return (
    <Stack height="100%" gap={4.5}>
      <Typography variant="h4">내 계정</Typography>

      <Paper
        component={Stack}
        elevation={0}
        sx={{ p: 3, gap: 5, borderRadius: 5 }}
      >
        {/*  */}
        <CardSection
          title="기본 정보"
          headerAction={<EditButton onClick={() => setEditType("nickname")} />}
        >
          <TextField readOnly label="닉네임" value={user?.username} />
        </CardSection>

        {/*  */}
        <CardSection
          title="연락처"
          headerAction={
            <Typography variant="body2" color="text.secondary">
              <MuiLink>본인인증</MuiLink>을 통해 휴대폰 번호를 변경할 수
              있습니다.
            </Typography>
          }
        >
          <TextField readOnly label="휴대폰 번호" value="010-0000-0000" />
        </CardSection>

        {/*  */}
        <CardSection
          title="계정 정보"
          verified
          headerAction={<EditButton onClick={() => setEditType("account")} />}
        >
          <Box display="flex" gap={2}>
            <TextField fullWidth readOnly label="계정" value={user?.email} />
            <TextField fullWidth readOnly label="비밀번호" type="password" />
          </Box>
        </CardSection>
      </Paper>

      {/* Dialogs */}
      <FormProvider {...formMethods}>
        <form>
          {renderEditUsernameDialog()}
          {renderEditAccountDialog()}
        </form>
      </FormProvider>
    </Stack>
  );
}

interface CardSectionProps {
  title: string;
  verified?: boolean;
  headerAction?: React.ReactNode;
  children: React.ReactNode;
}

/**
 *
 * @param param0
 * @returns
 */

const CardSection: React.FC<CardSectionProps> = ({
  title,
  verified,
  headerAction,
  children,
}) => {
  return (
    <Stack gap={1.5}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h6" display="inline-flex" alignItems="center">
          {title}
          {verified ? (
            <Tag
              icon={
                <CheckCircleOutlineRoundedIcon sx={{ width: 14, height: 14 }} />
              }
              size="small"
              label="인증됨"
              color="success"
              sx={{ ml: 1 }}
            />
          ) : null}
        </Typography>
        {headerAction}
      </Box>
      {children}
    </Stack>
  );
};

//
//
//

interface EditButtonProps {
  onClick?: () => void;
}

const EditButton: React.FC<EditButtonProps> = ({ onClick }) => {
  return (
    <Typography
      color="primary.main"
      variant="body2"
      display="inline-flex"
      alignItems="center"
      gap={0.5}
      sx={{ cursor: "pointer" }}
      onClick={onClick}
    >
      <i className="fa-regular fa-pen-to-square" />
      수정하기
    </Typography>
  );
};
