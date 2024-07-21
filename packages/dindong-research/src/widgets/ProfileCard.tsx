import { Stack, Box, Avatar, Typography } from "@mui/material";
import React from "react";
import { useUser } from "src/hooks/useUser";

const ProfileCard = () => {
  const { user } = useUser();

  return (
    <Box display="flex" gap={1} alignItems="center">
      <Avatar sx={{ width: 32, height: 32, bgcolor: user?.profileColor }} />
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
