"use client";
import React from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Tooltip,
} from "@mui/material";
import { TextField } from "src/shared";

const MAX_NOTICE_LENGTH = 1000;

const WriteNoticeAction = () => {
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>공지 작성/관리</Button>

      <Dialog fullWidth open={open} maxWidth="sm" onClose={handleClose}>
        <DialogTitle>공지사항 작성/관리</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            multiline
            required
            rows={8}
            value={inputValue}
            label="내용"
            placeholder="공지사항을 작성해 주세요."
            helperText={`${inputValue.length}/${MAX_NOTICE_LENGTH}`}
            helperTextProps={{
              sx: {
                textAlign: "right",
              },
            }}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button color="inherit" onClick={handleClose}>
            취소
          </Button>
          <Tooltip
            title={!inputValue ? "공지사항 작성 후 저장 가능합니다." : ""}
          >
            <span>
              <Button disabled={!inputValue}>확인</Button>
            </span>
          </Tooltip>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default WriteNoticeAction;
