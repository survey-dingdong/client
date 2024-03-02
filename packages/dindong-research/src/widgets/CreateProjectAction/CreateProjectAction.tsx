"use client";
import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import TextField from "src/shared/TextField/TextField";

const CreateProjectAction = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Button
        startIcon={<AddCircleOutlineIcon />}
        onClick={() => setOpen(true)}
      >
        프로젝트 만들기
      </Button>

      <CreateProjectDialog open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

//
//
//

interface CreateProjectDialogProps {
  open: boolean;
  onClose: () => void;
}

const CreateProjectDialog: React.FC<CreateProjectDialogProps> = ({
  open,
  onClose,
}) => {
  return (
    <Dialog open={open} maxWidth="xs" fullWidth onClose={onClose}>
      <DialogTitle>실험 프로젝트 만들기</DialogTitle>
      <DialogContent>
        <TextField
          required
          fullWidth
          label="프로젝트 명"
          placeholder="프로젝트 명을 입력해주세요"
        />
      </DialogContent>
      <DialogActions>
        <Button color="inherit" onClick={onClose}>
          취소
        </Button>
        <Button>만들기</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateProjectAction;
