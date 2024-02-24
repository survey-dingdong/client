"use client";
import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const CreateProjectAction = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Button startIcon={<AddIcon />} onClick={() => setOpen(true)}>
        설문 프로젝트 만들기
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
      <DialogTitle>설문 프로젝트 만들기</DialogTitle>
      <DialogContent>
        <TextField
          label="프로젝트 이름"
          fullWidth
          required
          placeholder="프로젝트 명을 입력해주세요"
          sx={{ marginTop: 1 }}
        />
      </DialogContent>
      <DialogActions>
        <Button color="secondary" onClick={onClose}>
          취소
        </Button>
        <Button>만들기</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateProjectAction;
