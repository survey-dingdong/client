import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";

interface WorkspaceDeleteDialogProps {
  open: boolean;
  title?: string;
  onClose: () => void;
}

const WorkspaceDeleteDialog: React.FC<WorkspaceDeleteDialogProps> = ({
  open,
  title,
  onClose,
}) => {
  if (!open) {
    return null;
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>워크스페이스 삭제</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <b>{title}</b>이 삭제됩니다. 계속하시겠습니까?
        </DialogContentText>
        <DialogActions>
          <Button color="inherit" onClick={onClose}>
            취소
          </Button>

          {/* TODO: add delete function */}
          <Button color="error" onClick={onClose}>
            삭제
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default WorkspaceDeleteDialog;
