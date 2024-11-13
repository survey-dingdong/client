import { Avatar, Box, ListItem, Paper, Stack, Typography } from "@mui/material";
import React from "react";

interface ChatBubbleProps {
  type: string;
  message: string;
  userName?: string;
  profileColor?: string;
  time?: string;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({
  type,
  userName,
  profileColor,
  message,
  time,
}) => {
  const isOpponent = type === "opponent";
  return (
    <Box
      component="li"
      display="flex"
      gap={1}
      justifyContent={isOpponent ? "flex-start" : "flex-end"}
    >
      {userName ? (
        <Avatar sx={{ width: 32, height: 32, bgcolor: profileColor }} />
      ) : null}
      {time && !isOpponent ? (
        <Typography variant="caption" mt="auto">
          {time}
        </Typography>
      ) : null}

      <Stack gap={0.5}>
        <Typography variant="body2" fontWeight={700}>
          {userName}
        </Typography>
        <Typography
          p={2}
          borderRadius={4}
          bgcolor={isOpponent ? "background.paper" : "primary.main"}
          color={isOpponent ? "text.primary" : "common.white"}
          variant="body2"
          sx={{
            boxShadow: "0px 0px 20px 0px #00000008",
          }}
        >
          {message}
        </Typography>
      </Stack>

      {/* time */}
      {time && isOpponent ? (
        <Typography variant="caption" mt="auto">
          {time}
        </Typography>
      ) : null}
    </Box>
  );
};

export default ChatBubble;
