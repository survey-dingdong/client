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
      <ListItemButton sx={{ p: 3 }}>
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
            secondary={message}
            secondaryTypographyProps={{ noWrap: true }}
          />
          <Stack gap={0.5}>
            <Typography variant="body2" color="text.tertiary">
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
                    style: { position: "relative", top: 10, right: -5 },
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
