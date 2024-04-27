import {
  Avatar,
  Badge,
  Box,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

interface ChatListItemProps {
  userName: string;
  message: string;
  time: string;
  newChatCount?: number;
}

const ChatListItem: React.FC<ChatListItemProps> = ({
  userName,
  message,
  time,
  newChatCount,
}) => {
  return (
    <ListItem disablePadding>
      <ListItemButton sx={{ p: "24px 20px" }}>
        <ListItemAvatar>
          <Avatar />
        </ListItemAvatar>
        <Box
          width="100%"
          display="flex"
          justifyContent="space-between"
          overflow="hidden"
        >
          <ListItemText
            sx={{ m: 0 }}
            primary={userName}
            primaryTypographyProps={{ fontWeight: 700, mb: 0.5 }}
            secondary={message}
            secondaryTypographyProps={{ noWrap: true }}
          />
          <Stack gap={0.5} justifyContent="space-between">
            <Typography fontSize={12} color="text.tertiary">
              {time}
            </Typography>

            {newChatCount ? (
              <Badge
                badgeContent={newChatCount}
                color="error"
                slotProps={{
                  root: {
                    style: { position: "static" },
                  },
                  badge: {
                    style: { position: "relative", top: 10 },
                  },
                }}
              />
            ) : null}
          </Stack>
        </Box>
      </ListItemButton>
    </ListItem>
  );
};

export default ChatListItem;
