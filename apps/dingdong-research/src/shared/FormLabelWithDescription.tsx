import { FormLabel, FormLabelProps, Stack, Typography } from "@mui/material";
import React from "react";

interface FormLabelWithDescriptionProps {
  label: string;
  description: string;
  labelProps?: FormLabelProps;
}

export const FormLabelWithDescription: React.FC<
  FormLabelWithDescriptionProps
> = ({ label, description, labelProps }) => {
  return (
    <Stack>
      <FormLabel {...labelProps}>{label}</FormLabel>
      <Typography variant="body2" color="text.secondary" whiteSpace="pre-wrap">
        {description}
      </Typography>
    </Stack>
  );
};
