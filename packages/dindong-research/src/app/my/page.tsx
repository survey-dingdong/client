"use client";
import {
  Box,
  Chip,
  Paper,
  Stack,
  Typography,
  useTheme,
  Link as MuiLink,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import TextField from "src/shared/TextField";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import React from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import PasswordTextField, {
  passwordMessage,
  passwordRegex,
} from "src/shared/PasswordTextField";

type DialogType = "nickname" | "account";

const mockUser = {
  id: "911cbe44-ed3a-40f3-8f00-63c4b1fbe9c6",
  username: "Eunseoung Kim",
  email: "dingdong@gmail.com",
  password: "1234",
};

//
//
//

export default function Page() {
  const theme = useTheme();

  const formMethods = useForm({ defaultValues: mockUser });

  // [STATE]
  const [editType, setEditType] = React.useState<null | DialogType>(null);

  // [HANDLERS]
  const handleDialogClose = () => {
    setEditType(null);
  };

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
                label="이름 또는 닉네임"
                placeholder="이름 또는 닉네임을 입력해주세요."
              />
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button color="inherit" onClick={handleDialogClose}>
            취소
          </Button>
          <Button>저장</Button>
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
          <Controller
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
          />
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
          <TextField readOnly label="이름 또는 닉네임" value="Eunseoung Kim" />
        </CardSection>

        {/*  */}
        <CardSection
          title="연락처"
          verified
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
            <TextField fullWidth readOnly label="계정" value={mockUser.email} />
            <TextField
              fullWidth
              readOnly
              label="비밀번호"
              type="password"
              value={mockUser.password}
            />
          </Box>
        </CardSection>
      </Paper>

      {/* Dialogs */}
      <FormProvider {...formMethods}>
        {renderEditUsernameDialog()}
        {renderEditAccountDialog()}
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
        <Typography variant="h6">
          {title}
          {verified ? (
            <Chip
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
