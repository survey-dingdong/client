import {
  FormControl,
  FormHelperText,
  FormLabel,
  OutlinedInput,
  TextFieldProps,
  Typography,
} from "@mui/material";
import React from "react";

const TextField: React.FC<TextFieldProps> = ({
  required,
  label,
  InputProps,
  helperText,
  ...props
}) => {
  return (
    <FormControl sx={{ width: props.fullWidth ? "100%" : "auto" }}>
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
      <OutlinedInput {...InputProps} />
      {helperText ? <FormHelperText>{helperText}</FormHelperText> : null}
    </FormControl>
  );
};

export default TextField;
