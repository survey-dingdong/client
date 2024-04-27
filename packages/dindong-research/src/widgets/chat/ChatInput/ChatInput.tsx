"use client";
import { Send } from "@mui/icons-material";
import {
  Box,
  Divider,
  IconButton,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const padding = "14px";
const max = 1500;

const ChatInput = () => {
  const inputRef = React.useRef<HTMLDivElement>(null);
  const [value, setValue] = React.useState<string>("");

  React.useEffect(() => {
    inputRef.current;
  }, []);

  const [isFocused, setIsFocused] = React.useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <Stack
      borderRadius={4}
      divider={<Divider orientation="horizontal" />}
      bgcolor="background.paper"
      border={(theme) => `2px solid ${theme.palette.primary.main}`}
      // sx={{
      //   outline: isFocused
      //     ? (theme) => `2px solid ${theme.palette.primary.main}`
      //     : "none",
      // }}
    >
      <InputBase
        ref={inputRef}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        rows={4}
        sx={{
          padding,
          fontSize: "14px",
        }}
        placeholder="실험 참여자에게 전송할 메시지를 입력해 주세요."
        onChange={(e) => {
          if (e.target.value.length > max) return;
          setValue(e.target.value);
        }}
        multiline
      />

      <Stack flexDirection="row" alignItems="center" gap={1} padding={padding}>
        <IconButton size="small">
          <i className="fa-solid fa-file-arrow-up" />
        </IconButton>
        <Box flexGrow={1} />
        <Typography variant="caption">
          {value.length}/{max}
        </Typography>
        {/* <IconButton size="small"> */}
        <Send fontSize="small" color="primary" />
        {/* </IconButton> */}
      </Stack>
    </Stack>
  );
};

export default ChatInput;
