import React from "react";
import { Box, Stack, Typography } from "@mui/material";

export const ThumbnailLayout = ({
  children,
  title,
  description,
}: {
  children: React.ReactNode;
  title: string;
  description?: string;
}) => {
  return (
    <Box display="grid" gridTemplateColumns="560px 1fr" height="100vh">
      <Stack p="80px 44px 44px 44px" gap={3}>
        <Box display="flex" alignItems="flex-end" gap={0.5}>
          <Typography variant="h5" color="primary.main" fontWeight={800}>
            dingdong
          </Typography>
          <Typography variant="caption" color="text.secondary">
            for Researcher
          </Typography>
        </Box>

        <Stack gap={0.5}>
          <Typography variant="h4" whiteSpace="pre-wrap">
            {title}
          </Typography>
          {description ? (
            <Typography
              variant="body2"
              color="text.secondary"
              whiteSpace="pre-wrap"
            >
              {description}
            </Typography>
          ) : null}
        </Stack>

        {children}
      </Stack>

      {/* TODO: change to thumbnail */}
      <Box bgcolor="primary.main" width="100%" height="100%" />
    </Box>
  );
};
