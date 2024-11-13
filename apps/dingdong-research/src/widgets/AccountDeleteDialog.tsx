"use client";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import React from "react";
import { deleteUserUsersMeDelete } from "src/client";
import { token } from "src/utils/token";

//
//
//

interface AccountDeleteDialogProps {
  open: boolean;
  onClose: () => void;
}

//
//
//

const AccountDeleteDialog: React.FC<AccountDeleteDialogProps> = ({
  open,
  onClose,
}) => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const [checked, setChecked] = React.useState(false);

  const handleCheck = () => {
    setChecked((prev) => !prev);
  };

  const handleAccountDelete = async () => {
    try {
      if (!checked) {
        throw new Error("체크박스를 체크해주세요.");
      }

      await deleteUserUsersMeDelete();
      token.clear();

      onClose();

      enqueueSnackbar("계정이 삭제되었습니다.", {
        variant: "success",
      });

      router.replace("/");
    } catch (_) {
      enqueueSnackbar("계정 삭제에 실패했습니다. 다시 시도해주세요.", {
        variant: "error",
      });
    }
  };

  //
  //
  //

  return (
    <Dialog open={open} fullWidth maxWidth="xs" onClose={onClose}>
      <DialogTitle>탈퇴하기</DialogTitle>
      <DialogContent>
        <DialogContentText>
          탈퇴 후에는 모든 계정 정보가 삭제되며 복구할 수 없습니다.
          계속하시겠습니까?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <FormControlLabel
          label="계정을 삭제하겠습니다."
          control={<Checkbox checked={checked} />}
          onChange={handleCheck}
        />
        <Box flexGrow={1} />
        <Button color="inherit" onClick={onClose}>
          취소
        </Button>
        <Button color="error" disabled={!checked} onClick={handleAccountDelete}>
          탈퇴
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AccountDeleteDialog;
