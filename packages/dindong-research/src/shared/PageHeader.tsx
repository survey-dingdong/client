import { Stack, Typography } from "@mui/material";
import React from "react";

interface PageHeaderProps {
  title: React.ReactNode;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
  return (
    <Stack gap={1}>
      <Typography variant="h4" fontWeight={800}>
        {title}
      </Typography>
      {description ? (
        <Typography variant="body1">{description}</Typography>
      ) : null}
    </Stack>
  );
};

export default PageHeader;
