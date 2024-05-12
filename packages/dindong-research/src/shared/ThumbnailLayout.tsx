import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const ThumbnailLayout = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <Box display="grid" gridTemplateColumns="560px 1fr" height="100vh">
      <Stack p="80px 44px 44px 44px" gap={3}>
        <Typography variant="h5" color="primary.main" fontWeight={800}>
          LOGO
        </Typography>

        <Typography variant="h4" whiteSpace="pre-wrap">
          {title}
        </Typography>
        {children}
      </Stack>

      {/* TODO: change to thumbnail */}
      <Box bgcolor="primary.main" width="100%" height="100%" />
    </Box>
  );
};

export default ThumbnailLayout;
