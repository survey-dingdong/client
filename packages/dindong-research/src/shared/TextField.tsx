import React from "react";

import {
  FormControl,
  FormHelperText,
  FormLabel,
  InputProps,
  OutlinedInput,
  Typography,
} from "@mui/material";

export interface _TextFieldProps extends InputProps {
  required?: boolean;
  label?: string;
  helperText?: string;
}

export const TextField: React.FC<_TextFieldProps> = ({
  required,
  label,
  helperText,
  error,
  ...props
}) => {
  return (
    <FormControl
      error={error}
      sx={{ width: props.fullWidth ? "100%" : "auto" }}
    >
      {label ? (
        <FormLabel sx={{ mb: 1 }}>
          {label}
          {required ? (
            <Typography color="#DB5654" component="span" sx={{ ml: 0.5 }}>
              *
            </Typography>
          ) : null}
        </FormLabel>
      ) : null}
      <OutlinedInput {...props} />
      {helperText ? <FormHelperText>{helperText}</FormHelperText> : null}
    </FormControl>
  );
};
