import { IconButton, InputAdornment } from "@mui/material";
import React, { useState } from "react";
import TextField, { TextFieldProps } from "./TextField";

const PasswordTextField: React.FC<TextFieldProps> = (props) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <TextField
      type={passwordVisible ? "text" : "password"}
      placeholder="비밀번호를 입력해주세요."
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            size="small"
            onClick={() => setPasswordVisible((prev) => !prev)}
          >
            {passwordVisible ? (
              <i className="fa-regular fa-eye" />
            ) : (
              <i className="fa-regular fa-eye-slash" />
            )}
          </IconButton>
        </InputAdornment>
      }
      {...props}
    />
  );
};

export default PasswordTextField;
