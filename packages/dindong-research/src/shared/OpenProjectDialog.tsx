import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";

//
//
//

interface OpenProjectDialogProps {
  open: boolean;
  onConfirm: () => void;
  onClose: () => void;
}

//
//
//

export const OpenProjectDialog: React.FC<OpenProjectDialogProps> = ({
  open,
  onConfirm,
  onClose,
}) => {
  return (
    <Dialog fullWidth maxWidth="xs" open={open} onClose={onClose}>
      <DialogTitle>프로젝트 열기</DialogTitle>
      <DialogContent>
        <DialogContentText>
          공개 즉시 본 프로젝트에 대한 정보가 서베이 플랫폼에 게시됩니다. 예비
          참여자들은 프로젝트 정보를 확인할 수 있으며, 연구자가 지정한 실험 참여
          시간 내 참여 예약을할 수 있습니다. 계속하시겠습니까?
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button color="inherit" onClick={onClose}>
          취소
        </Button>
        <Button onClick={onConfirm}>공개</Button>
      </DialogActions>
    </Dialog>
  );
};
