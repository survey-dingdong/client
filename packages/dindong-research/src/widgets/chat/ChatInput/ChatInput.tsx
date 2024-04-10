"use client";
import { Input, Stack, TextField } from "@mui/material";
import React from "react";

const ChatInput = () => {
  const inputRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    inputRef.current;
  }, []);

  return (
    <Stack
      borderRadius={1}
      sx={{ border: inputRef.current?.focus ? "tomato" : "none" }}
    >
      <Input
        ref={inputRef}
        rows={3}
        placeholder="실험 참여자에게 전송할 메시지를 입력해 주세요."
        multiline
      />
    </Stack>
  );
};

export default ChatInput;
