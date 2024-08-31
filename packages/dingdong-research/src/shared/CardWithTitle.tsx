import { Card, CardContent, Stack, Typography } from "@mui/material";
import React from "react";

//
//
//

interface CardWithTitleProps {
  title: string;
  children?: React.ReactNode;
}

export const CardWithTitle: React.FC<CardWithTitleProps> = ({
  title,
  children,
}) => {
  return (
    <Stack gap={1.5}>
      <Typography variant="subtitle1" fontWeight={800}>
        {title}
      </Typography>
      <Card elevation={0} sx={{ borderRadius: 2 }}>
        <CardContent sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
          {children}
        </CardContent>
      </Card>
    </Stack>
  );
};
