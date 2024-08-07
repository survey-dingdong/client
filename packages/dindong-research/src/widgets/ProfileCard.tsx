import { Stack, Box, Typography } from "@mui/material";
import React from "react";
import { useUser } from "src/hooks/useUser";
import UserProfileAvatar from "./UserProfileAvatar";

const ProfileCard = () => {
  const { user } = useUser();

  return (
    <Box display="flex" gap={1} alignItems="center">
      <UserProfileAvatar />
      <Stack>
        {/* info */}
        <Typography fontWeight={600}>{user?.username}</Typography>
        <Typography variant="caption" color="text.secondary">
          {user?.email}
        </Typography>
      </Stack>
    </Box>
  );
};

export default ProfileCard;
