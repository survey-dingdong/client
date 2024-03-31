import { Stack, Typography } from "@mui/material";
import React from "react";

interface PageHeaderProps {
  title: React.ReactNode;
  description?: string;
  actions?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  actions,
}) => {
  return (
    <Stack
      gap={1}
      flexDirection={{ xs: "column", md: "row" }}
      width="100%"
      justifyContent="space-between"
    >
      {/* title and description */}
      <Stack gap={1}>
        <Typography variant="h4" fontWeight={800}>
          {title}
        </Typography>
        {description ? (
          <Typography variant="body1">{description}</Typography>
        ) : null}
      </Stack>

      {/* actions */}
      {actions}
    </Stack>
  );
};

export default PageHeader;
