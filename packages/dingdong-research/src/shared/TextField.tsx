import React from "react";

import {
  FormControl,
  FormHelperText,
  FormHelperTextProps,
  FormLabel,
  InputProps,
  OutlinedInput,
  Typography,
} from "@mui/material";

export interface _TextFieldProps extends InputProps {
  required?: boolean;
  label?: string;
  helperText?: string;
  helperTextProps?: FormHelperTextProps;
}

export const TextField: React.FC<_TextFieldProps> = ({
  required,
  label,
  helperText,
  error,
  helperTextProps,
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
      <OutlinedInput
        {...props}
        sx={{
          input: {
            "&:-webkit-autofill": {
              WebkitBoxShadow: (theme) =>
                `0 0 0 100px ${theme.palette.background.default} inset`,
            },
          },
          ...props.sx,
        }}
      />
      {helperText ? (
        <FormHelperText
          {...helperTextProps}
          error={helperTextProps?.error ?? error}
        >
          {helperText}
        </FormHelperText>
      ) : null}
    </FormControl>
  );
};
