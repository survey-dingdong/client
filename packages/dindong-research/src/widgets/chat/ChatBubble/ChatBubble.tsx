import { Avatar, Box, ListItem, Stack, Typography } from "@mui/material";
import React from "react";

interface ChatBubbleProps {
  type: string;
  message: string;
  useName?: string;
  time?: string;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({
  type,
  useName,
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
      {useName ? <Avatar /> : null}
      {time && !isOpponent ? (
        <Typography variant="caption" mt="auto">
          {time}
        </Typography>
      ) : null}

      <Stack>
        <Typography variant="body2">{useName}</Typography>
        <Box
          component={Typography}
          p={2}
          borderRadius={4}
          bgcolor={isOpponent ? "background.paper" : "primary.main"}
          color={isOpponent ? "text.primary" : "common.white"}
        >
          {message}
        </Box>
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
