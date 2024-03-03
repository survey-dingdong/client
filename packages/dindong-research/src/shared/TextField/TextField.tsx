import {
  FormControl,
  FormLabel,
  InputBase,
  InputBaseProps,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React from "react";

interface TextFieldProps extends InputBaseProps {
  required?: boolean;
  label?: string;
}

const TextField: React.FC<TextFieldProps> = ({ required, label, ...props }) => {
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
    </FormControl>
  );
};

export default TextField;
