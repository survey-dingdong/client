import { Stack, Box, Avatar, Typography } from "@mui/material";
import React from "react";

const ProfileCard = () => {
  return (
    <Box display="flex" gap={1} alignItems="center">
      <Avatar sx={{ width: 32, height: 32 }} />
      <Stack>
        {/* info */}
        <Typography fontWeight={600}>Eunseong Kim</Typography>
        <Typography variant="caption" color="text.secondary">
          kita65372880@naver.com
        </Typography>
      </Stack>
    </Box>
  );
};

export default ProfileCard;
