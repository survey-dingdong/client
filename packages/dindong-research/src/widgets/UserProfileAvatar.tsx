import { Avatar } from "@mui/material";
import React from "react";
import { useUser } from "src/hooks/useUser";

const UserProfileAvatar = () => {
  const { user } = useUser();

  return (
    <Avatar
      alt="avatar"
      sx={{ width: 32, height: 32, bgcolor: user?.profileColor }}
    >
      {user?.username.slice(0, 1)}
    </Avatar>
  );
};

export default UserProfileAvatar;
