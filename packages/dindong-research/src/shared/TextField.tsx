import {
  FormControl,
  FormHelperText,
  FormLabel,
  InputProps,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React from "react";

interface TextFieldProps extends InputProps {
  required?: boolean;
  label?: string;
  helperText?: string;
}

const TextField: React.FC<TextFieldProps> = ({
  required,
  label,
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
      <OutlinedInput {...props} />
      {helperText ? <FormHelperText>{helperText}</FormHelperText> : null}
    </FormControl>
  );
};

export default TextField;
