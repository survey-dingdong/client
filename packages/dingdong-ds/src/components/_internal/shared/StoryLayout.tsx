import { Paper, Stack, Typography } from "@mui/material";
import React from "react";

interface StoryLayoutProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

const StoryLayout: React.FC<StoryLayoutProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <Paper elevation={0} sx={{ padding: 8, gap: 8 }} component={Stack}>
      <Stack gap={3}>
        <Typography variant="title3">{title}</Typography>
        <Typography variant="label2">{description}</Typography>
      </Stack>
      {children}
    </Paper>
  );
};

export default StoryLayout;
